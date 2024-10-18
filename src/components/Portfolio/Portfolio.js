// src/components/Portfolio.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';


const Portfolio = () => {
  
  return (
    
    <div>
      <Navbar />
      <div className='main-content'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
    
  );
};

export default Portfolio;
