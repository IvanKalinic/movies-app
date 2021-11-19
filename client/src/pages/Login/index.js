import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Github from "../../assets/img/github.png";
import axios from "axios";
import "./index.scss";

const Login = () => {
  const [loginAccordion, setLoginAccordion] = useState(false);
  const [registerAccordion, setRegisterAccordion] = useState(false);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const passwordAgain = useRef(null);
  const navigate = useNavigate();
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

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
    console.log(user);
    if (loginAccordion) {
      try {
        await axios.post("http://localhost:5000/manual/login", {
          user,
        });
        // handleRegister();
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
    <div className="login">
      <h1 className="login-title">Login with Github</h1>
      <div className="wrapper">
        <div className="left">
          <div className="login-button github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
