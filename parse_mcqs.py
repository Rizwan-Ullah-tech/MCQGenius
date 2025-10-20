import json
import re

def parse_mcq_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by "Book name" to get individual books
    books_raw = re.split(r'Book name[:\s]+', content)
    books_raw = [b.strip() for b in books_raw if b.strip()]
    
    books = []
    
    for book_text in books_raw:
        lines = book_text.split('\n')
        if not lines:
            continue
            
        book_title = lines[0].strip()
        if not book_title or book_title == 'MCQs':
            continue
        
        print(f"Processing book: {book_title}")
        
        # Parse MCQs
        mcqs = []
        i = 0
        
        while i < len(lines):
            line = lines[i].strip()
            
            # Skip empty lines and headers
            if not line or 'MCQs' in line or 'Session' in line or 'Multiple Choice Questions' in line:
                i += 1
                continue
            
            # Check if it's a question (starts with number followed by dot)
            question_match = re.match(r'^(\d+)\.\s+(.+)', line)
            if question_match:
                question_text = question_match.group(2).strip()
                options = []
                correct_answer = -1
                
                # Look ahead for options and answer
                j = i + 1
                while j < len(lines):
                    opt_line = lines[j].strip()
                    
                    if not opt_line:
                        j += 1
                        continue
                    
                    # Check for option (A), B), C), D) or a), b), c), d) or A:, B:, etc)
                    option_match = re.match(r'^([A-Da-d])[\)\:\.\s]+(.+)', opt_line)
                    if option_match and len(options) < 4:
                        options.append(option_match.group(2).strip())
                        j += 1
                        continue
                    
                    # Check for answer line with format "Answer: X)" or "Answer: X"
                    answer_match = re.match(r'^Answer[:\s]+([A-Da-d])', opt_line, re.IGNORECASE)
                    if answer_match:
                        answer_letter = answer_match.group(1).upper()
                        correct_answer = ord(answer_letter) - ord('A')
                        j += 1
                        break
                    
                    # If we hit another question or answer key section, stop
                    if re.match(r'^\d+\.', opt_line) or 'Answer Key' in opt_line or 'answer key' in opt_line.lower():
                        break
                    
                    j += 1
                
                # Add MCQ if we have all parts
                if question_text and len(options) == 4:
                    mcqs.append({
                        'question': question_text,
                        'options': options,
                        'correctAnswer': correct_answer  # -1 if not found yet
                    })
                
                i = j
                continue
            
            # Check for Answer Key section (standalone answers)
            if 'Answer Key' in line or 'answer key' in line.lower():
                # Try to match standalone answers with previous MCQs
                i += 1
                answer_count = 0
                
                while i < len(lines) and answer_count < len(mcqs):
                    ans_line = lines[i].strip()
                    
                    # Skip "from session X to last" type lines
                    if 'session' in ans_line.lower() or 'from' in ans_line.lower():
                        i += 1
                        continue
                    
                    # Stop at next book
                    if 'Book name' in ans_line:
                        break
                    
                    # Single letter answer (with or without parentheses/periods)
                    ans_match = re.match(r'^([A-Da-d])[\)\s]*$', ans_line)
                    if ans_match:
                        if answer_count < len(mcqs) and mcqs[answer_count]['correctAnswer'] == -1:
                            mcqs[answer_count]['correctAnswer'] = ord(ans_match.group(1).upper()) - ord('A')
                        answer_count += 1
                    
                    i += 1
                continue
            
            i += 1
        
        # Filter out MCQs without correct answers
        valid_mcqs = [mcq for mcq in mcqs if 0 <= mcq['correctAnswer'] < 4]
        
        if valid_mcqs:
            # Generate book ID
            book_id = book_title.lower().replace(' ', '_').replace('-', '_')
            book_id = re.sub(r'[^a-z0-9_]', '', book_id)
            
            books.append({
                'id': book_id,
                'title': book_title,
                'author': 'Course Material',
                'mcqs': valid_mcqs
            })
            print(f"  Found {len(valid_mcqs)} valid MCQs")
        else:
            print(f"  No valid MCQs found (Total parsed: {len(mcqs)})")
    
    return books

# Parse all semester files
semester_files = [
    ('attached_assets/SEMESTER 1 CPISM_1760689364054.txt', 1, 'data/semester1.json'),
    ('attached_assets/SEMESTER 2 DISM_1760689364055.txt', 2, 'data/semester2.json'),
    ('attached_assets/SEMESTER 3 HDSE I_1760689364055.txt', 3, 'data/semester3.json')
]

for input_file, semester_num, output_file in semester_files:
    print(f"\n{'='*60}")
    print(f"Processing Semester {semester_num}: {input_file}")
    print(f"{'='*60}")
    
    books = parse_mcq_file(input_file)
    
    semester_data = {
        'semester': semester_num,
        'books': books
    }
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(semester_data, f, indent=2, ensure_ascii=False)
    
    print(f"\nSaved {len(books)} books to {output_file}")
    total_mcqs = sum(len(book['mcqs']) for book in books)
    print(f"Total MCQs: {total_mcqs}")
    for book in books:
        print(f"  - {book['title']}: {len(book['mcqs'])} MCQs")

print("\n" + "="*60)
print("Parsing complete!")
print("="*60)
