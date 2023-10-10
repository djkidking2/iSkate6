import React, { useState } from 'react';

const NewPostForm = ({ addPost }) => {
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPostImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postText.trim() !== '' || postImage) {
      addPost(postText, postImage);
      setPostText('');
      setPostImage('');
    }
  };

  return (
    <div className="new-post-form">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your post..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;
