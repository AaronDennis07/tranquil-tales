import React, { useState } from 'react';
import BlogPost from './BlogPost';

function UserProfile() {
    const userName = 'Kruthika B R'; // Replace with actual data
    const userEmail = 'kruthika@gmail.com'; // Replace with actual data
   

  const publishedPosts = [
    { title: 'Post 1', content: 'Content 1' },
    { title: 'Post 2', content: 'Content 2' },
    { title: 'Post 3', content: 'Content 3' },
  ]; // Replace with actual data
  const drafts = [
    { title: 'Draft 1', content: 'Content 1' },
    { title: 'Draft 2', content: 'Content 2' },
    { title: 'Draft 3', content: 'Content 3' },
  ]; 
  const [selectedCategory, setSelectedCategory] = useState('published');

  const posts = selectedCategory === 'published' ? publishedPosts : drafts;

  return (
    <div className="bg-white text-gray-700 p-4 flex flex-col items-center shadow-md">
                <img className="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar of Author" />
      <h1 className="font-bold text-xl">{userName}</h1>
      <p className="text-sm">{userEmail}</p>
      <div className="mt-8 w-full flex justify-center">
        <h2 className="font-bold text-lg mb-4 cursor-pointer mr-4" onClick={() => setSelectedCategory('published')}>Published Posts</h2>
        <h2 className="font-bold text-lg mb-4 cursor-pointer" onClick={() => setSelectedCategory('drafts')}>Drafts</h2>
      </div>
      <div className="mt-8 w-full">
        {posts.map((post, index) => (
          <BlogPost key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>)
}

export default UserProfile;