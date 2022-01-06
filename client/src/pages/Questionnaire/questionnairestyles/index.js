import styled from "styled-components";

export const OptionItemWrapper = styled.div`
  margin-top: 20px;
  width: 220px;
  height: 205px;
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
  flex-direction: column;
`;

export const CheckboxInput = styled.input`
  position: relative;
  left: 12px;
  top: 11px;
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

export const PermissionWrapper = styled.div`
  margin-top: 60px;
  height: 300px;
  width: 600px;
  box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  border-radius: 20px;
`;

export const Circle = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${({ active }) => (active ? "#0c71ed" : "#a3a3a2")};
  color: #fff;
  font-weight: bold;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
