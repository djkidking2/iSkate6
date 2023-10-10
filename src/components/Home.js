import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Hero from './Hero';

const HeroContainer = styled.section`
 
  z-index: -1;
  
`;



const AboutContainer = styled.section`
  background-color: #f4f4f4;
  padding: 40px;
  color: #333;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`;



const SectionContainer = styled.section`
  background-color: #fff;
  padding: 40px;
  color: #333;
  text-align: center;
`;

const Home = () => {
  return (
    <div>
  <HeroContainer>
  <Hero />
  </HeroContainer>
        
       
      

      <AboutContainer>
        <div>
          <SectionHeading>About iSkate</SectionHeading>
          <SectionDescription>
            Learn more about our mission and what makes us unique.
          </SectionDescription>
          <Link to="/about">Learn More</Link>
        </div>
      </AboutContainer>

      <SectionContainer>
        <div>
          <SectionHeading>Skateboarding News</SectionHeading>
          {/* Add news articles with images, titles, and descriptions */}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>Featured Skate Parks</SectionHeading>
          {/* Add featured skate parks with images, descriptions, and ratings */}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>Tricks and Tutorials</SectionHeading>
          {/* Add skateboarding trick tutorials with videos and descriptions */}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>Join the Community</SectionHeading>
          {/* Add user-generated content such as videos, photos, and stories */}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>Shop for Gear</SectionHeading>
          {/* Add skateboarding products with images, descriptions, and prices */}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>User Profiles</SectionHeading>
          {/* Display user avatars, usernames, and achievements */}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>Upcoming Events</SectionHeading>
          {/* List upcoming skateboarding events with details and registration links */}
        </div>
      </SectionContainer>
    </div>
  );
};

export default Home;
