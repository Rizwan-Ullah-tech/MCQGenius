# MCQ Exam Management System

A comprehensive multi-page MCQ (Multiple Choice Questions) exam management system for creating, taking, and managing tests.

## 🎯 Features

- **Multi-Course Support**: Two courses (ACCP-7144-AI and ACCP-7062-Prime2.0) with 6 semesters each
- **Question Bank**: Browse and search through 714+ questions across multiple subjects
- **Online Testing**: Take 20-mark online tests with real-time scoring
- **Print Papers**: Generate professionally formatted question papers for printing
- **Test History**: Track all tests taken with detailed results
- **Answer Checking**: Compare printed papers against correct answers
- **Dark Mode**: Full dark mode support across all pages

## 📁 Project Structure

```
MCQGeniusPage/
├── index.html              # Course selection (home page)
├── semester.html           # Semester selection
├── books.html              # Book selection for test generation
├── online-test.html        # 20-mark online test interface
├── print-paper.html        # Generate printable question papers
├── test-results.html       # Online test results display
├── history.html            # Test history tracking
├── comparison.html         # Check printed papers against answers
├── question-bank.html      # Browse all questions
│
├── data/
│   ├── courses.js          # Course structure and metadata
│   ├── semester1.js        # Semester 1 MCQ data
│   ├── semester2.js        # Semester 2 MCQ data
│   └── semester3.js        # Semester 3 MCQ data
│
├── js/
│   └── test-storage.js     # LocalStorage management for test history
│
├── styles/
│   └── main.css            # Global styles and CSS variables
│
├── attached_assets/        # Original MCQ source files
│   ├── SEMESTER 1 CPISM_1760689364054.txt
│   ├── SEMESTER 2 DISM_1760689364055.txt
│   └── SEMESTER 3 HDSE I_1760689364055.txt
│
└── parse_mcqs.py          # Python script to parse text files to JS modules
```

## 🚀 Getting Started

### Prerequisites
- Python 3 (for local development server)
- Modern web browser with JavaScript enabled

### Running Locally

```bash
# Start local server
python3 -m http.server 5000

# Open browser
# Navigate to http://localhost:5000
```

### Navigation Flow

1. **Home** → Select a course (ACCP-7144-AI or ACCP-7062-Prime2.0)
2. **Semester Selection** → Choose a semester (1-3 for AI track)
3. **Book Selection** → Select one or more books for your test
4. **Choose Test Type**:
   - 🎯 **Online Test**: Take a 20-mark test with instant results
   - 🖨️ **Print Paper**: Generate a formatted question paper for printing

## 📊 Features in Detail

### Online Testing
- Real-time score calculation as you answer
- 20-mark total regardless of question count
- Instant results with correct/incorrect feedback
- Automatic saving to test history

### Print Paper Generation
- Professional formatting optimized for printing
- Customizable question count (10-50 questions)
- Student information fields
- Separate answer key generation
- Automatic saving to history before printing

### Question Bank
- Search functionality across all questions
- Filter by course and semester
- View correct answers highlighted
- 714+ questions across 3 semesters

### Test History
- Separate tracking for online tests and printed papers
- Detailed statistics (average score, total tests)
- Filter by course and test type
- Review past test results

### Answer Checking (Comparison Page)
- Select any printed paper from history
- View all questions with correct answers highlighted
- Search functionality to find specific questions
- Manual marking with score calculation

## 🎨 Customization

The system uses CSS custom properties (variables) defined in `styles/main.css`. You can easily customize:
- Colors (primary, secondary, success, warning, danger)
- Spacing and layout
- Typography
- Dark mode theme

## 📝 Adding New Questions

1. Prepare MCQs in text format (see `attached_assets/` for examples)
2. Run `parse_mcqs.py` to convert to JavaScript modules
3. Questions are automatically integrated into the system

## 🌙 Dark Mode

Dark mode is available across all pages. Click the moon/sun icon in the navigation bar to toggle. Preference is saved in localStorage.

## 💾 Data Storage

- All test history stored in browser's localStorage
- No server-side database required
- Client-side only - compatible with GitHub Pages deployment

## 🔧 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6 Modules)
- **Styling**: Custom CSS with CSS Variables
- **Storage**: LocalStorage API
- **Print**: Browser's native print functionality
- **Server**: Python HTTP server (development only)

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with ES6 module support

## 📄 License

This project is for educational purposes.

## 🤝 Contributing

This is a self-contained educational project. Feel free to fork and customize for your needs.
