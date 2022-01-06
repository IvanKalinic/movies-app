import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  OptionItemWrapper,
  OptionImage,
  CheckboxLabel,
  CheckboxInput,
} from "../../pages/Questionnaire/questionnairestyles";

const OptionItem = ({ image, name, handleChange, checkedOptions }) => {
  return (
    <OptionItemWrapper>
      <CheckboxLabel>
        <OptionImage src={image} />
        <Flex>
          <CheckboxInput
            type="checkbox"
            disabled={
              checkedOptions.length === 3 &&
              !checkedOptions.find((checked) => checked === name)
            }
            onChange={(e) => handleChange(e, name)}
            checked={
              checkedOptions.find((checked) => checked === name) || false
            }
          />
          <p
            style={{
              marginTop: "8px",
              marginLeft: "6px",
            }}
          >
            {name}
          </p>
        </Flex>
      </CheckboxLabel>
    </OptionItemWrapper>
  );
};

export default OptionItem;
