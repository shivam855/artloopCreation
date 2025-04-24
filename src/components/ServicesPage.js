import React from 'react';

const ServicesPage = () => {
  return (
    <div className="services-page" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
      <h1>What We Offer</h1>
      <ul>
        <li><strong>Branding & Identity:</strong> We help brands find their voice and visual identity — from logos to brand guidelines.</li>
        <li><strong>Graphic Design:</strong> Print and digital designs that communicate clearly and leave a lasting impression.</li>
        <li><strong>YouTube Thumbnails:</strong> Scroll-stopping thumbnails and cohesive channel assets to boost engagement and growth.</li>
        <li><strong>Social Media Creatives:</strong> From carousels to reels, we create engaging content that aligns with trends and strategy.</li>
        <li><strong>Marketing Materials:</strong> Pitch decks, flyers, banners, brochures — designed to convert and impress.</li>
        <li><strong>3D Modeling & CGI Ads:</strong> Hyper-realistic visuals for products, ads, and digital campaigns.</li>
        <li><strong>Reels Editing & Short-Form Videos:</strong> We craft visually dynamic, trend-aware video edits that drive engagement.</li>
        <li><strong>Video Editing:</strong> Professional edits that match your tone and messaging — from YouTube to brand stories.</li>
        <li><strong>Content Writing:</strong> Captivating copy for campaigns, captions, websites, and ads — tailored to your brand voice.</li>
      </ul>
      <div style={{ marginTop: '2rem' }}>
        <button className="cta-button" style={{ padding: '1rem 2rem', backgroundColor: '#6c63ff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}>
          Let’s Bring Your Vision to Life →
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
