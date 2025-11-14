#!/usr/bin/env python3
"""
Generate SQL INSERT statements from JavaScript data files
Enhanced version with better error handling for control characters
"""

import json
import re
import sys
import os

def clean_json_string(s):
    """Remove control characters from string"""
    if s is None:
        return s
    # Remove control characters except for common whitespace
    return re.sub(r'[\x00-\x1f\x7f-\x9f]', '', str(s))

def escape_sql_string(s):
    """Escape string for SQL insertion"""
    if s is None:
        return 'NULL'
    # Clean the string first
    s = clean_json_string(s)
    # Replace single quotes with double single quotes for SQL
    s = str(s).replace("'", "''")
    # Escape backslashes
    s = s.replace("\\", "\\\\")
    return f"'{s}'"

def parse_js_file(filepath):
    """Parse a JavaScript module file and extract JSON data with enhanced error handling"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove the export statement and variable assignment
        content = re.sub(r'^const\s+\w+\s*=\s*', '', content, flags=re.MULTILINE)
        content = re.sub(r'export\s+default\s+\w+;?\s*$', '', content, flags=re.MULTILINE)
        
        # Remove JavaScript comments
        content = re.sub(r'//.*$', '', content, flags=re.MULTILINE)
        
        # Clean the content of control characters
        content = clean_json_string(content)
        
        # Parse as JSON
        data = json.loads(content)
        return data
    except json.JSONDecodeError as e:
        print(f"Error parsing {filepath}: {e}", file=sys.stderr)
        print(f"Trying alternative parsing method...", file=sys.stderr)
        return parse_js_file_alternative(filepath)
    except Exception as e:
        print(f"Unexpected error parsing {filepath}: {e}", file=sys.stderr)
        return None

def parse_js_file_alternative(filepath):
    """Alternative parsing method for problematic files"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract just the JSON part more aggressively
        # Look for the first { and last }
        start_idx = content.find('{')
        end_idx = content.rfind('}') + 1
        
        if start_idx != -1 and end_idx != -1:
            json_content = content[start_idx:end_idx]
            # Clean the content
            json_content = clean_json_string(json_content)
            data = json.loads(json_content)
            return data
        else:
            print(f"Could not find JSON object in {filepath}", file=sys.stderr)
            return None
    except Exception as e:
        print(f"Alternative parsing also failed for {filepath}: {e}", file=sys.stderr)
        return None

def index_to_letter(index):
    """Convert 0-3 index to A-D letter"""
    return chr(65 + index)  # 65 is ASCII for 'A'

