import React from 'react';
import styled from 'styled-components';
import MySkateAppImage from '../images/MySkate-App.jpg'; // Import the image
import { Link } from 'react-router-dom';


// Styled components for the Hero section
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  background-size: cover;
  color: #fff;
  padding: 80px 0;
  font-size: 24px;
  line-height: 1.5;
  
  background-image: url(${MySkateAppImage});
`;

const HeroColumn = styled.div`
  flex: 1;
  text-align: center;
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  z-index: -1;
`;

const HeroHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
`;

const HeroSubheading = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const HeroButton = styled.button`
  background-color: #ff5722;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const ScrollIndicator = styled.div`
  margin-top: 20px;
  font-size: 24px;
  cursor: pointer;
`;

const Hero = () => {
  // Function to handle scroll to content
  const scrollToContent = () => {
    // Implement scroll functionality here (e.g., scroll to the next section)
  };

  return (
    <HeroContainer>
      <HeroColumn>
        <HeroHeading>Explore the World of Your App</HeroHeading>
        <HeroSubheading>Discover the thrill of your app with us.</HeroSubheading>
        <Link to="/signup"> {/* Use Link component */}
          <HeroButton>Get Started</HeroButton>
        </Link>
        <ScrollIndicator onClick={scrollToContent}>Scroll Down</ScrollIndicator>
      </HeroColumn>
      <HeroColumn>
      <HeroImage src={MySkateAppImage} alt="Your App" /> {/* Use the imported image */}
      </HeroColumn>
    </HeroContainer>
  );
};

export default Hero;


