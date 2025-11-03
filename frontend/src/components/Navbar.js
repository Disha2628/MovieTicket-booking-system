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

  console.log("NAVBAR USER =", user);
  console.log("USER ID =", user?.id);
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
            <a href="/profile" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'rgba(12, 18, 32, 0.8)',
                border: '1px solid #ffd700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: '#ffd700',
                textShadow: '0 0 5px rgba(255, 215, 0, 0.8)',
                boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
              }}>
                {user.first_name ? user.first_name.charAt(0).toUpperCase() : 'U'}
              </div>
              Profile
            </a>
            <button onClick={handleLogout} style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#ffd700',
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