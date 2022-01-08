import React from "react";
import {Box, Flex, SimpleGrid} from "@chakra-ui/react";
import MovieBox from '../MovieBox/index';
import {Button, ButtonGroup, FormGroup, Input, Label} from "reactstrap";

const TrendingMovies = ({ title, list }) => {

  const [rating, setRating] = React.useState(true);
  const genres = [undefined, "Action", "Adventure", "Animation", "Biography", "Comedy",
      "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History", "Horror",
      "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Short", "Sport",
      "Superhero", "Thriller", "War", "Western"];
  const [selectedGenre, setSelectedGenre] = React.useState(undefined);

  const sort = (list) => {
    if (rating) {
        return list.sort((l1, l2) => Number.parseFloat(l2.imdbRating) - Number.parseFloat(l1.imdbRating));
    } else {
        return list.sort((l1, l2) => Date.parse(l2.Released).valueOf() - Date.parse(l1.Released).valueOf());
    }
  }

  const filter = (list) => {
      if (!selectedGenre || selectedGenre === "-") {
          return list;
      }
      return list.filter(l => l?.Genre?.split(", ")?.indexOf(selectedGenre) > -1);
  }

  return (
    <div>
      <h2>{title}</h2>
        <SimpleGrid columns={2} spacing={10}>
            <Box height='80px'>
                <SimpleGrid columns={1} spacing={10}>
                    <Box>
                        <Label for="exampleSelect">
                            Sort by
                        </Label>
                    </Box>
                    <Box>
                        <ButtonGroup>
                            <Button
                                color="primary"
                                onClick={() => setRating(true)}
                            >
                                Imdb rating
                            </Button>
                            <Button
                                color="primary"
                                onClick={() => setRating(false)}
                            >
                                Publish date
                            </Button>
                        </ButtonGroup>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box height='80px'>
                <FormGroup>
                    <Label for="exampleSelect">
                        Choose genre
                    </Label>
                    <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                        onChange={(e) => setSelectedGenre(e.target.value)}
                    >
                        {genres.map((genre) => <option onSelect={() => setSelectedGenre(genre)}>
                            {genre || "-"}
                        </option>)}
                    </Input>
                </FormGroup>
            </Box>
        </SimpleGrid>
      <Flex flexWrap="wrap" justifyContent="center">
        {sort(filter(list))?.map((item) => <MovieBox item={item}/>)}
      </Flex>
    </div>
  );
};

export default TrendingMovies;
