#!/usr/bin/env python3
import re
import os

def migrate_file(filepath):
    print(f"\nProcessing {filepath}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified_count = 0
    error_count = 0
    errors = []
    
    def replace_answer(match):
        nonlocal modified_count, error_count
        
        full_match = match.group(0)
        question = match.group(1)
        options_str = match.group(2)
        answer = match.group(3)
        
        try:
            options_matches = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', options_str)
            
            if not options_matches or len(options_matches) != 4:
                errors.append(f"Invalid options count for: {question[:50]}...")
                error_count += 1
                return full_match
            
            correct_index = -1
            for i, opt in enumerate(options_matches):
                if opt == answer:
                    correct_index = i
                    break
            
            if correct_index == -1:
                errors.append(f"Answer not found in options: Q: {question[:50]}... A: {answer[:50]}...")
                error_count += 1
                return full_match
            
            modified_count += 1
            
            options_formatted = ', '.join([f'"{opt}"' for opt in options_matches])
            
            return f'''{{
        question: "{question}",
        options: [{options_formatted}],
        correctAnswer: {correct_index}
      }}'''
        
        except Exception as e:
            errors.append(f"Error: {str(e)} for question: {question[:50]}...")
            error_count += 1
            return full_match
    
    pattern = r'''\{\s*question:\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*options:\s*\[((?:[^\[\]]+|\[[^\]]*\])*)\]\s*,\s*answer:\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*\}'''
    
    new_content = re.sub(pattern, replace_answer, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"  ✅ Converted {modified_count} questions")
    if error_count > 0:
        print(f"  ⚠️  {error_count} questions had errors")
        for err in errors[:5]:
            print(f"     - {err}")
        if len(errors) > 5:
            print(f"     ... and {len(errors) - 5} more errors")
    
    return modified_count, error_count

print("=== MCQ Data Migration: answer → correctAnswer ===\n")

semester_files = ['data/semester1.js', 'data/semester2.js', 'data/semester3.js']
total_converted = 0
total_errors = 0

for filepath in semester_files:
    if os.path.exists(filepath):
        converted, errors = migrate_file(filepath)
        total_converted += converted
        total_errors += errors
    else:
        print(f"Skipping {filepath} (not found)")

print(f"\n=== Migration Complete! ===")
print(f"Total converted: {total_converted}")
print(f"Total errors: {total_errors}")
