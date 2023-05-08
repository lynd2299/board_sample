import React from 'react';

const ThreadList = () => {
    const threads = [
        {
            id: 1,
            title: '【悲報】こんなスレ',
            content: 'なんかこんなスレ立てました',
            tags: ['tag1'],
            date: '2023/05/01',
            upvotes: 10
        },
        {
            id: 2,
            title: '【悲報】こんなスレ第2',
            content: 'なんかまたこんなスレ立てました',
            tags: ['tag1', 'tag2'],
            date: '2023/05/02',
            upvotes: 12
        },
        {
            id: 3,
            title: '【悲報】こんなスレ3rd',
            content: 'なんかまたまたこんなスレ立てました',
            tags: ['tag1', 'tag2', 'tag3'],
            date: '2023/05/03',
            upvotes: 13
        },
    ];

    return (
        <ul>
            {threads.map(thread => (
                <li className="border-b border-gray-200 p-4">
                    <div className="flex flex-row space-x-2 items-center">
                        {thread.tags.map(tag => <span className="px-2 inline-flex text-xs leading-5 rounded-md bg-blue-100 text-blue-800">{tag}</span>)}
                    </div>
                    <div className='flex flex-row space-x-8 mb-2 items-center'>
                        <h3 className="text-lg font-bold">{thread.title}</h3>
                        <div className="text-sm text-gray-400">{thread.date}</div>
                    </div>
                    <p className="text-sm mb-2">{thread.content}</p>
                    <div className="flex-shrink-0 flex">
                        <div className="relative inline-flex space-x-2 items-center text-gray-500">
                            <button className="rounded hover:text-gray-600" >
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" >
                                    <path fillRule="evenodd" d="M9.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 6.414V15a1 1 0 01-2 0V6.414L5.707 9.707a1 1 0 01-1.414-1.414l5-5z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <span>{thread.upvotes}</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ThreadList;