import React, { useEffect } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Process from './components/Process';
import Projects from './components/Projects';
import FeaturedTeaser from './components/FeaturedTeaser';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <div data-aos="fade-up"><About /></div>
            <div data-aos="fade-up"><Projects /></div>
            <div data-aos="fade-up"><Expertise /></div>
            <div data-aos="fade-up"><Process /></div>
            <div data-aos="fade-up"><FeaturedTeaser /></div>
            <div data-aos="fade-up"><Contact /></div>
            <Footer />
        </>
    )
}

export default App
