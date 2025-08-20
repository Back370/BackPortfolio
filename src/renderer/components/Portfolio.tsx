import React from 'react';
import { useScrollEffects } from '../hooks/useScrollEffects';
import Header from './Header';
import Navigation from './Navigation';
import Works from './Works';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import PageTop from './PageTop';

function Portfolio() {
  useScrollEffects();

  return (
    <div className="wrapper">
      <main className="content">
        <Header />
        <Navigation />
        <Works />
        <Skills />
        <About />
        <Contact />
        <PageTop />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
