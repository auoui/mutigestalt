
export default function Home() {
  return (
    <div className="main">
      <nav>
        <a href="/">Start</a>
        <a href="/heldenreise">Held*innenreise</a>
        <a href="/angebote">Angebote</a>
        <a href="/komplimente">Komplimente</a>
        <a href="/mehr-ueber-mich">Mehr über mich</a>
      </nav>
      <section style={{ marginTop: '6rem', background: 'rgba(255,255,255,0.8)', padding: '1rem', borderRadius: '8px' }}>
        <h2>Über mich</h2>
        <p>Meine Heldenreise hat mir deutlich gemacht weshalb ich in meinem Leben bisher so viele unterschiedliche Dinge lernen wollte, ich habe während meiner Reise das letzte Puzzleteil gefunden, welches mir noch gefehlt hatte, um alles miteinander zu verbinden...</p>
      </section>
      <section style={{ marginTop: '4rem' }}>
        <h2>Angebote</h2>
        <ul>
          <li><a href="/heldenreise">Held*innenreise</a></li>
          <li><a href="/angebote">Aktuelles</a></li>
          <li><a href="/angebote">Einzel-Sessions Gestalttherapie i.A.</a></li>
          <li><a href="/komplimente">Tagesseminare: Komplimente machen</a></li>
          <li><a href="/angebote">Was will ich wirklich?</a></li>
        </ul>
      </section>
      <footer>
        <p>Kontakt & Anmeldung:<br/>Fine Belger Platzhalter<br/>Bald auch mit Anmeldeformular – oder schreibe an fine.belger@posteo.de</p>
      </footer>
    </div>
  )
}
