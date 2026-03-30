import LeadForm from '../ui/LeadForm';

export default function Contact() {
  return (
    <section
      className="section"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          Agende Sua Aula Experimental
        </h2>

        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-2xl)',
          }}
        >
          {/* Form */}
          <div>
            <LeadForm />
          </div>

          {/* Horários */}
          <div>
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

          {/* Localização */}
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Localização</h3>
            <p>
              <strong>Av. José Gertum, 490</strong>
              <br />
              Chácara das Pedras, Porto Alegre - RS
              <br />
              CEP: 91330-450
            </p>

            {/* Google Maps Embed */}
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <iframe
                src="https://maps.google.com/maps?q=Av.%20Jos%C3%A9%20Gertum%20490%20Ch%C3%A1cara%20das%20Pedras%20Porto%20Alegre%20RS%2091330-450&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-lg)',
                  maxWidth: '500px'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Centro Musical LB"
              ></iframe>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
