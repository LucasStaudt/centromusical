export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--glass-border)',
        padding: 'var(--spacing-2xl) var(--spacing-lg)',
        marginTop: 'var(--spacing-2xl)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)',
            marginBottom: 'var(--spacing-2xl)',
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                color: 'var(--brand-yellow)',
                marginBottom: 'var(--spacing-md)',
              }}
            >
              Centro Musical LB
            </h3>
            <p>Aulas de música individualizadas em Porto Alegre.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Links Rápidos</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <a href="#hero">Início</a>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <a href="#courses">Instrumentos</a>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Redes Sociais</h4>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <a
                href="https://instagram.com/centromusicallb"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{ fontSize: '20px' }}
              >
                <svg width="24" height="24" fill="currentColor">
                  <use href="/icons.svg#instagram-icon"></use>
                </svg>
              </a>
              <a href="#youtube" title="YouTube" style={{ fontSize: '20px' }}>
                <svg width="24" height="24" fill="currentColor">
                  <use href="/icons.svg#youtube-icon"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid var(--glass-border)',
            paddingTop: 'var(--spacing-lg)',
            textAlign: 'center',
            color: 'var(--text-muted)',
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Centro Musical LB. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
