import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Mission() {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="container">
        <motion.div
          initial={prefersReducedMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Nossa Missão</h2>
          <blockquote
            style={{
              fontSize: '20px',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              borderLeft: '4px solid var(--brand-yellow)',
              paddingLeft: 'var(--spacing-xl)',
              marginBottom: 'var(--spacing-2xl)',
              fontStyle: 'italic',
            }}
          >
            "Cada criança tem um ritmo. A nossa missão é encontrar o dela e desenvolvê-la através da música."
          </blockquote>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--spacing-xl)',
              marginTop: 'var(--spacing-2xl)',
            }}
          >
            <motion.div
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3
                style={{
                  color: 'var(--brand-yellow)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                +500
              </h3>
              <p>Alunos Satisfeitos</p>
            </motion.div>
            <motion.div
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3
                style={{
                  color: 'var(--brand-yellow)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                15+
              </h3>
              <p>Anos de Experiência</p>
            </motion.div>
            <motion.div
              initial={prefersReducedMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3
                style={{
                  color: 'var(--brand-yellow)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                100%
              </h3>
              <p>Aulas Individualizadas</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
