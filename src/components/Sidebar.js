import React from "react";
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="bg-gray-200 p-4 w-64 flex flex-col justify-between">
            <div>
                <Link to="/create-thread">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 mb-4">
                        新規スレッド作成
                    </button>
                </Link>
                <ul>
                    <li className="mb-2">
                        <Link to="/">
                            <button className="w-full text-left hover:bg-gray-300 rounded-md p-2">
                                Top
                            </button>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <a href="#">
                            <button className="w-full text-left hover:bg-gray-300 rounded-md p-2">
                                Saved
                            </button>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#">
                            <button className="w-full text-left hover:bg-gray-300 rounded-md p-2">
                                Settings
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="py-4 text-sm text-gray-500">
                Copyright &copy; 2023
            </div>
        </aside>
    );
};

export default Sidebar;