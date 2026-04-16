import React from 'react';
import '../assets/style/BuyCrypto.css';
import cryptoIllust from '../assets/image/buycrypto.svg'; 

const BuyCrypto = () => {
    const steps = [
        { id: 1, text: "Create your free Abiit account" },
        { id: 2, text: "Deposit cash or crypto" },
        { id: 3, text: "Buy and sell 570 cryptocurrencies" }
    ];

    return (
        <section className="buy-section">
            <div className="buy-container">

                {/* Left Side */}
                <div className="buy-image-side">
                    <img src={cryptoIllust} alt="Crypto Platform" className="buy-main-img" />
                    <div className="buy-glow"></div>
                </div>

                {/* Right Side  */}
                <div className="buy-content-side">
                    {/* Section title */}
                    <div className="relative inline-block text-white text-sm md:text-base bg-white/10 backdrop-blur-md mt-20 mb-10">

                        <div className="platform-tag">CRYPTO PLATFORM</div>
                        <span className="uppercase"></span>

                        {/* borders */}
                        <span className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[#F2F2F3]"></span>
                        <span className="absolute top-0 right-0 w-4 h-4 border-r border-t border-[#F2F2F3]"></span>
                        <span className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[#F2F2F3]"></span>
                        <span className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[#F2F2F3]"></span>

                    </div>
                    <h2 className="buy-title">
                        <span className="Color">Buy Crypto</span> In Minutes
                    </h2>

                    <div className="steps-list">
                        {steps.map((step) => (
                            <div className="step-card" key={step.id}>
                                <div className="step-number">{step.id}</div>
                                <p className="step-text">{step.text}</p>
                            </div>
                        ))}
                    </div>

                    <button className="btn-signup">Sign Up</button>
                </div>

            </div>
        </section>
    );
};

export default BuyCrypto;