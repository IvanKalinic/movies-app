import React from "react";
import SmallMovieBox from "../MovieBox/SmallMovieBox";
import { CircularProgress, Flex } from "@chakra-ui/react";

const MovieList = ({ movies }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" gap={35} paddingTop={20}>
      {movies &&
        movies.map((movie) => {
          return <SmallMovieBox item={movie} key={movie?.title} />;
        })}
    </Flex>
  );
};

export default MovieList;
