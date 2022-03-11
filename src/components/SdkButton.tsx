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
  return (
    <React.Fragment>
      <Button>karan</Button>
    </React.Fragment>
  );
};
