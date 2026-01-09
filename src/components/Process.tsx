import React from 'react';
import './Process.scss';
import { FiArrowRight } from "react-icons/fi";

// Assets as requested
import img1 from '../assets/frame-987-2.jpeg';
import img2 from '../assets/frame-988.png';
import img3 from '../assets/frame-989.jpeg';
import img4 from '../assets/architectural-model-creation-1.png';
import img5 from '../assets/frame-988-2.png';
import img6 from '../assets/frame-989-2.jpeg';

const steps = [
    {
        number: '01',
        title: 'Requirement Discussion',
        desc: 'Understanding Your Needs',
        image: img1
    },
    {
        number: '02',
        title: 'Space Measurement',
        desc: 'Accurate Site Analysis',
        image: img2
    },
    {
        number: '03',
        title: '2D Layout Drafting',
        desc: 'Plan & Structure',
        image: img3
    },
    {
        number: '04',
        title: '3D Visualizations',
        desc: 'See Your Space',
        image: img4
    },
    {
        number: '05',
        title: 'Material Selection',
        desc: 'Choose Quality Materials',
        image: img5
    },
    {
        number: '06',
        title: 'Execution',
        desc: 'Build With Precision',
        image: img6
    }
];

const Process: React.FC = () => {
    return (
        <section className="process" id="process">
            <div className="process__container">
                <div className="process__header">
                    <div className="process__title-group">
                        <p className="process__label">OUR PROCESS</p>
                        <h2 className="process__title">
                            A Seamless Design<br />Journey
                        </h2>
                    </div>
                    <p className="process__description">
                        Experience a smooth, transparent process that ensures quality, clarity, and precision at every stage.
                    </p>
                </div>

                <div className="process__grid">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="process__step"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <div className="process__step-header">
                                <FiArrowRight /> {step.number}
                            </div>
                            <div className="process__image-wrapper">
                                <img src={step.image} alt={step.title} />
                            </div>
                            <div className="process__step-info">
                                <h3 className="process__step-title">{step.title}</h3>
                                <p className="process__step-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
