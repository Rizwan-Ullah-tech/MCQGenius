// Course data structure for MCQ Exam Management System
// Two courses: ACCP-7062-Prime2.0 and ACCP-7144-AI

const coursesData = {
    courses: [
        {
            id: "accp-7144-ai",
            name: "ACCP-7144-AI",
            fullName: "Aptech Certified Computer Professional - AI Track",
            description: "Comprehensive AI and Software Development Program",
            icon: "🤖",
            color: "#10b981",
            semesters: [
                {
                    semester: 1,
                    name: "CPISM",
                    books: [],
                    isEmpty: true
                },
                {
                    semester: 2,
                    name: "DISM",
                    books: [],
                    isEmpty: true
                },
                {
                    semester: 3,
                    name: "HDSE I",
                    books: [],
                    isEmpty: true
                },
                {
                    semester: 4,
                    name: "HDSE II",
                    books: [],
                    isEmpty: true
                },
                {
                    semester: 5,
                    name: "ADSE I",
                    books: [],
                    isEmpty: true
                },
                {
                    semester: 6,
                    name: "ADSE II (Semester 6)",
                    books: [],
                    isEmpty: true
                }
            ]
        },
        {
            id: "accp-7062-prime",
            name: "ACCP-7062-Prime2.0",
            fullName: "Aptech Certified Computer Professional - Prime 2.0",
            description: "Enhanced Software Development Program",
            icon: "💎",
            color: "#3b82f6",
            semesters: [
                {
                    semester: 1,
                    name: "CPISM (Semester 1)",
                    books: [],
                    isEmpty: true
                },
                {
                    semester: 2,
                    name: "DISM (Semester 2)",
                    books: [],
                    isEmpty: true
                },
                {
                    semester: 3,
                    name: "HDSE I (Semester 3)",
                    books: [],
                    isEmpty: true
                },
                {
                    semester: 4,
                    name: "HDSE II (Semester 4)",
                    books: [],
                    isEmpty: true
                },
                {
                    semester: 5,
                    name: "ADSE I (Semester 5)",
                    books: [],
                    isEmpty: true
                },
                {
                    semester: 6,
                    name: "ADSE II (Semester 6)",
                    books: [],
                    isEmpty: true
                }
            ]
        }
    ]
};

export default coursesData;
