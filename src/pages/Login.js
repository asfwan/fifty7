// src/pages/Login.js
import React, { useState } from "react";
import "../styles/account.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logging in...");
    // Add actual login logic here
  };

  return (
    <div className="account-page container py-5">
      <h2 className="account-title">Login</h2>

      <form className="account-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <button type="submit" className="account-submit-btn">Login</button>

        <div className="social-login">
          <p>Or login with:</p>
          <button type="button" className="social-btn google">Login with Google</button>
          <button type="button" className="social-btn facebook">Login with Facebook</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
