import TestimonialCarousel from '../ui/TestimonialCarousel';

export default function SocialProof() {
  const testimonials = [
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

  const teachers = [
    {
      id: 1,
      name: 'Professor João',
      instrument: 'Guitarra & Violão',
      bio: '15 anos de experiência com crianças',
      instagram: '#',
      youtube: '#',
    },
    {
      id: 2,
      name: 'Professora Ana',
      instrument: 'Piano & Teclado',
      bio: '12 anos ensinando música',
      instagram: '#',
      youtube: '#',
    },
    {
      id: 3,
      name: 'Professor Carlos',
      instrument: 'Bateria & Percussão',
      bio: '10 anos com alunos juvenis',
      instagram: '#',
      youtube: '#',
    },
  ];

  return (
    <section
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-surface)',
      }}
    >
      <div className="container">
        {/* Testimonials Section */}
        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            O que Dizem Nossos Pais
          </h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        {/* Teachers Section */}
        <div>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            Conheça Nossos Professores
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--spacing-xl)',
            }}
          >
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="glass"
                style={{
                  padding: 'var(--spacing-xl)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-primary)',
                    margin: '0 auto var(--spacing-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                  }}
                >
                  🎵
                </div>
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>
                  {teacher.name}
                </h3>
                <p
                  style={{
                    color: 'var(--brand-yellow)',
                    fontWeight: 600,
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  {teacher.instrument}
                </p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>{teacher.bio}</p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--spacing-md)',
                  }}
                >
                  <a
                    href={teacher.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '20px' }}
                    title="Instagram"
                  >
                    <svg width="20" height="20" fill="currentColor">
                      <use href="/icons.svg#instagram-icon"></use>
                    </svg>
                  </a>
                  <a
                    href={teacher.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '20px' }}
                    title="YouTube"
                  >
                    <svg width="20" height="20" fill="currentColor">
                      <use href="/icons.svg#youtube-icon"></use>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
