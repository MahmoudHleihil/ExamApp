
import React, { useState, useEffect } from 'react';
import TeacherDashboard from './components/TeacherDashboard';
import StudentPortal from './components/StudentPortal';
import Login from './components/Login';
import RandomQuestion from './components/RandomQuestion';
import './App.css';

function App() {
  const [role, setRole] = useState('teacher'); // 'teacher' or 'student'
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUser(null);
  };

  const toggleRole = () => {
    setRole(role === 'teacher' ? 'student' : 'teacher');
  };

  if (!user) {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark mb-4">
          <div className="container">
            <span className="navbar-brand mb-0 h1">E-Test System</span>
          </div>
        </nav>
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">E-Test System</span>
          <div>
            <button className="btn btn-outline-info me-2" onClick={toggleRole}>
              Switch to {role === 'teacher' ? 'Student' : 'Teacher'} View
            </button>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container text-center mb-4">
          <div className="alert alert-info">
            <h3>Welcome, {user}!</h3>
            <p className="mb-0">
              Current View: <strong>{role.charAt(0).toUpperCase() + role.slice(1)}</strong>
            </p>
          </div>
        </div>

        {role === 'teacher' ? <TeacherDashboard /> : <StudentPortal />}

        <div className="container mt-5 mb-5 pb-5">
          <hr />
          <div className="row justify-content-center">
            <div className="col-md-8">
              <RandomQuestion />
            </div>
          </div>
        </div>
      </main>

      <footer className="footer mt-auto py-3 bg-light text-center">
        <div className="container">
          <span className="text-muted">© 2026 E-Test System. Authenticated Session.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
