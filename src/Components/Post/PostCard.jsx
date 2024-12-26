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

  return (
    <div className="post-card border rounded-md w-full p-4">
      <div className="flex justify-between items-center w-full py-2">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2014/12/02/19/30/snowmen-554398_1280.jpg"
            alt="User"
          />
          <div className="ml-2">
            <p className="font-semibold">Username</p>
            <p className="text-sm text-gray-500">Location</p>
          </div>
        </div>
        <BsThreeDots onClick={handleClick} className="cursor-pointer" />
      </div>
      <div className="post-content my-4">
        <img
          className="w-full rounded-md"
          src="https://cdn.pixabay.com/photo/2022/11/29/09/01/winter-7624034_1280.jpg"
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
        <div className="flex items-center space-x-4">
          {isPostSaved ? (
            <BsBookmarkFill onClick={handlePostSaved} className="cursor-pointer" />
          ) : (
            <BsBookmark onClick={handlePostSaved} className="cursor-pointer" />
          )}
          <BsEmojiSmile className="cursor-pointer" />
        </div>
      </div>
      <CommentModal comments={comments} setComments={setComments} newComment={newComment} setNewComment={setNewComment} />
    </div>
  );
};

export default PostCard;