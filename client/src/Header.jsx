// Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function Header() {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
    return (
        <header className="bg-white text-gray-700 p-4 flex justify-between items-center shadow-md">
            <Link to="/" className="font-bold text-xl">Tranquil Tales</Link>

            {!isAuthPage && (
                <div>
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" to="/login">
                        Login
                    </Link>
                    <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" to="/register">
                        Register
                    </Link>
                </div>
            )}
        </header>
    );
}

export default Header;