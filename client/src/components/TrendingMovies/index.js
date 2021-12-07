import React from "react";
import { Flex } from "@chakra-ui/react";

const baseMovieImageUrl = "https://image.tmdb.org/t/p/w400";
const TrendingMovies = ({ title, list }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Flex flexWrap="wrap" justifyContent="center">
        {list?.map((item) => (
          <Flex
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            mr="24"
            mt="12"
          >
            <li style={{ listStyle: "none" }}>
              {item.title || item.original_name}
            </li>
            <img src={baseMovieImageUrl + `${item.backdrop_path}`} alt="img" />
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default TrendingMovies;
