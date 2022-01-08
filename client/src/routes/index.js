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
import PopularMovies from "../pages/PopularMovies";
import { MovieTitleRecommendation } from "../components/Recommendation/MovieTitle/MovieTitleRecommendation";

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
          <Route path="/crypto" element={user ? <CryptoMarket /> : <Login />} />
          //TODO(tkurtovic): Remove this when details page gets added
          <Route
            path="/details"
            element={<MovieTitleRecommendation movieName="Avatar" />}
          />
          <Route path="/popular" element={<PopularMovies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
