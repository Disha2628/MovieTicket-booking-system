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
            <a href="/profile">Profile</a>
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