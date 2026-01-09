import React, { useState, useEffect, useRef } from 'react';
import './About.scss';
import img1 from '../assets/stylish-comfortable-living-room-interior-with-orange-sofa-1.jpeg'; // Provided image
import img2 from '../assets/nature-inspired-kitchen-1.png'; // Picking a secondary image from assets

const AnimatedCounter = ({ end, duration = 2000, suffix = "", minDigits = 1 }: { end: number, duration?: number, suffix?: string, minDigits?: number }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                let startTimestamp: number | null = null;
                const step = (timestamp: number) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    setCount(Math.floor(progress * end));
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.disconnect();
        };
    }, [end, duration]);

    const formattedCount = String(count).padStart(minDigits, '0');

    return (
        <span ref={elementRef} className="about__stat-number">
            {formattedCount}{suffix}
        </span>
    );
};

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
                            <AnimatedCounter end={50} suffix="+" />
                            <span className="about__stat-label">Projects Completed</span>
                        </div>
                        <div className="about__stat-item">
                            <AnimatedCounter end={150} suffix="+" />
                            <span className="about__stat-label">Positive Reviews</span>
                        </div>
                        <div className="about__stat-item">
                            <AnimatedCounter end={5} suffix="+" minDigits={2} />
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
