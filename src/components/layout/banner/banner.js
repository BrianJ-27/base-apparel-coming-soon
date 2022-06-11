import React from "react";
import logo from "../../../assets/images/logo.svg";
import mobileHeroImg from "../../../assets/images/hero-mobile.jpg";
import desktopHeroImg from "../../../assets/images/hero-mobile.jpg";
import styled from "styled-components";

const LogoContainer = styled.div`
  padding: 1.5rem 0rem 1rem 1.5rem;
`;

const BannerImage = styled.div`
  background-image: url(${mobileHeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  max-height: 250px;
  max-width: 100%;
  @media only screen and (min-width: 768px) {
    background-image: url(${desktopHeroImg});
  }
`;

const StyledImg = styled.img`
  max-width: 100%;
  width: 100px;
`;

const Banner = () => {
  return (
    <React.Fragment>
      <LogoContainer>
        <StyledImg src={logo} alt="Base Apparel Logo" />
      </LogoContainer>
      <BannerImage></BannerImage>
    </React.Fragment>
  );
};

export default Banner;
