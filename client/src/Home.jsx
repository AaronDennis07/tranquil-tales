// Home.jsx
import React from 'react';
import BlogPost from './BlogPost';

function Home() {
    return (
        <main >
      <BlogPost title="Understanding JavaScript Promises" content="Promises in JavaScript represent the eventual completion or failure of an asynchronous operation. They are a way to handle asynchronous operations without blocking the rest of your code..." tag="JavaScript" />
      </main>
    );
}

export default Home;