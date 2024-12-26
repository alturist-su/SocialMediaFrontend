import React from "react";
import { TbCircleDashed } from "react-icons/tb";

const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center space-x-10">
        <div className="flex items-center">
          <img 
            className="w-40 h-32 rounded-full"
            src="https://cdn.pixabay.com/photo/2019/08/21/09/29/lamp-post-4420668_1280.jpg" 
            alt="" />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>username</p>
            <button>Edit Profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">0</span> 
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">0</span> 
              <span>followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">0</span> 
              <span>following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Full Name</p>
            <p className="font-thin text-sm">🌿 Forest wanderer | 🌙 Spooky vibes only
🖤 Dark soul with a mischievous twist | ⚡️ Thriving on chaos
🐾 Animal whisperer | 🦇 Embracing the eerie
🔥 Passion for the wild, untamed, and mysterious</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserDetails;