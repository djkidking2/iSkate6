import React from "react";
import styled from "styled-components";
import derekKingImage from "../images/derek king profile pic.jpg"; // Replace with the actual image URL

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  text-align: center;
`;

const FounderImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const FounderName = styled.h1`
  font-size: 32px;
  margin: 10px 0;
`;

const FounderDescription = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const AppDescription = styled.p`
  font-size: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <AboutContainer>
      <FounderImage src={derekKingImage} alt="Derek King - Founder" />
      <FounderName>Derek King</FounderName>
      <FounderDescription>
        Founder of Diversity Designs
      </FounderDescription>
      <FounderDescription>Creator of iSkate App</FounderDescription>
      <AppDescription>
      <p>Derek King, the visionary founder of Diversity Designs, stands as the driving force behind the creation of the groundbreaking iSkate App. With a passion for skateboarding and a deep appreciation for its rich culture, Derek embarked on a mission to strengthen the connections within the global skateboarder community.</p> 
      <p>Through iSkate, he has introduced an innovative platform that unites skateboarders of all backgrounds, skill levels, and geographic locations. iSkate isn't just an app; it's a vibrant community where skaters can come together to share their experiences, find like-minded enthusiasts, discover new skate spots, and celebrate the very essence of skateboard culture. Derek's dedication to fostering inclusivity and camaraderie among skateboarders is at the heart of iSkate, making it a game-changer in the world of skateboarding apps.</p>
        iSkate is an innovative app that strengthens the connection among skateboarders and celebrates skateboard culture.
      </AppDescription>
    </AboutContainer>
  );
};

export default About;
