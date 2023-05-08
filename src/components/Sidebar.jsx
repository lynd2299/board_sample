import React from "react";

const Sidebar = () => {
    return (
        <aside className="bg-gray-200 p-4 w-64">
            <ul className="p-4">
                <li className="mb-2">
                    <a href="#" className="block hover:bg-gray-300">
                        Home
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="block hover:bg-gray-300">
                        Category
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="block hover:bg-gray-300">
                        Settings
                    </a>
                </li>
            </ul>
            <div className="p-4 text-sm text-gray-500">
                Copyright &copy; 2023
            </div>
        </aside>
    );
};

export default Sidebar;