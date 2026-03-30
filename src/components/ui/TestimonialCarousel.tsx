import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Testimonial {
  id: number;
  author: string;
  role: string;
  text: string;
  instrument: string;
  videoUrl?: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    author: 'Maria Silva',
    role: 'Mãe de João (9 anos)',
    text: 'Meu filho ficou mais confiante e começou a se interessar por música. As aulas individualizadas fazem toda a diferença!',
    instrument: 'Violão',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    author: 'Pedro Costa',
    role: 'Mãe de Ana (12 anos)',
    text: 'Procurávamos um lugar onde Ana pudesse aprender no seu ritmo. Aqui ela encontrou!',
    instrument: 'Piano',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 3,
    author: 'Carlos Santos',
    role: 'Mãe de Lucas (10 anos)',
    text: 'Excelente metodologia. Os professores realmente se importam com o progresso de cada aluno.',
    instrument: 'Bateria',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export default function TestimonialCarousel({
  testimonials = defaultTestimonials,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isAutoPlay || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length, prefersReducedMotion]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const handleWatchVideo = (videoUrl: string | undefined) => {
    if (videoUrl) {
      setSelectedVideo(videoUrl);
      setShowVideoModal(true);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
        }}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Carousel Container */}
        <motion.div
          key={currentTestimonial.id}
          initial={!prefersReducedMotion ? { opacity: 0 } : {}}
          animate={!prefersReducedMotion ? { opacity: 1 } : {}}
          exit={!prefersReducedMotion ? { opacity: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass"
          style={{
            padding: 'var(--spacing-xl)',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              marginBottom: 'var(--spacing-lg)',
              fontStyle: 'italic',
              lineHeight: 1.8,
              fontSize: '16px',
            }}
          >
            &quot;{currentTestimonial.text}&quot;
          </p>

          <div
            style={{
              borderTop: '1px solid var(--glass-border)',
              paddingTop: 'var(--spacing-md)',
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: '4px' }}>
              {currentTestimonial.author}
            </p>
            <p style={{ fontSize: '14px', marginBottom: '4px' }}>
              {currentTestimonial.role}
            </p>
            {currentTestimonial.videoUrl && (
              <button
                onClick={() => handleWatchVideo(currentTestimonial.videoUrl)}
                style={{
                  marginTop: '8px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid var(--brand-yellow)',
                  backgroundColor: 'transparent',
                  color: 'var(--brand-yellow)',
                  cursor: 'pointer',
                }}
                aria-label="Assistir vídeo do depoimento"
              >
                Assistir vídeo
              </button>
            )}
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          style={{
            position: 'absolute',
            left: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'var(--brand-yellow)',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 10,
          }}
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <button
          onClick={goToNext}
          style={{
            position: 'absolute',
            right: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'var(--brand-yellow)',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 10,
          }}
          aria-label="Next testimonial"
        >
          ›
        </button>

        {/* Dots Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-sm)',
            marginTop: 'var(--spacing-xl)',
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor:
                  index === currentIndex
                    ? 'var(--brand-yellow)'
                    : 'var(--text-muted)',
                transition: 'all var(--transition-normal)',
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && selectedVideo && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(5px)',
          }}
          onClick={() => setShowVideoModal(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '800px',
              aspectRatio: '16 / 9',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: 0,
                fontSize: '32px',
                color: 'var(--brand-yellow)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 1001,
              }}
              aria-label="Close video"
            >
              ✕
            </button>

            <iframe
              src={selectedVideo}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: 'var(--radius-lg)',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
