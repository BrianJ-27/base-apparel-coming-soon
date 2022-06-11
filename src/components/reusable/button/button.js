import React from "react";
import styled from "styled-components";
const Button = styled.button`
  background-image: linear-gradient(
    135deg,
    var(--clr-bg-gradient_soft-gum),
    var(--clr-bg-gradient_bubble-gum)
  );
  border-radius: 25px;
  border: 1px solid var(--clr-bg-gradient_soft-gum);
  padding: 0.5rem 1.5rem;
  letter-spacing: 1.1px;
  font-weight: 500;
  cursor: pointer;
  position: absolute;
  right: 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: darkblue;
    color: white;
  }
  &:focus,
  &:focus-visible {
    outline: 3px dotted black;
  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CustomButton = ({ handleButton }) => {
  return (
    <Button onClick={() => handleButton()}>
      {" "}
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
        <path
          fill="none"
          stroke="#FFF"
          stroke-width="2"
          d="M1 1l8.836 8.836L1 18.671"
        />
      </svg>{" "}
    </Button>
  );
};

export default CustomButton;
