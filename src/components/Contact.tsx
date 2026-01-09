import React from 'react';
import './Contact.scss';
import mapImg from '../assets/🌎-map-maker_-perundurai,-tamil-nadu,-india-(apple-maps-esque).png';

const Contact: React.FC = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <div className="contact__header">
                    <div className="contact__title-group">
                        <p className="contact__label">CONTACT US</p>
                        <h2 className="contact__title">
                            Ready to Transform Your Space?
                        </h2>
                    </div>
                    <p className="contact__description">
                        Contact us today and we'll guide you with the right design, plan, and execution.
                    </p>
                </div>

                <div className="contact__content">
                    <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
                        <div className="contact__form-row">
                            <div className="contact__form-group">
                                <label>First name</label>
                                <input type="text" placeholder="First name" required />
                            </div>
                            <div className="contact__form-group">
                                <label>Last name</label>
                                <input type="text" placeholder="Last name" required />
                            </div>
                        </div>

                        <div className="contact__form-group">
                            <label>Email</label>
                            <input type="email" placeholder="sasthiinteriors@gmail.com" required />
                        </div>

                        <div className="contact__form-group">
                            <label>Phone number</label>
                            <input type="tel" placeholder="+91 89889 00289" required />
                        </div>

                        <div className="contact__form-group">
                            <label>Message</label>
                            <textarea placeholder="Leave us a message..."></textarea>
                        </div>

                        <button type="submit" className="contact__submit-btn">
                            Send Message
                        </button>
                    </form>

                    <div className="contact__map-wrapper">
                        <img src={mapImg} alt="Sasthi Interiors Location Map" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
