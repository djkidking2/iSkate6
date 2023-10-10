import React, { useState } from 'react';
import Post from './Post';
import NewPostForm from './NewPostForm';

const Timeline = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (text, image) => {
    const newPostObject = {
      id: posts.length + 1,
      text,
      image,
      likes: 0,
      comments: [],
    };

    setPosts([newPostObject, ...posts]);
  };

  const toggleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );

    setPosts(updatedPosts);
  };

  const addComment = (postId, commentText) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, comments: [...post.comments, { text: commentText }] }
        : post
    );

    setPosts(updatedPosts);
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <NewPostForm addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          toggleLike={toggleLike}
          addComment={addComment}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
};

export default Timeline;

