import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign:"center" }}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '10px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>SignIn</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '10px' }}>
          <Link to="/SignUp" style={{ color: '#fff', textDecoration: 'none' }}>SignUp</Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to="/Profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
