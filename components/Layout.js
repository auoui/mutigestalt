import Head from 'next/head';
import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <div
      style={{
        backgroundImage: "url('/pastel-bg.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        fontFamily: 'Josefin Sans, sans-serif'
      }}
    >
      <Head>
        <title>Mutige Schritte</title>
        <meta name="description" content="Fine Belger – Selbstfindung, Heldenreise, Gestalttherapie i.A." />
      </Head>
      <nav style={{ position: 'absolute', top: 50, right: 50 }}>
        <a href="/" style={{ margin: '0 10px' }}>Start</a>
        <a href="/heldenreise" style={{ margin: '0 10px' }}>Held*innenreise</a>
        <a href="/angebote" style={{ margin: '0 10px' }}>Angebote</a>
        <a href="/komplimente" style={{ margin: '0 10px' }}>Komplimente</a>
        <a href="/mehr-ueber-mich" style={{ margin: '0 10px' }}>Mehr über mich</a>
      </nav>
      {children}
    </div>
  );
}