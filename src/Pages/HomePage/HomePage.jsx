import React from 'react';
import StoryCircle from '../../Components/Story/StoryCircle';
import HomeRight from '../../Components/HomeRight/HomeRight';
import PostCard from '../../Components/Post/PostCard';
import './HomePage.css'; // Optional: Add a CSS file for additional styling

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="mt-10 flex w-full justify-center">
        <div className="w-44% px-10">
          <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <StoryCircle key={index} />
            ))}
          </div>
          <div className="space-y-10 w-full mt-10">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <PostCard key={index} />
            ))}
          </div>
        </div>
        <div className="w-35%">
          <HomeRight />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
