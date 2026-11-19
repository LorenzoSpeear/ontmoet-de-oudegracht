import { useState } from 'react';

function formatTijd(seconden) {
  const min = Math.floor(seconden / 60);
  const sec = Math.floor(seconden % 60);
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

export default function VideoSpeler({ videoRef, tijd, onTijd }) {
  const [speelt, setSpeelt] = useState(false);
  const [duur, setDuur] = useState(0);

  function wissel() {
    if (speelt) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }

  function verschuif(e) {
    videoRef.current.currentTime = Number(e.target.value);
  }

  return (
    <div>
      <div className="relative">
        <video
          ref={videoRef}
          src="video/video.mp4"
          className="max-h-[60vh] w-full bg-black object-contain"
          onPlay={() => setSpeelt(true)}
          onPause={() => setSpeelt(false)}
          onTimeUpdate={(e) => onTijd(e.target.currentTime)}
          onLoadedMetadata={(e) => setDuur(e.target.duration)}
        />
        <button
          onClick={wissel}
          className="absolute inset-0 m-auto h-24 w-24 rounded-full bg-white/80 text-4xl"
          aria-label={speelt ? 'Pauzeer de film' : 'Speel de film af'}
        >
          {speelt ? '❚❚' : '▶'}
        </button>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <span className="text-2xl font-bold">{formatTijd(tijd)}</span>
        <input
          type="range"
          min="0"
          max={duur}
          step="0.1"
          value={tijd}
          onChange={verschuif}
          className="h-12 w-full accent-[#0f4f45]"
          aria-label="Tijdbalk van de film"
        />
      </div>
    </div>
  );
}