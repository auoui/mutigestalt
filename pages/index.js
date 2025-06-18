
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.heroOverlay}>
          <div className={styles.quoteBox}>
            <h2>Über mich</h2>
            <p>
              Meine Heldenreise hat mir deutlich gemacht weshalb ich in meinem Leben bisher so viele unterschiedliche Dinge lernen wollte. Ich habe während meiner Reise das letzte Puzzleteil gefunden, welches mir noch gefehlt hatte, um alles miteinander zu verbinden.
              Die Heldenreise ist für mich mein inneres Strahlen in Verbindung mit anderen zu bringen und die Erfahrung, dass Verbindung auch Vertrauen bedeuten kann. Selbsterfahrungsprozesse unterstützen ist für mich, deutlich werden zu lassen, wie Du Dir Selbst die Erlaubnis geben kannst dein Leben so zu führen, wie Du es möchtest.
            </p>
          </div>
          <div className={styles.offerings}>
            <div>
              <h3>Angebote</h3>
              <ul>
                <li><a href="/heldenreise">Held*innenreise</a></li>
                <li><a href="/aktuelles">Aktuelles</a></li>
                <li><a href="/einzel-sessions">Einzel-Sessions Gestalttherapie i.A.</a></li>
                <li><a href="/komplimente">Tagesseminare „Komplimente machen“</a></li>
                <li><a href="/was-will-ich-wirklich">Was will ich wirklich?</a></li>
              </ul>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <p>Kontakt & Anmeldung</p>
          <p>Fine Belger Platzhalter</p>
          <p>Bald auch mit Anmeldeformular – oder schreibe an <a href="mailto:fine.belger@posteo.de">fine.belger@posteo.de</a></p>
        </footer>
      </main>
    </Layout>
  )
}
