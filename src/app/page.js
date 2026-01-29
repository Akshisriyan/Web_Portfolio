'use client';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

import {
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Education,
  Awards,
  Contact,
  Footer,
  AICharacter,
} from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <AICharacter />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
