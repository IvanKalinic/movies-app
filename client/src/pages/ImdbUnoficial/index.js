import { Button, CardGroup, Input } from "reactstrap";
import { useState, useEffect } from "react";
import { ReactstrapCard } from "../../components/ReactstrapCards/Card";
import axios from "axios";
import { getMoviesFromImdb } from "../../utils/ExtractMovies";
import { callOmdbApiById, callOmdbApiBySearch } from "../../apis/omdbapi";
import { Box, CircularProgress, Flex, Text } from "@chakra-ui/react";
import imageStorage from "../../storage/ImageStorage";
import MovieList from "../../components/MovieList/MovieList";

const ImdbUnoficial = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchMovies = () => {
    if (!!search) {
      setLoading(true);
      callOmdbApiBySearch(search)
        .then((response) => {
          if (response.data !== undefined) {
            console.log(response);
            const ids = response.data.Search?.map((s) => s.imdbID) || [];
            axios.all(ids.map((id) => callOmdbApiById(id))).then(
              axios.spread(function (...res) {
                console.log(res);
                const movies = getMoviesFromImdb(res);
                setMovies(movies);
                setLoading(false);
                axios
                  .post("http://localhost:5000/imdbUnofficial/save", movies)
                  .then((response) => console.log(response.data))
                  .catch((error) => console.log(error));
              })
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${imageStorage.searchBackground})`,
      }}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb="2"
      >
        <Text fontSize="6xl" marginTop={80}>
          Search movies
        </Text>
        <Input
          style={{ maxWidth: "500px" }}
          value={search}
          size="lg"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Enter the movie title..."
          autoFocus={true}
        />
        <Button
          style={{ width: "100px", marginTop: "10px", marginBottom: "40px" }}
          onClick={() => searchMovies()}
          color="primary"
        >
          Search
        </Button>
        {loading && <CircularProgress isIndeterminate color="#945887" />}
        <MovieList movies={movies} />
      </Flex>
    </div>
  );
};

export default ImdbUnoficial;
