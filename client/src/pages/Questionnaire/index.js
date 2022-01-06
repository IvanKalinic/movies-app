import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import CategoryOptions from "../../components/CategoryOptions";
import { movies, directors, actors, genres } from "../../consts";
const Questionnaire = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading>
        To make it easier for you we would like to ask you some questions{" "}
      </Heading>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Box>
          <CategoryOptions optionsArray={movies} name="movies" />
          <CategoryOptions optionsArray={directors} name="directors" />
          <CategoryOptions optionsArray={actors} name="actors" />
          <CategoryOptions optionsArray={genres} name="genres" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Questionnaire;
