import React from 'react';
import '../assets/style/Hero.css';
import HeroImage from '../assets/image/hero-main-3d.svg';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">

                {/* Left Content */}
                <div className="hero-content">
                    {/* Section title */}
                    <div className="relative inline-block text-white text-sm md:text-base bg-white/10 backdrop-blur-md mt-20 mb-10">

                        <span className="uppercase">
                            <div className="platform-tag">WELCOME TO ABIIT</div></span>

                        {/* borders */}
                        <span className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[#F2F2F3]"></span>
                        <span className="absolute top-0 right-0 w-4 h-4 border-r border-t border-[#F2F2F3]"></span>
                        <span className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[#F2F2F3]"></span>
                        <span className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[#F2F2F3]"></span>

                    </div>
                    <h2 className="buy-title">
                        <span className="Color">Web3</span> Journey Starts Here
                    </h2>

                    <div className="registration-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="email-input"
                        />
                        <button className="btn-register-now">Register Now</button>
                    </div>

                    <p className="hero-subtitle">
                        Register now and get up to <span>$30</span> in new user rewards
                    </p>
                </div>

                {/* Right Image */}
                <div className="hero-image-container">
                    <img src={HeroImage} alt="Abiit 3D Platform" className="main-3d-image" />
                    <div className="glow-effect-main"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;