def generate_sql_inserts():
    """Generate all SQL INSERT statements"""
    
    output = []
    output.append("-- ============================================")
    output.append("-- MCQ Exam System - Data Import")
    output.append("-- Generated from JavaScript data files")
    output.append("-- ============================================")
    output.append("")
    output.append("USE `mcq_exam_system`;")
    output.append("")
    output.append("-- Disable foreign key checks for faster import")
    output.append("SET FOREIGN_KEY_CHECKS = 0;")
    output.append("")
    
    # Course data
    output.append("-- ============================================")
    output.append("-- Insert Courses")
    output.append("-- ============================================")
    
    courses_data = [
        {
            'course_id': 'accp-7144-ai',
            'name': 'ACCP-7144-AI',
            'full_name': 'Aptech Certified Computer Professional - AI Track',
            'description': 'Comprehensive AI and Software Development Program',
            'icon': '🤖',
            'color': '#10b981'
        },
        {
            'course_id': 'accp-7062-prime',
            'name': 'ACCP-7062-Prime2.0',
            'full_name': 'Aptech Certified Computer Professional - Prime 2.0',
            'description': 'Enhanced Software Development Program',
            'icon': '💎',
            'color': '#3b82f6'
        }
    ]
    
    output.append("INSERT INTO `courses` (`course_id`, `name`, `full_name`, `description`, `icon`, `color`) VALUES")
    course_values = []
    for course in courses_data:
        values = f"({escape_sql_string(course['course_id'])}, {escape_sql_string(course['name'])}, {escape_sql_string(course['full_name'])}, {escape_sql_string(course['description'])}, {escape_sql_string(course['icon'])}, {escape_sql_string(course['color'])})"
        course_values.append(values)
    output.append(',\n'.join(course_values) + ';')
    output.append("")
    
    # Semesters for ACCP-7144-AI (id=1)
    output.append("-- ============================================")
    output.append("-- Insert Semesters")
    output.append("-- ============================================")
    output.append("INSERT INTO `semesters` (`course_id`, `semester_number`, `is_empty`) VALUES")
    semester_values = []
    # ACCP-7144-AI has 3 active semesters, 3 empty
    for i in range(1, 7):
        is_empty = 'TRUE' if i > 3 else 'FALSE'
        semester_values.append(f"(1, {i}, {is_empty})")
    # ACCP-7062-Prime has all empty
    for i in range(1, 7):
        semester_values.append(f"(2, {i}, TRUE)")
    output.append(',\n'.join(semester_values) + ';')
    output.append("")
    
    # Parse semester data files
    semester_files = [
        ('data/semester1.js', 1),
        ('data/semester2.js', 2),
        ('data/semester3.js', 3)
    ]
    
    book_id_counter = 1
    question_id_counter = 1
    
    for filepath, semester_num in semester_files:
        print(f"Processing {filepath}...", file=sys.stderr)
        semester_data = parse_js_file(filepath)
        
        if not semester_data or 'books' not in semester_data:
            print(f"Skipping {filepath} - no valid data", file=sys.stderr)
            continue
        
        output.append(f"-- ============================================")
        output.append(f"-- Semester {semester_num} - Books and Questions")
        output.append(f"-- ============================================")
        
        for book in semester_data['books']:
            book_title = book.get('title', 'Unknown')
            book_author = book.get('author', 'Course Material')
            book_js_id = book.get('id', '')
            mcqs = book.get('mcqs', [])
            question_count = len(mcqs)
            
            print(f"  Book: {book_title} ({question_count} questions)", file=sys.stderr)
            
            # Insert book
            output.append(f"\n-- Book: {book_title}")
            output.append(f"INSERT INTO `books` (`semester_id`, `book_id`, `title`, `author`, `question_count`) VALUES")
            output.append(f"({semester_num}, {escape_sql_string(book_js_id)}, {escape_sql_string(book_title)}, {escape_sql_string(book_author)}, {question_count});")
            output.append("")
            
            # Insert questions for this book
            if mcqs:
                output.append(f"-- Questions for {book_title}")
                output.append(f"INSERT INTO `questions` (`book_id`, `question_text`, `option_a`, `option_b`, `option_c`, `option_d`, `correct_answer`) VALUES")
                
                question_values = []
                for mcq in mcqs:
                    question_text = mcq.get('question', '')
                    options = mcq.get('options', ['', '', '', ''])
                    correct_index = mcq.get('correctAnswer', 0)
                    
                    # Ensure we have 4 options
                    while len(options) < 4:
                        options.append('')
                    
                    correct_letter = index_to_letter(correct_index)
                    
                    values = f"({book_id_counter}, {escape_sql_string(question_text)}, {escape_sql_string(options[0])}, {escape_sql_string(options[1])}, {escape_sql_string(options[2])}, {escape_sql_string(options[3])}, {escape_sql_string(correct_letter)})"
                    question_values.append(values)
                    question_id_counter += 1
                
                # Split into chunks of 100 for readability
                chunk_size = 100
                for i in range(0, len(question_values), chunk_size):
                    chunk = question_values[i:i + chunk_size]
                    if i > 0:
                        output.append("\nINSERT INTO `questions` (`book_id`, `question_text`, `option_a`, `option_b`, `option_c`, `option_d`, `correct_answer`) VALUES")
                    output.append(',\n'.join(chunk) + ';')
                output.append("")
            
            book_id_counter += 1
    
    # Re-enable foreign key checks
    output.append("-- ============================================")
    output.append("-- Re-enable foreign key checks")
    output.append("-- ============================================")
    output.append("SET FOREIGN_KEY_CHECKS = 1;")
    output.append("")
    output.append("-- ============================================")
    output.append(f"-- Data import complete!")
    output.append(f"-- Total questions imported: {question_id_counter - 1}")
    output.append("-- ============================================")
    
    return '\n'.join(output)

if __name__ == '__main__':
    print("Generating SQL INSERT statements from JavaScript data files...", file=sys.stderr)
    sql_output = generate_sql_inserts()
    
    # Write to file
    output_file = 'insert_data.sql'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(sql_output)
    
    print(f"\nSQL file generated: {output_file}", file=sys.stderr)
    print(f"Ready to import into MySQL!", file=sys.stderr)