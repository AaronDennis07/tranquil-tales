// BlogPost.jsx
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function BlogPost({ title, content,tag }) {
    const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    const comments = [
        {
            id: 1,
            name: 'John Doe',
            comment: 'Nice post!',
        },
        {
            id: 2,
            name: 'Jane Doe',
            comment: 'Nice post!',
        },
    ];

    return (
        <div className="bg-white shadow-md rounded p-4 m-4 mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{content}</p>
            <div className="flex items-center mt-4">
                <img className="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar of Author" />
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">Kruthika B R</p>
                    <p className="text-gray-600">Dec 22 2023</p>
                </div>
                <button className="ml-auto text-blue-500 flex items-center" onClick={handleLike}>
                    <FaHeart className="mr-1" />
                    Like
                </button>
                <p className="ml-2">{likeCount}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-bold">Comments</h3>
                {false && comments.map((comment) => (
                    <div key={comment.id} className="flex items-center mt-4">
                        <img className="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar of Author" />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">{comment.name}</p>
                            <p className="text-gray-600">{comment.comment}</p>
                        </div>
                    </div>
                ))}
                <textarea className="mt-2 w-full rounded border-gray-300" placeholder="Write a comment..."></textarea>
            </div>
            <p className="mt-2 text-sm font-bold">{tag}</p>
        </div>
    );
}

export default BlogPost;