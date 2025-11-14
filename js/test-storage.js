// Test History Storage Manager
// Handles saving and retrieving test history from localStorage

class TestStorage {
    constructor() {
        this.storageKey = 'testHistory';
    }

    // Save a new test to history
    saveTest(testData) {
        const history = this.getAll();
        const test = {
            id: this.generateTestId(),
            ...testData,
            timestamp: new Date().toISOString()
        };
        history.unshift(test); // Add to beginning of array
        localStorage.setItem(this.storageKey, JSON.stringify(history));
        return test;
    }

    // Get all tests from history
    getAll() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }

    // Get a specific test by ID
    getById(id) {
        const history = this.getAll();
        return history.find(test => test.id === id);
    }

    // Get tests filtered by course
    getByCourse(courseId) {
        const history = this.getAll();
        return history.filter(test => test.courseId === courseId);
    }

    // Get tests filtered by semester
    getBySemester(courseId, semester) {
        const history = this.getAll();
        return history.filter(test => 
            test.courseId === courseId && test.semester === semester
        );
    }

    // Delete a test from history
    deleteTest(id) {
        let history = this.getAll();
        history = history.filter(test => test.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(history));
    }

    // Clear all history
    clearAll() {
        localStorage.removeItem(this.storageKey);
    }

    // Get statistics
    getStats() {
        const history = this.getAll();
        const total = history.length;
        const onlineTests = history.filter(t => t.testType === 'online').length;
        const printedTests = history.filter(t => t.testType === 'printed').length;
        
        let totalScore = 0;
        let scoredTests = 0;
        
        history.forEach(test => {
            if (test.score !== undefined && test.totalQuestions) {
                totalScore += (test.score / test.totalQuestions) * 100;
                scoredTests++;
            }
        });

        const avgPercentage = scoredTests > 0 ? Math.round(totalScore / scoredTests) : 0;

        return {
            total,
            onlineTests,
            printedTests,
            avgPercentage
        };
    }

    // Generate unique test ID
    generateTestId() {
        return `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
}

export default new TestStorage();
