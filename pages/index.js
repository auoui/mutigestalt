import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <main className="main">
        <div className="intro-box" style={{ marginTop: '700px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '1rem', borderRadius: '1rem' }}>
          <h2>Über mich</h2>
          <p>
            Meine Heldenreise hat mir deutlich gemacht, weshalb ich in meinem Leben bisher so viele unterschiedliche Dinge lernen wollte. 
            Ich habe während meiner Reise das letzte Puzzleteil gefunden, welches mir noch gefehlt hatte, um alles miteinander zu verbinden.
          </p>
          <p>
            Die Heldenreise ist für mich, mein inneres Strahlen in Verbindung mit anderen zu bringen – und die Erfahrung, dass Verbindung auch Vertrauen bedeuten kann.
          </p>
          <p>
            Selbsterfahrungsprozesse zu begleiten bedeutet für mich, deutlich werden zu lassen, wie Du Dir selbst die Erlaubnis geben kannst, Dein Leben so zu führen, wie Du es möchtest.
          </p>
        </div>
        <div className="angebote" style={{ marginTop: '300px' }}>
          <h2>Angebote</h2>
          <ul>
            <li><a href="/heldenreise">Held*innenreise</a></li>
            <li><a href="/aktuelles">Aktuelles</a></li>
            <li><a href="/einzel-sessions">Einzel-Sessions Gestalttherapie i.A.</a></li>
            <li><a href="/komplimente">Tagesseminare: Komplimente machen</a></li>
            <li><a href="/was-will-ich-wirklich">Was will ich wirklich?</a></li>
          </ul>
        </div>
        <footer style={{ marginTop: '200px' }}>
          <p>Kontakt & Anmeldung</p>
          <p>Fine Belger Platzhalter</p>
          <p>Bald auch mit Anmeldeformular – oder schreibe an fine.belger@posteo.de</p>
        </footer>
      </main>
    </Layout>
  );
}