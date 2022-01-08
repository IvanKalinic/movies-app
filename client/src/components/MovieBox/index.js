import {Box, Flex, Image} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

const MovieBox = ({ item }) => {

    const navigate = useNavigate();

    const openDetailsPage = () => {
        navigate("/movieDetails", {state: {title: item.Title}});
    }

    return (
        <Flex
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            mr="24"
            mt="12"
            onClick={() => openDetailsPage()}
        >
            <Image src={item.Poster} alt="img"/>

            <Box p='6'>
                <Box mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated>
                    {item.Title}
                </Box>

                <Box>
                    {"Imdb rating: " + item.imdbRating}
                </Box>
                <Box>
                    {"Publish date: " + item.Released}
                </Box>
            </Box>
        </Flex>
    );
};

export default MovieBox;
