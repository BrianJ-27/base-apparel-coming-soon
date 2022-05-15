import React from "react";
import styled from "styled-components";

const Footer = styled.footer``;

const CustomFooter = () => {
  return (
    <Footer class="attribution">
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
        Your Name Here
      </a>
      .
    </Footer>
  );
};

export default CustomFooter;