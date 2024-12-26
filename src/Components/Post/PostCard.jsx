import React, { useState } from 'react';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import { AiFillAlert, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentModal from '../Comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react';
import './PostCard.css';

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isPostSaved, setIsPostSaved] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePostSaved = () => {
    setIsPostSaved(!isPostSaved);
  };

  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleOpenCommentModal = () => {
    onOpen();
  }

  return (
    <div>
      <div className='border rounded-md w-full'>
        <div className='flex justify-between items-center w-full py-4 px-5'>
          <div className='flex items-center'>
            <img 
              className="h-12 w-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2020/01/21/13/23/freedom-4782870_1280.jpg" 
              alt="" />
              <div className='pl-2'>
                <p className='font-semibold text-sm'>username</p>
                <p className='font-thin text-sm'>location</p>
              </div>
          </div>
          <div>
            <BsThreeDots className='dots' onClick={handleClick} />
            <div className='dropdown-content'>
              {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
            </div>
          </div>
        </div>
        <div className='w-full'>
          <img 
            className="w-full"
            src="https://cdn.pixabay.com/photo/2020/01/23/16/42/merry-christmas-4788167_1280.jpg" 
            alt="" />
        </div>

        <div className='flex justify-between items-center w-full py-4 px-5'>
          <div className='flex items-center space-x-2'>
            {isPostLiked ? <AiFillHeart onClick={handlePostLike} className='text-2xl hover:opacity-50 cursor-pointer text-red-500'/> : <AiOutlineHeart onClick={handlePostLike} className='text-2xl hover:opacity-50 cursor-pointer'/>}
            <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer' />
            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
          </div>
          <div className='cursor-pointer'>
            {isPostSaved ? <BsBookmarkFill onClick={handlePostSaved} className='text-xl hover:opacity-50 cursor-pointer'/> : <BsBookmark onClick={handlePostSaved} className='text-xl hover:opacity-50 cursor-pointer'/>} 
          </div>
        </div>

        <div className='w-full py-2 px-5'>
          <p>100 likes</p>
          <p className='opacity-50 py-2 cursor-pointer'>view all 10 comments</p>
        </div>

        <div className='border border-t w-full'>
          <div className='flex w-full items-center px-5'>
            <BsEmojiSmile/>
            <input className='commentInput' type="text" placeholder='Add a comment...' />
          </div>
        </div>
      </div>

      <div>
        <CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handlePostSaved={handlePostSaved} isPostLiked={isPostLiked} isPostSaved={isPostSaved}/>
      </div>
    </div>
  );
};

export default PostCard;