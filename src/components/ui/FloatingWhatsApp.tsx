import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function FloatingWhatsApp() {
  const prefersReducedMotion = useReducedMotion();

  const whatsappUrl = 'https://wa.me/5551999999999?text=Olá! Gostaria de agendar uma aula experimental.';

  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000,
      }}
      initial={!prefersReducedMotion ? { scale: 0, opacity: 0 } : {}}
      animate={!prefersReducedMotion ? { scale: 1, opacity: 1 } : {}}
      transition={{ delay: 1, duration: 0.3 }}
    >
      {/* Pulse animation ring */}
      {!prefersReducedMotion && (
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(37, 211, 102, 0.3)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          boxShadow: '0 6px 18px rgba(37, 211, 102, 0.4)',
          color: '#fff',
          position: 'relative',
          zIndex: 1,
        }}
        whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
        whileTap={!prefersReducedMotion ? { scale: 0.92 } : {}}
        animate={!prefersReducedMotion ? {
          boxShadow: [
            '0 6px 18px rgba(37, 211, 102, 0.4)',
            '0 8px 24px rgba(37, 211, 102, 0.6)',
            '0 6px 18px rgba(37, 211, 102, 0.4)',
          ],
        } : {}}
        transition={{
          boxShadow: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        aria-label="Fale conosco no WhatsApp"
        title="Fale conosco no WhatsApp"
      >
        <FaWhatsapp size={32} />
      </motion.a>
    </motion.div>
  );
}