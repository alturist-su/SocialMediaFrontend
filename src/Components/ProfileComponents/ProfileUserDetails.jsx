import React, { useState } from 'react';
import { TbCircleDashed } from 'react-icons/tb';
import { FaEdit } from 'react-icons/fa';
import ChangeProfilePicture from '../ChangeProfile/ChangeProfilePicture';
import './ProfileUserDetails.css';

const ProfileUserDetails = () => {
  const [profilePicture, setProfilePicture] = useState('https://cdn.pixabay.com/photo/2024/04/29/11/19/eye-8727677_1280.jpg');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveProfilePicture = (file) => {
    const newPictureUrl = URL.createObjectURL(file);
    setProfilePicture(newPictureUrl);
    setIsModalOpen(false);
  };

  return (
    <div className='profile-user-details py-10 w-full'>
      <div className='flex items-center'>
        <div className='profile-picture w-[15%] relative'>
          <img className='w-32 h-32 rounded-full' src={profilePicture} alt='Profile' />
          <button
            className='edit-button absolute bottom-0 right-0 bg-white p-1 rounded-full'
            onClick={() => setIsModalOpen(true)}
          >
            <FaEdit />
          </button>
        </div>
        <div className='details space-y-5'>
          <div className='actions flex space-x-10 items-center'>
            <p>username</p>
            <button>Edit Profile</button>
            <TbCircleDashed />
          </div>
          <div className='stats flex space-x-10'>
            <div>
              <span className='font-semibold mr-2'>10</span>
              <span>posts</span>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <ChangeProfilePicture currentPicture={profilePicture} onSave={handleSaveProfilePicture} />
            <button className='close-button' onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileUserDetails;