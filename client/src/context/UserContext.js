import React, { createContext, useContext, useState, useEffect } from "react";

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
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
