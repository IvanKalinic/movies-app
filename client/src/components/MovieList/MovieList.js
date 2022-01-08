import React from "react";
import { CardGroup } from "reactstrap";
import { ReactstrapCard } from "../ReactstrapCards/Card";

const MovieList = ({ movies }) => {
  return (
    <>
      <CardGroup>
        {movies &&
          movies.map((movie, index) => {
            return (
              <ReactstrapCard
                key={index}
                id={index}
                title={movie?.title}
                picture={movie?.image}
              />
            );
          })}
      </CardGroup>
    </>
  );
};

export default MovieList;
