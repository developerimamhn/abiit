import React, { useState } from 'react';
import '../assets/style/Portfolio.css';
import imgPopular from '../assets/image/portfolio-main.svg';
import imgRewards from '../assets/image/portfolio-rewards.png';
import imgStable from '../assets/image/portfolio-stable.png';
import imgNewly from '../assets/image/portfolio-newly.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Popular");

  const categories = ["Popular", "Rewards", "Siablecoins", "Newly Listed"];
  const portfolioImages = {
    "Popular": imgPopular,
    "Rewards": imgRewards,
    "Siablecoins": imgStable,
    "Newly Listed": imgNewly
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="portfolio-title">
          Build Your <span className="Color">Crypto Portfolio</span>
        </h2>

        <div className="filter-tabs">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              className={`tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)} 
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-display-area">
          <img 
            key={activeTab} 
            src={portfolioImages[activeTab]} 
            alt={`${activeTab} Portfolio`} 
            className="portfolio-main-img" 
          />
          <div className="portfolio-glow-effect"></div>
        </div>

        <button className="btn-signup">Sign Up</button>
      </div>
    </section>
  );
};

export default Portfolio;