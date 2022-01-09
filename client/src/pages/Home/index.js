import React from "react";
import { Box } from "@chakra-ui/react";
import { useUser } from "../../context/UserContext";
import Questionnaire from "../Questionnaire";
import Warning from "../../components/Warning";

const Home = () => {

  const user = useUser();

  return <Box>{user ? <Questionnaire /> : <Warning />}</Box>;
};

export default Home;
