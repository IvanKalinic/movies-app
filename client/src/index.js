import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuestionnaireProvider } from "./context/QuestionnaireContext";
import { UserProvider } from "./context/UserContext";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <UserProvider>
      <QuestionnaireProvider>
        <App />
      </QuestionnaireProvider>
    </UserProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
