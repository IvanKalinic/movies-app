import React from "react";
import {
  OptionItemWrapper,
  OptionImage,
  CheckboxLabel,
  CheckboxInput,
} from "../../pages/Questionnaire/questionnairestyles";

const OptionItem = ({ image, name, handleChange, checkedOptions }) => {
  return (
    <OptionItemWrapper>
      <OptionImage src={image} />
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          disabled={
            checkedOptions.length === 3 &&
            !checkedOptions.find((checked) => checked === name)
          }
          onChange={(e) => handleChange(e, name)}
          checked={checkedOptions.find((checked) => checked === name) || false}
        />
        <p>{name}</p>
      </CheckboxLabel>
    </OptionItemWrapper>
  );
};

export default OptionItem;
