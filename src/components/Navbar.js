import React, { useState } from 'react';
import { NavLink, } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../images/Logo.png';


const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 50px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
   
    position: ${({ isOpen }) => (isOpen ? 'absolute' : 'static')};
    top: 60px;
    background-color: #333;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavLinkItem = styled.li`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: color 0.3s;

  &.active {
    color: #ff5722;
  }

  &:hover {
    color: #ff5722;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  position: relative; /* Add this line to enable positioning */

  @media (max-width: 768px) {
    display: block;
  }

  /* Add a pseudo-element to create the background overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the color and opacity as needed */
    z-index: -1; /* Place the overlay behind the icon */
  }
`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src={logoImage} alt="iSkate Logo" />
        <Title>iSkate</Title>
      </LogoContainer>
      <HamburgerIcon onClick={toggleMenu}>&#9776;</HamburgerIcon>
      <NavLinks isOpen={isOpen}>
        <NavLinkItem onClick={closeMenu}>
          <StyledNavLink to="/" activeClassName="active">
            Home
          </StyledNavLink>
        </NavLinkItem>
        <NavLinkItem onClick={closeMenu}>
          <StyledNavLink to="/skateparks" activeClassName="active">
            Skate Parks
          </StyledNavLink>
        </NavLinkItem>
        <NavLinkItem onClick={closeMenu}>
          <StyledNavLink to="/tricks" activeClassName="active">
            Tricks and Tutorials
          </StyledNavLink>
        </NavLinkItem>
        <NavLinkItem onClick={closeMenu}>
          <StyledNavLink to="/community" activeClassName="active">
            Community
          </StyledNavLink>
        </NavLinkItem>
        <NavLinkItem onClick={closeMenu}>
          <StyledNavLink to="/shop" activeClassName="active">
            Shop
          </StyledNavLink>
        </NavLinkItem>
        <NavLinkItem onClick={closeMenu}>
          <StyledNavLink to="/profile" activeClassName="active">
            Profile
          </StyledNavLink>
        </NavLinkItem>
        <NavLinkItem onClick={closeMenu}>
          <StyledNavLink to="/about" activeClassName="active">
            About
          </StyledNavLink>
        </NavLinkItem>
        <NavLinkItem onClick={closeMenu}>
          <StyledNavLink to="/signup" activeClassName="active">
            Signup
          </StyledNavLink>
        </NavLinkItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;













