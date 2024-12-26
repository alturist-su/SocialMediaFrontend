import React from 'react';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { BsThreeDots, BsBookmark, BsBookmarkFill, BsEmojiSmile } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentCard from './CommentCard';
import './CommentModal.css';

//This is comment modal
const CommentModal = ({onClose,isOpen, isPostLiked, handlePostLike, isPostSaved, handlePostSaved }) => {
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className='flex h-[75vh]'>
              <div className='w-[45%] flex flex-col justify-center'>
                <img className='max-h-full w-full' src='https://cdn.pixabay.com/photo/2024/02/14/16/45/leaves-8573845_1280.jpg' alt=''/>
              </div>
              <div className='w-[55%] pl-10 relative'>
                <div className='flex justify-between items-center py-2 '>
                <div className='flex items-center'>
                  <div>
                    <img className='w-9 h-9 rounded-full' 
                    src='https://cdn.pixabay.com/photo/2023/01/08/18/11/plants-7705865_1280.jpg' alt=''
                    />
                  </div>
                  <div className='ml-2'>
                    <p className='font-semibold'>username</p>
                  </div>
                </div>
                <BsThreeDots/>
                </div>
                <hr/>
                <div className='comment'>
                  {[1,1,1,1,1,1,1].map(()=><CommentCard/>)}
                </div>

                <div className='absolute bottom-0 w-[90%]'>
                <div className='flex justify-between items-center w-full py-4'>
                  <div className='flex items-center space-x-2'>
                      {isPostLiked ? <AiFillHeart onClick={handlePostLike} className='text-2xl hover:opacity-50 cursor-pointer text-red-500'/> : <AiOutlineHeart onClick={handlePostLike} className='text-2xl hover:opacity-50 cursor-pointer'/>}
                        <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                  </div>
                  <div className='cursor-pointer'>
                    {isPostSaved ? <BsBookmarkFill onClick={handlePostSaved} className='text-xl hover:opacity-50 cursor-pointer'/> : <BsBookmark onClick={handlePostSaved} className='text-xl hover:opacity-50 cursor-pointer'/>} 
                  </div>
                </div>
                <div className=' py-2 '>
                  <p>100 likes</p>
                  <p className='opacity-50 py-2 cursor-pointer'>1 day ago</p>
                </div>
                <div className='border border-t '>
                  <div className='flex items-center px-5'>
                    <BsEmojiSmile/>
                    <input className='commentInput' type="text" placeholder='Add a comment...' />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModal
