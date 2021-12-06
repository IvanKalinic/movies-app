import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "./index.scss";

const baseImageUrl = "https://image.tmdb.org/t/p/w400";
const TrendingMovies = ({ trendingMovies }) => {
  return (
    <div>
      <h2>Trending movies/series:</h2>
      <Flex flexWrap="wrap" justifyContent="center">
        {trendingMovies?.map((movie) => (
          <Flex
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            mr="24"
            mt="12"
          >
            <li>{movie.title || movie.original_name}</li>
            <img src={baseImageUrl + `${movie.backdrop_path}`} alt="img" />
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default TrendingMovies;
