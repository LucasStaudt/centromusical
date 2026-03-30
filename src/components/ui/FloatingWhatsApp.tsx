import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function FloatingWhatsApp() {
  const prefersReducedMotion = useReducedMotion();

  const handleWhatsAppClick = () => {
    // Using a placeholder WhatsApp number - should be updated with real number
    const whatsappUrl = 'https://wa.me/5551999999999?text=Olá! Gostaria de agendar uma aula experimental.';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
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
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(37, 211, 102, 0.3)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.button
          onClick={handleWhatsAppClick}
          style={{
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            boxShadow: '0 6px 18px rgba(37, 211, 102, 0.4)',
            position: 'relative',
          }}
          whileHover={!prefersReducedMotion ? { scale: 1.08 } : {}}
          whileTap={!prefersReducedMotion ? { scale: 0.92 } : {}}
          animate={!prefersReducedMotion ? {
            boxShadow: [
              '0 6px 18px rgba(37, 211, 102, 0.4)',
              '0 8px 24px rgba(37, 211, 102, 0.55)',
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
          💬
        </motion.button>

        <span
          style={{
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '12px',
            padding: '3px 8px',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.03em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          WhatsApp
        </span>
      </div>
    </motion.div>
  );
}