import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-section">
          <p className="portfolio-title">Portfolio</p>
          <br />
          <a href="#" className="portfolio-link">
            Show Me Everything <span className="arrows">&gt;&gt;</span>
          </a>
        </div>
        <div className="portfolio-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="portfolio-item" key={i}></div>
          ))}
        </div>
        <button className="see-more-btn">See More</button>
      </div>
    </section>
  );
}

export default Portfolio;
