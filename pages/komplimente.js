import Layout from '../components/Layout'
import { useState } from 'react'

const liste = [
  "Du bringst Leichtigkeit in Räume.",
  "Dein Lachen hat heilende Wirkung.",
  "Du siehst die Dinge, die andere übersehen.",
  "Deine Fragen sind Geschenke.",
  "Du hast die seltene Gabe, still präsent zu sein.",
  "Du trägst Schönheit ins Alltägliche.",
  "Dein Blick auf die Welt macht sie heller.",
  "Man fühlt sich bei dir einfach sicher.",
  "Du nimmst Menschen ernst, ohne sie zu beschweren.",
  "Du kannst zuhören, wie andere atmen."
]

export default function Komplimente() {
  const [kompliment, setKompliment] = useState("Klick unten für ein Kompliment!")

  return (
    <Layout>
      <section className="max-w-2xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700">Komplimente</h2>
        <p className="text-xl italic text-rose-800 min-h-[4rem]">{kompliment}</p>
        <button
          onClick={() => setKompliment(liste[Math.floor(Math.random() * liste.length)])}
          className="mt-4 bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full transition"
        >
          Noch eins!
        </button>
      </section>
    </Layout>
  )
}