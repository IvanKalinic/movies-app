import React, { useState, useEffect } from "react";
import { fetchMovie } from "../../../apis/imdbUnofficial";
import { fetchRecommendationByName } from "../../../apis/recommendation";
import MovieList from "../../MovieList/MovieList";

export const MovieTitleRecommendation = ({ movieName }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    fetchRecommendationByName(movieName).then(async (recommendedMovieNames) => {
      let recMovies = [];
      for (let i = 0; i < recommendedMovieNames.length; i++) {
        const res = await fetchMovie(recommendedMovieNames[i]);
        recMovies.push(res.data);
      }
      setRecommendedMovies(recMovies);
    });
  }, []);

  return <MovieList movies={recommendedMovies} />;
};
