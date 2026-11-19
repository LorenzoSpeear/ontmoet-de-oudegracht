# Context voor Claude – Ontmoet de Oudegracht

Schoolopdracht (module 6.1, WDV2) van Lorenzo Speear, team "Gracht in Beeld". Communiceer in eenvoudig Nederlands.
Opdrachtgever: Het Utrechts Archief (contact: Ellen Blom). Eindpresentatie: maandag 7 december 2026, 10:00, HUA, Hamburgerstraat 28.

## Wat we bouwen
- Webapp voor een groot digibord met touch, doelgroep families.
- Film uit 1929 (assets/video/video.mp4) vanaf een boot: van net voor de Gaardbrug tot de Stadhuisbrug.
- Kaart naast de film die live meeloopt; info + archiefbeelden per locatie; tik op een punt = film springt erheen.
- Intro-pop-up, wachtscherm (aantrekkelijk zonder interactie), colofon-pop-up met HUA-logo, geluiden (geen muziek), NL/EN (wens).
- Toegankelijkheid WCAG 2.1 AA (overheidsinstelling).
- CMS voor medewerkers zonder technische kennis.

## Locaties (uit bronmateriaal)
1 Gaardbrug · 1a Werven en werfkelders · 1b Café De Postillon · 1c Lijnmarkt / Lichte Gaard · 2 Maartensbrug · 2a Vismarkt · 3 Kalisbrug · 5 Stadhuisbrug en stadhuis (4 ontbreekt nog).

## Techniek (zie docs/Technisch Ontwerp)
- Frontend: React 19 + Vite + Tailwind 4 in src/ (components in src/components, CMS in src/beheer).
- Backend: PHP 8 + MySQL via PDO in api/ (publiek: locaties.php, instellingen.php; beheer: api/beheer/*). Geen Node.js op de server.
- Database: tabellen locaties, media, instellingen, gebruikers (schema in database/schema.sql).
- Kaart: Leaflet + OpenStreetMap (alternatief: eigen SVG-kaart of Google Maps 3D).
- Ontwikkelen in Docker-XAMPP; Vite dev server op 127.0.0.1:5173.
- api/config.php staat in .gitignore (databasewachtwoord).

## Werkwijze
- Elke werkdag committen en pushen; LOGBOEK.md bijhouden.
- Planning in GitHub Projects.

## Status
- Klaar: debriefing, technisch ontwerp (docs/), projectstructuur, Git gekoppeld.
- Volgende stap: film + kaart + locaties laten samenwerken (VideoSpeler, Kaart, InfoPaneel).
- Daarna: database + API, CMS, intro/colofon/huisstijl, plan van aanpak, offerte, testrapport, demovideo.
