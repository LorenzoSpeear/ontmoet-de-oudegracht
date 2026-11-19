import { MapContainer, TileLayer, CircleMarker, Polyline, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Kaart({ locaties, actieveCode, onKies }) {
    const route = locaties.map((loc) => [loc.lat, loc.lng]);

    return (
        <MapContainer
            center={route[3]}
            zoom={17}
            className="h-[30vh] w-full rounded-lg">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap"
            />

            <Polyline positions={route} pathOptions={{ color: '#3b82f6', weight: 6 }} />

            {locaties.map((loc) => {
                const actief = loc.code === actieveCode;
                return (
                    <CircleMarker
                        key={loc.code}
                        center={[loc.lat, loc.lng]}
                        radius={loc.type === 'brug' ? 14 : 10}
                        pathOptions={{
                            color: '#0f4f45',
                            weight: 3,
                            fillColor: actief ? '#0f4f45' : '#ffffff',
                            fillOpacity: 1,
                        }}
                        eventHandlers={{ click: () => onKies?.(loc) }}
                    >
                        <Tooltip>{loc.naam}</Tooltip>
                    </CircleMarker>
                );
            })}
        </MapContainer>
    );
}