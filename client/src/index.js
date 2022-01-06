import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuestionnaireProvider } from "./context/QuestionnaireContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <UserProvider>
    <QuestionnaireProvider>
      <App />
    </QuestionnaireProvider>
  </UserProvider>,
  document.getElementById("root")
);
