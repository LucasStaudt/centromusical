import { useEffect, useState } from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useSoundEnabled } from '../../hooks/useSoundEnabled';
import icon from '../../assets/images/icon.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy();
  const [soundEnabled, setSoundEnabled] = useSoundEnabled();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'hero', label: 'Início' },
    { id: 'mission', label: 'Sobre' },
    { id: 'courses', label: 'Instrumentos' },
    { id: 'social-proof', label: 'Depoimentos' },
    { id: 'contact', label: 'Contato' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={styles.navbar}
      style={{
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
        padding: isScrolled ? '8px var(--spacing-lg)' : '16px var(--spacing-lg)',
        transition: 'all 0.3s ease',
        opacity: isScrolled ? 1 : 0.95,
      }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <button
          className={styles.logo}
          onClick={() => scrollToSection('hero')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.3s ease',
          }}
          aria-label="Centro Musical LB"
        >
          <img 
            src={icon} 
            alt="Centro Musical LB Logo" 
            style={{
              height: isScrolled ? '32px' : '40px',
              width: 'auto',
              transition: 'all 0.3s ease',
            }}
          />
        </button>

        {/* Desktop Menu */}
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
                style={{
                  color:
                    activeSection === item.id
                      ? 'var(--brand-yellow)'
                      : 'var(--text-primary)',
                  textDecoration: activeSection === item.id ? 'underline' : 'none',
                  transition: 'all var(--transition-normal)',
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Sound Toggle & Social & Hamburger */}
        <div className={styles.controls}>
          <a
            href="https://instagram.com/centromusicallb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Siga-nos no Instagram"
            title="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://youtube.com/@centromusicallb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Nosso canal no YouTube"
            title="YouTube"
          >
            <FaYoutube size={20} />
          </a>
          <button
            className={styles.soundToggle}
            onClick={() => setSoundEnabled(!soundEnabled)}
            aria-label={soundEnabled ? 'Desativar som' : 'Ativar som'}
            title={soundEnabled ? 'Som ativado' : 'Som desativado'}
            style={{
              color: soundEnabled
                ? 'var(--brand-yellow)'
                : 'var(--text-muted)',
            }}
          >
            {soundEnabled ? <HiVolumeUp size={20} /> : <HiVolumeOff size={20} />}
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                color:
                  activeSection === item.id
                    ? 'var(--brand-yellow)'
                    : 'var(--text-primary)',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
