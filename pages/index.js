import Layout from '../components/Layout'
import Quote from '../components/Quote'

export default function Home() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl font-extrabold text-rose-700">Fine Belger</h2>
        <p className="text-xl font-medium">
          Selbstfindung • Held*innenreise • Workshops • Gestalttherapie i.A.
        </p>
        <Quote>
          „Meine Heldenreise hat mir deutlich gemacht, weshalb ich in meinem Leben bisher so viele unterschiedliche Dinge lernen wollte.
          Ich habe während meiner Reise das letzte Puzzleteil gefunden, das mir noch gefehlt hatte, um alles miteinander zu verbinden.
          Die Held*innenreise ist für mich, mein inneres Strahlen in Verbindung mit anderen zu bringen und die Erfahrung, dass Verbindung auch Vertrauen bedeuten kann.“
        </Quote>
        <div className="py-4">
          <a href="mailto:fine.belger@posteo.de" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition-all">
            Kontakt & Anmeldung
          </a>
        </div>
        <div className="mt-8">
          <img src="/portrait-placeholder.jpg" alt="Fine Belger Platzhalter" className="mx-auto rounded-xl shadow-md max-h-96 object-cover" />
        </div>
      </section>
    </Layout>
  )
}