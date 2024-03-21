import React, { useState, useEffect } from 'react';
import "./Lheader.css";
import Menu from "./Lmenu"

const petEyeImg = "https://res.cloudinary.com/djweedhpy/image/upload/v1709897228/Landing%20page/desktop/PetEYE.4f02e2b0fe20852674c4_o3pmsp.png",

 logo="https://res.cloudinary.com/djweedhpy/image/upload/v1709897397/Desktop/download_2_yawoh6.png",
headerlogo ="https://res.cloudinary.com/djweedhpy/image/upload/v1709897228/Landing%20page/desktop/PetEYE.4f02e2b0fe20852674c4_o3pmsp.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeSubmenuOpen, setHomeSubmenuOpen] = useState(false);

    
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className={`mainHeader ${scrolling ? 'scrolled' : ''}`}>
      {/* Logo and Title */}
      <div className={`logo ${scrolling ? 'scrolling' : ''}`}>
        <img src={logo} alt="Logo" />
      </div>
      <div className="title">
        {/* <img src={headerlogo} alt=''/> */}
        <img className={`petEyeImg ${scrolling ? 'scrolled' : ''}`} src={petEyeImg} alt="Pet Eye Image" />

      </div>

      {/* Pet Eye Image */}
      {/* <img className={`petEyeImg ${scrolling ? 'scrolled' : ''}`} src={petEyeImg} alt="Pet Eye Image" /> */}

      {/* Menu Links */}
      <div className="links">
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
