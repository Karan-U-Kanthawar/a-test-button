import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
  border: 1px solid black;
  padding: 10px 15px;
  border-radius: 3px;
`;

interface Props {
  count: number;
  handleClick: () => void;
}

export const SdkButton: React.FC<Props> = ({ count, handleClick }) => {
  return (
    <React.Fragment>
      <Button onClick={handleClick}>karan {count}</Button>
    </React.Fragment>
  );
};
