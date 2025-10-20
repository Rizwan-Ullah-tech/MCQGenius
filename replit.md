# MCQ Exam Management System

## Overview
A comprehensive MCQ exam management system with test generation, PDF creation, OCR-based answer checking, and question management. Built for personal use to create and evaluate monthly class tests.

## Current State
**Status:** Fully Functional ✓  
**Last Updated:** October 20, 2025 (Dark Mode & Answer Checking Enhancements)

## Features Implemented

### Core Features
- ✅ **Multi-page Navigation System** - Home, Questions, PDF Generation, Answer Checking
- ✅ **Test Generation** - Random MCQ test creation with filtering
- ✅ **PDF Question Paper** - Generate printable A4 exam papers with student info
- ✅ **DOCX Export** - Download question papers in Word format (.docx)
- ✅ **OCR Answer Checking** - Upload answer sheet images for automatic grading
- ✅ **Manual Verification** - Manual answer marking when OCR is unclear
- ✅ **Questions Database** - Browse, search, and filter all questions
- ✅ **Modern Dark Mode** - Beautiful dark theme with improved contrast
- ✅ **Results Export** - Export checking results as PDF
- ✅ **Local Storage** - Persist papers and results

### Technology Stack
- **Frontend:** Vanilla JavaScript (ES6+ Modules)
- **Styling:** Tailwind CSS (CDN) + Custom Modern CSS
- **Typography:** Google Fonts (Inter)
- **Printing:** Native Browser Print API
- **OCR Processing:** Tesseract.js v5.0.0
- **PDF Export:** jsPDF v2.5.1 (results only)
- **Data Storage:** JavaScript modules (.js) + localStorage
- **Server:** Python HTTP Server (development)

## Data Structure

### Current Data
**Total: 714 MCQs across 3 semesters and 17 books**

- **Semester 1 (CPISM)** - 5 Books, 209 MCQs
  - Frontend Technologies for Beginners (67 MCQs)
  - Effective Productivity with MS Office (52 MCQs)
  - Bootstrap and jQuery for Responsive Web Pages (30 MCQs)
  - An Essential Guide to Git and GitHub (30 MCQs)
  - Unlocking SEO Techniques (30 MCQs)

- **Semester 2 (DISM)** - 7 Books, 276 MCQs
  - Architecting Web Applications using PHP (40 MCQs)
  - Build and Manage Websites using CMS (34 MCQs)
  - Crafting Efficient Code with JavaScript (38 MCQs)
  - Data Processing with XML and JSON (36 MCQs)
  - Fundamentals of Millennial Entrepreneurship (38 MCQs)
  - Laravel Framework for Web Applications (30 MCQs)
  - Practical MySQL (60 MCQs)

- **Semester 3 (HDSE I)** - 5 Books, 229 MCQs
  - SQL Server - The Definitive Guide (52 MCQs)
  - Developing Applications with Csharp (61 MCQs)
  - Web Programming using ASPNET CORE and MVC (51 MCQs)
  - Building Angular Applications with TypeScript (45 MCQs)
  - Material UI (20 MCQs)

## File Structure
```
/
├── index.html          # Main HTML with multi-page layout
├── app.js             # Complete application logic
├── parse_mcqs.py      # Python script to parse MCQs from text files
├── data/
│   ├── semester1.json # Semester 1 MCQs
│   ├── semester2.json # Semester 2 MCQs
│   └── semester3.json # Semester 3 MCQs
└── replit.md          # This documentation
```

## Usage Guide

### 1. Home - Generate Interactive Test
1. Select semester(s) and book(s)
2. Choose number of questions (5-50)
3. Click "Generate Test"
4. Answer questions online
5. Submit to see results with detailed review

### 2. Generate Question Paper for Printing
1. Navigate to "Generate PDF" page
2. Select semester(s) and book(s)
3. Set number of questions (5-50)
4. Click "Preview Question Paper"
5. Review the formatted preview with:
   - Student information fields (blank for students to fill)
   - Auto-generated topic from selected books
   - Questions with options in two-column format
6. Click "🖨️ Print / Save as PDF" button to open browser's print dialog
7. Choose your printer or save as PDF from the print dialog

**Document Format:**
```
Student Name: _______________________________      Batch Code: _______________________________
Student ID: _____________________________      Date: _______________________________
Subject: _______________________________       Topic: [Auto-generated from selected books]

Q1. Question text here?
    1) Option A          3) Option C
    2) Option B          4) Option D
```

