import Layout from '../components/Layout';

const compliments = [
  "Du bringst Menschen zum Leuchten.",
  "In deiner Nähe fühlt man sich willkommen.",
  "Deine Gedanken haben Tiefe und Klarheit.",
  "Du hast ein feines Gespür für das Wesentliche.",
  "Du inspirierst andere, ohne es zu merken.",
  "Mit dir wird alles ein bisschen schöner.",
  "Dein Mut ist ansteckend.",
  "Dein Lachen macht Räume heller.",
  "Deine Worte berühren.",
  "Du bist auf deine Weise einzigartig und wunderbar."
];

function getRandomCompliment() {
  return compliments[Math.floor(Math.random() * compliments.length)];
}

export default function Komplimente() {
  const compliment = getRandomCompliment();
  return (
    <Layout>
      <h1>Komplimente</h1>
      <p>{compliment}</p>
      <p>Zweistündiger Workshop rund um Komplimente machen und Komplimente empfangen. 
      Lust mit mir die Kunst der Komplimente zu erforschen? Anmeldung an Email […]. 
      10–20 € je nachdem, was du geben kannst.</p>
      <a href="/">Gehe zurück auf Start</a>
    </Layout>
  );
}
