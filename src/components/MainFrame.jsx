import React from 'react';
import ThreadList from './ThreadList.jsx';

const MainFrame = () => {
    return (
        <main className="bg-gray-100 flex-1 p-4">
            <div className="flex font-medium text-gray-500 rounded-md p-4">
                <button className="tab-btn mr-2 focus:bg-blue-100 focus:text-blue-600 hover:bg-gray-100 hover:text-gray-600 rounded-md py-2 px-8 tab-active">Recent</button>
                <button className="tab-btn mr-2 focus:bg-blue-100 focus:text-blue-600 hover:bg-gray-100 hover:text-gray-600 rounded-md py-2 px-8">Hot</button>
                <button className="tab-btn mr-2 focus:bg-blue-100 focus:text-blue-600 hover:bg-gray-100 hover:text-gray-600 rounded-md py-2 px-8">Ranking</button>
            </div>
            <div className="bg-white rounded-md p-4">
                <ThreadList />
            </div>
        </main >
    )
}

export default MainFrame;