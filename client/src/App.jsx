
import React, { useState } from 'react';
import TeacherDashboard from './components/TeacherDashboard';
import StudentPortal from './components/StudentPortal';
import './App.css';

function App() {
  const [role, setRole] = useState('teacher'); // 'teacher' or 'student'

  // משנה בין סטןדנט ומורה
  const toggleRole = () => {
    setRole(role === 'teacher' ? 'student' : 'teacher');
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">E-Test System</span>
          <button className="btn btn-outline-light" onClick={toggleRole}>
            Switch to {role === 'teacher' ? 'Student' : 'Teacher'} View
          </button>
        </div>
      </nav>

      <main>
        <div className="container text-center mb-4">
          <p className="lead">
            Current View: <strong>{role.charAt(0).toUpperCase() + role.slice(1)}</strong>
          </p>
        </div>

        {role === 'teacher' ? <TeacherDashboard /> : <StudentPortal />}
      </main>

      <footer className="footer mt-auto py-3 bg-light text-center">
        <div className="container">
          <span className="text-muted">© 2026 E-Test System. Prepared for Node.js Backend Integration.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
