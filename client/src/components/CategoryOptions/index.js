import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

const CategoryOptions = ({ optionsArray, name }) => {
  const [checkedOptions, setCheckedOptions] = useState([]);
  console.log(checkedOptions);

  const handleChange = (e, name) => {
    if (e.target.checked && checkedOptions.length < 3) {
      setCheckedOptions([...checkedOptions, name]);
    } else {
      setCheckedOptions(checkedOptions.filter((checked) => checked !== name));
    }
  };
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize="30px">Choose 3 favorites of these {name}</Text>
      {optionsArray.map((option, index) => (
        <label>
          <input
            type="checkbox"
            key={index}
            disabled={
              checkedOptions.length === 3 &&
              !checkedOptions.find((checked) => checked === option.name)
            }
            onChange={(e) => handleChange(e, option.name)}
          />
          {option.name}
        </label>
      ))}
    </Flex>
  );
};

export default CategoryOptions;
