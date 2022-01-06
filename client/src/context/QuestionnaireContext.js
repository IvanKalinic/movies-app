import React, { createContext, useContext, useState } from "react";

const QuestionnaireContext = createContext();

export const useQuestionnaire = () => {
  const questionnaireContext = useContext(QuestionnaireContext);
  if (questionnaireContext === undefined) {
    throw new Error("useAuth must be inside of its provider");
  }
  return questionnaireContext;
};

export const QuestionnaireProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    movies: [],
    directors: [],
    actors: [],
    genres: [],
  });

  console.log(selectedOptions);
  const value = { selectedOptions, setSelectedOptions };
  return (
    <QuestionnaireContext.Provider value={value}>
      {children}
    </QuestionnaireContext.Provider>
  );
};
