import styled from 'styled-components';

export const FeedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 5px;
`;

export const PostContainer = styled.div`
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
  background-color: #fff;
  overflow: hidden; /* Add this to hide image overflow */
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Username = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const LocationTag = styled.span`
  color: #888;
`;

// Define more styled components as needed for your other elements
export const Video = styled.video`
  max-width: 100%; /* Adjust the video's max-width as needed */
  max-height: 100%; /* Ensure the video's height doesn't exceed the container */
`;

export const Image = styled.img`
  max-width: 100%; /* Adjust the image's max-width as needed */
  height: auto; /* Maintain the image's aspect ratio */
`;