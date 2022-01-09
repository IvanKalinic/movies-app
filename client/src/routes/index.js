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
import Questionnaire from "../pages/Questionnaire";
import { MovieNameRecommendation } from "../components/MovieDetails/MovieNameRecommendation";

const AppRoutes = () => {
  const { user } = useUser();

  console.log(user);
  return (
    <Router>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route
            path="/"
            element={
              !user?.data.prefBool ? (
                <Home />
              ) : user ? (
                <ImdbUnoficial />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/imdbUnoficial" element={<ImdbUnoficial />} />
          {/* <Route
            path="/questionnaire"
            element={
              user?.PrefProp ? (
                <Questionnaire />
              ) : user ? (
                <ImdbUnoficial />
              ) : (
                <Login />
              )
            }
          /> */}
          {/*  */}
          <Route path="/crypto" element={user ? <CryptoMarket /> : <Login />} />
          <Route
            path="/details"
            element={<MovieNameRecommendation movieName="Avatar" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
