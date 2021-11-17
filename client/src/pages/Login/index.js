import React from "react";
import Github from "../../assets/img/github.png";
import "./index.scss";

const Login = () => {
  const github = () => {};

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
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
