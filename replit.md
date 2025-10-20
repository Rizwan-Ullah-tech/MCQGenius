# MCQ Exam Management System

## Overview
A comprehensive multi-page MCQ (Multiple Choice Questions) exam management system for creating, taking, and managing tests. The system supports multiple courses, semesters, and provides both online testing and printable question papers.

## Recent Changes
- **October 20, 2025: Major Security & Bug Fixes**
  - **CRITICAL BUGS FIXED:**
    - ✅ Fixed print-paper.html JavaScript rendering as plain text (caused by `</script>` in option data)
    - ✅ Fixed invisible answers in Question Bank (HTML tags like `<canvas>`, `<svg>` were being interpreted)
    - ✅ Fixed option visibility issues in online tests (nested options, invisible text)
  
  - **SECURITY HARDENING:**
    - Created shared `js/utils.js` with centralized escapeHTML function
    - Fixed 26 XSS vulnerabilities across 7 HTML files
    - Replaced vulnerable inline onclick handlers with secure event delegation
    - All innerHTML insertions now properly escape user-controlled data
  
  - **FILES MODIFIED:**
    - `js/utils.js` - NEW: Shared HTML escaping utility
    - `print-paper.html` - 8 XSS fixes + script termination bug fix
    - `question-bank.html` - 3 XSS fixes
    - `online-test.html` - 1 XSS fix
    - `test-results.html` - 4 XSS fixes
    - `comparison.html` - Multiple fixes including highlightSearch security
    - `index.html` - 4 XSS fixes
    - `books.html` - 4 XSS fixes
    - `history.html` - 5 XSS fixes + inline onclick handler security fix

- October 20, 2025: Project analysis and cleanup
  - Removed unused app.js (old single-page system, backed up as app.js.backup)
  - Updated documentation to reflect current multi-page architecture
  - Verified all features working correctly (714 questions loading from data folder)
  - Removed duplicate "Web Server" workflow

## Project Structure
### HTML Pages (Multi-page Architecture)
- `index.html` - Course selection (home page)
- `semester.html` - Semester selection for chosen course
- `books.html` - Book selection for test generation
- `online-test.html` - 20-mark online test interface with real-time scoring
- `print-paper.html` - Generate and print formatted question papers
- `test-results.html` - Display online test results
- `history.html` - Test history tracking and statistics
- `comparison.html` - Check printed papers against correct answers
- `question-bank.html` - Browse and search all 714+ questions

### Data Structure
- `data/courses.js` - Course metadata and structure
- `data/semester1.js` - Semester 1 MCQs (Frontend Technologies)
- `data/semester2.js` - Semester 2 MCQs (PHP & Web Development)
- `data/semester3.js` - Semester 3 MCQs (SQL Server)

### Supporting Files
- `styles/main.css` - Global CSS with custom properties for theming
- `js/test-storage.js` - LocalStorage management for test history
- `js/utils.js` - **NEW**: Shared utilities (HTML escaping for security)
- `parse_mcqs.py` - Python script to parse text files into JS modules

## User Preferences
- Multi-page architecture for better organization
- Professional UI with consistent design
- Dark mode support across all pages
- Client-side only (no backend required)
- Security-first approach (all user data properly escaped)

## Architecture
### Navigation Flow
1. Course Selection → 2. Semester Selection → 3. Book Selection → 4. Test Generation
   - Option A: Take 20-mark Online Test
   - Option B: Generate Printable Question Paper

### Key Features
- **Online Tests**: Real-time scoring, instant results, automatic history saving
- **Print Papers**: Professional formatting, answer key generation, customizable question count
- **Question Bank**: Search and filter 714+ questions by course/semester
- **Test History**: Separate tracking for online tests and printed papers
- **Answer Checking**: Manual marking system for printed papers
- **Security**: All user data properly escaped to prevent XSS attacks

### Data Management
- All test data stored in browser's localStorage
- No server-side processing required
- ES6 modules for clean data separation
- Supports multiple courses with 6 semesters each
- All dynamic content properly sanitized for security

## Technical Notes
- Uses ES6 module imports (requires proper MIME type handling)
- Python HTTP server serves files with correct MIME types
- Dark mode state persisted in localStorage
- Responsive design works on desktop and tablet devices
- **Security**: Centralized HTML escaping prevents XSS attacks
- **Security**: Event delegation replaces vulnerable inline onclick handlers

## Known Issues
- jQuery.cdn 404 error in console (appears to be from browser extension, not affecting functionality)
- Currently only ACCP-7144-AI course has populated semesters (1-3)
- ACCP-7062-Prime2.0 course placeholder awaiting data

## Development
- Run with: `python3 -m http.server 5000`
- Access at: http://localhost:5000
- No build process required
- All client-side code, works offline after initial load

## Security Features
- Centralized escapeHTML utility in `js/utils.js`
- All innerHTML insertions escape user-controlled data
- Event delegation for secure button handling
- HTML tags in questions/options display as text (not executed)
- Prevents XSS, HTML injection, and script execution attacks
