import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Hero from './Hero';

// Import your images using the import statement
import newsImage1 from "../images/news_image_1.jpeg";
import newsImage2 from "../images/news_image_2.jpeg";
import newsImage3 from "../images/news_image_3.jpeg";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const NewsArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const NewsImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const NewsContent = styled.div``;

const NewsTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const NewsDescription = styled.p`
  margin: 0;
`;

const Home = () => {
  // Sample news articles data
  const newsArticles = [
    {
      title: 'New Skate Park Opens in Baltimore',
      description: 'A new skate park with great features is now open in Baltimore. Skateboarders and BMX riders are excited to visit.',
      imageUrl: newsImage1, // Replace with your image path
    },
    {
      title: 'Skateboarding Competition Winners',
      description: 'The recent skateboarding competition in the city had some amazing performances. Check out the winners here.',
      imageUrl: newsImage2, // Replace with your image path
    },
    {
      title: 'Upcoming Skateboarding Events',
      description: 'Stay updated with the upcoming skateboarding events in your area. Get ready to show your skills!',
      imageUrl: newsImage3, // Replace with your image path
    },
  ];

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
        <SectionHeading>Skateboarding News</SectionHeading>
        {newsArticles.map((article, index) => (
          <NewsArticle key={index}>
            <NewsImage src={article.imageUrl} alt={article.title} />
            <NewsContent>
              <NewsTitle>{article.title}</NewsTitle>
              <NewsDescription>{article.description}</NewsDescription>
              <Link to="/community">Learn More</Link>
            </NewsContent>
          </NewsArticle>
        ))}
        
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>Featured Skate Parks</SectionHeading>
          {/* Add featured skate parks with images, descriptions, and ratings */}
          <Link to="/skateparks">Learn More</Link>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>Tricks and Tutorials</SectionHeading>
          {/* Add skateboarding trick tutorials with videos and descriptions */}
          <Link to="/tricks">Learn More</Link>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>Join the Community</SectionHeading>
          {/* Add user-generated content such as videos, photos, and stories */}
          <Link to="/community">Learn More</Link>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>Shop for Gear</SectionHeading>
          {/* Add skateboarding products with images, descriptions, and prices */}
          <Link to="/about">Learn More</Link>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>User Profiles</SectionHeading>
          {/* Display user avatars, usernames, and achievements */}
          <Link to="/profile">Learn More</Link>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div>
          <SectionHeading>Upcoming Events</SectionHeading>
          {/* List upcoming skateboarding events with details and registration links */}
          <Link to="/community">Learn More</Link>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Home;


