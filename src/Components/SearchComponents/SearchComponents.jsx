import React from "react";
import './SearchComponents.css';
import SearchUserCard from "./SearchUserCard";

const SearchComponents = () => {
    return(
        <div className="searchContainer">
            <div className="px-3 pb-5">
                <h1 className="text-xl pb-5">Search</h1>
                <input className="searchInput" placeholder="Search..." type="text"/> 
            </div>
            <hr className="border-t-2 border-gray-200"/>
            <div className="px-3 pt-5">
                {[1,2,3,4,5,6,7].map((item)=> <SearchUserCard />)}
            </div>
        </div>
    )
}

export default SearchComponents;
