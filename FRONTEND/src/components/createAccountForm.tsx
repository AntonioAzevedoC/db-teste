// Document for form login
import { useState } from "react";

import Axios from "axios";

// Regex for inputs
// Only letters, letters with accent marks, and empty space, but only one at a time
const reName = /^(?=.{1,80}$)\p{L}+(?: \p{L}+)*$/u;
// Standard email regex
const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// At least one symbol, one uppercase letter, one lowercase letter, one number, and 8 characters. Maximum of 80 characters
const rePasswd =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~])[\S]{8,80}$/;

const CreateAccount = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");

  const addUser = () => {
    Axios.post("http://localhost:4000/insertUser", {
      name: username,
      email: email,
      passwd: passwd,
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
          setPasswd(e.target.value);
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
};

export default CreateAccount;
