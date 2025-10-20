import semester1Data from './data/semester1.js';
import semester2Data from './data/semester2.js';
import semester3Data from './data/semester3.js';

class MCQExamSystem {
    constructor() {
        this.semesterData = [semester1Data, semester2Data, semester3Data];
        this.currentTest = [];
        this.userAnswers = {};
        this.currentPaper = null;
        this.extractedAnswers = [];
        this.darkMode = false;
        this.allQuestions = [];
        this.currentPage = 'homePage';
        this.init();
    }

    init() {
        console.log('Data loaded successfully:', this.semesterData);
        this.setupEventListeners();
        this.renderSemesters();
        this.renderPDFSemesters();
        this.loadAllQuestions();
        this.loadFromLocalStorage();
    }

    setupEventListeners() {
        // Navigation - with null checks
        const navHome = document.getElementById('navHome');
        const navQuestions = document.getElementById('navQuestions');
        const navPDF = document.getElementById('navPDF');
        const navOCR = document.getElementById('navOCR');
        const darkModeToggle = document.getElementById('darkModeToggle');

        if (navHome) navHome.addEventListener('click', () => this.showPage('homePage'));
        if (navQuestions) navQuestions.addEventListener('click', () => this.showPage('questionsPage'));
        if (navPDF) navPDF.addEventListener('click', () => this.showPage('pdfPage'));
        if (navOCR) navOCR.addEventListener('click', () => this.showPage('ocrPage'));
        if (darkModeToggle) darkModeToggle.addEventListener('click', () => this.toggleDarkMode());

        // Home page - Test Generation
        const allSemestersCheckbox = document.getElementById('allSemesters');
        const allBooksCheckbox = document.getElementById('allBooks');
        const questionCountSlider = document.getElementById('questionCount');
        const questionCountDisplay = document.getElementById('questionCountDisplay');
        const generateBtn = document.getElementById('generateBtn');
        const resetBtn = document.getElementById('resetBtn');
        const submitBtn = document.getElementById('submitBtn');
        const newTestBtn = document.getElementById('newTestBtn');

        if (allSemestersCheckbox) allSemestersCheckbox.addEventListener('change', () => this.handleAllSemesters());
        if (allBooksCheckbox) allBooksCheckbox.addEventListener('change', () => this.handleAllBooks());
        if (questionCountSlider && questionCountDisplay) {
            questionCountSlider.addEventListener('input', (e) => {
                questionCountDisplay.textContent = e.target.value;
            });
        }
        if (generateBtn) generateBtn.addEventListener('click', () => this.generateTest());
        if (resetBtn) resetBtn.addEventListener('click', () => this.resetFilters());
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitTest());
        if (newTestBtn) newTestBtn.addEventListener('click', () => this.startNewTest());

        // PDF Page
        const pdfQuestionCountSlider = document.getElementById('pdfQuestionCount');
        const pdfQuestionCountDisplay = document.getElementById('pdfQuestionCountDisplay');
        const generatePDFBtn = document.getElementById('generatePDFBtn');
        const printBtn = document.getElementById('printBtn');
        const backToConfigBtn = document.getElementById('backToConfigBtn');

        if (pdfQuestionCountSlider && pdfQuestionCountDisplay) {
            pdfQuestionCountSlider.addEventListener('input', (e) => {
                pdfQuestionCountDisplay.textContent = e.target.value;
            });
        }
        if (generatePDFBtn) generatePDFBtn.addEventListener('click', () => this.generatePreview());
        if (printBtn) printBtn.addEventListener('click', () => this.printPaper());
        if (backToConfigBtn) backToConfigBtn.addEventListener('click', () => this.backToConfig());

        // OCR Page
        const answerSheetUpload = document.getElementById('answerSheetUpload');
        const checkAnswersBtn = document.getElementById('checkAnswersBtn');
        const manualCheckBtn = document.getElementById('manualCheckBtn');
        const exportResultsBtn = document.getElementById('exportResultsBtn');

        if (answerSheetUpload) answerSheetUpload.addEventListener('change', (e) => this.handleImageUpload(e));
        if (checkAnswersBtn) checkAnswersBtn.addEventListener('click', () => this.checkAnswers());
        if (manualCheckBtn) manualCheckBtn.addEventListener('click', () => this.showManualCheck());
        if (exportResultsBtn) exportResultsBtn.addEventListener('click', () => this.exportResults());

        // Manual Check Page
        const submitManualCheck = document.getElementById('submitManualCheck');
        if (submitManualCheck) submitManualCheck.addEventListener('click', () => this.submitManualCheck());

        // Questions Page
        const searchInput = document.getElementById('searchInput');
        const filterSemester = document.getElementById('filterSemester');
        
