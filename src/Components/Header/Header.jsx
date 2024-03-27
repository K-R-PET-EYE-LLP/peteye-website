import React, { useState } from 'react';
import "./Header.css";
import Menu from "./menu"
import { Link } from 'react-router-dom';


const logo="https://res.cloudinary.com/djweedhpy/image/upload/v1709897397/Desktop/download_2_yawoh6.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeSubmenuOpen, setHomeSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className='mainHeader'>
      {/* Logo and Title */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="title">
        {/* <h1>PetEYE</h1> */}
      </div>

      {/* Menu Links */}
      <div className="links">
        <Link to="/" className='login'>Login</Link>
        <button className="menubtn" onClick={toggleMenu}>
          <span>&#9776;</span> Menu
        </button>
        <button className="menubtn2 d-md-none" onClick={toggleMenu}>
          <span>&#9776;</span> 
        </button>
        {/* Dropdown Menu */}
        {menuOpen && <Menu />}
      </div>

    </header>
  );
};

export default Header;
