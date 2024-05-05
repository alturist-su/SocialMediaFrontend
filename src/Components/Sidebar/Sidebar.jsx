import React from 'react'
import { IoReorderThree } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
        <div>
            <div>
                <img className='w-40' src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration-958x575.png" alt='' />
            </div>
            <div>

            </div>
        </div>
        <div className='flex items-center cursor-pointer'>
            <IoReorderThree />
            <p className='ml-5'>More</p>
        </div>
    </div>
  )
}

export default Sidebar