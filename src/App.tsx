import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Mission from './components/sections/Mission';
import Courses from './components/sections/Courses';
import SocialProof from './components/sections/SocialProof';
import Contact from './components/sections/Contact';
import StickyMobileCTA from './components/layout/StickyMobileCTA';
import CustomCursor from './components/ui/CustomCursor';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <HelmetProvider>
      <div className="bg-primary" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <CustomCursor />
        <Navbar />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="mission">
            <Mission />
          </section>
          <section id="courses">
            <Courses />
          </section>
          <section id="social-proof">
            <SocialProof />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
        <StickyMobileCTA />
        <FloatingWhatsApp />
      </div>
    </HelmetProvider>
  );
}

export default App;
