//זה הדאטא של המבחנים המוכנס בהרצת הקוד
export const mockExams = [
  {
    id: "exam-1",
    title: "JavaScript Basics",
    questions: [
      { id: 1, question: "What is closure?", options: ["A", "B", "C", "D"], answer: "A" },
      { id: 2, question: "What is hoisting?", options: ["A", "B", "C", "D"], answer: "B" }
    ]
  },
  {
    id: "exam-2",
    title: "React Fundamentals",
    questions: [
      { id: 1, question: "What is a hook?", options: ["A", "B", "C", "D"], answer: "C" },
      { id: 2, question: "What is JSX?", options: ["A", "B", "C", "D"], answer: "D" }
    ]
  }
];

//זה הדאטא של הסטודנטים המוכנס בהרצת הקוד
export const mockStudentScores = [
  { studentId: "s1", examId: "exam-1", score: 85 },
  { studentId: "s2", examId: "exam-1", score: 90 }
];
