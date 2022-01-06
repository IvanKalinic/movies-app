import React, { useState } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import CategoryOptions from "../../components/CategoryOptions";
import { movies, directors, actors, genres } from "../../consts";
import { useNavigate } from "react-router-dom";
import { PermissionWrapper } from "./questionnairestyles/index";

const Questionnaire = () => {
  const categories = [movies, directors, actors, genres];
  const [showQuestions, setShowQuestions] = useState(false);
  const navigate = useNavigate();

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      {!showQuestions && (
        <PermissionWrapper>
          <Text fontSize="3xl" mt="8" ml="4" mr="4">
            To gain a better experience we would like to ask you some questions
            <br />
            It will take just a few moments ...
          </Text>
          <Flex justifyContent="center" alignItems="center" mt="10">
            <Button
              colorScheme="blue"
              onClick={() => setShowQuestions(true)}
              mr="4"
            >
              Accept
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => navigate("/imdbUnoficial")}
            >
              Decline
            </Button>
          </Flex>
        </PermissionWrapper>
      )}

      {showQuestions && (
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CategoryOptions startingIndex={0} categories={categories} />
        </Flex>
      )}
    </Flex>
  );
};

export default Questionnaire;
