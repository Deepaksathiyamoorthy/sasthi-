import React, { useState } from 'react';
import './Expertise.scss';
import { FiArrowUpRight, FiPlus, FiX } from "react-icons/fi";

// Assets as requested
import resImg from '../assets/frame-26.jpeg';
import comImg from '../assets/minimalist-interior-design-1.png';

interface ExpertiseItem {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    stat: string;
    statDesc: string;
    description: string;
    image: string;
}

const expertiseData: ExpertiseItem[] = [
    {
        id: '01',
        number: '01',
        title: 'Residential Interiors',
        subtitle: 'Elegant, livable spaces',
        stat: '25+',
        statDesc: '/ Tailored home environments',
        description: 'We create refined, functional interiors that reflect your lifestyle—balancing comfort, sophistication, and thoughtful material choices.',
        image: resImg,
    },
    {
        id: '02',
        number: '02',
        title: 'Commercial Interiors',
        subtitle: 'Elegant, livable spaces',
        stat: '15+',
        statDesc: '/ Productive work environments',
        description: 'Our commercial designs prioritize functionality and brand identity, creating spaces that engage clients and inspire productivity.',
        image: comImg,
    }
];

const Expertise: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>('01');

    const toggleOpen = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="expertise" id="services">
            <div className="expertise__container">
                <div className="expertise__header">
                    <p className="expertise__label">OUR EXPERTISE</p>
                    <h2 className="expertise__title">
                        Crafting thoughtful interiors with creativity
                    </h2>
                </div>

                <div className="expertise__divider"></div>

                <div className="expertise__list">
                    {expertiseData.map((item) => (
                        <div
                            key={item.id}
                            className="expertise__item"
                            onClick={() => toggleOpen(item.id)}
                        >
                            <div className="expertise__item-header">
                                <span className="expertise__item-number">{item.number}</span>
                                <div className="expertise__item-preview">
                                    <h3 className="expertise__item-title">{item.title}</h3>
                                    <span className="expertise__item-subtitle">{item.subtitle}</span>
                                </div>
                                <div className="expertise__toggle">
                                    {openId === item.id ? <FiX /> : <FiPlus />}
                                </div>
                            </div>

                            {openId === item.id && (
                                <div className="expertise__item-content">
                                    <div className="expertise__image-wrapper">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="expertise__details">
                                        <div className="expertise__stat">
                                            <span className="expertise__stat-value">{item.stat}</span>
                                            <span className="expertise__stat-desc">{item.statDesc}</span>
                                        </div>
                                        <p className="expertise__text">
                                            {item.description}
                                        </p>
                                        <button className="expertise__btn">
                                            Contact <FiArrowUpRight />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