**Note:** 
- Topic is automatically generated from selected book titles
- Student fields are left blank for manual entry
- Optimized font sizes (10-11pt) for better fit on printed paper
- Use browser's print dialog to save as PDF or print directly
- All answers are visible with proper text wrapping

### 3. Check Answer Sheets (OCR)
1. Navigate to "Check Answers" page
2. Upload clear image of answer sheet
3. Wait for OCR processing (progress bar shown)
4. Review extracted answers
5. Click "Check Answers" for automatic grading
6. View results: Correct/Wrong/Unanswered counts and marks
7. Export results as PDF

**Answer Sheet Format:**
The OCR can detect various answer formats:
- "Q1: 2" or "1. 2" or "1) B"
- Supports both numeric (1-4) and letter (A-D) answers

### 4. Manual Answer Checking
1. If OCR fails, click "Manual Check" button
2. Mark each answer as Correct/Wrong/Unanswered
3. Submit to calculate results
4. View summary and export as PDF

### 5. Browse All Questions
1. Navigate to "Questions" page
2. Use search bar to find questions by keyword
3. Filter by semester using dropdown
4. View all questions with correct answers highlighted

### 6. Dark Mode
- Click moon icon (🌙) in navigation to toggle
- Preference saved in localStorage

## How to Add More MCQs

### Method 1: Direct JSON Edit
Edit semester JSON files in `data/` folder:
```json
{
  "question": "Your question here?",
  "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "correctAnswer": 0
}
```

### Method 2: Use Parser Script
1. Place MCQ text files in `attached_assets/` folder
2. Update `parse_mcqs.py` with file paths
3. Run: `python3 parse_mcqs.py`
4. Parser generates/updates JSON files in `data/` folder

## Local Storage Data

The app stores the following in browser localStorage:
- **darkMode** - Dark mode preference (true/false)
- **lastPaper** - Most recent generated PDF paper (for OCR checking)
- **lastTestResults** - Most recent test results
- **lastCheckingResults** - Most recent answer sheet checking results

## Features Comparison

| Feature | Home/Test | PDF Generation | OCR Checking | Manual Check | Questions List |
|---------|-----------|----------------|--------------|--------------|----------------|
| Generate test | ✓ | ✓ | - | - | - |
| Interactive answering | ✓ | - | - | - | - |
| Printable output | - | ✓ | - | - | - |
| Student info | - | ✓ | - | - | - |
| Auto grading | ✓ | - | ✓ | - | - |
| Manual grading | - | - | - | ✓ | - |
| Search/filter | - | - | - | - | ✓ |
| Export results | ✓ | ✓ | ✓ | ✓ | - |

## Development Notes
- Pure frontend - no backend required
- All libraries loaded via CDN
- OCR processing happens client-side
- PDF generation happens client-side
- Responsive design for all screen sizes
- localStorage persists data between sessions

## Libraries Used
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **Google Fonts (Inter)** - Modern, professional typography
- **Tesseract.js** - OCR processing (v5.0.0)
- **jsPDF** - PDF generation for results export (v2.5.1)

## Recent Changes
- **October 20, 2025 (Latest):** Dark Mode & Answer Checking Enhancements
  - **Comprehensive Dark Mode CSS:** Complete dark mode implementation across all pages
    - Added dark mode styles for all UI elements (buttons, cards, tables, question cards, options, badges)
    - Proper contrast ratios for text visibility in both light and dark modes
    - Dark mode toggle preserved across all pages via localStorage
    - Enhanced accessibility with improved color contrast
  - **Comparison Page for Printed Papers:** New dedicated page for checking printed test answers
    - Search functionality to quickly find specific questions
    - Side-by-side view of questions and correct answers
    - Manual answer marking (Correct/Wrong/Pending) with visual indicators
    - Automatic score calculation out of 20 marks
    - Correct answers highlighted in green for easy verification
    - Direct navigation from History page via "Check Answers" button
  - **Print Paper Improvements:** Enhanced printed paper functionality
    - Separated exam paper from answer key with dedicated print buttons
    - Exam papers now exclude answers (only show questions and options)
    - Answer key generates in separate window with clear formatting
    - Fixed marks calculation to always total 20 marks (dynamic per question)
    - Removed course family from headers for cleaner appearance
    - Show only selected book names in paper header
    - Updated instruction text with dynamic marks per question
  - **Answer Visibility Verification:** Ensured proper answer handling
    - Answers correctly hidden during online tests
    - Answers only shown in review sections after test submission
    - Proper mapping of correct answers after randomization
    - Visual indicators (green for correct, red for incorrect) in results
  - **History Page Enhancements:** Improved test history management
    - Different buttons for online tests vs printed papers
    - "View Results" button for online tests (shows detailed review)
    - "Check Answers" button for printed papers (opens comparison page)
    - Better visual differentiation between test types

