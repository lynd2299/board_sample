import React, { useState } from "react";
import logo from "../logo.svg"

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("search query:", searchQuery);
    };

    return (
        <nav className="bg-gray-800 py-2 flex items-center">
            <a href="#" class="flex ml-4 space-x-2 items-center">
                <img class="h-8 w-auto" src={logo}></img>
                <span class="text-white font-bold text-2xl">Bulletin-Board</span>
            </a>
            <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-64 bg-gray-700 text-white text-sm rounded-md p-2 ml-8 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                    placeholder="Search..."
                />
            </form>
        </nav>
    );
};

export default Header;