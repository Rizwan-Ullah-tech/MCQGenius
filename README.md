# MCQ Exam Management System

A multi-page MCQ (Multiple Choice Questions) exam management system for creating, taking, and managing tests. Built with vanilla JavaScript, HTML5, and CSS3.

[![Live Demo](https://img.shields.io/badge/Demo-Live-green)](https://rizwan-ullah-tech.github.io/MCQ-Exam-System/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Features

- Multi-course support (ACCP-7144-AI and ACCP-7062-Prime2.0) with multiple semesters
- Question bank: 700+ questions across subjects
- Online testing: 20-mark tests with real-time scoring and instant results
- Print papers: Generate printable, formatted question papers and separate answer keys
- Test history: Persistent localStorage history with statistics
- Answer checking: Compare printed papers against correct answers
- Dark mode and responsive Material-inspired UI

## Security & Safety

- Centralized HTML escaping (XSS protection)
- Event delegation (no inline handlers)
- Safe DOM manipulation (no unescaped innerHTML)
- HTML/script in questions displayed as text

## Quick Start

Prerequisites:
- Python 3.x (for local static server)
- Modern browser with JavaScript

Install and run:
```bash
git clone https://github.com/Rizwan-Ullah-tech/MCQ-Exam-System.git
cd MCQGenius
python3 -m http.server 5000
# Open http://localhost:5000
```

## Project Structure (summary)

MCQGeniusPage/
- index.html, semester.html, books.html, online-test.html, print-paper.html, test-results.html, history.html, comparison.html, question-bank.html
- data/ (courses.js, semester*.js)
- js/ (test-storage.js, utils.js)
- styles/main.css
- attached_assets/ (source text files)
- parse_mcqs.py

## Usage Overview

- Flow: Home → Course → Semester → Books → Online Test or Print Paper
- Online Test: real-time scoring, instant feedback, saved to history
- Print Paper: customizable question count, student fields, answer key, saved to history
- Question Bank: search and filter by course/semester
- History: view and filter past tests; review details

## Adding Questions

1. Prepare text files (see attached_assets/)
2. Run parser:
```bash
python3 parse_mcqs.py
```
3. New questions are exported to data/ modules

## Customization

Customize CSS variables in styles/main.css (colors, spacing, typography, dark theme).

Example:
```css
:root {
   --color-primary: #10b981;
   --color-secondary: #3b82f6;
}
```

## Data & Storage

- All history stored in browser localStorage
- Client-side only; compatible with static hosting (GitHub Pages, Replit)

## Technologies

- HTML5, CSS3, JavaScript (ES6 modules)
- LocalStorage API
- Browser native print
- Python for development server / parsing scripts

## Browser Compatibility

Works in modern browsers with ES6 module support: Chrome, Firefox, Safari, Edge.

## Known Issues

- jQuery CDN 404 (likely from an extension; not affecting functionality)
- Only ACCP-7144-AI sems 1–3 populated; other course pending data

## Deployment

GitHub Pages:
1. Push to main branch
2. Settings → Pages → select branch and root folder
3. Site available at https://rizwan-ullah-tech.github.io/MCQ-Exam-System/

## Contributing

1. Fork
2. Create branch (`feature/...`)
3. Commit & push
4. Open a Pull Request

## License

MIT — see LICENSE

## Author

Rizwan Ullah — https://github.com/Rizwan-Ullah-tech

## Support

Open an issue on GitHub or email Rizwan.ullah.tech@gmail.com

---
Made for education



```
MCQ-Exam-System
├─ books.html
├─ comparison.html
├─ data
│  ├─ courses.js
│  ├─ semester1.js
│  ├─ semester2.js
│  └─ semester3.js
├─ generate_data_inserts.py
├─ history.html
├─ index.html
├─ js
│  ├─ test-storage.js
│  └─ utils.js
├─ online-test.html
├─ parse_mcqs.py
├─ print-paper.html
├─ question-bank.html
├─ semester.html
├─ session-selection.html
├─ styles
│  └─ main.css
└─ test-results.html

```