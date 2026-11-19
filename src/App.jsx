import VideoSpeler from './components/VideoSpeler.jsx';

export default function App() {
  return (
    <>
      <h1 className="border-b-3 text-6xl font-black flex justify-center p-6">
        Ontmoet de Oudegracht
      </h1>
      <main className="grid grid-cols-5 gap-4 p-4">
        <section className="col-span-3 rounded-lg border-2 p-4">
          <h2 className="mb-4 text-3xl font-bold flex justify-center">Boottocht door de Oudegracht</h2>
          <VideoSpeler />
        </section>
        <section className="col-span-2 rounded-lg border-2 p-4 flex justify-center">
          <h2 className="text-3xl font-bold">Kaart van de Oudegracht</h2>
        </section>
      </main>
    </>
  );
}