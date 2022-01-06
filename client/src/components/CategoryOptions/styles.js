import styled from "styled-components";

export const ThanksWrapper = styled.div`
  margin-top: 80px;
  height: 200px;
  width: 600px;
  box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowWrapper = styled.img`
  width: 100px;
  height: 100px;
  margin-left: -40px;
  margin-right: 55px;
  cursor: pointer;

  &:hover {
    transform: translateX(4px);
  }
`;
