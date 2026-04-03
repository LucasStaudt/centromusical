import LeadForm from '../ui/LeadForm'

export default function Contact() {
  return (
    <section
      className="section"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
          Agende Sua Aula Experimental
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)',
            alignItems: 'start'
          }}
        >
          {/* Form */}
          <div>
            <LeadForm />
          </div>

          {/* Info column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-lg)'
            }}
          >
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
              <p style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Av. José Gertum, 490</strong>
                <br />
                Chácara das Pedras, Porto Alegre - RS
                <br />
                CEP: 91330-450
              </p>

              {/* Google Maps Embed */}
              <iframe
                src="https://maps.google.com/maps?q=Av.%20Jos%C3%A9%20Gertum%20490%20Ch%C3%A1cara%20das%20Pedras%20Porto%20Alegre%20RS%2091330-450&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'block'
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
  )
}
