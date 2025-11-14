
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

def format_js_value(value, indent=0):
    """Format a Python value as JavaScript code"""
    spaces = '  ' * indent
    
    if isinstance(value, str):
        # Escape special characters in strings
        escaped = value.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
        return f'"{escaped}"'
    elif isinstance(value, bool):
        return 'true' if value else 'false'
    elif isinstance(value, (int, float)):
        return str(value)
    elif isinstance(value, list):
        if not value:
            return '[]'
        items = ',\n'.join(f"{spaces}  {format_js_value(item, indent + 1)}" for item in value)
        return f'[\n{items}\n{spaces}]'
    elif isinstance(value, dict):
        if not value:
            return '{}'
        items = ',\n'.join(
            f'{spaces}  "{key}": {format_js_value(val, indent + 1)}'
            for key, val in value.items()
        )
        return f'{{\n{items}\n{spaces}}}'
    else:
        return 'null'

def write_js_file(semester_num, books, output_file):
    """Write data as a JavaScript module file"""
    semester_data = {
        'semester': semester_num,
        'books': books
    }
    
    # Generate JavaScript module content
    js_content = f"const semester{semester_num}Data = {format_js_value(semester_data)};\n\nexport default semester{semester_num}Data;\n"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)

# Parse all semester files
semester_files = [
    ('attached_assets/SEMESTER 1 CPISM_1760689364054.txt', 1, 'data/semester1.js'),
    ('attached_assets/SEMESTER 2 DISM_1760689364055.txt', 2, 'data/semester2.js'),
    ('attached_assets/SEMESTER 3 HDSE I_1760689364055.txt', 3, 'data/semester3.js')
]

for input_file, semester_num, output_file in semester_files:
    print(f"\n{'='*60}")
    print(f"Processing Semester {semester_num}: {input_file}")
    print(f"{'='*60}")
    
    books = parse_mcq_file(input_file)
    
    write_js_file(semester_num, books, output_file)
    
    print(f"\nSaved {len(books)} books to {output_file}")
    total_mcqs = sum(len(book['mcqs']) for book in books)
    print(f"Total MCQs: {total_mcqs}")
    for book in books:
        print(f"  - {book['title']}: {len(book['mcqs'])} MCQs")

print("\n" + "="*60)
print("Parsing complete!")
print("="*60)
