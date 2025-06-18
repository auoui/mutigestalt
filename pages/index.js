
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mutige Schritte – Fine Belger</title>
      </Head>
      <main className={styles.main}>
        <h1>Willkommen bei Mutige Schritte</h1>
        <p className={styles.description}>Workshops, Selbstfindung, Held*innenreise, Gestalttherapie i.A.</p>
      </main>
    </div>
  )
}
