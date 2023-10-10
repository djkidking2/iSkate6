import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} iSkate App | All rights reserved
      </FooterText>
      <FooterText>
        Created by <FooterLink href="#">Diversity Designs</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
