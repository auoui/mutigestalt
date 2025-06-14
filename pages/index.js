
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/globals.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mutige Schritte</title>
      </Head>
      <nav className="menu">
        <Link href="/">Start</Link>
        <Link href="/heldenreise">Held*innenreise</Link>
        <Link href="/angebote">Angebote</Link>
        <Link href="/komplimente">Komplimente</Link>
        <Link href="/mehr-ueber-mich">Mehr über mich</Link>
      </nav>
      <main>
        <div className="ueber-mich-box">
          <h2>Über mich</h2>
          <p>
            Meine Heldenreise hat mir deutlich gemacht, weshalb ich in meinem Leben bisher
            so viele unterschiedliche Dinge lernen wollte. Ich habe während meiner Reise
            das letzte Puzzleteil gefunden, welches mir noch gefehlt hatte, um alles
            miteinander zu verbinden. […]
          </p>
        </div>
        <div className="angebote">
          <h3>Angebote</h3>
          <ul>
            <li><Link href="/heldenreise">Held*innenreise</Link></li>
            <li><Link href="/aktuelles">Aktuelles</Link></li>
            <li><Link href="/einzel-sessions">Einzel-Sessions Gestalttherapie i.A.</Link></li>
            <li><Link href="/komplimente">Tagesseminare „Komplimente machen“</Link></li>
            <li><Link href="/was-will-ich-wirklich">Was will ich wirklich?</Link></li>
          </ul>
        </div>
        <footer>
          <p>Kontakt & Anmeldung</p>
          <p>Fine Belger Platzhalter</p>
          <p>Bald auch mit Anmeldeformular – oder schreibe an <a href="mailto:fine.belger@posteo.de">fine.belger@posteo.de</a></p>
        </footer>
      </main>
    </div>
  )
}
