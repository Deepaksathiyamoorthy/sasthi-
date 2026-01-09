import React from 'react';
import './Projects.scss';
import { FiArrowUpRight } from "react-icons/fi";

// Importing specific assets as requested
import img1 from '../assets/twilight-modern-home-3-2.png';
import img2 from '../assets/twilight-modern-home-3-3.jpeg';
import img3 from '../assets/twilight-modern-home-3-4.jpeg';
import img4 from '../assets/twilight-modern-home-3-5.jpeg';
import img5 from '../assets/twilight-modern-home-3.png';
// Reusing one to fill the 6th spot, or using another suitable asset
import img6 from '../assets/twilight-modern-home-3-2.png';

const projects = [
    { id: 1, image: img1, title: 'Lorem Ipsom', date: 'Oct,25/2025' },
    { id: 2, image: img2, title: 'Lorem Ipsom', date: 'Oct,01/2025' },
    { id: 3, image: img3, title: 'Lorem Ipsom', date: 'Sep,03/2025' },
    { id: 4, image: img4, title: 'Lorem Ipsom', date: 'Jul,25/2025' },
    { id: 5, image: img5, title: 'Lorem Ipsom', date: 'May,20/2025' },
    { id: 6, image: img6, title: 'Lorem Ipsom', date: 'May,01/2025' },
];

const Projects: React.FC = () => {
    return (
        <section className="projects" id="portfolio">
            <div className="projects__container">
                <div className="projects__header">
                    <div className="projects__title-group">
                        <p className="projects__label">OUR PROJECTS</p>
                        <h2 className="projects__title">
                            Spaces We've<br />Transformed
                        </h2>
                    </div>
                    <p className="projects__description">
                        A visual journey of our completed interior projects, designed to inspire
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="projects__card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="projects__image-wrapper">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="projects__card-content">
                                <div className="projects__card-info">
                                    <h3 className="projects__card-title">{project.title}</h3>
                                    <span className="projects__card-date">{project.date}</span>
                                </div>
                                <div className="projects__card-icon">
                                    <FiArrowUpRight />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
