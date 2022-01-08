import React, { useState, useEffect } from "react";
import { fetchRecommendationByUserPreference } from "../../../apis/recommendation";
import { useUser } from "../../../context/UserContext";
import MovieList from "../../MovieList/MovieList";

const UserPreferenceRecommendation = () => {
  const user = useUser();
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    fetchRecommendationByUserPreference(user.user._id).then(
      (recommendedMovies) => {
        setRecommendedMovies(recommendedMovies);
      }
    );
  }, []);

  return <MovieList movies={recommendedMovies} />;
};

export default UserPreferenceRecommendation;
