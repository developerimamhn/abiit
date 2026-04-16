import React from 'react';
import '../assets/style/Stats.css'; 

const Stats = () => {
    const statsData = [
        { label: "CRYPTO ASSETS", value: "568" },
        { label: "TOTAL PLATFORM TRANSACTION", value: "$55B+" },
        { label: "MOUNTIES CONNECTED", value: "190+" },
        { label: "TEAM MEMBERS", value: "20+" }
    ];

    return (
        <section className="stats-section">
            <div className="stats-container">
                {statsData.map((stat, index) => (
                    <div className="stat-item" key={index}>
                        <p className="stat-label">{stat.label}</p>
                        <h2 className="stat-value">{stat.value}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;