import VideoSpeler from './components/VideoSpeler.jsx';
import Kaart from './components/Kaart.jsx';
import locaties from './data/locaties.js';
import InfoPaneel from './components/InfoPaneel.jsx';

export default function App() {
  return (
    <>
      <h1 className="border-b-3 text-6xl font-black flex justify-center p-4">
        Ontmoet de Oudegracht
      </h1>
      <main className="grid grid-cols-5 gap-4 p-4">
        <section className="col-span-3 rounded-lg border-2 p-4">
          <h2 className="mb-4 text-3xl font-bold flex justify-center">Boottocht door de Oudegracht</h2>
          <VideoSpeler />
        </section>
        <div className="col-span-2 flex flex-col gap-4">
          <section className="rounded-lg border-2 p-4">
            <h2 className="mb-4 flex justify-center text-3xl font-bold">Kaart van de Oudegracht</h2>
            <Kaart locaties={locaties} />
          </section>
          <section className="rounded-lg border-2 p-4 h-full">
            <InfoPaneel locatie={locaties[0]} />
          </section>
        </div>
      </main>
    </>
  );
}