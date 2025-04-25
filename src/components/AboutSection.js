import React from 'react';
import photoroom1 from '../assets/Capa 1-Photoroom.png';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">Who We Are</h2>
        <p className="about-description">
          Artloop Creations is a full service creative agency built for bold brands and imaginative ideas.
          We’re not just designers — we’re visual storytellers, strategists, and creators who bring brands to life across mediums.
        </p>
        <p className="about-highlight">6+ Years Experience. Worked with 100+ brands.</p>
      </div>
      <div className="about-image">
        <img src={photoroom1}/>
      </div>
    </section>
  );
}
export default AboutSection;
