import React from "react";

const SearchUserCard = () => {
    return(
        <div className="py-2 cursor-pointer">
            <div className="flex items-center">
                <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2021/11/26/20/45/lantern-6826697_1280.jpg" alt=""/>
                <div className="ml-3">
                    <p className="">Full Name</p>
                    <p className="opacity-70">Username</p>
                </div>
            </div>
        </div>
    )
}

export default SearchUserCard;