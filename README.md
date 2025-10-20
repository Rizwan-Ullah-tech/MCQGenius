
# MCQ Exam Management System

A comprehensive multi-page MCQ (Multiple Choice Questions) exam management system for creating, taking, and managing tests. Built with vanilla JavaScript, HTML5, and CSS3.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://your-replit-url.replit.app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🎯 Features

### Core Functionality
- **Multi-Course Support**: Two courses (ACCP-7144-AI and ACCP-7062-Prime2.0) with 6 semesters each
- **Question Bank**: Browse and search through 714+ questions across multiple subjects
- **Online Testing**: Take 20-mark online tests with real-time scoring
- **Print Papers**: Generate professionally formatted question papers for printing
- **Test History**: Track all tests taken with detailed results and statistics
- **Answer Checking**: Compare printed papers against correct answers
- **Dark Mode**: Full dark mode support across all pages

### Security Features
- XSS protection with centralized HTML escaping
- Secure event delegation (no inline onclick handlers)
- Safe DOM manipulation preventing script injection
- HTML tags in questions/options display as text (not executed)

### User Experience
- Clean, modern Material Design-inspired UI
- Responsive design for desktop and tablet
- Smooth animations and transitions
- Intuitive navigation flow
- Client-side only - works offline after initial load

## 📸 Screenshots

*(Add screenshots of your application here)*

## 🚀 Quick Start

### Prerequisites
- Python 3.x (for local development server)
- Modern web browser with JavaScript enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mcq-exam-system.git
   cd mcq-exam-system
   ```

2. **Start the development server**
   ```bash
   python3 -m http.server 5000
   ```

3. **Open your browser**
   ```
   Navigate to http://localhost:5000
   ```

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
│   ├── semester1.js        # Semester 1 MCQ data (Frontend Technologies)
│   ├── semester2.js        # Semester 2 MCQ data (PHP & Web Development)
│   └── semester3.js        # Semester 3 MCQ data (SQL Server & Angular)
│
├── js/
│   ├── test-storage.js     # LocalStorage management for test history
│   └── utils.js            # Shared utilities (HTML escaping, etc.)
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

## 🎓 Usage Guide

### Navigation Flow

1. **Home Page** → Select a course (ACCP-7144-AI or ACCP-7062-Prime2.0)
2. **Semester Selection** → Choose a semester (1-3 for AI track)
3. **Book Selection** → Select one or more books for your test
4. **Choose Test Type**:
   - 🎯 **Online Test**: Take a 20-mark test with instant results
   - 🖨️ **Print Paper**: Generate a formatted question paper for printing

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

Example:
```css
:root {
    --color-primary: #10b981;
    --color-secondary: #3b82f6;
    --radius-lg: 12px;
}
```

## 📝 Adding New Questions

1. **Prepare MCQs in text format** (see `attached_assets/` for examples)
2. **Run the parser script**:
   ```bash
   python3 parse_mcqs.py
   ```
3. Questions are automatically integrated into the system

## 🔒 Security

This project implements several security best practices:
- **XSS Prevention**: All user-controlled data is escaped using `escapeHTML()` utility
- **Event Delegation**: No inline onclick handlers, all events handled through delegation
- **Safe DOM Manipulation**: innerHTML is only used with properly escaped content
- **Content Security**: HTML/script tags in questions display as text, not executed

## 💾 Data Storage

- All test history stored in browser's localStorage
- No server-side database required
- Client-side only - compatible with static hosting (GitHub Pages, Replit, etc.)
- Data persists across sessions

## 🔧 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6 Modules)
- **Styling**: Custom CSS with CSS Variables
- **Storage**: LocalStorage API
- **Print**: Browser's native print functionality
- **Server**: Python HTTP server (development only)

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Any modern browser with ES6 module support

## 🌙 Dark Mode

Dark mode is available across all pages. Click the moon/sun icon (🌙/☀️) in the navigation bar to toggle. Preference is saved in localStorage.

## 🐛 Known Issues

- jQuery.cdn 404 error in console (appears to be from browser extension, not affecting functionality)
- Currently only ACCP-7144-AI course has populated semesters (1-3)
- ACCP-7062-Prime2.0 course placeholder awaiting data

## 📈 Statistics

- **Total Questions**: 714+
- **Courses**: 2
- **Active Semesters**: 3
- **Question Categories**: 15+ subjects

## 🚀 Deployment

### Deploy on Replit
1. Import this repository to Replit
2. The server will start automatically
3. Your app will be live at `https://your-repl-name.replit.app`

### Deploy on GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and `/root` folder
4. Your site will be live at `https://yourusername.github.io/repo-name`

**Note**: Since this is a static site with ES6 modules, it works perfectly on GitHub Pages without any build process.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Course material from ACCP program
- Material Design inspiration for UI
- All contributors and testers

## 📞 Support

For support, email your-email@example.com or open an issue in the GitHub repository.

---

**Made with ❤️ for education**
