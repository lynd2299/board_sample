import React from "react";
import { Link } from 'react-router-dom'
import "./styles.css"

const Sidebar = () => {
    return (
        <aside className="bg-gray-200 p-4 w-64 flex flex-col justify-between">
            <div>
                <Link to="/create-thread">
                    <button className="w-full mb-4 btn-base">
                        新規スレッド作成
                    </button>
                </Link>
                <ul>
                    <li className="mb-2">
                        <Link to="/">
                            <button className="w-full text-left font-bold hover:bg-gray-300 rounded-md p-2">
                                @ Top
                            </button>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <a href="#">
                            <button className="w-full text-left font-bold hover:bg-gray-300 rounded-md p-2">
                                @ Saved
                            </button>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#">
                            <button className="w-full text-left font-bold hover:bg-gray-300 rounded-md p-2">
                                @ Settings
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