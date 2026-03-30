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
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.3,
          zIndex: 0,
        }}
      >
        <source src="/video/hero-background.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Seu navegador não suporta o elemento de vídeo.
      </video>

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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--spacing-2xl)',
            alignItems: 'center',
          }}
        >
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

          {/* Image/Placeholder with parallax */}
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '400px',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '2px solid var(--glass-border)',
              position: 'relative',
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
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
              [Vídeo/Imagem do Hero]
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          [style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
