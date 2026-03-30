import { useState } from 'react';
import { useSoundEnabled } from '../../hooks/useSoundEnabled';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { motion } from 'framer-motion';

const instruments = [
  {
    id: 'drums',
    name: 'Bateria',
    icon: '🥁',
    description: 'Desenvolva ritmo e coordenação',
    audioUrl: '/audio/drums.mp3',
  },
  {
    id: 'guitar',
    name: 'Violão',
    icon: '🎸',
    description: 'Aprenda seus acordes favoritos',
    audioUrl: '/audio/guitar.mp3',
  },
  {
    id: 'electric-guitar',
    name: 'Guitarra',
    icon: '⚡',
    description: 'Rock, blues, e muito mais',
    audioUrl: '/audio/electric-guitar.mp3',
  },
  {
    id: 'bass',
    name: 'Baixo',
    icon: '🎵',
    description: 'A base rítmica perfeita',
    audioUrl: '/audio/bass.mp3',
  },
  {
    id: 'piano',
    name: 'Piano/Teclado',
    icon: '🎹',
    description: 'Explore toda a escala musical',
    audioUrl: '/audio/piano.mp3',
  },
  {
    id: 'vocal',
    name: 'Canto',
    icon: '🎤',
    description: 'Expresse-se com a sua voz',
    audioUrl: '/audio/vocal.mp3',
  },
];

export default function Courses() {
  const [soundEnabled] = useSoundEnabled();
  const prefersReducedMotion = useReducedMotion();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  const handleAudioPlay = (id: string, audioUrl: string) => {
    if (!soundEnabled) return;

    // Stop previous audio
    if (audioRef) {
      audioRef.pause();
      audioRef.currentTime = 0;
    }

    if (playingId === id) {
      setPlayingId(null);
      return;
    }

    const audio = new Audio(audioUrl);
    audio.volume = 0.5;
    audio.play().catch(() => {
      // Audio file not found - silent fail (expected for placeholder)
      console.log(`Audio file not found: ${audioUrl}`);
    });

    setAudioRef(audio);
    setPlayingId(id);

    audio.onended = () => {
      setPlayingId(null);
    };
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
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
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
          Nossos Instrumentos
        </h2>

        <motion.div
          variants={prefersReducedMotion ? {} : container}
          initial={prefersReducedMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)',
          }}
        >
          {instruments.map((instrument) => (
            <motion.div
              key={instrument.id}
              variants={prefersReducedMotion ? {} : item}
              className="glass"
              style={{
                padding: 'var(--spacing-xl)',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)',
              }}
              onHoverStart={() => handleAudioPlay(instrument.id, instrument.audioUrl)}
              whileHover={{ scale: 1.05 }}
            >
              <div
                style={{
                  fontSize: '48px',
                  marginBottom: 'var(--spacing-md)',
                  transition: 'transform var(--transition-normal)',
                  transform:
                    playingId === instrument.id ? 'scale(1.2)' : 'scale(1)',
                }}
              >
                {instrument.icon}
              </div>
              <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>
                {instrument.name}
              </h3>
              <p style={{ marginBottom: 'var(--spacing-md)' }}>
                {instrument.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-sm)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                <span
                  style={{
                    backgroundColor: 'var(--brand-yellow-muted)',
                    color: 'var(--brand-yellow)',
                    padding: '4px 8px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                >
                  Aula Individual
                </span>
              </div>
              {soundEnabled && (
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  {playingId === instrument.id ? '▶ Tocando...' : '🔊 Passe o mouse'}
                </div>
              )}
              <button
                className="btn-secondary"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ width: '100%' }}
              >
                Quero aprender
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
