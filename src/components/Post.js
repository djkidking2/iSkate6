import React, { useState } from 'react';

const Post = ({ post, toggleLike, addComment, deletePost }) => {
  const [commentText, setCommentText] = useState('');

  const handleLikeClick = () => {
    toggleLike(post.id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== '') {
      addComment(post.id, commentText);
      setCommentText('');
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <h3>Post #{post.id}</h3>
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
      <img src={post.image} alt={`Post ${post.id}`} />
      <p>{post.text}</p>
      <button onClick={handleLikeClick}>Like ({post.likes})</button>
      <div className="comments">
        {post.comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

export default Post;
