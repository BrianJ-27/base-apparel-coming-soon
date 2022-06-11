import React from "react";
import styled, { css } from "styled-components";

const FormGroup = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  --curved-radius: 25px;
  --fp-weight-main: 600;
  background-color: inherit;
  border-radius: var(--curved-radius);
  padding: 10px 10px 10px 5px;
  display: block;
  width: inherit;
  padding-left: 20px;
  border: 1px solid var(--clr-primary-color);
  &::placeholder {
    font-weight: var(--fp-weight-main);
    color: var(--clr-primary-color);
  }
  &:focus-visible {
    outline: 1px solid var(--clr-accent-text);
  }
`;

const StyledLabel = styled.label`
  padding: 8px;
  ${(props) =>
    props.sr_only &&
    css`
      /*Hide label but make it accessible for screen readers*/
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
      @media only screen and (min-width: 768px) {
        padding: 2rem;
      }
    `};
`;

const FormField = ({ label, id, ...otherProps }) => {
  return (
    <FormGroup>
      {label ? (
        <StyledLabel sr_only htmlFor={id}>
          {" "}
          {label}{" "}
        </StyledLabel>
      ) : null}
      <StyledInput required {...otherProps} />
    </FormGroup>
  );
};

export default FormField;
