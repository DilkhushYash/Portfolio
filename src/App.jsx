
import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Research from './components/Research';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div>
        <Hero />
      </div>
      <About />
      <Education />
      <Skills />
      <Projects />
      <Research />
      <Contact />
    </div>
  );
};

export default App;
