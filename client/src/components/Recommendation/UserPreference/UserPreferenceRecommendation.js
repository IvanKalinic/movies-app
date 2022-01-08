import React, { useState, useEffect } from "react";
import { fetchRecommendationByUserPreference } from "../../../apis/recommendation";
import MovieList from "../../MovieList/MovieList";

const UserPreferenceRecommendation = ({ userId }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    fetchRecommendationByUserPreference(userId).then((recommendedMovies) => {
      setRecommendedMovies(recommendedMovies);
    });
  }, []);

  return (
    <div>
      {recommendedMovies.length > 0 && (
        <>
          <h1>Based on your prefereneces we recommend you these movies!</h1>
          <MovieList movies={recommendedMovies} />
        </>
      )}
    </div>
  );
};

export default UserPreferenceRecommendation;
