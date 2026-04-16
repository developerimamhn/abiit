import React from 'react';
import '../assets/style/FooterSection.css';
import appCtaImage from '../assets/image/app-cta.png'; 
import abiitLogo from '../assets/image/main-logo.svg'; 
import { FaApple, FaGooglePlay, FaDiscord, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { BsAndroid2 } from "react-icons/bs";
import { FiX } from "react-icons/fi"; 

const FooterSection = () => {
  const footerLinks = [
    {
      title: "ABOUT",
      links: ["About Us", "User Agreement", "Risk Disclosure", "Security & Compliance", "Disclaimer"],
    },
    {
      title: "PRODUCTS",
      links: ["Spot Trading", "Contract Trading"],
    },
    {
      title: "SERVICES",
      links: ["Partnership Consulting", "Listing Application", "Open API", "Service Agreement"],
    },
    {
      title: "SUPPORT",
      links: ["Help Center", "Submit Ticket", "FAQ"],
    },
  ];

  return (
    <footer className="footer-section">
      <div className="container-1300">
        {/* App CTA Card  */}
        <div className="app-cta-card">
          <div className="app-cta-content">
            <h2 className="app-cta-title">
              Start Your <span className="neon-text">Crypto <br /> Journey Tody</span>
            </h2>
            <button className="btn-get-started">Get Started With Abiit</button>
            
            <div className="app-store-btns">
              <button className="store-btn"><FaApple className="icon" /> App Store</button>
              <button className="store-btn"><FaGooglePlay className="icon" /> Google Play</button>
              <button className="store-btn"><FaApple className="icon" /> iOS</button>
              <button className="store-btn"><BsAndroid2 className="icon" /> Android</button>
            </div>
          </div>
          <div className="app-cta-image-wrapper">
            <img src={appCtaImage} alt="Crypto Journey" className="app-cta-main-img" />
            <div className="image-glow"></div>
          </div>
        </div>

        {/* Links */}
        <div className="footer-middle-block">
          <div className="brand-col">
            <div className="brand-logo">
              <img src={abiitLogo} alt="Abiit" className="brand-logo-img" />
              <span className="brand-name">Abiit</span>
            </div>
            <p className="brand-tagline">Take your crypto trading to the next level.</p>
            <div className="auth-btns">
              <button className="btn-create">Create Account</button>
              <button className="btn-sign-in">Sign in</button>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon-btn"><FaDiscord /></a>
              <a href="#" className="social-icon-btn"><FaInstagram /></a>
              <a href="#" className="social-icon-btn"><FiX /></a>
              <a href="#" className="social-icon-btn"><FaFacebookF /></a>
            </div>
          </div>

          <div className="links-col">
            {footerLinks.map((section, index) => (
              <div className="link-group" key={index}>
                <h4 className="group-title">{section.title}</h4>
                <ul className="group-links">
                  {section.links.map((link, i) => (
                    <li key={i}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom-block">
          <p className="copyright-text">@2025 All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;