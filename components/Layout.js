import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-yellow-50 to-amber-100 text-gray-900 font-sans">
      <header className="p-6 md:p-10 flex flex-col md:flex-row justify-between items-center bg-white/90 shadow-md backdrop-blur-sm">
        <h1 className="text-4xl font-bold tracking-wide text-pink-700">Mutige Schritte</h1>
        <nav className="flex gap-6 mt-4 md:mt-0 text-lg text-rose-700">
          <Link href="/">Start</Link>
          <Link href="/heldinnenreise">Held*innenreise</Link>
          <Link href="/angebote">Angebote</Link>
          <Link href="/komplimente">Komplimente</Link>
        </nav>
      </header>
      <main className="p-6 md:p-12">{children}</main>
      <footer className="p-6 text-center text-sm text-gray-600 mt-12">
        Bald auch mit Anmeldeformular – oder schreibe an <a href="mailto:fine.belger@posteo.de" className="underline">fine.belger@posteo.de</a>
      </footer>
    </div>
  )
}