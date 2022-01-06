import React from "react";
import styled from "styled-components";

const DisplayMessage = () => {
  const MessageWrapper = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    border-radius: 5px;
    color: red;
    margin-bottom: 10px;
  `;
  return <MessageWrapper>Please choose 3 options</MessageWrapper>;
};

export default DisplayMessage;
