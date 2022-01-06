import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import CategoryOptions from "../../components/CategoryOptions";
import { movies, directors, actors, genres } from "../../consts";
const Questionnaire = () => {
  const categories = [movies, directors, actors, genres];

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading>
        To make it easier for you we would like to ask you some questions{" "}
      </Heading>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <CategoryOptions startingIndex={0} categories={categories} />
      </Flex>
    </Flex>
  );
};

export default Questionnaire;
