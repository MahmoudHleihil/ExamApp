
import React, { useState } from 'react';
import { getExamById } from '../api/examService';

//זה הcomponent של student portal
const StudentPortal = () => {
  const [examId, setExamId] = useState('');
  const [exam, setExam] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // פונקציה אסינכרונית שמחזירה המבחן המבוקש
  const handleFetchExam = async () => {
    if (!examId) return;
    setLoading(true);
    setError('');
    setExam(null);
    try {
      const data = await getExamById(examId);
      setExam(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-success text-white">
          <h2>Student Portal</h2>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Exam ID to Start"
              value={examId}
              onChange={(e) => setExamId(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleFetchExam}
              disabled={loading}
            >
              {loading ? 'Fetching...' : 'Start Exam'}
            </button>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          {exam && (
            <div className="mt-4">
              <h4>Exam: {exam.title}</h4>
              <p>Total Questions: {exam.questions.length}</p>
              <ul className="list-group">
                {exam.questions.map((q) => (
                  <li key={q.id} className="list-group-item">
                    {q.question}
                  </li>
                ))}
              </ul>
              <button className="btn btn-success mt-3">Submit Exam</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
