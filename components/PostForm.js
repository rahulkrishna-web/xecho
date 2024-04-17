"use client"

import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postContent);
    setPostContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="What's on your mind?"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Echo
      </button>
    </form>
  );
};

export default PostForm;
