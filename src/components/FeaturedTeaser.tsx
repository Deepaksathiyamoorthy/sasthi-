import React from 'react';
import './FeaturedTeaser.scss';
import { FiPlay } from "react-icons/fi";
import teaserImg from '../assets/cozy-modern-living-room-with-artwork-plant-2.png';

const FeaturedTeaser: React.FC = () => {
    return (
        <section className="featured-teaser">
            <div className="featured-teaser__container">
                <img src={teaserImg} alt="Featured Interior Design" className="featured-teaser__image" />
                <div className="featured-teaser__overlay">
                    <div className="featured-teaser__play-btn">
                        <FiPlay />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTeaser;