- **October 18, 2025 (Earlier - Final Update):** Major Improvements & Data Format Change
  - **Color Theme Change:** Replaced purple-blue gradient with fresh green-emerald theme
  - **Data Format Migration:** Converted all JSON files to JavaScript modules (.js)
    - Created semester1.js, semester2.js, semester3.js with proper ES6 exports
    - Updated app.js to use ES6 imports instead of fetch API
    - Better compatibility with local development environments
  - **Answer Visibility Fix:** Improved CSS for option cards with proper word-wrap
    - Added flex display with min-height for better layout
    - Fixed option text visibility in all questions
  - **DOCX Download Removed:** Simplified to single "Print / Save as PDF" button
    - Removed non-working DOCX functionality
    - Browser print dialog allows both printing and PDF saving
  - **Two-Column Layout:** Confirmed proper implementation for question papers
    - Options displayed in 2-column table format (1,3 | 2,4)
    - Optimized for A4 printing with proper spacing
  - **Theme Colors Updated:**
    - Primary gradient: Green (#10b981) to Emerald (#059669)
    - Accent colors: Green shades throughout
    - Better visual hierarchy and modern look

- **October 18, 2025 (Earlier):** Complete UI Redesign & Feature Enhancements
  - **Major UI Overhaul:** Complete redesign with modern, professional aesthetics
  - **Gradient Design:** Beautiful purple-to-blue gradients throughout the interface
  - **Modern Typography:** Integrated Google Fonts (Inter) for professional look
  - **Enhanced Dark Mode:** Significantly improved dark theme with better colors and contrast
  - **Card-based Layout:** Modern card design with hover effects and smooth animations
  - **Custom Buttons:** Gradient buttons with hover animations and visual feedback
  - **Better Navigation:** Active state indicators and emoji icons for clarity
  - **Improved Inputs:** Custom-styled checkboxes, sliders, and form fields
  - **DOCX Export:** Added Word document (.docx) download functionality
  - **Answer Visibility Fix:** All answers now fully visible with proper word-wrapping
  - **JavaScript Error Fixes:** Resolved all console errors with null-safe checks
  - **Smooth Animations:** Fade-in effects and smooth transitions throughout
  - **Custom Scrollbar:** Styled scrollbars matching the modern theme
  - **Badge System:** Color-coded badges for better visual organization
  - **Responsive Design:** Improved mobile and tablet compatibility

- **October 18, 2025:** Print Optimization & Simplified Workflow
  - Simplified export: Replaced 3 download buttons with 1 Print button
  - Print button opens browser's native print dialog for direct printing or PDF save
  - Optimized document sizing: Reduced font sizes (10-11pt) and spacing for better paper fit
  - Fixed answer visibility: Added word-wrap and vertical-align to prevent text cutoff
  - Improved print styling: Navigation and buttons hidden when printing
  - Removed jsPDF dependency for simpler, native browser printing

- **October 17, 2025:** UI/UX Improvements & Multi-Format Export
  - Fixed dark mode styling for better visibility across all pages
  - Fixed search and filter functionality in Questions tab
  - Removed student input fields from PDF generation (for manual fill-in)
  - Implemented auto-generation of topic from selected books
  - Added HTML preview page before document download
  - Added multi-format export: Word (.rtf), Excel (.csv), and PDF
  - Updated export workflow to use native browser APIs (no external dependencies)
  - Improved question paper layout and formatting

- **October 17, 2025:** Major feature expansion
  - Added PDF generation with formatted question papers
  - Implemented OCR-based answer sheet checking
  - Created manual verification interface
  - Built questions browsing/search page
  - Added dark mode toggle
  - Implemented results export as PDF
  - Added localStorage persistence
  - Restructured to multi-page navigation system
  - Enhanced UI to exam-style professional design
