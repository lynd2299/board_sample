import React, { useState } from "react";

const PostForm = () => {
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New post submitted", author, text);
        setAuthor("");
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="author">Name</label>
                <input
                    className="border rounded w-full py-2 px-3"
                    text="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="text">Text</label>
                <textarea
                    className="border rounded w-full py-2 px-3"
                    id="text"
                    rows="4"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
            </div>
            <button className="bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded">Post</button>
        </form>
    )
};

export default PostForm;