// Document for form login
import { useState } from "react";

import Axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const addUser = () => {
    Axios.post("http://localhost:8081/insertUser", {
      name: username,
      email: email,
      password: password,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    // Login form
    <form method="post">
      <h2>Create account</h2>

      {/* Name input */}
      <label htmlFor="name">Full name</label>
      <input
        id="name"
        name="name"
        type="text"
        required
        maxLength={100}
        placeholder=""
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

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
          addUser();
        }}
      >
        Create account
      </button>
    </form>
  );
}

export default LoginForm;
