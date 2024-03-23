import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

// Styled components
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #798c35; // Same as header color
`;

const LogoContainer = styled.span`
  align-items: center; // Centers the logo vertically
  justify-content: center; // Centers the logo horizontally
  height: 100%; // Ensures the container tries to match the height of other elements in the footer
  display: inline-block;
  width: 50px; // The width you want for your icon container
  height: 50px; // The height you want for your icon container
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; // Ensures the image will scale correctly within the span
  max-height: 100%; // Ensure the logo does not exceed the container's height
  max-width: 100%; // Ensure the logo does not exceed the container's width
`;

const SocialMediaLinks = styled.div`
  display: flex;
  align-items: center;
`;

const Copyright = styled.div`
  text-align: center;
`;

const IconLink = styled.a`
  color: #ff9000;
  margin: 0 10px;
  font-size: 24px; // Arbitrary font size
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Social Media links to the left */}
      <SocialMediaLinks>
        <IconLink
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </IconLink>
        <IconLink
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </IconLink>
        <IconLink
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </IconLink>
      </SocialMediaLinks>
      {/* Logo Image in the center */}
      <LogoContainer>
        <LogoImage src="../assets/icons/lotus.png" alt="lotus logo" />
      </LogoContainer>

      {/* Copyright text on the right */}
      <Copyright>&copy; 2024 - Lotus Spa</Copyright>
    </FooterContainer>
  );
};

export default Footer;
