import React, { useEffect, useState } from "react";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { callOmdbApiByTitle } from "../../apis/omdbapi";
import { MovieTitleRecommendation } from "../../components/Recommendation/MovieTitle/MovieTitleRecommendation";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const title = location.state.title;

  useEffect(() => {
    console.log(title);
    callOmdbApiByTitle(title)
      .then((resp) => {
        if (resp?.data !== undefined) {
          setMovie(resp.data);
        }
      })
      .catch((e) => console.log(e));
  }, [title]);

  return (
    <div style={{ marginTop: "10px", height: "100%" }}>
      <Flex
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        mr="24"
        mt="12"
        padding={8}
      >
        <Image src={movie.Poster} alt="img" />

        <Box>
          <Text fontSize="6xl">{movie.Title}</Text>

          <SimpleGrid style={{ marginTop: "40px" }} columns={2} spacing={10}>
            <Box>
              <div style={{ float: "left" }}>
                <b>Released: </b>
                {movie.Released}
              </div>
            </Box>
            <Box>
              <div style={{ float: "left" }}>
                <b>Genre: </b>
                {movie.Genre}
              </div>
            </Box>
            <Box>
              <div style={{ float: "left" }}>
                <b>Actors: </b>
                {movie.Actors}
              </div>
            </Box>
            <Box>
              <div style={{ float: "left" }}>
                <b>Director: </b>
                {movie.Director}
              </div>
            </Box>
            <Box>
              <div style={{ float: "left" }}>
                <b>Writer: </b>
                {movie.Writer}
              </div>
            </Box>
          </SimpleGrid>
        </Box>
        <Box>
            <Text fontSize="6xl">Plot</Text>
            <Text fontSize="2xl">{movie.Plot}</Text>
        </Box>
      </Flex>
      <MovieTitleRecommendation movieName={title} />
    </div>
  );
};

export default MovieDetails;
