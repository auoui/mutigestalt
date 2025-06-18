import Layout from '../components/Layout';

const komplimente = [
  "Du bringst Licht in jeden Raum.",
  "Dein Lächeln ist ansteckend.",
  "Du hast eine wunderbare Ausstrahlung.",
  "Deine Gedanken sind wertvoll.",
  "Es ist schön, dass es dich gibt.",
  "Du hast ein großes Herz.",
  "Du inspirierst andere.",
  "Deine Präsenz tut gut.",
  "Du bist ein Geschenk für diese Welt."
];

export default function Komplimente() {
  const random = komplimente[Math.floor(Math.random() * komplimente.length)];
  return (
    <Layout>
      <h1>Komplimente</h1>
      <p>{random}</p>
      <p>Zweistündiger Workshop rund um Komplimente machen und Komplimente empfangen. Lust mit mir die Kunst der Komplimente zu erforschen? Anmeldung an Email […]. 10–20 € je nachdem, was du geben kannst.</p>
    </Layout>
  );
}
