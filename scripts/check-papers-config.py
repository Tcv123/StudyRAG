#!/usr/bin/env python3
"""
Syntax checker for papers-config.js.
Catches: unterminated single-quoted strings and unbalanced brackets.
Run before committing: python3 scripts/check-papers-config.py
"""
import sys

path = 'papers-config.js'
with open(path) as f:
    content = f.read()

errors = []
i = 0
line_num = 1
in_single = False
in_double = False
in_template = False
in_line_comment = False
in_block_comment = False
string_start_line = None
string_start_char = None
depth = 0

while i < len(content):
    ch = content[i]
    if ch == '\n':
        if in_single and string_start_line is not None:
            ctx = content[string_start_char:string_start_char+120].replace('\n', '\\n')
            errors.append(f"Line {string_start_line}: unterminated single-quoted string: {ctx}")
            in_single = False
        line_num += 1
        in_line_comment = False
        i += 1
        continue

    if in_block_comment:
        if ch == '*' and i+1 < len(content) and content[i+1] == '/':
            in_block_comment = False; i += 2; continue
        i += 1; continue
    if in_line_comment:
        i += 1; continue

    if in_single:
        if ch == '\\': i += 2; continue
        elif ch == "'": in_single = False; string_start_line = None
    elif in_double:
        if ch == '\\': i += 2; continue
        elif ch == '"': in_double = False
    elif in_template:
        if ch == '\\': i += 2; continue
        elif ch == '`': in_template = False
    else:
        if ch == '/' and i+1 < len(content):
            if content[i+1] == '/': in_line_comment = True; i += 2; continue
            elif content[i+1] == '*': in_block_comment = True; i += 2; continue
        if ch == "'":
            in_single = True; string_start_line = line_num; string_start_char = i
        elif ch == '"': in_double = True
        elif ch == '`': in_template = True
        elif ch in ('{', '[', '('): depth += 1
        elif ch in ('}', ']', ')'):
            depth -= 1
            if depth < 0:
                ctx = content[max(0,i-60):i+30].replace('\n', '\\n')
                errors.append(f"Line {line_num}: extra closing bracket: ...{ctx}...")
                depth = 0

if depth != 0:
    errors.append(f"End of file: {depth} unclosed bracket(s)")

if errors:
    print(f"FAIL: {len(errors)} error(s) in {path}:")
    for e in errors:
        print(f"  {e}")
    sys.exit(1)
else:
    print(f"OK: {path} passed all syntax checks")
