import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { StyleSheetManager } from 'styled-components';
import logoImage from '../images/Logo.png';

const shouldForwardProp = (prop) => prop !== 'isOpen';

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
  margin-left: auto; /* Align items to the right */

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
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

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: color 0.3s;

  &.active {
    color: #ff5722;
  }

  &.custom-active {
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
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <LogoContainer>
          <Logo src={logoImage} alt="iSkate Logo" />
          <Title>iSkate</Title>
        </LogoContainer>
        <HamburgerIcon onClick={toggleMenu}>&#9776;</HamburgerIcon>
        <NavLinks isOpen={isOpen}>
          <NavLinkItem onClick={closeMenu}>
            <StyledNavLink to="/" className={location.pathname === '/' ? 'custom-active' : ''}>
              Home
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem onClick={closeMenu}>
            <StyledNavLink to="/skateparks" className={location.pathname === '/skateparks' ? 'custom-active' : ''}>
              Skate Parks
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem onClick={closeMenu}>
            <StyledNavLink to="/tricks" className={location.pathname === '/tricks' ? 'custom-active' : ''}>
              Tricks and Tutorials
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem onClick={closeMenu}>
            <StyledNavLink to="/community" className={location.pathname === '/community' ? 'custom-active' : ''}>
              Community
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem onClick={closeMenu}>
            <StyledNavLink to="/shop" className={location.pathname === '/shop' ? 'custom-active' : ''}>
              Shop
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem onClick={closeMenu}>
            <StyledNavLink to="/profile" className={location.pathname === '/profile' ? 'custom-active' : ''}>
              Profile
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem onClick={closeMenu}>
            <StyledNavLink to="/about" className={location.pathname === '/about' ? 'custom-active' : ''}>
              About
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem onClick={closeMenu}>
            <StyledNavLink to="/signup" className={location.pathname === '/signup' ? 'custom-active' : ''}>
              Signup
            </StyledNavLink>
          </NavLinkItem>
        </NavLinks>
      </StyleSheetManager>
    </NavbarContainer>
  );
};

export default Navbar;
















