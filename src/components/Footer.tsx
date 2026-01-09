import React from 'react';
import './Footer.scss';
import logo from '../assets/Frame 1038.png';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo-section">
                    <img src={logo} alt="Sasthi Interiors Logo" />
                    <h2>SASTHI INTERIORS</h2>
                </div>

                <nav className="footer__nav">
                    <a href="#">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#services">Services</a>
                    <a href="#process">Process</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="footer__divider"></div>

                <div className="footer__bottom">
                    <div className="footer__newsletter">
                        <input type="email" placeholder="Enter your mail" />
                        <button type="button">Subscribe</button>
                    </div>
                    <p className="footer__copyright">
                        © 2025 SasthiIntiriors. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
