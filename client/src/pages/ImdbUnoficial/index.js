import { Button, CardGroup, Input, Label } from "reactstrap";
import { useState } from "react";
import { callImdbUnofficial } from "../../apis/imdbUnofficial";
import { ReactstrapCard } from "../../components/ReactstrapCards/Card";
import axios from "axios";
import { callImdbUnofficialSpecificFilm } from "../../apis/ImdbUnofficialSpecificFilm";
import { getMovies, getMoviesFromImdb } from "../../utils/ExtractMovies";
import { callOmdbApiById, callOmdbApiBySearch } from "../../apis/omdbapi";

const ImdbUnoficial = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = () => {
    if (!!search) {
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
    <div>
      <Label>Search movies</Label>
      <Input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button onClick={() => searchMovies()}>Search</Button>
      <CardGroup>
        {movies?.map((movie, index) => (
          <ReactstrapCard
            id={index}
            title={movie?.title}
            picture={movie?.image}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default ImdbUnoficial;