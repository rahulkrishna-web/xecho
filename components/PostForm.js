import { useState } from 'react';
import createPost from "./actions/createPost";

const PostForm = () => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const submitPost = async (formData) => {
    try {
      await createPost(formData);
      setMessage('Post created successfully!');
      setContent('');
    } catch (error) {
      setMessage('Error creating post: ' + error.message);
    }
  };  

  return (
    <>
    {message && <div>{message}</div>}
    <form action={submitPost} className="mb-4">
      <textarea
        name="content"
        className="w-full p-2 border rounded"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Echo
      </button>
    </form>
    </>
  );
};

export default PostForm;
