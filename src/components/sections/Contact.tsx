import LeadForm from '../ui/LeadForm';

export default function Contact() {
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
          Agende Sua Aula Experimental
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--spacing-2xl)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {/* Form */}
          <div>
            <LeadForm />
          </div>

          {/* Info */}
          <div>
            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Localização</h3>
              <p>
                <strong>Av. José Gertun</strong>
                <br />
                Porto Alegre, RS
              </p>
            </div>

            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Horários</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Segunda:</strong> Fechado
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Terça a Sexta:</strong> 09:00 - 20:00
                </li>
                <li>
                  <strong>Sábado:</strong> 09:00 - 17:00
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Contato</h3>
              <a
                href="https://wa.me/555512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Enviar WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          [style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
