// Document for create account form

// Importing react functions
import { useEffect, useRef, useState } from "react";

// Importing Axios for
import Axios from "axios";
import { axiosURL } from "./global/axios";

// Regex for input fields
import { reName, reEmail, rePasswd } from "./global/regex";

// Importing style
import "./component styles/createAccountForm.css";

// Function to create user accounts (That are by default disabled)
const CreateAccount = () => {
  // References
  const userRef = useRef<HTMLInputElement | null>(null);
  // const errRef = useRef();

  // State for input fields
  // Each input field has three defining states, one for the actual data of the field, one defining if the data is valid (regex), and a third one to set the focus between page reloads

  // input field "name" state
  const [name, setName] = useState<string>("");
  const [nameValid, setNameValid] = useState<boolean>(false);
  const [nameFocus, setNameFocus] = useState<boolean>(false);

  // Input field "email" state
  const [email, setEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [emailFocus, setEmailFocus] = useState<boolean>(false);

  // Input field "password" state
  const [passwd, setPasswd] = useState<string>("");
  const [passwdValid, setPasswdValid] = useState<boolean>(false);
  const [passwdFocus, setPasswdFocus] = useState<boolean>(false);

  // Input field "matchPasswd" state
  const [matchPasswd, setMatchPasswd] = useState<string>("");
  const [matchPasswdValid, setMatchPasswdValid] = useState<boolean>(false);
  const [matchPasswdFocus, setMatchPasswdFocus] = useState<boolean>(false);

  // State for error messages
  const [errMsg, setErrMsg] = useState<string>("");

  // State for post data success
  const [success, setSuccess] = useState<boolean>(false);

  // useEffect to apply regex test the name input
  useEffect(() => {
    // Testing if the name follows the regex
    const result: boolean = reName.test(name);
    console.log(name);
    console.log(result);
    // Setting result (boolean)
    setNameValid(result);
  }, [name]);

  // useEffect to apply regex test to email input
  useEffect(() => {
    // Testing if the email follows the regex
    const result: boolean = reEmail.test(email);
    console.log(email);
    console.log(result);
    // Setting result (boolean)
    setEmailValid(result);
  }, [email]);

  // useEffect to apply regex test to password input and to check if the two passwords match
  useEffect(() => {
    // Testing if the password follows the regex
    const result: boolean = rePasswd.test(passwd);
    console.log(passwd);
    console.log(result);
    // Setting result (boolean)
    setPasswdValid(result);

    // Testing if the passwords match
    const match = passwd == matchPasswd;
    // setting match (boolean)
    setMatchPasswdValid(match);
  }, [passwd, matchPasswd]);

  // useEffect to clear error message after a change to the input fields
  useEffect(() => {
    setErrMsg("");
  }, [name, email, passwd, matchPasswd]);

  // addUser function, to send new user data to the server/backend
  const addUser = async (e: any) => {
    // Preventing form submit
    e.preventDefault();

    // Revalidating the input to prevent sql injection
    const r1: boolean = reName.test(name);
    const r2: boolean = reEmail.test(email);
    const r3: boolean = rePasswd.test(passwd);
    const r4: boolean = rePasswd.test(matchPasswd);

    // If revalidation fails, set error
    if (!r1 || !r2 || !r3 || !r4) return setErrMsg("Invalid Entry");

    try {
      // Making Axios post call to server
      const response = await Axios.post(`${axiosURL}/insertUser`, {
        name: name,
        email: email,
        passwd: passwd,
      });

      // If revalidation succeds, set success to true
      // console.log(response.accessToken);
      if (response.data) setSuccess(true);
    } catch (err) {
      // Catching errors
      console.error(err);
    }
  };

  // Returning HTML form
  return (
    <>
      {/* If success, link to login form */}
      {success ? (
        <h1>Success</h1>
      ) : (
        // Create account form
        <form method="post" className="__registration-form">
          <h2>Create account</h2>

          {/* Name input field */}
          <label htmlFor="name" className="__input-form-label">
            Full name
          </label>
          <input
            id="name"
            className="__input-form-field"
            name="name"
            type="text"
            ref={userRef}
            required
            maxLength={100}
            placeholder="Your name"
            autoComplete="off"
            aria-invalid={nameValid ? "false" : "true"}
            aria-describedby="nameMsg"
            // Handling onchange
            onChange={(e) => setName(e.target.value)}
            // Handling element focus
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
          />
          {/* Error message for name input field */}
          <p
            id="nameMsg"
            className={
              nameFocus && name && !nameValid ? "__instructions" : "__offscreen"
            }
          >
            3 to 80 characters <br />
            Must contain only letters <br />
          </p>

          {/* Email input field */}
          <label htmlFor="email" className="__input-form-label">
            Email
          </label>
          <input
            id="email"
            className="__input-form-field"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="off"
            aria-invalid={emailValid ? "false" : "true"}
            aria-describedby="emailMsg"
            // Handling onchange
            onChange={(e) => setEmail(e.target.value)}
            // Handling element focus
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          {/* Error message for email input field */}
          <p
            id="emailMsg"
            className={
              emailFocus && email && !emailValid
                ? "__instructions"
                : "__offscreen"
            }
          >
            Email must include an ‘@’ symbol. <br />
            Email must have a name before the ‘@’. <br />
            Email must include a valid domain (e.g., gmail, outlook). <br />
            Email must include a dot after the domain (e.g., .com, .org). <br />
            Email cannot contain spaces. <br />
            Email must be at least 3 characters long. <br />
            Email cannot exceed 80 characters. <br />
            Email cannot start or end with a dot or hyphen. <br />
          </p>

          {/* Password input field */}
          <label htmlFor="password" className="__input-form-label">
            Password
          </label>
          <input
            id="password"
            className="__input-form-field"
            name="password"
            type="password"
            required
            minLength={8}
            placeholder="At least 8 characters"
            aria-invalid={passwdValid ? "false" : "true"}
            aria-describedby="passwdMsg"
            // Handling onchange
            onChange={(e) => setPasswd(e.target.value)}
            // Handling element focus
            onFocus={() => setPasswdFocus(true)}
            onBlur={() => setPasswdFocus(false)}
          />
          {/* Error message for password input field */}
          <p
            id="passwdMsg"
            className={
              passwdFocus && passwd && !passwdValid
                ? "__instructions"
                : "__offscreen"
            }
          >
            Password must include one symbol (@ ! # $ % &). <br />
            Password must include one uppercase letter. <br />
            Password must include one lowercase letter. <br />
            Password must include one number. <br />
            Password must be at least 8 characters long. <br />
            Password cannot exceed 80 characters. <br />
          </p>

          {/* Password match input field */}
          <label htmlFor="matchPasswd" className="__input-form-label">
            Password Match
          </label>
          <input
            id="matchPasswd"
            className="__input-form-field"
            name="matchPasswd"
            type="password"
            required
            minLength={8}
            aria-invalid={matchPasswdValid ? "false" : "true"}
            aria-describedby="matchPasswdMsg"
            // Handling onchange
            onChange={(e) => setMatchPasswd(e.target.value)}
            // Handling element focus
            onFocus={() => setMatchPasswdFocus(true)}
            onBlur={() => setMatchPasswdFocus(false)}
          />
          {/* Error message for password match input field */}
          <p
            id="matchPasswdMsg"
            className={
              matchPasswdFocus && !matchPasswdValid
                ? "__instructions"
                : "__offscreen"
            }
          >
            The passwords must match. <br />
          </p>

          {/* Submit button */}
          <button
            className="__submit-btn"
            type="button"
            disabled={
              !nameValid || !emailValid || !passwdValid || !matchPasswdValid
                ? true
                : false
            }
            onClick={(e) => {
              addUser(e);
            }}
          >
            Create account
          </button>
        </form>
      )}
    </>
  );
};

// Export CreateAccount to App.tsx
export default CreateAccount;
