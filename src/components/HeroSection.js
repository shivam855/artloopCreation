import React from 'react';
import photoroom from '../assets/2150165633-Photoroom.png';
import image from '../assets/Element.png';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <p className="sub-heading">Welcome to Artloop</p>
        <p className="main-heading">Where Ideas Loops into Art</p>
      </div>
      <div className="half-image-left">
        <img src={image} alt="Left Half" />
      </div>
      <div className="hero-image" style= {{height: '45rem'}}>
        <img src={photoroom} />
      </div>
      <div className="half-image-right">
        <img src={image} alt="Right Half" />
      </div>
      <div className="social-icons1">
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png" alt="WhatsApp" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
