import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
    return (
        <nav className="bg-gray-800 p-4 flex items-center justify-between">
            <a href="#" class="flex space-x-2 items-center">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"></img>
                <span class="text-white font-bold text-2xl">Bulletin-Board</span>
            </a>
        </nav>
    );
}

export default Header;