import { useState, useContext } from 'react';
import { FiSmile } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
import Draggable from 'react-draggable';
import EmojiPicker from 'emoji-picker-react';
import createPost from "./actions/createPost";
import AppStateContext from './context/AppStateContext';
import Notice from './Notice';

const PostForm = () => {
  const [content, setContent] = useState('');
  const [sharing, setSharing] = useState('private');
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { posts, setPosts } = useContext(AppStateContext);

  const submitPost = async (event) => {
    try {
      event.preventDefault();
      const newPost = await createPost(content, sharing);
      setPosts([newPost, ...posts]);
      setMessage('Post created successfully!');
      setContent('');
      return newPost;
    } catch (error) {
      setMessage('Error creating post: ' + error.message);
    }
  };  

  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emojiObject, event) => {
    setContent(content + emojiObject.emoji);
  };

  const handleCloseEmojiPicker = () => {
    setShowEmojiPicker(false);
  };

  return (
    <>
    <form onSubmit={submitPost} className="mb-4">
      <div className="flex">
        <textarea
          name="content"
          className="w-full p-2 border rounded"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <div> 
          <button
            type="button"
            className="text-gray-400 hidden md:block"
            onClick={handleEmojiClick}
          >
            <FiSmile size={26}/>
          </button>
        </div>
        <select
          name="sharing"
          value={sharing}
          onChange={(e) => setSharing(e.target.value)}
          className="block w-full p-2 border rounded mx-2"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          style={{ minWidth: '80px' }} // Optional: Set a minimum width for the button
        >
          Post
        </button>
        {showEmojiPicker && (
          <Draggable handle=".header">
            <div className="fixed bottom-0 left-10 bg-white border rounded">
              <div className="header flex justify-between items-center bg-gray-100 rounded-t p-2">
                <h3 className="text-lg font-semibold">Choose Emoji</h3>
                <button onClick={handleCloseEmojiPicker} className="text-black hover:text-gray-700">
                  <FiXCircle size={18}/>
                </button>
              </div>
              <div className="body p-2">
                <EmojiPicker
                  onEmojiClick={(emojiObject, event) => handleEmojiSelect(emojiObject)}
                  disableAutoFocus={true}
                  disableSearchBar={true}
                  native
                />
              </div>
            </div>
          </Draggable>
        )}
      </div>
    </form>
    {message && <Notice>{message}</Notice>}
    </>
  );
};

export default PostForm;
