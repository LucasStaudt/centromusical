import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 'max(177.78vh, 100vw)',
          height: 'max(56.25vw, 100vh)',
          transform: 'translate(-50%, -50%)',
          opacity: 0.25,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/1ZqvyVVzG4Y?autoplay=1&mute=1&loop=1&playlist=1ZqvyVVzG4Y&controls=0&showinfo=0&modestbranding=1&playsinline=1"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allow="autoplay; encrypted-media"
          title="Hero background video"
          loading="eager"
        />
      </div>

      {/* Background overlay with parallax effect */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(255, 214, 0, 0.1) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
        initial={!prefersReducedMotion ? { opacity: 0 } : {}}
        animate={!prefersReducedMotion ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid-2-col">

          {/* Content */}
          <motion.div
            initial={!prefersReducedMotion ? { opacity: 0, x: -40 } : {}}
            animate={!prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1
              style={{
                fontSize: 'clamp(52px, 10vw, 80px)',
                marginBottom: 'var(--spacing-lg)',
                lineHeight: 1.1,
              }}
            >
              Domine seu instrumento, no seu ritmo.
            </h1>
            <motion.p
              style={{
                fontSize: '18px',
                marginBottom: 'var(--spacing-xl)',
                color: 'var(--text-muted)',
                maxWidth: '500px',
              }}
              initial={!prefersReducedMotion ? { opacity: 0 } : {}}
              animate={!prefersReducedMotion ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Aulas individualizadas e personalizadas. Aprenda a música que você
              ama, com quem se importa com seu progresso.
            </motion.p>
            <motion.button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              aria-label="Marcar aula experimental via WhatsApp"
              initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : {}}
              animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
              style={{
                minHeight: '56px',
              }}
            >
              Agendar Aula Experimental
            </motion.button>
          </motion.div>

          {/* Video showcase */}
          <motion.div
            className="hero-video-showcase"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '480px',
              maxWidth: '270px',
              margin: '0 auto',
              borderRadius: 'var(--radius-lg)',
              border: '2px solid var(--glass-border)',
              position: 'relative',
              overflow: 'hidden',
            }}
            initial={!prefersReducedMotion ? { opacity: 0, x: 40 } : {}}
            animate={!prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={
              !prefersReducedMotion
                ? { scale: 1.02, boxShadow: '0 20px 40px rgba(255, 214, 0, 0.1)' }
                : {}
            }
          >
            <iframe
              src="https://www.youtube.com/embed/1ZqvyVVzG4Y?playsinline=1"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Centro Musical LB"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-video-showcase {
            height: 400px !important;
            max-width: 220px !important;
          }
        }
      `}</style>
    </div>
  );
}
