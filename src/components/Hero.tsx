import React from 'react';
import './Hero.scss';
import { FiArrowUpRight } from "react-icons/fi";
import heroImg from '../assets/229339734_11049426-1.png';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">
                    Where Your Space Meets<br />Our Creativity
                </h1>
                <p className="hero__subtitle">
                    Discover how Sasthi Interiors blends innovation and elegance to transform ordinary spaces into extraordinary havens.
                </p>
                <div className="hero__actions">
                    <button className="hero__btn hero__btn--outline">
                        Explore our Works
                    </button>
                    <button className="hero__btn hero__btn--primary">
                        Contact <FiArrowUpRight />
                    </button>
                </div>
            </div>

            <div className="hero__image-container">
                <img src={heroImg} alt="Modern Architectural House" className="hero__image" />
            </div>
        </section>
    );
};

export default Hero;
