#!/usr/bin/env python3
import re
import sys

def migrate_semester_file(filepath):
    """Convert all answer: fields to correctAnswer: indices"""
    print(f"\nProcessing {filepath}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    conversions = 0
    errors = []
    
    def replace_mcq(match):
        nonlocal conversions, errors
        
        full_text = match.group(0)
        indent = match.group(1)
        question = match.group(2)
        options_str = match.group(3)
        answer_str = match.group(4)
        
        try:
            options = eval(options_str)
            
            if not isinstance(options, list) or len(options) != 4:
                errors.append(f"Invalid options for: {question[:50]}...")
                return full_text
            
            correct_idx = -1
            for i, opt in enumerate(options):
                if opt == answer_str:
                    correct_idx = i
                    break
            
            if correct_idx == -1:
                errors.append(f"Answer '{answer_str[:30]}...' not found in options for: {question[:50]}...")
                return full_text
            
            conversions += 1
            
            options_formatted = ',\n' + indent + '  '.join([repr(opt) for opt in options])
            
            result = f"""{indent}{{
{indent}  question: {repr(question)},
{indent}  options: [{options_formatted}],
{indent}  correctAnswer: {correct_idx}
{indent}}}"""
            return result
            
        except Exception as e:
            errors.append(f"Exception {e} for question: {question[:50]}...")
            return full_text
    
    pattern = r'''(\s*){\s*
question:\s*["']([^"'\\]*(?:\\.[^"'\\]*)*)["']\s*,\s*
options:\s*(\[[^\]]+\])\s*,\s*
answer:\s*["']([^"'\\]*(?:\\.[^"'\\]*)*)["']\s*
}'''
    
    new_content = re.sub(pattern, replace_mcq, content, flags=re.VERBOSE | re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"  ✅ Converted {conversions} questions")
    if errors:
        print(f"  ⚠️  {len(errors)} errors:")
        for err in errors[:5]:
            print(f"     {err}")
        if len(errors) > 5:
            print(f"     ... and {len(errors)-5} more")
    
    return conversions, len(errors)

print("=== Complete MCQ Data Migration ===")

files = ['data/semester1.js', 'data/semester2.js', 'data/semester3.js']
total_conv = 0
total_err = 0

for f in files:
    try:
        conv, err = migrate_semester_file(f)
        total_conv += conv
        total_err += err
    except Exception as e:
        print(f"  ❌ Failed to process {f}: {e}")

print(f"\n=== Complete! Converted: {total_conv}, Errors: {total_err} ===")
