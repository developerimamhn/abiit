import React from 'react';
import '../assets/style/Rewards.css';
import rewardsBanner from '../assets/image/rewards-card.png'; 

const Rewards = () => {
  return (
    <section className="rewards-section">
      <div className="rewards-container">
        
        {/* Header Content */}
        <div className="rewards-header">
          <h2 className="rewards-title">
            Earn Weekly Rewards <br />
            On <span className="Color">Your Crypto</span>
          </h2>
          <p className="rewards-desc">
            Rewards are available on the assets listed below. Earnings are 
            paid to your account automatically on a weekly basis, in the 
            same asset that earned them.
          </p>
        </div>

        {/* Image */}
        <div className="rewards-display-area">
          <img src={rewardsBanner} alt="Rewards Portfolio" className="rewards-main-img" />
          <div className="rewards-glow"></div>
        </div>

      </div>
    </section>
  );
};

export default Rewards;