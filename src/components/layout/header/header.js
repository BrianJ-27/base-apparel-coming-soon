import React from "react";
import styled from "styled-components";
import Form from "../form/form";

const Header = styled.header`
  padding: 0rem 2rem;
`;

const CustomHeader = () => {
  return (
    <Header>
      <h1 className="title__primary">
        We're <span className="title__primary--dark">coming soon</span>
      </h1>
      <p className="content">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <div>
        <Form />
      </div>
    </Header>
  );
};

export default CustomHeader;
