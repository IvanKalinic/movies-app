import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Github from "../../assets/img/github.png";
import Facebook from "../../assets/img/facebook.png";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import "./index.scss";
import { Flex, Input, Text } from "@chakra-ui/react";

const Login = () => {
  const [loginAccordion, setLoginAccordion] = useState(false);
  const [registerAccordion, setRegisterAccordion] = useState(false);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const passwordAgain = useRef(null);
  const navigate = useNavigate();
  const { setUser } = useUser();

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
    if (loginAccordion) {
      try {
        const newUser = await axios.post("http://localhost:5000/manual/login", {
          user,
        });
        // handleRegister();
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
  /*const responseFacebook = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:5000/auth/facebook",
      data: {accessToken: response.accessToken, userId: response.userId}
    }).then(response => {
      console.log("Facebook login success, client side", response);
    })
  }*/
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <h1 className="login-title">Login with your social network or manual</h1>
      <div className="wrapper">
        <div className="left">
          <div className="login-button github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
          <div className="login-button facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
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
              <Input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                ref={email}
                mt="-4"
                mb="3"
                required
              />
              <Input
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                ref={username}
                mb="3"
                required
              />
              <Input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                ref={password}
                mb="3"
                required
              />
              {registerAccordion && (
                <Input
                  type="Repeated password"
                  placeholder="Repeated password"
                  id="passwordAgain"
                  name="passwordAgain"
                  ref={passwordAgain}
                  mb="4"
                  required
                />
              )}
              <button
                type="submit"
                className="submit-btn submit"
                style={{ marginTop: "10px" }}
              >
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
