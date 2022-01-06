import React, { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import DisplayMessage from "../DisplayMessage";
import OptionItem from "../OptionItem";
import { useQuestionnaire } from "../../context/QuestionnaireContext";
import { ThanksWrapper } from "./styles";

const CategoryOptions = ({ startingIndex, categories }) => {
  const [optionsArray, setOptionsArray] = useState(categories[startingIndex]);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(startingIndex);
  const [displayMessage, setDisplayMessage] = useState(false);
  const { selectedOptions, setSelectedOptions } = useQuestionnaire();
  const [nameOfCategory, setNameOfCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentCategory = () => {
      switch (currentIndex) {
        case 0:
          return "movies";
        case 1:
          return "directors";
        case 2:
          return "actors";
        case 3:
          return "genres";
        default:
          return "";
      }
    };
    setNameOfCategory(currentCategory);
  }, [currentIndex]);

  const handleChange = (e, name) => {
    if (e.target.checked && checkedOptions.length < 3) {
      setCheckedOptions([...checkedOptions, name]);
    } else {
      setCheckedOptions(checkedOptions.filter((checked) => checked !== name));
    }
  };

  const handleNext = () => {
    if (checkedOptions.length < 3) {
      setDisplayMessage(true);
      return;
    }
    if (checkedOptions.length === 3 && currentIndex < 4) {
      setSelectedOptions({
        ...selectedOptions,
        [nameOfCategory]: checkedOptions,
      });
      setOptionsArray(categories[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
      setCheckedOptions([]);
      setDisplayMessage(false);
      return;
    }
  };

  if (currentIndex === 4) {
    setTimeout(() => {
      navigate("/imdbUnoficial");
    }, 2000);
  }

  return (
    <Flex justifyContent="center" alignItems="center">
      {currentIndex < 4 ? (
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="3xl" mt="6" mb="6">
            Choose 3 favorite {nameOfCategory}
          </Text>
          {displayMessage && <DisplayMessage />}
          <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
            {optionsArray.map((option, index) => (
              <OptionItem
                image={option.img}
                name={option.name}
                handleChange={handleChange}
                checkedOptions={checkedOptions}
                key={index}
              />
            ))}
          </Flex>
        </Flex>
      ) : (
        <ThanksWrapper>
          <Text fontSize="3xl" mt="6">
            Thank you for your time!
          </Text>
        </ThanksWrapper>
      )}
      {currentIndex < 4 && (
        <ArrowForwardIcon w={100} h={50} onClick={handleNext} style={{}} />
      )}
    </Flex>
  );
};

export default CategoryOptions;
