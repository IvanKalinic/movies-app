import { CircularProgress, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { fetchMovie } from "../../../apis/imdbUnofficial";
import { fetchRecommendationByName } from "../../../apis/recommendation";
import MovieList from "../../MovieList/MovieList";

export const MovieTitleRecommendation = ({ movieName }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchRecommendationByName(movieName).then(async (recommendedMovieNames) => {
      let recMovies = [];
      for (let i = 0; i < recommendedMovieNames.length; i++) {
        const res = await fetchMovie(recommendedMovieNames[i]);
        recMovies.push(res.data);
      }
      setRecommendedMovies(recMovies.filter((value) => value !== null));
      setLoading(false);
    });
  }, [movieName]);

  return (
    <>
      {loading && <CircularProgress isIndeterminate color="black" />}
      {recommendedMovies.length > 0 && (
        <Text paddingStart={20} align={"left"} fontSize="4xl">
          Here are some movies similar to {movieName}
        </Text>
      )}
      <MovieList movies={recommendedMovies} />
    </>
  );
};
