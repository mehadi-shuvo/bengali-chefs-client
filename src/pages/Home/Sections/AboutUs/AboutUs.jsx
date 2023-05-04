import React from 'react';
import aboutUs from '../../../../assets/aboutUs.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content w-4/5 mx-auto flex-col lg:flex-row">
                <img src={aboutUs} className="max-w-sm mask mask-hexagon shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">About BengaliChefs</h1>
                    <p className="py-6">BengaliChefs prepares and serves exquisite dinners to parties from two to 200 at your home, business or private catering event. His blend of French-Mediterranean cuisine draws on a lifetime of skills and the knowledge that all meals, no matter how large or how small, are special events among family and friends</p>
                    <button className="btn py-2 px-4 bg-red-500 text-white font-semibold border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;