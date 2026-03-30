import { useEffect, useState } from 'react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const contactSection = document.getElementById('contact');

      // Show after scrolling past hero, hide when in contact section
      const pastHero = heroSection
        ? heroSection.getBoundingClientRect().bottom < 0
        : false;
      const inContact = contactSection
        ? contactSection.getBoundingClientRect().top < window.innerHeight
        : false;

      setIsVisible(pastHero && !inContact);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 'var(--spacing-md)',
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid var(--glass-border)',
          justifyContent: 'center',
          zIndex: 99,
        }}
        className="mobile-cta"
      >
        <button
          className="btn-primary"
          onClick={scrollToHero}
          style={{ width: '100%' }}
        >
          Reserve sua Aula Experimental
        </button>
      </div>
      <style>{`
        .mobile-cta { display: none; }
        @media (max-width: 768px) {
          .mobile-cta { display: flex !important; }
        }
      `}</style>
    </>
  );
}
