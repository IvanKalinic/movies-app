import React, { useState } from "react";
import Facebook from "../../assets/img/facebook.png";
import Github from "../../assets/img/github.png";
import "./index.scss";

const Login = () => {
  const [accordion, setAccordion] = useState(false);
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  // const facebook = () => {
  //   window.open("http://localhost:5000/auth/facebook", "_self");
  // };

  return (
    <div className="login">
      <h1 className="login-title">Login with Github</h1>
      <div className="wrapper">
        <div className="left">
          {/* <div className="login-button facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div> */}
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
          {/* <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" /> */}
          <button className="submit-btn">Login</button>
          <button className="submit-btn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
