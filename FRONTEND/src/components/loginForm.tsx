// Document for form login
import { useState } from "react";

import Axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = () => {
    return;
  };

  return (
    // Login form
    <form method="post">
      <h2>Login Form</h2>

      {/* Email input */}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      {/* Password input */}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        minLength={8}
        placeholder="At least 8 characters"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      {/* Submit button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          login();
        }}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
