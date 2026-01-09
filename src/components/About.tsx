import React from 'react';
import './About.scss';
import img1 from '../assets/stylish-comfortable-living-room-interior-with-orange-sofa-1.jpeg'; // Provided image
import img2 from '../assets/nature-inspired-kitchen-1.png'; // Picking a secondary image from assets

const About: React.FC = () => {
    return (
        <section className="about" id="about">
            <div className="about__header">
                <div className="about__title-group">
                    <p className="about__label">ABOUT US</p>
                    <h2 className="about__title">
                        Crafting Spaces With<br />Purpose & Precision
                    </h2>
                </div>
                <div className="about__info">
                    <p className="about__description">
                        We blend creativity, functionality, and detail to design residential and commercial interiors.
                    </p>
                    <button className="about__btn">Get a Quote</button>
                </div>
            </div>

            <div className="about__content">
                <div className="about__left">
                    <div className="about__image-wrapper">
                        <img src={img1} alt="Stylish living room with orange sofa" />
                    </div>

                    <div className="about__stats">
                        <div className="about__stat-item">
                            <span className="about__stat-number">50+</span>
                            <span className="about__stat-label">Projects Completed</span>
                        </div>
                        <div className="about__stat-item">
                            <span className="about__stat-number">150+</span>
                            <span className="about__stat-label">Positive Reviews</span>
                        </div>
                        <div className="about__stat-item">
                            <span className="about__stat-number">05+</span>
                            <span className="about__stat-label">Years of Experience</span>
                        </div>
                    </div>
                </div>

                <div className="about__right">
                    <img src={img2} alt="Modern Kitchen Design" />
                </div>
            </div>
        </section>
    );
};

export default About;
