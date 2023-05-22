import React from "react";
import { useParams } from "react-router-dom";
import threads from "../data/threads.json";

const ThreadDetail = () => {
    const { id } = useParams();
    const thread = threads.find((thread) => thread.id === parseInt(id, 10));

    if (!thread) {
        return <div>Thread not found!</div>;
    }

    return (
        <div>
            <h3 className="text-lg font-bold">{thread.title}</h3>
            <p className="text-sm">{thread.content}</p>
        </div>
    );
};

export default ThreadDetail;