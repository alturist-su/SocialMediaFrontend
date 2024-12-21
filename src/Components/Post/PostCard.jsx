import React, { useState } from 'react';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentModal from '../Comment/CommentModal';
import './PostCard.css';

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isPostSaved, setIsPostSaved] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handlePostSaved = () => {
    setIsPostSaved(!isPostSaved);
  };

  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="post-card border rounded-md w-full p-4">
      <div className="flex justify-between items-center w-full py-2">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://via.placeholder.com/150"
            alt="User"
          />
          <p className="ml-2 font-semibold">Username</p>
        </div>
        <BsThreeDots onClick={handleClick} className="cursor-pointer" />
      </div>
      <div className="post-content my-4">
        <img
          className="w-full rounded-md"
          src="https://via.placeholder.com/500"
          alt="Post"
        />
      </div>
      <div className="post-actions flex justify-between items-center py-2">
        <div className="flex items-center space-x-4">
          {isPostLiked ? (
            <AiFillHeart onClick={handlePostLike} className="text-red-500 cursor-pointer" />
          ) : (
            <AiOutlineHeart onClick={handlePostLike} className="cursor-pointer" />
          )}
          <FaRegComment className="cursor-pointer" />
          <RiSendPlaneLine className="cursor-pointer" />
        </div>
        <div className="flex items-center">
          {isPostSaved ? (
            <BsBookmarkFill onClick={handlePostSaved} className="cursor-pointer" />
          ) : (
            <BsBookmark onClick={handlePostSaved} className="cursor-pointer" />
          )}
        </div>
      </div>
      <div className="post-comments mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <p className="font-semibold">Username</p>
            <p>{comment}</p>
          </div>
        ))}
      </div>
      <div className="post-add-comment flex items-center mt-4">
        <BsEmojiSmile className="mr-2" />
        <input
          type="text"
          className="flex-1 border rounded-md p-2"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="ml-2 text-blue-500 font-semibold"
          onClick={handleAddComment}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostCard;