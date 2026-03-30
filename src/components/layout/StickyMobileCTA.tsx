import { useEffect, useState } from 'react';

export default function StickyMobileCTA() {
  const [isInContact, setIsInContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsInContact(rect.top < window.innerHeight);
      }
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

  if (!isInContact) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 'var(--spacing-md)',
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        borderTop: '1px solid var(--glass-border)',
        display: 'none',
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
  );
}

const style = document.createElement('style');
style.textContent = `
  @media (max-width: 768px) {
    .mobile-cta {
      display: flex !important;
    }
  }
`;
document.head.appendChild(style);
