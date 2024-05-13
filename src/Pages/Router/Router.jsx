import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomePage from '../HomePage/HomePage'
import Profile from '../Profile/Profile'

const Router = () => {
  return (
    <div>
        <div className='flex'>
            <div className='width-[20%] border border-l-slate-500'>
                <Sidebar/>
            </div>
            <div className='w-full'>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path='/username' element={<Profile/>}></Route>
                </Routes> 
            </div>
        </div>
    </div>
  )
}

export default Router