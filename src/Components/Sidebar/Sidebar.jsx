import React from 'react'
import { IoReorderThree } from "react-icons/io5";
import { menu } from './SidebarConfig';

const Sidebar = () => {
  return (
    <div className='sticky top-0 h-[100vh]'>
        <div className='flex flex-col justify-between h-full'>
            <div>
            <div>
                <img className='w-40' src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration-958x575.png" alt='' />
            </div>
            <div className='mt-10'>
                {menu.map((item)=>
                    <div className='flex items-center mb-5 cursor-pointer text-lg'> 
                    {item.icon}
                    <p>{item.title}</p>
                </div> 
                )}
            </div>
            </div> 
            <div className='flex items-center cursor-pointer'>
            <IoReorderThree />
            <p className='ml-5'>More</p>
        </div> 
        </div>        
    </div>
  )
}

export default Sidebar
