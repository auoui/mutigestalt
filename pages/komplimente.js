
import Layout from '../components/Layout'

const compliments = [
  "Deine Offenheit ist inspirierend.",
  "Ich schätze deinen Mut, du selbst zu sein.",
  "Du bringst Licht in Gespräche.",
  "Deine Perspektive erweitert meinen Horizont.",
  "Mit dir fühlt sich der Raum wärmer an.",
  "Du hast eine ruhige Kraft, die beruhigt.",
  "Dein Humor ist wie eine kleine Umarmung.",
  "Du hörst wirklich zu – das ist selten.",
  "Deine Kreativität ist ansteckend.",
  "Du gibst anderen Raum, sie selbst zu sein."
];

export default function Komplimente() {
  const randomCompliment = () => {
    const index = Math.floor(Math.random() * compliments.length);
    alert(compliments[index]);
  };

  return (
    <Layout>
      <div className="main">
        <h1>Komplimente</h1>
        <button onClick={randomCompliment}>Mach mir ein Kompliment!</button>
        <p style={{ marginTop: '1rem' }}>
          Zweistündiger Workshop rund um Komplimente machen und Komplimente empfangen. <br />
          Lust mit mir die Kunst der Komplimente zu erforschen? <br />
          Anmeldung an: <a href="mailto:fine.belger@posteo.de">fine.belger@posteo.de</a> <br />
          10–20 € je nachdem, was du geben kannst.
        </p>
        <p><a href="/">Gehe zurück auf Start</a></p>
      </div>
    </Layout>
  )
}
