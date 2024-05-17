import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import "./PostCard.css"
import { AiFillAlert, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';

const PostCard = () => {
  const [showDropDown, setshowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
 
  const handlePostLike=()=>{
    setIsPostLiked(!isPostLiked)
  }

  const handleClick=()=>{
     setshowDropDown(!showDropDown); 
  }

  return (
    <div>
        <div className='border rounded-md w-full'>
            <div className='flex justify-between items-center w-full py-4 px-5 '>
                <div className='flex items-center'>
                    <img className='h-12 w-12 rounded-full' src='https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg' alt=''/>
                    <div className='pl-2'>
                        <p className='font-semibold text-sm'>username</p>
                        <p className='font-thin text-sm'>location</p>
                    </div>
                </div>
                <div className='dropdown'>
                    <BsThreeDots className='dots' onClick={handleClick}/>
                    <div  className='dropdown-content'>
                        {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <img className='w-full' src='https://cdn.pixabay.com/photo/2017/09/15/02/22/fantasy-2750995_1280.jpg' alt=''/>
            </div>
            <div>
                {isPostLiked? <AiFillAlert className='text-xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}/> :<AiOutlineHeart onClick={handlePostLike}/> }
                <FaRegComment className='text-xl hover:opacity-50 cursor-pointer '/>                
            </div>
        </div>
    </div>
  )
}

export default PostCard