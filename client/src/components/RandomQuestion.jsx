
import React, { useState, useEffect } from 'react';
import { getAllExams } from '../api/examService';

const RandomQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllExams().then((exams) => {
      const allQuestions = exams.flatMap(exam => 
        exam.questions.map(q => ({ ...q, examTitle: exam.title }))
      );
      setQuestions(allQuestions);
      setLoading(false);
    });
  }, []);

  const pickRandomQuestion = () => {
    if (questions.length === 0) return;
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  if (loading) return <div className="text-center">Loading questions...</div>;

  return (
    <div className="card mt-4 shadow-sm">
      <div className="card-header bg-warning text-dark">
        <h4 className="mb-0">Random Question Practice</h4>
      </div>
      <div className="card-body text-center">
        {!currentQuestion ? (
          <p className="text-muted">Click the button below to get a random question!</p>
        ) : (
          <div className="mb-4">
            <span className="badge bg-secondary mb-2">From: {currentQuestion.examTitle}</span>
            <h5 className="card-title">{currentQuestion.question}</h5>
            <div className="d-flex justify-content-center gap-2 mt-3">
              {currentQuestion.options.map((opt, index) => (
                <button key={index} className="btn btn-outline-secondary btn-sm" disabled>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
        <button className="btn btn-warning" onClick={pickRandomQuestion}>
          {currentQuestion ? 'Next Random Question' : 'Get Random Question'}
        </button>
      </div>
    </div>
  );
};

export default RandomQuestion;
