import React, { useState, useRef } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const EmailLoginComponent = ({ loginAccordion, setLoginAccordion }) => {
  const [registerAccordion, setRegisterAccordion] = useState(false);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const passwordAgain = useRef(null);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = () => {
    setLoginAccordion(true);
    setRegisterAccordion(false);
  };

  const handleRegister = () => {
    setRegisterAccordion(true);
    setLoginAccordion(false);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    let user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    if (loginAccordion) {
      try {
        const newUser = await axios.post("http://localhost:5000/manual/login", {
          user,
        });
        setUser(newUser);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
      return;
    }
    if (registerAccordion) {
      if (passwordAgain.current.value !== password.current.value) {
        passwordAgain.current.setCustomValidity("Passwords don't match!");
        return;
      }
      try {
        await axios.post("http://localhost:5000/manual/register", {
          user,
        });
        handleLogin();
      } catch (err) {
        console.log(err);
      }
    }
    return;
  };

  return (
    <>
      <h2>Login with email</h2>
      {!loginAccordion && (
        <button className="submit-btn" onClick={() => handleLogin()}>
          Login
        </button>
      )}
      {!registerAccordion && (
        <button
          className="submit-btn register"
          onClick={() => handleRegister()}
        >
          Register
        </button>
      )}
      {(loginAccordion || registerAccordion) && (
        <form className="inputs" onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            ref={email}
            required
          />
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            ref={username}
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            ref={password}
            required
          />
          {registerAccordion && (
            <input
              type="password"
              placeholder="Password"
              id="passwordAgain"
              name="passwordAgain"
              ref={passwordAgain}
              required
            />
          )}
          <button type="submit" className="submit-btn submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
};
