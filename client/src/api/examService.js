
import { mockExams } from './mockDb';

//מחזיר את כל המבחנים
export const getAllExams = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockExams]);
    }, 500);
  });
};

//מחזיר את המבחן לפי id
export const getExamById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exam = mockExams.find(e => e.id === id);
      if (exam) {
        resolve(exam);
      } else {
        reject(new Error("Exam not found"));
      }
    }, 500);
  });
};

// מוסיף מבחן חדש
export const createExam = (exam) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newExam = { ...exam, id: `exam-${Date.now()}` };
      mockExams.push(newExam);
      resolve(newExam);
    }, 500);
  });
};
