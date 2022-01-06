import styled from "styled-components";

export const OptionItemWrapper = styled.div`
  margin-top: 20px;
  width: 220px;
  height: 200px;
  -webkit-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-right: 20px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-conent: center;
`;

export const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: #d5d5d5;
  margin-right: 20px;
  &:hover {
    background-color: #ccc;
  }
  &:checked {
    background-color: #2196f3;
  }
`;

export const OptionImage = styled.img`
  object-fit: cover;
  width: 220px;
  height: 150px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  outline: none;
`;
