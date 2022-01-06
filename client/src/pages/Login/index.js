import React, { useState } from "react";
import "./index.scss";
import { SocialLoginComponent } from "../../components/Login/SocialLoginComponent";
import { EmailLoginComponent } from "../../components/Login/EmailLoginComponent";

const Login = () => {
  const [loginAccordion, setLoginAccordion] = useState(false);
  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <SocialLoginComponent />
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <EmailLoginComponent
            loginAccordion={loginAccordion}
            setLoginAccordion={setLoginAccordion}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
