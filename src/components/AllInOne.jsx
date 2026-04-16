import React from 'react';
import '../assets/style/AllInOne.css';
import Features from '../components/Features';
import dashboardImg from '../assets/image/dashboard.svg';
import FutureIcon from '../assets/image/futures-view.svg';
import MarginIcon from '../assets/image/margin-view.svg';
import AppViewicon from '../assets/image/app-view.svg';

const AllInOne = () => {
    return (
        <section className="all-in-one-section">
            <div className="container-1300">

                {/* Main Heading */}
                <h2 className="main-title">
                    Trade Spot And Margin. <span className="neon-text">All In One <br />
                        Powerful Interface.</span>
                </h2>

                {/* Dashboard Image */}
                <div className="dashboard-wrapper">
                    <img src={dashboardImg} alt="Platform Dashboard" className="main-dash-img" />
                    <div className="glow-overlay"></div>
                    <Features />
                </div>
                {/* <Features /> */}

                {/* Action Button */}
                <div className="center-action">
                    <button className="signup-btn-large">Sign Up</button>
                </div>

                {/* Bottom Three Titles */}
                <div className="pillars-grid">
                    <div className="pillar">
                        <div className="icon-placeholder"><img src={AppViewicon} alt="" /></div>
                        <h4>Secure & Reliable Trading Platform</h4>
                        <p>With industry-leading security technology and standardized professional operations, we ensure a smooth, reliable, and safe trading environment.</p>
                    </div>
                    <div className="pillar">
                        <div className="icon-placeholder"><img src={MarginIcon} alt="" /></div>
                        <h4>One-Stop Trading Service</h4>
                        <p>Abiit provides multilingual, high-quality services to users in over ten countries worldwide, serving more than one million users 24/7.</p>
                    </div>
                    <div className="pillar">
                        <div className="icon-placeholder"><img src={FutureIcon} alt="" /></div>
                        <h4>Ecosystem Partnership</h4>
                        <p>Abiit ecosystem partners gain access to multiple strategic resources and share the platform's ecosystem value and rewards.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AllInOne;