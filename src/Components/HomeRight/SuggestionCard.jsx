import React from "react";

const SuggestionCard = () => {
    return(
        <div className="flex justify-between items-center">
            <div className="flex items-center mr-10">
                <img className="h-9 w-9 rounded-full" src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_1280.jpg" alt=""/>
                <div className="ml-2 mr-20">
                    <p className="text-sm font-semibold">username</p>
                    <p className="text-sm font-semibold opacity-70">Follows you</p>
                </div>
            </div>
            <p className="text-blue-700 text-sm font-semibold ">Follow</p>
        </div>
    )
}

export default SuggestionCard;