import React from 'react';

// Import all client logos
import logo1 from '../assets/clientsLogo/1_0009_Layer-4 (1).png';
import logo2 from '../assets/clientsLogo/all-season-Photoroom.png';
import logo3 from '../assets/clientsLogo/ElaineFinalLogo-03.png';
import logo4 from '../assets/clientsLogo/Grahshanti-Logo-PDF-page-001.png';
import logo5 from '../assets/clientsLogo/images (1)-Photoroom.png';
import logo6 from '../assets/clientsLogo/images-Photoroom.png';
import logo7 from '../assets/clientsLogo/images.jpeg';
import logo8 from '../assets/clientsLogo/ishan-600.png';
import logo9 from '../assets/clientsLogo/logo - vipra foundation  png_fkc4ekfps2hfir.png';
import logo10 from '../assets/clientsLogo/logo -1.png';
import logo11 from '../assets/clientsLogo/logo (2).png';
import logo12 from '../assets/clientsLogo/logocng-Photoroom.png';
import logo13 from '../assets/clientsLogo/riwayat-ngs-ghaziabad-sector-5-ghaziabad-y3ry7pk1pg-Photoroom.png';
import logo14 from '../assets/clientsLogo/Samriddhi-Logo-transparent.png';
import logo15 from '../assets/clientsLogo/tgkf-franchise-logo-1.png';
import logo16 from '../assets/clientsLogo/YNOS316965-Photoroom.png';

const logoFiles = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
  logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16
];

const Clients = () => {
  // Split logos into two equal rows
  const midpoint = Math.ceil(logoFiles.length / 2);
  const firstRow = logoFiles.slice(0, midpoint);
  const secondRow = logoFiles.slice(midpoint);

  const renderRow = (row) => (
    <div className="clients-grid">
      {row.map((logo, index) => (
        <div className="client-logo" key={index}>
          <img 
            src={logo} 
            alt={`Client logo ${index + 1}`} 
            style={{ width: '100px', height: 'auto', objectFit: 'contain' }} 
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="clients-section">
      <div className="logo-container" id="logo-container">
        <h2 className="clients-title">Our Clients</h2>
        {renderRow(firstRow)}
        {renderRow(secondRow)}
      </div>
    </section>
  );
};

export default Clients;
