import React, { useState } from 'react';
import asset2 from '../assets/Asset 2.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={asset2} />
        </div>
        <div className="navbar1">
          <a href="/artloopCreation">Home</a>
          <Link to="/about">About Us <span className="arrow">▼</span></Link>
          <Link to="/service">Services <span className="arrow">▼</span></Link>
          <a href="/artloopCreation#portfolio">Portfolio <span className="arrow">▼</span></a>
          <a href="/artloopCreation#logo-container">Our Clients <span className="arrow">▼</span></a>
          <a href="/artloopCreation#contact">Contact <span className="arrow">▼</span></a>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span><span></span><span></span>
        </div>
        
        <div className="contact-btn-wrapper">
          <Link to="/contact">
            <button className="contact-btn">Contact Us</button>
          </Link>
        </div>
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="close-btn" onClick={toggleMobileMenu}>&times;</div>
          <a href="/artloopCreation">Home</a>
          <Link to="/about">About Us </Link>
          <Link to="/service">Services </Link>
          <a href="/artloopCreation#portfolio">Portfolio</a>
          <a href="/artloopCreation#logo-container">Our Clients</a>
          <a href="/artloopCreation#contact">Contact</a>
        </div>
      </header>

      {showContactForm && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 9999, overflowY: 'auto',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{
            position: 'relative',
            width: '100%', maxWidth: '900px',
            backgroundColor: '#fff', padding: '2rem', borderRadius: '10px'
          }}>
            <button onClick={() => setShowContactForm(false)} style={{
              position: 'absolute', top: '10px', right: '10px',
              background: 'transparent', border: 'none',
              fontSize: '1.5rem', cursor: 'pointer'
            }}>&times;</button>
            <ContactUs />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
