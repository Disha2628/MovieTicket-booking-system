import React from 'react';
import './Navbar.css'

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div>
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/about">About</a>
      </div>
      <div>
        {user ? (
          <>
            <a href="/profile" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>Profile
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
              </svg>
            </a>
            <a href="/logout">Logout</a>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;