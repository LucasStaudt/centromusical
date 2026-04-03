import TestimonialCarousel from '../ui/TestimonialCarousel';
import aluno1 from '../../assets/images/aluno1.png';
import aluno2 from '../../assets/images/aluno2.png';
import aluno3 from '../../assets/images/aluno3.png';
import aluno4 from '../../assets/images/aluno4.png';
import aluno5 from '../../assets/images/aluno5.png';
import aluno6 from '../../assets/images/aluno6.png';

export default function SocialProof() {
  const testimonials = [
    {
      id: 1,
      author: 'Laura',
      text: 'Sem palavras para descrever o quanto sou fã do Centro Musical. conto os dias para as minhas aulas, são, sem dúvida, um dos melhores momentos da minha semana. O ambiente é super aconchegante, acolhedor e bem organizado. os equipamentos são de ótima qualidade, contribuindo ainda mais para uma experiência incrível. nota 10000! ',
      photoUrl: aluno1,
    },
    {
      id: 2,
      author: 'Marcelo',
      text: 'Aulas particulares, estacionamento na porta, professores capacitados e ambiente descontraído. Entrei para aprender bateria e em dois meses já estava tocando!!😜 Recomendo!! ',
      photoUrl: aluno2,
    },
    {
      id: 3,
      author: 'Júlia',
      text: 'No Centro Musical eu esqueço os meus problemas! É muito bom tocar bateria e criar músicas! Recomendoo ',
      photoUrl: aluno3,
    },
    {
      id: 4,
      author: 'Vitória',
      text: 'A escola é maravilhosa! Amo o ambiente acolhedor e divertido. Todos são incríveis, em especial o profe João, que tem uma didática maravilhosa e nos desafia enquanto nos diverte. Me sinto parte de uma comunidade e não trocaria a escola por nada. ',
      photoUrl: aluno4,
    },
    {
      id: 5,
      author: 'Sinval',
      text: 'Fui fazer uma visita ao Centro Musical LB, gostei muito e já saí com a matrícula pronta. Estava precisando controlar minha ansiedade, hoje sou outra pessoa graças a centro musical. Ainda tenho a liberdade de passear por todos instrumentos 😝 ',
      photoUrl: aluno5,
    },
    {
      id: 6,
      author: 'Eduardo',
      text: 'Excelente escola! Cheguei sem saber absolutamente nada de violão e graças ao professor João hoje em dia já me divirto muito com a música! Gostamos tanto que hoje toda a família faz aulas na escola. Parabéns Lauro e Fabi, continuem assim! ',
      photoUrl: aluno6,
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
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
            O que Dizem Nossos Alunos
          </h2>
          
          {/* Google Rating */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <div className="glass" style={{ display: 'inline-block', padding: 'var(--spacing-md)' }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Avaliação no Google</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginTop: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: 'var(--brand-yellow)', fontSize: '20px' }}>★</span>
                ))}
                <span style={{ marginLeft: '8px', fontWeight: 600 }}>5.0</span>
              </div>
            </div>
          </div>
          
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
