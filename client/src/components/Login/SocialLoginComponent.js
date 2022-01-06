import React from "react";
import imageStorage from "../../storage/ImageStorage";

export const SocialLoginComponent = () => {

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <>
      <h2>Login with</h2>
      <div className="login-button github" onClick={github}>
        <img src={imageStorage.github} alt="" className="icon" />
        Github
      </div>
      <div className="login-button facebook" onClick={facebook}>
        <img src={imageStorage.facebook} alt="" className="icon" />
        Facebook
      </div>
      <div className="login-button google" onClick={google}>
        <img src={imageStorage.google} alt="" className="icon" />
        Google
      </div>
    </>
  );
};
