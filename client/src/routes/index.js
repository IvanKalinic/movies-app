import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { useUser } from "../context/UserContext";

const AppRoutes = () => {
  const { user, setUser } = useUser();
  return (
    <Router>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          {/* <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
