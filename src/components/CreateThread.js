import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import threads from '../data/threads.json';
import { saveThreadsTofile } from '../utils/fileUtils';
import "./styles.css"

const CreateTheread = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleCreateThread = () => {
        const newThread = {
            id: threads.length + 1,
            title: title,
            content: content,
            tags: [],
            createdAt: new Date().toISOString().slice(0, 10),
            upvotes: 0,
        };

        threads.push(newThread);
        saveThreadsTofile(threads);

        navigate(`/threads/${newThread.id}`);
    };

    return (
        <div>
            <h2 className="text-lg font-bold mb-8">新規スレッド</h2>
            <div className="bg-white rounded-md p-4">
                <div className='mb-4'>
                    <input
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        type="text"
                        value={title}
                        placeholder="タイトル"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        value={content}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        rows="6"
                        placeholder="本文"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <div className="flex flex-row space-x-2">
                        <span className="py-1 px-4 inline-flex rounded-full font-semibold bg-blue-100 text-blue-800">tag1 x</span>
                        <span className="py-1 px-4 inline-flex rounded-full font-semibold bg-green-100 text-green-800">tag2 x</span>
                        <button className="py-1 px-4 inline-flex rounded-full font-bold bg-gray-200 text-gray-500">add tags | +</button>
                    </div>
                </div>
                <div className="flex flex-row justify-end space-x-4">
                    <button
                        onClick={handleCreateThread}
                        className="btn-base"
                    >
                        作成する
                    </button>
                    <button className="hover:bg-gray-200 font-bold text-gray-500 rounded-md py-2 px-4">
                        下書きに保存
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateTheread;