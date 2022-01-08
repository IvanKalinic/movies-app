import React, { useState, useEffect } from "react";
import { fetchMovie } from "../../apis/imdbUnofficial";
import { fetchRecommendationByName } from "../../apis/recommendation";
import { ReactstrapCard } from "../../components/ReactstrapCards/Card";
import { CardGroup } from "reactstrap";

export const MovieNameRecommendation = ({ movieName }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    fetchRecommendationByName(movieName).then(async (recommendedMovieNames) => {
      let recMovies = [];
      for (let i = 0; i < recommendedMovieNames.length; i++) {
        const res = await fetchMovie(recommendedMovieNames[i]);
        recMovies.push(res.data);
      }
      console.log(recMovies);
      setRecommendedMovies(recMovies);
    });
  }, []);

  return (
    <div>
      {recommendedMovies &&
        recommendedMovies.map((movie, index) => {
          return (
            <CardGroup>
              <ReactstrapCard
                id={index}
                title={movie?.title}
                picture={movie?.image}
              />
            </CardGroup>
          );
        })}
    </div>
  );
};
