import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Home from './components/home';
import NotFound from './components/notFound';

// Navigation Component
const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact="true" to="/" activeclassname="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeclassname="active">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" activeclassname="active">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" activeclassname="active">
          Dashboard
        </NavLink>
      </li>
    </ul>
  </nav>
);

function App() {
  const isAuthenticated = false; 

  return (
    <Router>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {isAuthenticated ? (
              <Route path="/dashboard" element={<Dashboard />} />
            ) : (
              <Route path="/dashboard" element={<Login />} />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Fitness Tracker. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
