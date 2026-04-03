import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
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
          opacity: 0.12,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <iframe
          src="https://www.youtube-nocookie.com/embed/1ZqvyVVzG4Y?autoplay=1&mute=1&loop=1&playlist=1ZqvyVVzG4Y&controls=0&showinfo=0&modestbranding=1&playsinline=1&start=3"
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="autoplay; encrypted-media"
          title="Hero background video"
          loading="eager"
        />
      </div>

      {/* No overlay — background is already dark (#0a0a0a) */}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid-2-col">
          {/* Content */}
          <motion.div
            initial={!prefersReducedMotion ? { x: -40 } : {}}
            animate={!prefersReducedMotion ? { x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1
              style={{
                fontSize: 'clamp(52px, 10vw, 80px)',
                marginBottom: 'var(--spacing-lg)',
                lineHeight: 1.1
              }}
            >
              Domine seu instrumento, no seu ritmo.
            </h1>
            <motion.p
              style={{
                fontSize: '18px',
                marginBottom: 'var(--spacing-xl)',
                color: 'var(--text-muted)',
                maxWidth: '500px'
              }}
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
              initial={!prefersReducedMotion ? { y: 20 } : {}}
              animate={!prefersReducedMotion ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
              style={{
                minHeight: '56px'
              }}
            >
              Agendar Aula Experimental
            </motion.button>
          </motion.div>

          {/* Video showcase */}
          <div
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
              transform: 'translateZ(0)',
              isolation: 'isolate'
            }}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/PmYLalpiKCM?si=FRb8V7RMtoJtAmb9"
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Centro Musical LB"
              loading="lazy"
            />
          </div>
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
  )
}
