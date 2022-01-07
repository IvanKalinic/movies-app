import React, { useState } from "react";
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
import Questionnaire from "../pages/Questionnaire";
import PopularMovies from "../pages/PopularMovies";
import MovieDetails from "../pages/MovieDetails";

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
          <Route path="/imdbUnoficial" element={<ImdbUnoficial />} />
          <Route
            path="/questionnaire"
            element={user ? <Questionnaire /> : <Login />}
          />
          {/* user.booleanProp ? <Questionnaire /> : user ? <ImdbUnoficial/> : <Login /> */}
          <Route path="/crypto" element={user ? <CryptoMarket /> : <Login />} />
          <Route path="/details/:name" element={<MovieDetails />} />
          <Route path="/popular" element={<PopularMovies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
