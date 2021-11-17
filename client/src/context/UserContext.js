import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  const userContext = useContext(UserContext);
  if (userContext === undefined) {
    throw new Error("useAuth must be inside of its provider");
  }
  return userContext;
};
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
