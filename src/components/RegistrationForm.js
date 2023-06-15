import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    navigate("/login");
  };


  
  return (
    <div className="registration-form">
      
      <form onSubmit={handleSubmit} >
      <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First Name:</label>
          <input
            type="text"
            id="firstname"
            className="form-control"
            placeholder="Firstname"
            value={username}
           
          />
        </div>
        <div className="mb-3">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <p className="forgot-password text-right">
          Already registered? <a href="/login">Login</a>
        </p>
    </div>
  );
}

export default RegistrationForm;