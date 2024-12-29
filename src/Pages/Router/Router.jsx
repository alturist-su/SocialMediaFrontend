import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import HomePage from '../HomePage/HomePage';
import Profile from '../Profile/Profile';
import Story from '../Story/Story';

const Router = () => {
  return (
    <div>
      <div className='flex'>
        <div className='width-[20%] border border-l-slate-500'>
          <Sidebar />
        </div>
        <div className='w-full'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/username" element={<Profile />} />
            <Route path='/story' element={<Story />} />  
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Router;