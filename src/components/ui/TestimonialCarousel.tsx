import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Testimonial {
  id: number;
  author: string;
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
    text: 'Meu filho ficou mais confiante e começou a se interessar por música. As aulas individualizadas fazem toda a diferença!',
    instrument: 'Violão',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    author: 'Pedro Costa',
    text: 'Procurávamos um lugar onde Ana pudesse aprender no seu ritmo. Aqui ela encontrou!',
    instrument: 'Piano',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 3,
    author: 'Carlos Santos',
    text: 'Excelente metodologia. Os professores realmente se importam com o progresso de cada aluno.',
    instrument: 'Bateria',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  },
];

export default function TestimonialCarousel({
  testimonials = defaultTestimonials,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
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
        <AnimatePresence mode="wait" initial={false}>
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
          </div>
        </motion.div>
        </AnimatePresence>

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
    </>
  );
}
