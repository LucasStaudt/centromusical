import { useState } from 'react'
import { useSoundEnabled } from '../../hooks/useSoundEnabled'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { motion } from 'framer-motion'

const instruments = [
  {
    id: 'drums',
    name: 'Bateria / Percussão',
    icon: '🥁',
    description: 'Desenvolva ritmo e coordenação motora',
    audioUrl: '/audio/drums.mp3'
  },
  {
    id: 'guitar',
    name: 'Violão / Ukulele',
    icon: '🎸',
    description: 'Do choro ao pop, todos os estilos',
    audioUrl: '/audio/guitar.mp3'
  },
  {
    id: 'electric-guitar',
    name: 'Guitarra / Baixo',
    icon: '⚡',
    description: 'Rock, blues, samba e muito mais',
    audioUrl: '/audio/electric-guitar.mp3'
  },
  {
    id: 'violin',
    name: 'Violino / Flauta',
    icon: '🎻',
    description: 'Melodia e expressão clássica',
    audioUrl: '/audio/violin.mp3'
  },
  {
    id: 'piano',
    name: 'Piano / Teclado',
    icon: '🎹',
    description: 'Explore toda a escala musical',
    audioUrl: '/audio/piano.mp3'
  },
  {
    id: 'vocal',
    name: 'Canto / Técnica Vocal',
    icon: '🎤',
    description: 'Expresse-se e desenvolva sua voz',
    audioUrl: '/audio/vocal.mp3'
  }
]

const additionalCourses = [
  { id: 'exam', label: '📋 Preparatório para Prova Específica' },
  { id: 'musicalization', label: '🌟 Musicalização Infantil e Adulto' },
  { id: 'production', label: '🎛️ Produção e Criação em Softwares Musicais' },
  { id: 'theory', label: '🎼 Teoria Musical' },
]

export default function Courses() {
  const [soundEnabled] = useSoundEnabled()
  const prefersReducedMotion = useReducedMotion()
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null)

  const handleAudioPlay = (id: string, audioUrl: string) => {
    if (!soundEnabled || !audioUrl) return

    // Stop previous audio
    if (audioRef) {
      audioRef.pause()
      audioRef.currentTime = 0
    }

    if (playingId === id) {
      setPlayingId(null)
      return
    }

    const audio = new Audio(audioUrl)
    audio.volume = 0.5
    audio.play().catch(() => {
      // Audio file not found - silent fail (expected for placeholder)
      console.log(`Audio file not found: ${audioUrl}`)
    })

    setAudioRef(audio)
    setPlayingId(id)

    audio.onended = () => {
      setPlayingId(null)
    }
  }

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const item = {
    hidden: { y: 16 },
    visible: { y: 0, transition: { duration: 0.35 } }
  }

  return (
    <section
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
          Nossos Cursos
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-2xl)'
          }}
        >
          Nossas aulas são exclusivas, com métodos focados no repertório e
          objetivos de cada aluno.
        </p>

        <motion.div
          variants={prefersReducedMotion ? {} : container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="grid-courses"
        >
          {instruments.map((instrument) => (
            <motion.div
              key={instrument.id}
              variants={prefersReducedMotion ? {} : item}
              className="glass card-course"
              style={{
                cursor: 'pointer',
                transition: 'all var(--transition-normal)'
              }}
              onHoverStart={() =>
                handleAudioPlay(instrument.id, instrument.audioUrl)
              }
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="card-course-icon"
                style={{
                  transition: 'transform var(--transition-normal)',
                  transform:
                    playingId === instrument.id ? 'scale(1.2)' : 'scale(1)'
                }}
              >
                {instrument.icon}
              </div>
              <div className="card-course-body">
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
                    marginBottom: 'var(--spacing-md)'
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'var(--brand-yellow-muted)',
                      color: 'var(--brand-yellow)',
                      padding: '4px 8px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '12px',
                      fontWeight: 600
                    }}
                  >
                    Aula Individual
                  </span>
                </div>
                {soundEnabled && (
                  <div className="sound-hint">
                    {playingId === instrument.id
                      ? '▶ Tocando...'
                      : '🔊 Passe o mouse'}
                  </div>
                )}
                <button
                  className="btn-secondary"
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  style={{ width: '100%' }}
                >
                  Quero aprender
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? {} : { y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            marginTop: 'var(--spacing-2xl)',
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--surface-2)',
            border: '1px solid var(--border)'
          }}
        >
          <p
            style={{
              textAlign: 'center',
              fontWeight: 600,
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-muted)',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
          >
            Também oferecemos
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--spacing-sm)',
              justifyContent: 'center'
            }}
          >
            {additionalCourses.map((course) => (
              <span
                key={course.id}
                style={{
                  backgroundColor: 'var(--brand-yellow-muted)',
                  color: 'var(--brand-yellow)',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '14px',
                  fontWeight: 500,
                  whiteSpace: 'normal'
                }}
              >
                {course.label}
              </span>
            ))}
            <span
              style={{
                backgroundColor: 'transparent',
                color: 'var(--text-muted)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '14px',
                fontWeight: 500,
                border: '1px dashed var(--border)'
              }}
            >
              ✨ E muito mais...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
