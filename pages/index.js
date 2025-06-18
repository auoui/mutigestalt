import Layout from '../components/Layout';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.menu}>Start | Held*innenreise | Angebote | Komplimente | Mehr über mich</div>
        <div className={styles.hero}></div>
        <div className={styles.aboutBox}>
          <h2>Über mich</h2>
          <p>„Meine Heldenreise hat mir deutlich gemacht, weshalb ich in meinem Leben bisher so viele unterschiedliche Dinge lernen wollte. [...]“</p>
        </div>
        <div className={styles.offers}>
          <div>Held*innenreise</div>
          <div>Aktuelles</div>
          <div>Einzel-Sessions Gestalttherapie i.A.</div>
          <div>Komplimente machen</div>
          <div>Was will ich wirklich?</div>
        </div>
        <footer>
          <p>Kontakt & Anmeldung<br/>
          Fine Belger Platzhalter<br/>
          Bald auch mit Anmeldeformular – oder schreibe an fine.belger@posteo.de</p>
        </footer>
      </div>
    </Layout>
  )
}
