import React from 'react';
import asset2 from '../assets/Asset 2.png';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    navigate('/', { state: { scrollTo: id } });
  };
  return (
    
    <footer className="footer" id="contact">
      <div className="footer-section">
        <h3><div className="logo1"><img src= {asset2} /></div></h3>
        <p>Office : 4th Floor, B-51, E Block<br />New Ashok Nagar, Delhi – 110096</p>
        <p>Email : <a href="mailto:info@artloopcreations.in">info@artloopcreations.in</a></p>
        <p>Phone No.: <a href="tel:+919355272853">+91 9355272853</a></p>
        <p className="social-media">Follow Us On: 
          <span className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </span>
        </p>
      </div>

      <div className="footer-section">
        <h3>Menu</h3>
        <ul>
          <li><p><Link to="/artloopCreation">Home</Link></p></li>
          <li><p><Link to="/about">About Us</Link></p></li>
          <li><p><Link to="/service">Services</Link></p></li>
          <li><p><button className="link-btn" onClick={() => scrollToSection('portfolio')}>Portfolio</button></p></li>
          <li><p><button className="link-btn" onClick={() => scrollToSection('logo-container')}>Our Clients</button></p></li>
          <li><p><button className="link-btn" onClick={() => scrollToSection('contact')}>Contact Us</button></p></li>
        </ul>
      </div>

      <div className="footer-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h3>Get In Touch</h3>
        <p>Let's Work Together</p>
        <form className="email-form" style={{ width: '100%', maxWidth: '300px' }}>
          <input type="email" placeholder="Your Email ID" required style={{ textAlign: 'center' }} />
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;