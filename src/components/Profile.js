import React, { useState } from "react";
import styled from "styled-components";
import sampleProfilePicture from "../images/derek king profile pic.jpg"; // Replace with your own profile picture URL

// Import other images if needed
import postImage1 from "../images/post-image-1.jpg";
import postImage2 from "../images/post-image-2.jpg";
import postImage3 from "../images/post-image-3.jpg";
import postImage4 from "../images/post-image-4.jpg";
import postImage5 from "../images/post-image-5.jpg";
import postImage6 from "../images/post-image-6.jpg";
import carouselImage1 from "../images/carousel-image-1.jpg";
import carouselImage2 from "../images/carousel-image-2.jpg";
import carouselImage3 from "../images/carousel-image-3.jpg";
import carouselImage4 from "../images/carousel-image-4.jpg";
import carouselImage5 from "../images/carousel-image-5.jpg";
import carouselImage6 from "../images/carousel-image-6.jpg";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    /* Tablet and larger screens */
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 768px) {
    /* Tablet and larger screens */
    width: 200px;
    height: 200px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  padding: 10px; /* Add padding to all elements within ContentContainer */

  @media (min-width: 768px) {
    /* Tablet and larger screens */
    align-items: flex-start;
    text-align: left;
    margin-left: 20px; /* Add margin to the left for desktop view */
  }
`;



const Username = styled.h1`
  font-size: 24px;
  margin: 10px 0;

  @media (min-width: 768px) {
    /* Tablet and larger screens */
    font-size: 32px;
    margin: 0;
  }
`;

const Bio = styled.p`
  font-size: 16px;
  margin: 10px 0;

  @media (min-width: 768px) {
    /* Tablet and larger screens */
    margin: 0;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;

  @media (min-width: 768px) {
    /* Tablet and larger screens */
    margin: 20px auto;
    max-width: 400px;
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: block;
`;

const StatLabel = styled.span`
  font-size: 14px;
  color: gray;
`;

const EditProfileButton = styled.button`
  background-color: #3897f0;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;

  @media (min-width: 768px) {
    /* Tablet and larger screens */
    margin-top: 0;
  }
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;

  @media (min-width: 768px) {
    /* Tablet and larger screens */
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Post = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const CarouselContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const CarouselTitle = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CarouselImages = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px; /* Adjust the total width of the carousel */
  overflow-x: scroll; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* Hide scrollbar for modern browsers */
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for WebKit based browsers */
  }
`;

const CarouselImage = styled.img`
  width: 100px; /* Adjust the image width as needed */
  height: 100px; /* Adjust the image height as needed */
  object-fit: cover;
  cursor: pointer;
  scroll-snap-align: start;
`;

const Profile = () => {
  const [posts] = useState([
    postImage1,
    postImage2,
    postImage3,
    postImage4,
    postImage5,
    postImage6,
  ]);

  return (
    <ProfileContainer>
      <ProfilePicture src={sampleProfilePicture} alt="Your Name" />
      <ContentContainer>
        <Username>Your Name</Username>
        <Bio>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🌟
          #TravelLover
        </Bio>
        <StatsContainer>
          <Stat>
            <StatNumber>123</StatNumber>
            <StatLabel>Posts</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>456</StatNumber>
            <StatLabel>Followers</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>789</StatNumber>
            <StatLabel>Following</StatLabel>
          </Stat>
        </StatsContainer>
        <EditProfileButton>Edit Profile</EditProfileButton>
      </ContentContainer>
      <PostsContainer>
        {posts.map((post, index) => (
          <Post key={index} src={post} alt={`Post ${index + 1}`} />
        ))}
      </PostsContainer>
      {/* Additional elements */}
      <ContentContainer>
        {/* Location Tag */}
        <span>📍 Baltimore, MD</span>
        {/* User Tags */}
        <span>
          Tagging: <button>@friend1</button>, <button>@friend2</button>
        </span>
        {/* Hashtags */}
        <div>
          Hashtags: <button>#Travel</button> <button>#Adventure</button>
        </div>
        {/* Mentions */}
        <div>
          Mentions: <button>@user1</button> <button>@user2</button>
        </div>
        {/* Likes and Comments */}
        <div>
          <span>1234 Likes</span>
          <div>
            <button>@user3</button> Beautiful!
          </div>
          <div>
            <button>@user4</button> Amazing shot!
          </div>
        </div>
        {/* Share Options */}
        <div>
          <button>Share to Feed</button>
          <button>Share to Story</button>
        </div>
        {/* Timestamp */}
        <span>Posted 2 hours ago</span>
        {/* View Count (for Videos) */}
        <span>1,234,567 views</span>
        {/* Action Buttons */}
        <div>
          <button>Contact</button>
          <button>Call</button>
          <button>Email</button>
          <button>Directions</button>
        </div>
        {/* Sponsored and Promoted Tags */}
        <div>
          <span>Sponsored</span>
          <span>
            Paid partnership with <button>[Brand]</button>
          </span>
        </div>
        {/* Share Button */}
        <button>Share</button>
        {/* Bookmark */}
        <button>Bookmark</button>
        {/* IGTV */}
        <div>
          <span>IGTV</span>
          <span>Watch my latest video</span>
        </div>
        {/* Carousel Posts */}
        <CarouselContainer>
          <CarouselTitle>Carousel Posts</CarouselTitle>
          <CarouselImages>
            <CarouselImage src={carouselImage1} alt="Carousel Post 1" />
            <CarouselImage src={carouselImage2} alt="Carousel Post 2" />
            <CarouselImage src={carouselImage3} alt="Carousel Post 3" />
            <CarouselImage src={carouselImage4} alt="Carousel Post 4" />
            <CarouselImage src={carouselImage5} alt="Carousel Post 5" />
            <CarouselImage src={carouselImage6} alt="Carousel Post 6" />
          </CarouselImages>
        </CarouselContainer>
        {/* Alt Text */}
        <span>Image description for accessibility</span>
      </ContentContainer>
    </ProfileContainer>
  );
};

export default Profile;

