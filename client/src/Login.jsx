// Login.jsx
import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
                <label className="block mb-2">
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full px-3 py-2 border rounded mt-1" />
                </label>
                <label className="block mb-2">
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded mt-1" />
                </label>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Login</button>
            </form>
        </div>
    );
}

export default Login;