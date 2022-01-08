import {Box, Flex, Image} from "@chakra-ui/react";

const MovieBox = ({ item }) => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            mr="24"
            mt="12"
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
