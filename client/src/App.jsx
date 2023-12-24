// App.jsx
import React from 'react';
import Header from './Header';
import BlogPost from './BlogPost';
import Footer from './Footer';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import UserProfile from './UserProfile';
function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/profile" element={<UserProfile/>}/> 
      </Routes>
      
    </Router>
     
      <Footer />
    </div>
  );
}

export default App;