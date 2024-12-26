import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentCard = () => {
    const [isCommentLiked, setIsCommentLiked] = useState(false);

    const handleCommentLike = () => {
        setIsCommentLiked(!isCommentLiked);
    }
    return(
        <div>
            <div className="flex justify-between items-center w-full py-5"> 
                <div className="flex items-center">
                    <div>
                        <img 
                            className="h-9 w-9 rounded-full"
                            src="https://cdn.pixabay.com/photo/2023/01/15/17/58/nature-7720825_1280.jpg"  alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p>
                            <span className="font-semibold">username</span>
                            <span className="ml-2">comments</span>
                        </p>
                        <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
                            <span>10 hours ago</span>
                            <span>10 likes</span>
                        </div>
                    </div>
                </div>
                {isCommentLiked ? <AiFillHeart onClick={handleCommentLike} className='text-xs hover:opacity-50 cursor-pointer text-red-600'/> : <AiOutlineHeart onClick={handleCommentLike} className='text-xs hover:opacity-50 cursor-pointer'/>}
            </div>
        </div>
    )
}

export default CommentCard;