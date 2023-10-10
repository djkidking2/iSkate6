// Feed.js

import React, { useState } from 'react';
import {
  FeedWrapper,
  PostContainer,
  UserInfo,
  Username,
  LocationTag,
  Video,
  Image, // Import the Image styled component
  // Import other styled components here
} from './FeedStyled';

// Import the images
import image1 from '../images/post-image-1.jpg';
import image2 from '../images/post-image-2.jpg';
import image3 from '../images/post-image-3.jpg';
import image4 from '../images/post-image-4.jpg';
import image5 from '../images/post-image-5.jpg';
import image6 from '../images/post-image-6.jpg';
// import image7 from '../images/post-image-7.jpg';
import image8 from '../images/post-image-8.jpg';
import image9 from '../images/post-image-9.jpg';
import image10 from '../images/post-image-10.jpg';


// Import the videos
import video1 from '../images/post-video-1.mp4';
import video2 from '../images/post-video-2.mp4';

const Feed = () => {
  const [posts] = useState([
    {
      id: 1,
      user: 'user1',
      content: 'Lil Wayne & Rich The Kid Skateboarding Vlog! (WSHH Exclusive) #hashtags @mention',
      imageUrl: image1,
      videoUrl: video2,
      likes: 10,
      comments: [
        { id: 1, user: 'user2', text: 'Nice post!' },
        // Add more comments here
      ],
    },
    {
      id: 2,
      user: 'user2',
      content: 'Another great post! #nature',
      imageUrl: image2,
      likes: 15,
      comments: [
        { id: 1, user: 'user1', text: 'Beautiful shot!' },
        // Add more comments here
      ],
    },
    // Add more posts here
    {
        id: 3,
        user: 'user3',
        content: 'Check out this amazing view. #bmoreSkateSpot',
        imageUrl: image3,
        likes: 20,
        comments: [
          { id: 1, user: 'user4', text: 'Wow, where is this?' },
          // Add more comments here
        ],
      },
      {
        id: 4,
        user: 'user4',
        content: 'Sunday vibes. #relaxing',
        imageUrl: image4,
        likes: 30,
        comments: [
          { id: 1, user: 'user5', text: 'Perfect day!' },
          // Add more comments here
        ],
      },
      {
        id: 5,
        user: 'user5',
        content: 'Phase II of Baltimore skate park completed. #bmore',
        videoUrl: video1,
        likes: 25,
        comments: [
          { id: 1, user: 'user6', text: 'Looks delicious!' },
          // Add more comments here
        ],
      },
      // Add six more posts here
      {
        id: 6,
        user: 'user6',
        content: 'Exploring the wilderness. #adventure',
        imageUrl: image5,
        likes: 40,
        comments: [
          { id: 1, user: 'user1', text: 'Awesome shot!' },
          // Add more comments here
        ],
      },
      {
        id: 7,
        user: 'user7',
        content: 'A beautiful sunset. #sunset',
        imageUrl: image6,
        likes: 55,
        comments: [
          { id: 1, user: 'user2', text: 'Stunning view!' },
          // Add more comments here
        ],
      },
      {
        id: 8,
        user: 'user8',
        content: 'Family time by the lake. #family',
        imageUrl: image8,
        likes: 28,
        comments: [
          { id: 1, user: 'user3', text: 'Lovely family photo!' },
          // Add more comments here
        ],
      },
      {
        id: 9,
        user: 'user9',
        content: 'Morning coffee vibes. #morning',
        imageUrl: image9,
        likes: 47,
        comments: [
          { id: 1, user: 'user4', text: 'Coffee goals!' },
          // Add more comments here
        ],
      },
      {
        id: 10,
        user: 'user10',
        content: 'Hiking in the mountains. #hiking',
        imageUrl: image10,
        likes: 63,
        comments: [
          { id: 1, user: 'user5', text: 'Incredible hike!' },
          // Add more comments here
        ],
      },
  ]);

  return (
    <FeedWrapper>
      {posts.map((post) => (
        <PostContainer key={post.id}>
          <UserInfo>
            <Username>{post.user}</Username>
            <LocationTag>Location Tag</LocationTag>
          </UserInfo>
          <div className="content">
            {post.imageUrl && <Image src={post.imageUrl} alt="Post" />} {/* Use the Image styled component */}
            {post.videoUrl && (
              <Video src={post.videoUrl} controls />
            )}
            <p>{post.content}</p>
          </div>
          <div className="actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
            <button>Save</button>
          </div>
          <div className="likes">{post.likes} likes</div>
          <div className="comments">
            {post.comments.map((comment) => (
              <div className="comment" key={comment.id}>
                <span className="comment-user">{comment.user}</span>
                <span className="comment-text">{comment.text}</span>
              </div>
            ))}
          </div>
          {/* Add more features like hashtags, mentions, etc. */}
        </PostContainer>
      ))}
    </FeedWrapper>
  );
};

export default Feed;
