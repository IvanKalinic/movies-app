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
import ImdbUnoficial from "../pages/ImdbUnoficial";
import CryptoMarket from "../pages/CryptoMarket";

const AppRoutes = () => {
  const { user } = useUser();
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
          <Route
            path="/imdbUnoficial"
            element={<ImdbUnoficial/>}
          />
          <Route
            path="/crypto"
            element={user ? <CryptoMarket/> : <Login />}/>
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
