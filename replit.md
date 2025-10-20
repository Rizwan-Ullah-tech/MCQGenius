# MCQ Exam Management System

## Overview
A comprehensive multi-page MCQ (Multiple Choice Questions) exam management system for creating, taking, and managing tests. The system supports multiple courses, semesters, and provides both online testing and printable question papers.

## Recent Changes
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
- `parse_mcqs.py` - Python script to parse text files into JS modules

## User Preferences
- Multi-page architecture for better organization
- Professional UI with consistent design
- Dark mode support across all pages
- Client-side only (no backend required)

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

### Data Management
- All test data stored in browser's localStorage
- No server-side processing required
- ES6 modules for clean data separation
- Supports multiple courses with 6 semesters each

## Technical Notes
- Uses ES6 module imports (requires proper MIME type handling)
- Python HTTP server serves files with correct MIME types
- Dark mode state persisted in localStorage
- Responsive design works on desktop and tablet devices

## Known Issues
- jQuery.cdn 404 error in console (appears to be from browser extension, not affecting functionality)
- Currently only ACCP-7144-AI course has populated semesters (1-3)
- ACCP-7062-Prime2.0 course placeholder awaiting data

## Development
- Run with: `python3 -m http.server 5000`
- Access at: http://localhost:5000
- No build process required
- All client-side code, works offline after initial load