        if (searchInput) searchInput.addEventListener('input', (e) => this.searchQuestions(e.target.value));
        if (filterSemester) filterSemester.addEventListener('change', (e) => this.filterQuestions(e.target.value));
    }

    showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page-section').forEach(page => page.classList.add('hidden'));
        
        // Show selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.remove('hidden');
        }
        
        // Update nav active state
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        const navMap = {
            'homePage': 'navHome',
            'questionsPage': 'navQuestions',
            'pdfPage': 'navPDF',
            'ocrPage': 'navOCR',
            'manualCheckPage': 'navOCR'
        };
        const activeNav = document.getElementById(navMap[pageId]);
        if (activeNav) activeNav.classList.add('active');
        
        this.currentPage = pageId;
        
        if (pageId === 'questionsPage') {
            this.renderAllQuestions();
        }
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark-mode');
        const toggle = document.getElementById('darkModeToggle');
        if (toggle) {
            toggle.textContent = this.darkMode ? '☀️' : '🌙';
        }
        localStorage.setItem('darkMode', this.darkMode);
    }

    // ========== Test Generation ==========
    renderSemesters() {
        const container = document.getElementById('semesterCheckboxes');
        if (!container) return;
        
        container.innerHTML = '';

        this.semesterData.forEach(semData => {
            const label = document.createElement('label');
            label.className = 'flex items-center p-3 rounded-lg hover:bg-gray-50 transition-all cursor-pointer';
            label.innerHTML = `
                <input type="checkbox" class="semester-checkbox custom-checkbox mr-3" 
                    data-semester="${semData.semester}" value="${semData.semester}">
                <span class="text-gray-700 font-medium">Semester ${semData.semester}</span>
            `;
            container.appendChild(label);

            const checkbox = label.querySelector('input');
            checkbox.addEventListener('change', () => this.handleSemesterChange());
        });

        this.renderBooks();
    }

    renderBooks() {
        const container = document.getElementById('bookCheckboxes');
        if (!container) return;
        
        container.innerHTML = '';

        const selectedSemesters = this.getSelectedSemesters();
        
        if (selectedSemesters.length === 0) {
            container.innerHTML = '<p class="text-gray-500 text-sm italic">Select a semester first</p>';
            return;
        }

        selectedSemesters.forEach(semesterNum => {
            const semData = this.semesterData.find(s => s.semester === semesterNum);
            if (semData) {
                const semesterHeader = document.createElement('div');
                semesterHeader.className = 'font-bold text-green-600 mt-3 mb-2 text-sm';
                semesterHeader.textContent = `Semester ${semesterNum}`;
                container.appendChild(semesterHeader);

                semData.books.forEach(book => {
                    const label = document.createElement('label');
                    label.className = 'flex items-center p-2 rounded-lg hover:bg-gray-50 transition-all cursor-pointer';
                    label.innerHTML = `
                        <input type="checkbox" class="book-checkbox custom-checkbox mr-3" 
                            data-book-id="${book.id}" value="${book.id}">
                        <span class="text-gray-700 text-sm">${book.title}</span>
                    `;
                    container.appendChild(label);
                });
            }
        });
    }

    handleSemesterChange() {
        const allSemestersCheckbox = document.getElementById('allSemesters');
        const semesterCheckboxes = document.querySelectorAll('.semester-checkbox');
        const allChecked = Array.from(semesterCheckboxes).every(cb => cb.checked);
        
        if (allSemestersCheckbox) {
            allSemestersCheckbox.checked = allChecked;
        }
        this.renderBooks();
        const allBooksCheckbox = document.getElementById('allBooks');
        if (allBooksCheckbox) {
            allBooksCheckbox.checked = false;
        }
    }

    handleAllSemesters() {
        const allSemestersCheckbox = document.getElementById('allSemesters');
        const semesterCheckboxes = document.querySelectorAll('.semester-checkbox');
        
        if (allSemestersCheckbox) {
            semesterCheckboxes.forEach(cb => {
                cb.checked = allSemestersCheckbox.checked;
            });
        }
        
        this.renderBooks();
        const allBooksCheckbox = document.getElementById('allBooks');
        if (allBooksCheckbox) {
            allBooksCheckbox.checked = false;
        }
    }

    handleAllBooks() {
        const allBooksCheckbox = document.getElementById('allBooks');
        const bookCheckboxes = document.querySelectorAll('.book-checkbox');
        
        if (allBooksCheckbox) {
            bookCheckboxes.forEach(cb => {
                cb.checked = allBooksCheckbox.checked;
            });
        }
    }

    getSelectedSemesters() {
        const checkboxes = document.querySelectorAll('.semester-checkbox:checked');
        return Array.from(checkboxes).map(cb => parseInt(cb.value));
    }

    getSelectedBooks() {
        const checkboxes = document.querySelectorAll('.book-checkbox:checked');
        return Array.from(checkboxes).map(cb => cb.value);
    }

    collectMCQs() {
        const selectedSemesters = this.getSelectedSemesters();
        const selectedBooks = this.getSelectedBooks();
        let allMCQs = [];

        if (selectedSemesters.length === 0) {
            alert('⚠️ Please select at least one semester');
            return [];
        }

        if (selectedBooks.length === 0) {
            alert('⚠️ Please select at least one book');
            return [];
        }

        selectedSemesters.forEach(semesterNum => {
            const semData = this.semesterData.find(s => s.semester === semesterNum);
            if (semData) {
                semData.books.forEach(book => {
                    if (selectedBooks.includes(book.id)) {
                        book.mcqs.forEach(mcq => {
                            allMCQs.push({
                                ...mcq,
                                bookTitle: book.title,
                                semester: semesterNum
                            });
                        });
                    }
                });
            }
        });

        return allMCQs;
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    generateTest() {
        const mcqs = this.collectMCQs();
        
        if (mcqs.length === 0) {
            return;
        }

        const questionCount = parseInt(document.getElementById('questionCount').value);
        
        if (mcqs.length < questionCount) {
            alert(`ℹ️ Only ${mcqs.length} questions available. Generating test with ${mcqs.length} questions.`);
        }

        const shuffledMCQs = this.shuffleArray(mcqs);
        this.currentTest = shuffledMCQs.slice(0, Math.min(questionCount, mcqs.length));
        this.userAnswers = {};

        this.displayTest();
    }

    displayTest() {
        const filterSection = document.getElementById('filterSection');
        const testSection = document.getElementById('testSection');
        const resultSection = document.getElementById('resultSection');
        
        if (filterSection) filterSection.classList.add('hidden');
        if (testSection) testSection.classList.remove('hidden');
        if (resultSection) resultSection.classList.add('hidden');

        const container = document.getElementById('questionsContainer');
        const totalQuestions = document.getElementById('totalQuestions');
        
        if (totalQuestions) totalQuestions.textContent = this.currentTest.length;
        if (!container) return;
        
        container.innerHTML = '';

        this.currentTest.forEach((mcq, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'card card-hover p-6';
            
            const optionsHTML = mcq.options.map((option, optIndex) => `
                <label class="option-card flex items-start transition-all" data-question="${index}" data-option="${optIndex}">
                    <input type="radio" name="question${index}" value="${optIndex}" 
                        class="mt-1 mr-4 custom-checkbox" data-question-index="${index}">
                    <span class="text-gray-700 flex-1" style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">${option}</span>
                </label>
            `).join('');

            questionDiv.innerHTML = `
                <div class="mb-3">
                    <span class="badge bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                        ${mcq.bookTitle} • Semester ${mcq.semester}
                    </span>
                </div>
                <div class="font-bold text-gray-800 mb-4 text-lg" style="word-wrap: break-word; overflow-wrap: break-word;">
                    ${index + 1}. ${mcq.question}
                </div>
                <div class="space-y-3">
                    ${optionsHTML}
                </div>
            `;

            container.appendChild(questionDiv);
        });

        // Add click handlers to option cards
        const radioButtons = container.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', (e) => {
                const questionIndex = parseInt(e.target.dataset.questionIndex);
                this.userAnswers[questionIndex] = parseInt(e.target.value);
                
                // Update selected state
                const allCards = document.querySelectorAll(`[data-question="${questionIndex}"]`);
                allCards.forEach(card => card.classList.remove('selected'));
                e.target.closest('.option-card').classList.add('selected');
            });
        });
    }

    submitTest() {
        if (Object.keys(this.userAnswers).length < this.currentTest.length) {
            const unanswered = this.currentTest.length - Object.keys(this.userAnswers).length;
            if (!confirm(`⚠️ You have ${unanswered} unanswered question(s). Submit anyway?`)) {
                return;
            }
        }

        this.showResults();
    }

    showResults() {
        const testSection = document.getElementById('testSection');
        const resultSection = document.getElementById('resultSection');
        
        if (testSection) testSection.classList.add('hidden');
        if (resultSection) resultSection.classList.remove('hidden');

        let correctCount = 0;
        const results = this.currentTest.map((mcq, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === mcq.correctAnswer;
            if (isCorrect) correctCount++;

            return {
                question: mcq.question,
                options: mcq.options,
                userAnswer: userAnswer,
                correctAnswer: mcq.correctAnswer,
                isCorrect: isCorrect,
                bookTitle: mcq.bookTitle,
                semester: mcq.semester
            };
        });

        const percentage = Math.round((correctCount / this.currentTest.length) * 100);
        
        const scoreDisplay = document.getElementById('scoreDisplay');
        const scorePercentage = document.getElementById('scorePercentage');
        
        if (scoreDisplay) {
            scoreDisplay.textContent = `${correctCount} / ${this.currentTest.length}`;
            scoreDisplay.className = `text-7xl font-extrabold mb-3 ${percentage >= 70 ? 'text-green-600' : percentage >= 50 ? 'text-yellow-600' : 'text-red-600'}`;
        }
        
        if (scorePercentage) {
            scorePercentage.textContent = `${percentage}% - ${this.getGrade(percentage)}`;
        }

        const reviewContainer = document.getElementById('reviewContainer');
        if (!reviewContainer) return;
        
        reviewContainer.innerHTML = '';

        results.forEach((result, index) => {
            const resultDiv = document.createElement('div');
            resultDiv.className = `card p-5 border-l-4 ${result.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`;
            
            const userAnswerText = result.userAnswer !== undefined ? result.options[result.userAnswer] : 'Not answered';
            const correctAnswerText = result.options[result.correctAnswer];

            resultDiv.innerHTML = `
                <div class="flex items-start justify-between mb-3">
                    <span class="badge ${result.isCorrect ? 'bg-green-600' : 'bg-red-600'} text-white">
                        ${result.bookTitle} • Semester ${result.semester}
                    </span>
                    <span class="font-bold ${result.isCorrect ? 'text-green-600' : 'text-red-600'} text-lg">
                        ${result.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                </div>
                <div class="font-semibold text-gray-800 mb-3" style="word-wrap: break-word; overflow-wrap: break-word;">
                    ${index + 1}. ${result.question}
                </div>
                <div class="text-sm space-y-2">
                    <div class="${result.isCorrect ? 'text-green-700' : 'text-red-700'} font-medium" style="word-wrap: break-word; overflow-wrap: break-word;">
                        <strong>Your answer:</strong> ${userAnswerText}
                    </div>
                    ${!result.isCorrect ? `
                        <div class="text-green-700 font-medium" style="word-wrap: break-word; overflow-wrap: break-word;">
                            <strong>Correct answer:</strong> ${correctAnswerText}
                        </div>
                    ` : ''}
                </div>
            `;

            reviewContainer.appendChild(resultDiv);
        });

        // Save to localStorage
        this.saveResults(results, correctCount);
    }

    getGrade(percentage) {
        if (percentage >= 90) return 'Excellent! 🌟';
        if (percentage >= 80) return 'Very Good! 🎉';
        if (percentage >= 70) return 'Good 👍';
        if (percentage >= 60) return 'Fair 👌';
        if (percentage >= 50) return 'Pass ✓';
        return 'Need Improvement 📚';
    }

    startNewTest() {
        const filterSection = document.getElementById('filterSection');
        const testSection = document.getElementById('testSection');
        const resultSection = document.getElementById('resultSection');
        
        if (filterSection) filterSection.classList.remove('hidden');
        if (testSection) testSection.classList.add('hidden');
        if (resultSection) resultSection.classList.add('hidden');
        
        this.currentTest = [];
        this.userAnswers = {};
    }

    resetFilters() {
        const allSemesters = document.getElementById('allSemesters');
        const allBooks = document.getElementById('allBooks');
        const questionCount = document.getElementById('questionCount');
        const questionCountDisplay = document.getElementById('questionCountDisplay');
        
        if (allSemesters) allSemesters.checked = false;
        if (allBooks) allBooks.checked = false;
        if (questionCount) questionCount.value = 10;
        if (questionCountDisplay) questionCountDisplay.textContent = '10';
        
        document.querySelectorAll('.semester-checkbox').forEach(cb => cb.checked = false);
        document.querySelectorAll('.book-checkbox').forEach(cb => cb.checked = false);
        
        this.renderBooks();
    }

    // ========== PDF Generation ==========
    renderPDFSemesters() {
        const container = document.getElementById('pdfSemesterCheckboxes');
        if (!container) return;
        
        container.innerHTML = '';

        this.semesterData.forEach(semData => {
            const label = document.createElement('label');
            label.className = 'flex items-center p-3 rounded-lg hover:bg-gray-50 transition-all cursor-pointer';
            label.innerHTML = `
                <input type="checkbox" class="pdf-semester-checkbox custom-checkbox mr-3" 
                    data-semester="${semData.semester}" value="${semData.semester}">
                <span class="text-gray-700 font-medium">Semester ${semData.semester}</span>
            `;
            container.appendChild(label);

            const checkbox = label.querySelector('input');
            checkbox.addEventListener('change', () => this.handlePDFSemesterChange());
        });

        this.renderPDFBooks();
    }

    renderPDFBooks() {
        const container = document.getElementById('pdfBookCheckboxes');
        if (!container) return;
        
        container.innerHTML = '';

        const selectedSemesters = this.getPDFSelectedSemesters();
        
        if (selectedSemesters.length === 0) {
            container.innerHTML = '<p class="text-gray-500 text-sm italic">Select a semester first</p>';
            return;
        }

        selectedSemesters.forEach(semesterNum => {
            const semData = this.semesterData.find(s => s.semester === semesterNum);
            if (semData) {
                const semesterHeader = document.createElement('div');
                semesterHeader.className = 'font-bold text-green-600 mt-3 mb-2 text-sm';
                semesterHeader.textContent = `Semester ${semesterNum}`;
                container.appendChild(semesterHeader);

                semData.books.forEach(book => {
                    const label = document.createElement('label');
                    label.className = 'flex items-center p-2 rounded-lg hover:bg-gray-50 transition-all cursor-pointer';
                    label.innerHTML = `
                        <input type="checkbox" class="pdf-book-checkbox custom-checkbox mr-3" 
                            data-book-id="${book.id}" value="${book.id}">
                        <span class="text-gray-700 text-sm">${book.title}</span>
                    `;
                    container.appendChild(label);
                });
            }
        });
    }

    handlePDFSemesterChange() {
        this.renderPDFBooks();
    }

    getPDFSelectedSemesters() {
        const checkboxes = document.querySelectorAll('.pdf-semester-checkbox:checked');
        return Array.from(checkboxes).map(cb => parseInt(cb.value));
    }

    getPDFSelectedBooks() {
        const checkboxes = document.querySelectorAll('.pdf-book-checkbox:checked');
        return Array.from(checkboxes).map(cb => cb.value);
    }

    collectPDFMCQs() {
        const selectedSemesters = this.getPDFSelectedSemesters();
        const selectedBooks = this.getPDFSelectedBooks();
        let allMCQs = [];

        if (selectedSemesters.length === 0) {
            alert('⚠️ Please select at least one semester');
            return [];
        }

        if (selectedBooks.length === 0) {
            alert('⚠️ Please select at least one book');
            return [];
        }

        selectedSemesters.forEach(semesterNum => {
            const semData = this.semesterData.find(s => s.semester === semesterNum);
            if (semData) {
                semData.books.forEach(book => {
                    if (selectedBooks.includes(book.id)) {
                        book.mcqs.forEach(mcq => {
                            allMCQs.push({
                                ...mcq,
                                bookTitle: book.title,
                                semester: semesterNum
                            });
                        });
                    }
                });
            }
        });

        return allMCQs;
    }

    generatePreview() {
        const mcqs = this.collectPDFMCQs();
        if (mcqs.length === 0) return;

        const questionCount = parseInt(document.getElementById('pdfQuestionCount').value);
        const shuffledMCQs = this.shuffleArray(mcqs);
        const selectedQuestions = shuffledMCQs.slice(0, Math.min(questionCount, mcqs.length));

        // Get selected books to generate topic
        const selectedBooks = this.getPDFSelectedBooks();
        const selectedSemesters = this.getPDFSelectedSemesters();
        let topicText = '';
        
        selectedSemesters.forEach(semesterNum => {
            const semData = this.semesterData.find(s => s.semester === semesterNum);
            if (semData) {
                semData.books.forEach(book => {
                    if (selectedBooks.includes(book.id)) {
                        if (topicText) topicText += ', ';
                        topicText += book.title;
                    }
                });
            }
        });

        // Store current paper
        this.currentPaper = {
            topic: topicText,
            questions: selectedQuestions
        };
        localStorage.setItem('lastPaper', JSON.stringify(this.currentPaper));

        // Generate HTML preview with optimized sizing for printing
        let htmlContent = `
            <div style="font-family: Arial, sans-serif; font-size: 10pt;">
                <table style="width: 100%; margin-bottom: 10px; border-collapse: collapse; font-size: 9pt;">
                    <tr>
                        <td style="padding: 2px;">Student Name: _______________________________</td>
                        <td style="padding: 2px;">Batch Code: _______________________________</td>
                    </tr>
                    <tr>
                        <td style="padding: 2px;">Student ID: _______________________________</td>
                        <td style="padding: 2px;">Date: _______________________________</td>
                    </tr>
                    <tr>
                        <td style="padding: 2px;">Subject: _______________________________</td>
                        <td style="padding: 2px; word-wrap: break-word; overflow-wrap: break-word;">Topic: ${topicText}</td>
                    </tr>
                </table>
        `;

        selectedQuestions.forEach((mcq, index) => {
            htmlContent += `
                <div style="margin-bottom: 8px; page-break-inside: avoid;">
                    <p style="font-weight: bold; margin: 0 0 3px 0; font-size: 10pt; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">Q${index + 1}. ${mcq.question}</p>
                    <table style="width: 100%; border-collapse: collapse; font-size: 9pt; table-layout: fixed;">
                        <tr>
                            <td style="padding: 1px 4px; width: 50%; vertical-align: top; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">1) ${mcq.options[0]}</td>
                            <td style="padding: 1px 4px; width: 50%; vertical-align: top; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">3) ${mcq.options[2]}</td>
                        </tr>
                        <tr>
                            <td style="padding: 1px 4px; vertical-align: top; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">2) ${mcq.options[1]}</td>
                            <td style="padding: 1px 4px; vertical-align: top; word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">4) ${mcq.options[3]}</td>
                        </tr>
                    </table>
                </div>
            `;
        });

        htmlContent += '</div>';

        // Display preview
        const pdfPreview = document.getElementById('pdfPreview');
        const pdfConfigSection = document.getElementById('pdfConfigSection');
        const pdfPreviewSection = document.getElementById('pdfPreviewSection');
        
        if (pdfPreview) pdfPreview.innerHTML = htmlContent;
        if (pdfConfigSection) pdfConfigSection.classList.add('hidden');
        if (pdfPreviewSection) pdfPreviewSection.classList.remove('hidden');
    }

    backToConfig() {
        const pdfConfigSection = document.getElementById('pdfConfigSection');
        const pdfPreviewSection = document.getElementById('pdfPreviewSection');
        
        if (pdfConfigSection) pdfConfigSection.classList.remove('hidden');
        if (pdfPreviewSection) pdfPreviewSection.classList.add('hidden');
    }

    printPaper() {
        window.print();
    }

    // ========== OCR Answer Checking ==========
    async handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Show preview
        const reader = new FileReader();
        reader.onload = (e) => {
            const uploadedImage = document.getElementById('uploadedImage');
            const ocrPreview = document.getElementById('ocrPreview');
            if (uploadedImage) uploadedImage.src = e.target.result;
            if (ocrPreview) ocrPreview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);

        // Process OCR
        const ocrProgress = document.getElementById('ocrProgress');
        const ocrResults = document.getElementById('ocrResults');
        
        if (ocrProgress) ocrProgress.classList.remove('hidden');
        if (ocrResults) ocrResults.classList.add('hidden');

        try {
            const result = await Tesseract.recognize(file, 'eng', {
                logger: (m) => {
                    if (m.status === 'recognizing text') {
                        const progress = Math.round(m.progress * 100);
                        const progressBar = document.getElementById('ocrProgressBar');
                        const ocrStatus = document.getElementById('ocrStatus');
                        if (progressBar) progressBar.style.width = progress + '%';
                        if (ocrStatus) ocrStatus.textContent = `Processing... ${progress}%`;
                    }
                }
            });

            const extractedText = result.data.text;
            this.parseAnswersFromText(extractedText);
            
        } catch (error) {
            console.error('OCR Error:', error);
            alert('❌ Error processing image. Please try a clearer image or use manual check.');
        }

        if (ocrProgress) ocrProgress.classList.add('hidden');
    }

    parseAnswersFromText(text) {
        // Try to extract answers in format like "1. A" or "1) 2" or "Q1: 3"
        const lines = text.split('\n');
        const answers = [];
        
        lines.forEach(line => {
            const match = line.match(/(?:Q|question)?\s*(\d+)\s*[:.)\-]\s*([1-4A-Da-d])/i);
            if (match) {
                const questionNum = parseInt(match[1]);
                let answer = match[2].toUpperCase();
                
                // Convert letter to number (A=1, B=2, C=3, D=4)
                if (answer.match(/[A-D]/)) {
                    answer = answer.charCodeAt(0) - 64; // A=1, B=2, etc
                } else {
                    answer = parseInt(answer);
                }
                
                answers.push({ questionNum, answer });
            }
        });

        this.extractedAnswers = answers;
        this.displayExtractedAnswers();
    }

    displayExtractedAnswers() {
        const container = document.getElementById('extractedAnswers');
        const checkAnswersBtn = document.getElementById('checkAnswersBtn');
        const ocrResults = document.getElementById('ocrResults');
        
        if (!container) return;
        
        container.innerHTML = '';

        if (this.extractedAnswers.length === 0) {
            container.innerHTML = '<p class="text-red-600 font-medium">❌ No answers detected. Please use Manual Check.</p>';
            if (checkAnswersBtn) checkAnswersBtn.classList.add('hidden');
        } else {
            this.extractedAnswers.forEach(ans => {
                const div = document.createElement('div');
                div.className = 'flex items-center justify-between p-4 bg-gray-50 rounded-lg';
                div.innerHTML = `
                    <span class="font-semibold text-gray-800">Question ${ans.questionNum}</span>
                    <span class="badge bg-blue-600 text-white">Answer: ${ans.answer}</span>
                `;
                container.appendChild(div);
            });
            if (checkAnswersBtn) checkAnswersBtn.classList.remove('hidden');
        }

        if (ocrResults) ocrResults.classList.remove('hidden');
    }

    checkAnswers() {
        if (!this.currentPaper) {
            const savedPaper = localStorage.getItem('lastPaper');
            if (!savedPaper) {
                alert('⚠️ No question paper found. Please generate a PDF first.');
                return;
            }
            this.currentPaper = JSON.parse(savedPaper);
        }

        let correctCount = 0;
        let wrongCount = 0;
        let unansweredCount = 0;

        const results = this.currentPaper.questions.map((mcq, index) => {
            const userAnswerObj = this.extractedAnswers.find(a => a.questionNum === index + 1);
            const userAnswer = userAnswerObj ? userAnswerObj.answer - 1 : undefined; // Convert to 0-indexed
            
            const isCorrect = userAnswer !== undefined && userAnswer === mcq.correctAnswer;
            if (userAnswer === undefined) {
                unansweredCount++;
            } else if (isCorrect) {
                correctCount++;
            } else {
                wrongCount++;
            }

            return {
                questionNum: index + 1,
                question: mcq.question,
                options: mcq.options,
                userAnswer,
                correctAnswer: mcq.correctAnswer,
                isCorrect,
                answered: userAnswer !== undefined
            };
        });

        this.displayCheckingResults(correctCount, wrongCount, unansweredCount, results);
    }

    displayCheckingResults(correct, wrong, unanswered, results) {
        const correctCount = document.getElementById('correctCount');
        const wrongCount = document.getElementById('wrongCount');
        const unansweredCount = document.getElementById('unansweredCount');
        const totalMarks = document.getElementById('totalMarks');
        
        if (correctCount) correctCount.textContent = correct;
        if (wrongCount) wrongCount.textContent = wrong;
        if (unansweredCount) unansweredCount.textContent = unanswered;
        if (totalMarks) totalMarks.textContent = `${correct}/${results.length}`;

        const container = document.getElementById('detailedResults');
        if (!container) return;
        
        container.innerHTML = '';

        results.forEach(result => {
            const div = document.createElement('div');
            const bgColor = !result.answered ? 'bg-gray-50' : result.isCorrect ? 'bg-green-50' : 'bg-red-50';
            const borderColor = !result.answered ? 'border-gray-300' : result.isCorrect ? 'border-green-400' : 'border-red-400';
            
            div.className = `card border-2 ${borderColor} ${bgColor} p-4`;
            div.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <span class="font-semibold text-gray-800" style="word-wrap: break-word; overflow-wrap: break-word; flex: 1;">Q${result.questionNum}. ${result.question}</span>
                    <span class="ml-4 font-bold ${!result.answered ? 'text-gray-600' : result.isCorrect ? 'text-green-600' : 'text-red-600'} text-lg whitespace-nowrap">
                        ${!result.answered ? 'UNANSWERED' : result.isCorrect ? '✓' : '✗'}
                    </span>
                </div>
                <div class="text-sm space-y-1">
                    <div class="font-medium" style="word-wrap: break-word; overflow-wrap: break-word;">
                        Your answer: ${result.answered ? result.options[result.userAnswer] : 'None'}
                    </div>
                    ${!result.isCorrect ? `<div class="text-green-600 font-medium" style="word-wrap: break-word; overflow-wrap: break-word;">Correct: ${result.options[result.correctAnswer]}</div>` : ''}
                </div>
            `;
            container.appendChild(div);
        });

        const checkingResults = document.getElementById('checkingResults');
        if (checkingResults) checkingResults.classList.remove('hidden');
        
        this.saveCheckingResults({ correct, wrong, unanswered, results });
    }

    // ========== Manual Check ==========
    showManualCheck() {
        if (!this.currentPaper) {
            const savedPaper = localStorage.getItem('lastPaper');
            if (!savedPaper) {
                alert('⚠️ No question paper found. Please generate a PDF first.');
                return;
            }
            this.currentPaper = JSON.parse(savedPaper);
        }

        this.showPage('manualCheckPage');
        this.renderManualCheck();
    }

    renderManualCheck() {
        const container = document.getElementById('manualCheckContainer');
        if (!container) return;
        
        container.innerHTML = '';

        this.currentPaper.questions.forEach((mcq, index) => {
            const div = document.createElement('div');
            div.className = 'card p-5';
            div.innerHTML = `
                <div class="font-bold text-gray-800 mb-2" style="word-wrap: break-word; overflow-wrap: break-word;">Q${index + 1}. ${mcq.question}</div>
                <div class="text-sm text-gray-600 mb-4 font-medium" style="word-wrap: break-word; overflow-wrap: break-word;">Correct Answer: ${mcq.options[mcq.correctAnswer]}</div>
                <div class="flex gap-4 flex-wrap">
                    <label class="flex items-center cursor-pointer">
                        <input type="radio" name="manual${index}" value="correct" class="custom-checkbox mr-2">
                        <span class="text-green-600 font-semibold">✓ Correct</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                        <input type="radio" name="manual${index}" value="wrong" class="custom-checkbox mr-2">
                        <span class="text-red-600 font-semibold">✗ Wrong</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                        <input type="radio" name="manual${index}" value="unanswered" class="custom-checkbox mr-2">
                        <span class="text-gray-600 font-semibold">⊘ Unanswered</span>
                    </label>
                </div>
            `;
            container.appendChild(div);
        });
    }

    submitManualCheck() {
        let correctCount = 0;
        let wrongCount = 0;
        let unansweredCount = 0;

        const results = this.currentPaper.questions.map((mcq, index) => {
            const selected = document.querySelector(`input[name="manual${index}"]:checked`);
            const status = selected ? selected.value : 'unanswered';

            if (status === 'correct') correctCount++;
            else if (status === 'wrong') wrongCount++;
            else unansweredCount++;

            return {
                questionNum: index + 1,
                question: mcq.question,
                options: mcq.options,
                correctAnswer: mcq.correctAnswer,
                status
            };
        });

        // Show results on OCR page
        this.showPage('ocrPage');
        
        const resultsFormatted = results.map(r => ({
            questionNum: r.questionNum,
            question: r.question,
            options: r.options,
            userAnswer: r.status === 'correct' ? r.correctAnswer : (r.status === 'wrong' ? (r.correctAnswer + 1) % r.options.length : undefined),
            correctAnswer: r.correctAnswer,
            isCorrect: r.status === 'correct',
            answered: r.status !== 'unanswered'
        }));

        this.displayCheckingResults(correctCount, wrongCount, unansweredCount, resultsFormatted);
    }

    // ========== Questions List ==========
    loadAllQuestions() {
        this.allQuestions = [];
        this.semesterData.forEach(semData => {
            semData.books.forEach(book => {
                book.mcqs.forEach(mcq => {
                    this.allQuestions.push({
                        ...mcq,
                        bookTitle: book.title,
                        semester: semData.semester
                    });
                });
            });
        });
    }

    renderAllQuestions(filteredQuestions = null) {
        const questions = filteredQuestions || this.allQuestions;
        const container = document.getElementById('questionsList');
        const questionsCount = document.getElementById('questionsCount');
        
        if (!container) return;
        
        container.innerHTML = '';

        questions.forEach((mcq, index) => {
            const div = document.createElement('div');
            div.className = 'card card-hover p-6';
            div.innerHTML = `
                <div class="mb-3">
                    <span class="badge bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                        ${mcq.bookTitle} • Semester ${mcq.semester}
                    </span>
                </div>
                <div class="font-bold text-gray-800 mb-4" style="word-wrap: break-word; overflow-wrap: break-word;">${mcq.question}</div>
                <div class="grid md:grid-cols-2 gap-3 text-sm">
                    ${mcq.options.map((opt, i) => `
                        <div class="${i === mcq.correctAnswer ? 'text-green-600 font-bold bg-green-50 p-2 rounded-lg' : 'text-gray-600'}" style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;">
                            ${i + 1}. ${opt} ${i === mcq.correctAnswer ? '✓' : ''}
                        </div>
                    `).join('')}
                </div>
            `;
            container.appendChild(div);
        });

        if (questionsCount) {
            questionsCount.textContent = `📊 Showing ${questions.length} of ${this.allQuestions.length} questions`;
        }
    }

    searchQuestions(query) {
        const filterSemester = document.getElementById('filterSemester');
        const semester = filterSemester ? filterSemester.value : '';
        this.filterAndSearch(query, semester);
    }

    filterQuestions(semester) {
        const searchInput = document.getElementById('searchInput');
        const query = searchInput ? searchInput.value : '';
        this.filterAndSearch(query, semester);
    }

    filterAndSearch(query, semester) {
        let filtered = this.allQuestions;

        if (semester) {
            filtered = filtered.filter(q => q.semester == semester);
        }

        if (query) {
            const lowerQuery = query.toLowerCase();
            filtered = filtered.filter(q => 
                q.question.toLowerCase().includes(lowerQuery) ||
                q.options.some(opt => opt.toLowerCase().includes(lowerQuery)) ||
                q.bookTitle.toLowerCase().includes(lowerQuery)
            );
        }

        this.renderAllQuestions(filtered);
    }

    // ========== Export Results ==========
    async exportResults() {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            doc.setFontSize(16);
            doc.text('Exam Results Summary', 15, 20);
            
            doc.setFontSize(12);
            doc.text(`Topic: ${this.currentPaper.topic || 'N/A'}`, 15, 35);
            
            const correctCount = document.getElementById('correctCount');
            const wrongCount = document.getElementById('wrongCount');
            const totalMarks = document.getElementById('totalMarks');
            
            const correct = correctCount ? correctCount.textContent : '0';
            const wrong = wrongCount ? wrongCount.textContent : '0';
            const marks = totalMarks ? totalMarks.textContent : '0/0';

            doc.text(`Correct: ${correct}`, 15, 49);
            doc.text(`Wrong: ${wrong}`, 15, 56);
            doc.text(`Marks: ${marks}`, 15, 63);

            doc.save(`results_${new Date().getTime()}.pdf`);
            alert('✅ PDF exported successfully!');
        } catch (error) {
            console.error('PDF Export Error:', error);
            alert('❌ Error exporting PDF. Please try again.');
        }
    }

    // ========== LocalStorage ==========
    saveResults(results, score) {
        const resultData = {
            date: new Date().toISOString(),
            score: score,
            total: results.length,
            results: results
        };
        localStorage.setItem('lastTestResults', JSON.stringify(resultData));
    }

    saveCheckingResults(data) {
        localStorage.setItem('lastCheckingResults', JSON.stringify({
            date: new Date().toISOString(),
            ...data
        }));
    }

    loadFromLocalStorage() {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'true') {
            this.toggleDarkMode();
        }

        const lastPaper = localStorage.getItem('lastPaper');
        if (lastPaper) {
            this.currentPaper = JSON.parse(lastPaper);
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MCQExamSystem();
});
