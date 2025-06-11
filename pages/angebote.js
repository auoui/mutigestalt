import Layout from '../components/Layout'

export default function Angebote() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto space-y-6 text-lg">
        <h2 className="text-3xl font-bold text-pink-700">Angebote</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Workshops zur Selbstfindung & Körperwahrnehmung</li>
          <li>Held*innenreise-Seminare</li>
          <li>Komplimente-Workshops</li>
          <li>Einzelsitzungen im Rahmen der Gestalttherapie i.A.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-600 italic">Aktuelle Termine bald hier – oder auf Anfrage per Mail.</p>
      </section>
    </Layout>
  )
}