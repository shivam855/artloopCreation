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
      <div className="hero-image" style= {{height: '40rem'}}>
        <img src={photoroom} />
      </div>
      <div className="half-image-right">
        <img src={image} alt="Right Half" />
      </div>
      <div className="social-icons1">
  <a href="https://api.whatsapp.com/send?phone=919355272853&text=Hi%20Artloop%20Creations!" target="_blank" rel="noopener noreferrer">
    <div className="icon-box">
      <i className="fab fa-whatsapp"></i>
    </div>
  </a>
  <a href="https://www.instagram.com/artloop.creations?igsh=OWc2dDZvMXR5a2w0" target="_blank" rel="noopener noreferrer">
    <div className="icon-box">
      <i className="fab fa-instagram"></i>
    </div>
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <div className="icon-box">
      <i className="fab fa-facebook-f"></i>
    </div>
  </a>
  <a href="https://www.linkedin.com/company/artloop-creations/" target="_blank" rel="noopener noreferrer">
    <div className="icon-box">
      <i className="fab fa-linkedin-in"></i>
    </div>
  </a>
</div>

    </section>
  );
}

export default HeroSection;
