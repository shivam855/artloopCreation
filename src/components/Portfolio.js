import React from 'react';

function Portfolio() {
  const aspectRatios = ['1-1', '4-3', '6-9', '9-6'];

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
          {aspectRatios.map((ratio, i) => (
            <div className={`portfolio-item ratio-${ratio}`} key={i}>
              {/* <span>Box {i + 1}</span> */}
            </div>
          ))}
        </div>

        <button className="see-more-btn">See More</button>
      </div>
    </section>
  );
}

export default Portfolio;
