import React from 'react';
import packaging_01 from '../assets/portfolios/packaging_01.webp';
import packaging_02 from '../assets/portfolios/packaging_02.webp';
import packaging_03 from '../assets/portfolios/packaging_03.webp';
import packaging_04 from '../assets/portfolios/packaging_05.webp';
import packaging_05 from '../assets/portfolios/7731b5176821111.676e9f6ebbe41.jpg';

function Portfolio() {
  const images = [
    { src: packaging_01, ratio: '1-1' },
    { src: packaging_02, ratio: '4-3' },
    { src: packaging_03, ratio: '6-9' },
    // { src: packaging_04, ratio: '9-6' },
    // { src: packaging_05, ratio: '1-1' },
  ];

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
          {images.map((image, i) => (
            <div className={`portfolio-item ratio-${image.ratio}`} key={i}>
              <img src={image.src} alt={`Portfolio ${i + 1}`} />
            </div>
          ))}
        </div>

        <button className="see-more-btn">See More</button>
      </div>
    </section>
  );
}

export default Portfolio;
