import React from 'react';
import { useNavigate } from 'react-router-dom';

const StoryCircle = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/story')
  }

  return (
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
        <img className='w-16 h-16 rounded-full' src='https://cdn.pixabay.com/photo/2017/03/12/08/53/sunset-2136629_1280.jpg' alt=''/>
        <p>username</p>
    </div>
  )
}

export default StoryCircle