import React from 'react'
import { IoReorderThree } from "react-icons/io5";
import { menu } from './SidebarConfig';

const Sidebar = () => {
  return (
    <div className='sticky top-0 h-[100vh]'>
        <div className='flex flex-col justify-between h-full px-10'>
            <div>
            <div>
                <img className='w-40' src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt='' />
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
            <div className='flex items-center cursor-pointer pb-10 text-2xl'>
            <IoReorderThree />
            <p className='ml-5'>More</p>
        </div> 
        </div>        
    </div>
  )
}

export default Sidebar
