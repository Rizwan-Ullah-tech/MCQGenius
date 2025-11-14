#!/usr/bin/env python3
import re
import json

def find_correct_index(options_list, answer_text):
    """Find the index of answer_text in options_list"""
    for i, opt in enumerate(options_list):
        if opt == answer_text:
            return i
    return -1

def process_file(filename):
    print(f"\nProcessing {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    modified_lines = []
    modified_count = 0
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        if 'answer:' in line and not 'correctAnswer' in line:
            answer_match = re.search(r'answer:\s*"([^"]+)"', line)
            
            if answer_match:
                answer_text = answer_match.group(1)
                
                j = i - 1
                while j >= 0 and 'options:' not in lines[j]:
                    j -= 1
                
                if j >= 0 and 'options:' in lines[j]:
                    options_line = lines[j]
                    options_match = re.findall(r'"([^"]+)"', options_line)
                    
                    if len(options_match) == 4:
                        correct_idx = find_correct_index(options_match, answer_text)
                        
                        if correct_idx != -1:
                            new_line = line.replace(f'answer: "{answer_text}"', f'correctAnswer: {correct_idx}')
                            modified_lines.append(new_line)
                            modified_count += 1
                            i += 1
                            continue
        
        modified_lines.append(line)
        i += 1
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.writelines(modified_lines)
    
    print(f"  ✅ Converted {modified_count} questions")
    return modified_count

print("=== MCQ Data Migration: answer → correctAnswer ===")

files = ['data/semester1.js', 'data/semester2.js', 'data/semester3.js']
total = 0

for filename in files:
    try:
        count = process_file(filename)
        total += count
    except Exception as e:
        print(f"  ❌ Error processing {filename}: {e}")

print(f"\n=== Migration Complete! Total: {total} ===")
