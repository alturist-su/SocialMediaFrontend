import React from 'react'
import SuggestionCard from './SuggestionCard'

const HomeRight = () => {
  return (
    //Home Right section
    <div className=''>
      <div className="">
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div>
              <img className='h-12 w-12 rounded-full' src='https://cdn.pixabay.com/photo/2019/03/24/23/34/lake-4079007_1280.jpg' alt='' />
            </div>
            <div className='ml-3'>
              <p>Full name</p>
              <p className='opacity-70'>username</p>
            </div>
          </div>
          <div>
            <p className='text-blue-700 font-semibold'>Switch</p>
          </div>
          </div>
          <div className='space-y-5 mt-10'>
            {[1,1,1,1,1].map((item)=><SuggestionCard/>)}
          </div>
      </div>
    </div>
  )
}

export default HomeRight
