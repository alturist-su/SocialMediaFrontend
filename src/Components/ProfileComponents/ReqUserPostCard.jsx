import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'

const ReqUserPostCard = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='post w-60 h-60'>
            <img className='cursor-pointer' src='https://cdn.pixabay.com/photo/2017/10/07/22/24/post-letter-2828146_1280.jpg' alt=''/>
            <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart>
                        <span>10</span>
                    </div>
                    <div>
                        <FaComment/>
                        <span>30</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard