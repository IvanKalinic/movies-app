import React, { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DisplayMessage from "../DisplayMessage";
import OptionItem from "../OptionItem";
import { useQuestionnaire } from "../../context/QuestionnaireContext";
import { ArrowWrapper, ThanksWrapper } from "./styles";
import ArrowRight from "../../assets/icons/icons8-right-arrow-90.png";
import { Circle } from "../../pages/Questionnaire/questionnairestyles";
import axios from "axios";
import { useUser } from "../../context/UserContext";

const CategoryOptions = ({ startingIndex, categories }) => {
  const [optionsArray, setOptionsArray] = useState(categories[startingIndex]);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(startingIndex);
  const [displayMessage, setDisplayMessage] = useState(false);
  const { selectedOptions, setSelectedOptions } = useQuestionnaire();
  const [nameOfCategory, setNameOfCategory] = useState("");
  const navigate = useNavigate();
  const { movies, directors, actors, genres } = selectedOptions;
  const { user } = useUser()

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
     axios.post("http://localhost:5000/preferences/save", {
       movies,
       directors,
       actors,
       genres,
       user
     });
    setTimeout(() => {
      navigate("/popular");
    }, 2000);
  }

  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        {currentIndex < 4 ? (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="3xl" mt="6" mb="6">
              Choose three favorite {nameOfCategory}
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
          <ArrowWrapper src={ArrowRight} alt="arrow" onClick={handleNext} />
        )}
      </Flex>
      {currentIndex < 4 && (
        <Flex alignItems="center" mt="10" ml="-16">
          <Circle active={currentIndex + 1 === 1}>1</Circle>
          <Circle active={currentIndex + 1 === 2}>2</Circle>
          <Circle active={currentIndex + 1 === 3}>3</Circle>
          <Circle active={currentIndex + 1 === 4}>4</Circle>
        </Flex>
      )}
    </>
  );
};

export default CategoryOptions;
