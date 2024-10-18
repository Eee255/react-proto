import React, { useState } from 'react'
import './Navbar.css'
import { signOut } from 'firebase/auth';
import  auth  from '../firebase';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store' ;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    const handleLogout = () => {
        signOut(auth);
    };

  // Toggle menu for small screens
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle navigation and close the menu
  const handleNavClick = (section) => {
    setIsOpen(false);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <h2>Bhanu</h2>
                </div>
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => handleNavClick('home')}>Home</a></li>
                        <li><a href="#about" onClick={() => handleNavClick('about')}>About</a></li>
                        <li><a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a></li>
                        <li><a href="#logout" onClick={handleLogout}>Logout</a></li>
                        <li><a href={theme === 'light' ? '#lightTheme' : '#DarkTheme'} onClick={() => dispatch(toggleTheme())} style={{backgroundColor: 'transparent', border: '0px'}}>
                        {theme === 'light' ? <FaMoon style={{fontSize: '30px'}} /> : <MdSunny style={{fontSize: '30px'}} />}
                        </a></li>
                    </ul>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? '✖' : '☰'}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;