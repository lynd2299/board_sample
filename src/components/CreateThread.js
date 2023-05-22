import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import threads from '../data/threads.json';
import { saveThreadsTofile } from '../utils/fileUtils';

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
        <main className="bg-gray-100 flex-1 p-4">
            <h2 className="text-lg font-semibold mb-4">新規スレッド</h2>
            <div className='mb-4'>
                <label className='block font-medium mb-2'>タイトル</label>
                <input
                    className='border border-gray-300 rounded-md px-3 py-2 w-full'
                    type='text'
                    value={title}
                />
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-2">内容</label>
                <textarea
                    value={content}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    rows="6"
                ></textarea>
            </div>
            <button
                onClick={handleCreateThread}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4"
            >
                作成する
            </button>
        </main>
    );
};

export default CreateTheread;