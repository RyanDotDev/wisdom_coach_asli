"use client"
import React, { useState, useEffect } from 'react';
import Banner from "./components/Banner";
import Opening from "./components/Opening";
import Service from './components/Service';
import About from './components/About';
import FAQS from './components/FAQS';
import FreeStory from './components/FreeStory';
import Contact from './components/Contact';
import Approach from './components/Approach';

export default function HomeContainer() {
  const [bgColour, setBgColour] = useState('#FEF9EE');

  useEffect(() => {
    const handleScroll = () => {
      // const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      const openingHeight = document.getElementById("opening")?.offsetHeight || 0;
      const serviceHeight = document.getElementById("service")?.offsetHeight || 0;
      const aboutHeight = document.getElementById("about")?.offsetHeight || 0;
      const faqsHeight = document.getElementById("faqs")?.offsetHeight || 0;
      const scrollY = window.scrollY;

      // const bannerTrigger = bannerHeight * 0.6;
      const openingTrigger = openingHeight * 0.6;
      const serviceTrigger = openingHeight + (serviceHeight * 0.4);
      const aboutTrigger = serviceHeight + (aboutHeight * 0.9);
      const faqsTrigger = aboutHeight + (faqsHeight * 0.9);

      const ranges = [
        { max: openingTrigger, color: '#ffffff' }, // Opening section
        { max: serviceTrigger, color: '#ffffff' }, // Service section
        { max: aboutTrigger, color: '#ffffff' }, // About section
        { max: faqsTrigger, color: '#ffffff' }, // About section
        { max: Infinity, color: '#FEF9EE' }, // default/fallback
      ];

      const match = ranges.find(range => scrollY < range.max);
      if (match) setBgColour(match.color)
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <main>
      {/* HERO/BANNER */}
      <section>
        <Banner />
      </section>

      {/* MAIN CONTENT */}
      <div style={{ backgroundColor: bgColour, transition: "background-color 0.5s ease" }} >
        <section id='opening'>
          <Opening />
        </section>
        <section id='service'>
          <Service />
        </section>
        <section id='approach'>
          <Approach />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='faqs'>
          <FAQS />
        </section>
        <section id='free-story'>
          <FreeStory />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </div>
    </main>
  )
};
