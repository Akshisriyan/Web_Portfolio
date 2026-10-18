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
  BackToTop,
  MotionProvider,
} from '@/components';

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main id="main">
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
      <BackToTop />
    </MotionProvider>
  );
}
