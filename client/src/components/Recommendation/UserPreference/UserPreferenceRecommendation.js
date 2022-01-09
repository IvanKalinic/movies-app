import React, { useState, useEffect } from "react";
import { fetchRecommendationByUserPreference } from "../../../apis/recommendation";
import MovieList from "../../MovieList/MovieList";
import { Text } from "@chakra-ui/react";

const UserPreferenceRecommendation = ({ userId }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    fetchRecommendationByUserPreference(userId).then((recommendedMovies) => {
      setRecommendedMovies(recommendedMovies);
    });
  }, []);

  return (
    <div>
      {recommendedMovies.length > 0 && (
        <>
         <Text paddingStart={20} align={"left"} fontSize="4xl">
          Maybe you will love some of these
        </Text>
          <MovieList movies={recommendedMovies} />
        </>
      )}
    </div>
  );
};

export default UserPreferenceRecommendation;
