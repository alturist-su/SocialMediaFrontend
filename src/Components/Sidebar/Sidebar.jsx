import React, {useState} from 'react'
import { IoReorderThree } from "react-icons/io5";
import { menu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';
import CreatePostModal from '../Post/CreatePostModal';
import { useDisclosure } from '@chakra-ui/react';
import SearchComponents from '../SearchComponents/SearchComponents';


const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("");
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    
  const handleTabClick=(title)=>{
    setActiveTab(title);
    if(title === 'Profile'){
        navigate("/username");
    }
    else if(title === "Home"){
        navigate("/")
    }
    else if(title === "Create"){
        onOpen();
    }
    if (title === "Search"){
        setIsSearchVisible(true);
    }
    else{
        setIsSearchVisible(false);  
    }

  }

  return (
    <div className='sticky top-0 h-[100vh] flex'>
        <div className={`flex flex-col justify-between h-full ${activeTab === 'Search'?'px-2':'px-10'}`}>
            {<div>
            {activeTab !== 'Search' && <div className='pt-10'>
                <img className='w-40' src="https://images.squarespace-cdn.com/content/v1/5525c57de4b0aad8338e3435/1519409215530-NM8CN75S2G404F0EE13E/download.png?format=2500w" alt='' />
            </div>}
            <div className='mt-10'>
                {menu.map((item)=>
                    <div onClick={() => handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'> 
                    {activeTab === item.title ? item.activeIcon : item.icon}
                    {activeTab !== 'Search' && <p className= {`${activeTab===item.title?"font-bold":"font-semibold"}`}>{item.title}</p>}
                </div> 
                )}
            </div>
            </div> }
            <div className='flex items-center cursor-pointer pb-10 text-2xl'>
            <IoReorderThree />
            {activeTab !== 'Search' && <p className='ml-5'>More</p>}
        </div> 
        </div>     
        <CreatePostModal isOpen={isOpen} onClose={onClose}/>   
        {isSearchVisible && <SearchComponents />}
    </div>
  )
}

export default Sidebar
