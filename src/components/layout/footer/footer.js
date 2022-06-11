import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  text-align: center;
  a {
    color: var(--clr-primary-color);
  }
`;

const CustomFooter = () => {
  return (
    <Footer className="attribution">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="#myname" rel="noopener">
        Brian Johnson
      </a>
      .
    </Footer>
  );
};

export default CustomFooter;
