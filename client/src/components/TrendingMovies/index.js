import React from "react";
import {Checkbox, CheckboxGroup, Flex, Stack} from "@chakra-ui/react";
import { Radio, RadioGroup } from '@chakra-ui/react'

const TrendingMovies = ({ title, list }) => {

  const [rating, setRating] = React.useState('true');

  const sort = (list) => {
    if (rating === 'true') {
        return list.sort((l1, l2) => Number.parseFloat(l2.imdbRating) - Number.parseFloat(l1.imdbRating));
    } else {
        return list.sort((l1, l2) => Date.parse(l2.Released).valueOf() - Date.parse(l1.Released).valueOf());
    }
  }

  return (
    <div>
      <h2>{title}</h2>
        <RadioGroup onChange={setRating} value={rating}>
            <Stack direction='row'>
                <Radio colorScheme='red' value='true'>Imdb rating</Radio>
                <Radio colorScheme='red' value='false'>Publish date</Radio>
            </Stack>
        </RadioGroup>
        {/*<CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox value='naruto'>Naruto</Checkbox>
                <Checkbox value='sasuke'>Sasuke</Checkbox>
                <Checkbox value='kakashi'>kakashi</Checkbox>
            </Stack>
        </CheckboxGroup>*/}
      <Flex flexWrap="wrap" justifyContent="center">
        {sort(list)?.map((item) => (
          <Flex
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            mr="24"
            mt="12"
          >
            <li style={{ listStyle: "none" }}>
              {item.Title + " | rating " + item.imdbRating }
            </li>
            <img src={item.Poster} alt="img" />
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default TrendingMovies;
