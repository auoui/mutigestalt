
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fine Belger – Mutige Schritte</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.menu}>
          <Link href="/">Start</Link>
          <Link href="/heldenreise">Held*innenreise</Link>
          <Link href="/angebote">Angebote</Link>
          <Link href="/komplimente">Komplimente</Link>
          <Link href="/mehr-ueber-mich">Mehr über mich</Link>
        </div>
        <div className={styles.contentBox}>
          <h2>Über mich</h2>
          <p>
            „Meine Heldenreise hat mir deutlich gemacht, weshalb ich in meinem Leben bisher so viele unterschiedliche
            Dinge lernen wollte. Ich habe während meiner Reise das letzte Puzzleteil gefunden, welches mir noch gefehlt
            hatte, um alles miteinander zu verbinden. Die Heldenreise ist für mich, mein inneres Strahlen in Verbindung
            mit anderen zu bringen und die Erfahrung, dass Verbindung auch Vertrauen bedeuten kann. Selbsterfahrungsprozesse
            zu unterstützen bedeutet für mich, deutlich werden zu lassen, wie du dir selbst die Erlaubnis geben kannst,
            dein Leben so zu führen, wie du es möchtest.“
          </p>
        </div>
      </main>
    </div>
  )
}
