import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
  border: 1px solid black;
  padding: 10px 15px;
  border-radius: 3px;
`;

export const SdkButton = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(() => count + 1);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick}>karan {count}</Button>
    </React.Fragment>
  );
};
