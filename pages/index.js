import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="main">
        <div className="menu">Start Held*innenreise Angebote Komplimente Mehr über mich</div>
        <div className="quote-box">
          <h2>Über mich</h2>
          <p>
            „Meine Heldenreise hat mir deutlich gemacht, weshalb ich in meinem Leben bisher so viele unterschiedliche Dinge lernen wollte. [...]"
          </p>
        </div>
        <div className="angebote">
          <ul>
            <li>Held*innenreise</li>
            <li>Aktuelles</li>
            <li>Einzel-Sessions Gestalttherapie i.A.</li>
            <li>Komplimente-Workshop</li>
            <li>Was will ich wirklich?</li>
          </ul>
        </div>
        <footer>
          <p>Kontakt & Anmeldung<br/>
          Fine Belger Platzhalter<br/>
          Bald auch mit Anmeldeformular – oder schreibe an fine.belger@posteo.de</p>
        </footer>
      </div>
    </Layout>
  );
}
