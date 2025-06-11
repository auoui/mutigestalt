import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <main style={{ paddingTop: '100px' }}>
        {/* Navigation oben rechts */}
        <nav style={{
          position: 'absolute',
          top: '40px',
          right: '50px',
          display: 'flex',
          gap: '1.5rem',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          <a href="/">Start</a>
          <a href="/heldinnenreise">Held*innenreise</a>
          <a href="/angebote">Angebote</a>
          <a href="/komplimente">Komplimente</a>
        </nav>

        {/* Über mich Box */}
        <section style={{
          marginTop: '600px',
          marginBottom: '60px',
          backgroundColor: 'rgba(255,255,255,0.7)',
          padding: '2rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '1rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ textAlign: 'center' }}>Über mich</h2>
          <p>
            „Meine Heldenreise hat mir deutlich gemacht weshalb ich in meinem Leben bisher so viele unterschiedliche Dinge lernen wollte, 
            ich habe während meiner Reise das letzte Puzzleteil gefunden, welches mir noch gefehlt hatte, um alles miteinander zu verbinden. 
            Die Heldenreise ist für mich mein inneres Strahlen in Verbindung mit anderen zu bringen und die Erfahrung das Verbindung auch Vertrauen bedeuten kann. 
            Selbsterfahrungsprozesse unterstützen ist für mich, deutlich werden zu lassen, wie Du Dir Selbst die Erlaubnis geben kannst 
            dein Leben so zu führen, wie Du es möchtest.“
          </p>
        </section>

        {/* Angebote */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          maxWidth: '800px',
          margin: '40px auto',
          paddingBottom: '60px'
        }}>
          <div>Held*innenreise</div>
          <div>Aktuelles</div>
          <div>Einzel-Sessions Gestalttherapie i.A.</div>
          <div>Tagesseminare: Komplimente machen</div>
          <div>Was will ich wirklich?</div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', paddingBottom: '80px', color: '#444' }}>
          <p>Kontakt & Anmeldung</p>
          <p>Fine Belger Platzhalter</p>
          <p>Bald auch mit Anmeldeformular – oder schreibe an <a href="mailto:fine.belger@posteo.de">fine.belger@posteo.de</a></p>
        </footer>
      </main>
    </Layout>
  )
}