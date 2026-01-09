import React from 'react';
import './Header.scss';
import { FiArrowUpRight } from "react-icons/fi";
import logo from '../assets/Frame 1038.png';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Sasthi Interiors Logo" />
                <span>
                    Sasthi
                    <br />
                    Interiors
                </span>
            </div>
            <nav className="header__nav">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#services">Services</a>
                <a href="#process">Process</a>
                <a href="#contact">Contact</a>
            </nav>
            <button className="header__cta">
                Contact <FiArrowUpRight />
            </button>
        </header>
    );
};

export default Header;
