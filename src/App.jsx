import { useRef, useState } from 'react';
import VideoSpeler from './components/VideoSpeler.jsx';
import Kaart from './components/Kaart.jsx';
import InfoPaneel from './components/InfoPaneel.jsx';
import locaties from './data/locaties.js';

function vindActieveLocatie(locaties, tijd) {
  let actief = locaties[0];
  for (const loc of locaties) {
    if (loc.start <= tijd) actief = loc;
  }
  return actief;
}

export default function App() {
  const videoRef = useRef(null);
  const [tijd, setTijd] = useState(0);

  const actieveLocatie = vindActieveLocatie(locaties, tijd);

  function springNaar(loc) {
    videoRef.current.currentTime = loc.start;
    videoRef.current.play();
  }

  return (
    <>
      <h1 className="border-b-3 text-6xl font-black flex justify-center p-4">
        Ontmoet de Oudegracht
      </h1>
      <main className="grid grid-cols-5 gap-4 p-4">
        <section className="col-span-3 rounded-lg border-2 p-4">
          <h2 className="mb-4 text-3xl font-bold flex justify-center">Boottocht door de Oudegracht</h2>
          <VideoSpeler videoRef={videoRef} tijd={tijd} onTijd={setTijd} />
        </section>
        <div className="col-span-2 flex flex-col gap-4">
          <section className="rounded-lg border-2 p-4">
            <h2 className="mb-4 flex justify-center text-3xl font-bold">Kaart van de Oudegracht</h2>
            <Kaart
              locaties={locaties}
              actieveCode={actieveLocatie.code}
              onKies={springNaar}
            />
          </section>
          <section className="rounded-lg border-2 p-4 h-full">
            <InfoPaneel locatie={actieveLocatie} />
          </section>
        </div>
      </main>
    </>
  );
}