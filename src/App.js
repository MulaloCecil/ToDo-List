import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./components/App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./components/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/login'}>
            To-Do List App
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/register'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
          <Route
              path="/"
              element={<Home loggedIn={loggedIn} handleLogout={handleLogout} />}
            />

          
            <Route
              path="/login"
              element={<LoginForm handleLogin={handleLogin} />}
            />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </div>
      </div>
      </div>
    </Router>
  )
}

export default App;
