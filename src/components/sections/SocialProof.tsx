import TestimonialCarousel from '../ui/TestimonialCarousel';

export default function SocialProof() {
  const testimonials = [
    {
      id: 1,
      author: 'Eduardo Kühn',
      role: 'Mãe de João (9 anos)',
      text: 'Excelente escola! Cheguei sem saber absolutamente nada de violão e graças ao professor João hoje em dia já me divirto muito com a música! Gostamos tanto que hoje toda a família faz aulas na escola. Parabéns Lauro e Fabi, continuem assim!',
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
      instrument: 'Todos os instrumentos',
      bio: 'Ensinando todas as idades a tocarem seus instrumentos favoritos',
    },
    {
      id: 2,
      name: 'Professor/Diretor Lauro',
      instrument: 'Bateria & Violão',
      bio: 'Musica é para todos, e ele prova isso com seus alunos de todas as idades',
    },
    {
      id: 3,
      name: 'Diretora Fabi',
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
        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            O que Dizem Nossos Pais
          </h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        <div>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            Conheça Nossos Professores
          </h2>
          <div className="grid-3-col">

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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
