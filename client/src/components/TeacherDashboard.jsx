
import React, { useState, useEffect } from 'react';
import { getAllExams } from '../api/examService';

//זה הcomponent של teacher dashboard
const TeacherDashboard = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  // כשהדאטא ב component משתנה אז רק הוא מתעדכן ומציג את כל המבחנים
  useEffect(() => {
    getAllExams().then((data) => {
      setExams(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>Teacher Dashboard</h2>
        </div>
        <div className="card-body">
          {loading ? (
            <p>Loading exams...</p>
          ) : (
            <div className="row">
              {exams.map((exam) => (
                <div key={exam.id} className="col-md-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{exam.title}</h5>
                      <p className="card-text">Exam ID: {exam.id}</p>
                      <p className="card-text">Questions: {exam.questions.length}</p>
                      <button className="btn btn-outline-primary btn-sm">Edit Exam</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
