import React from "react";
import { Heading, Flex, Box, Button } from "@chakra-ui/react";
import { LoginImage } from "../../assets/img/login";
import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading mt="8" mb="8" colorscheme="grey">
        Please login to continue
      </Heading>
      <Box>
        <LoginImage />
      </Box>
      <Button mt="4" size="lg">
        <Link to="/login">Login</Link>
      </Button>
    </Flex>
  );
};

export default Warning;
