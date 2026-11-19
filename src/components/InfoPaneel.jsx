export default function InfoPaneel({ locatie }) {
  return (
    <div aria-live="polite">
      <h2 className="mb-2 text-3xl font-bold">{locatie.naam}</h2>
      <p className="text-xl">{locatie.tekst}</p>
    </div>
  );
}