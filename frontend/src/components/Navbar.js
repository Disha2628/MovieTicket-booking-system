import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import './Navbar.css'

const Navbar = ({ user }) => {
  const { setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };


  return (
    <nav className="navbar">
      <div>
        <a href="/">Movie-Matrix</a>
        <a href="/movies">Movies</a>
        <a href="/about">About Us</a>
      </div>
      <div>
        {user ? (
          <>
            <a href="/profile" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffffff' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#333333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: '#ffffff',
                fontFamily: "'Poppins', sans-serif"
              }}>
                {user.first_name ? user.first_name.charAt(0).toUpperCase() : 'U'}
              </div>
              Profile
            </a>
            <button onClick={handleLogout} style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              fontSize: '1rem',
              marginLeft: '10px'
            }}>
              Logout
            </button>
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