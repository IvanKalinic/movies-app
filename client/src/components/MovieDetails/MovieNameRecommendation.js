import React, { useState, useEffect } from "react";
import { fetchRecommendationByName } from "../../apis/recommendation";

export const MovieNameRecommendation = ({ movieName }) => {
  const [recommendedMovies, setRecommendedMovies] = useState(null);

  useEffect(() => {
    fetchRecommendationByName(movieName).then((movies) => {
      setRecommendedMovies(movies);
    });
  }, []);

  return (
    <div>
      {recommendedMovies &&
        recommendedMovies.map((movie) => {
          return <p>{movie}</p>;
        })}
    </div>
  );
};
