import React from 'react'

const PostCard = () => {
  return (
    <div>
        <div>
            <div>
                <div className='flex items-center'>
                    <img className='h-12 w-12 rounded-full' src='https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg' alt=''/>
                    <div className='pl-2'>
                        <p className='font-semibold text-sm'>username</p>
                        <p className='font-thin text-sm'>location</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard