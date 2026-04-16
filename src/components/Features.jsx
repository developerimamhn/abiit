import React from 'react';
import "../assets/style/Features.css";
import cry1 from '../assets/image/cry1.svg';
import cry2 from '../assets/image/cry2.svg';
import cry3 from '../assets/image/cry3.svg';

const Features = () => {
    const featureData = [
        { title: "Place Advanced Orders On-The-Go.", btnText: "Get The App", img: cry1 },
        { title: "Margin Trading With Up To 5x Leverage", btnText: "Learn More", img: cry2 },
        { title: "Trade 100+ Multi Collateral Futures Contracts.", btnText: "Futures Trading", img: cry3 }
    ];

    return (
        <section className="features-section">
            <div className="features-container">
                {featureData.map((item, index) => (
                    <div className="feature-card" key={index}>
                        <div className="card-image-bg">
                            <img src={item.img} alt="" className="card-bg-img" />
                            <div className="card-glow"></div>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">{item.title}</h3>
                            <button className="card-btn">{item.btnText}</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;