import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import { ContactUs } from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import './styles/style.css';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Portfolio />
      <Clients />
      <Testimonial />
    </>
  );
}

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/artloopCreation" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;