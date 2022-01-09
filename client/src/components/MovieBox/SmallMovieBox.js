import { Box, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SmallMovieBox = ({ item }) => {
  const navigate = useNavigate();

  const openDetailsPage = () => {
    navigate("/details/" + item?.title, { state: { title: item?.title } });
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      onClick={() => openDetailsPage()}
    >
      <Image src={item?.image} alt="img" boxSize="80%" borderRadius={8} />
      <Box>
        <Box fontWeight="semibold">{item?.title}</Box>
      </Box>
    </Flex>
  );
};

export default SmallMovieBox;
