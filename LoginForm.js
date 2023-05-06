import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="login-form-container">
      <h3 className="login-title">Log In</h3>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
