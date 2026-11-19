# Stappenplan – Ontmoet de Oudegracht

Van prototype naar eindproduct. Presentatie: **maandag 7 december 2026, 10:00** bij Het Utrechts Archief.

Eerst wat het meest telt voor het cijfer en bij de presentatie getoond moet worden. Daarna de extra's.

**Elke dag:** committen, pushen en LOGBOEK.md bijwerken.

## Fase 0: Vragen en design (do 19 – vr 20 nov)

- [ ] Vragen stellen aan docent en Ellen Blom:
  - [ ] Mogen scroll, zoom, hotspots en mini-map de tijdbalk, de kaartzoom, de stippen en het bootje zijn?
  - [ ] Loopt de film tot de Stadhuisbrug of tot de Bezembrug?
  - [ ] Heeft het digibord internet? (Leaflet of SVG-kaart)
- [ ] Huisstijl van HUA opzoeken: kleuren, lettertype, logo
- [ ] Nieuw design maken met alle onderdelen: kop, film, kaart, info, intro, colofon, knoppen
- [ ] Plan van aanpak schrijven

## Fase 1: Gegevens op orde (ma 23 nov)

- [ ] Echte starttijden uit de film halen (de film duurt 3:03)
- [ ] Echte coördinaten opzoeken op OpenStreetMap
- [ ] Teksten en archieffoto's kiezen uit het bronmateriaal

## Fase 2: Database en API (di 24 – wo 25 nov)

- [ ] `database/schema.sql` met de tabellen en de locaties
- [ ] `api/locaties.php` en `api/instellingen.php`
- [ ] De app haalt de gegevens uit de API in plaats van uit `src/data/locaties.js`

## Fase 3: De echte bezoekers-app (do 26 nov – di 1 dec)

- [ ] Prototype ombouwen naar het nieuwe design en de huisstijl
- [ ] Bootje op de kaart (positie-indicator)
- [ ] Archieffoto's in het infopaneel (tik om groot te zien)
- [ ] Header, intro-pop-up en colofon-pop-up
- [ ] Geluid met aan/uit-knop
- [ ] Toegankelijkheid (WCAG 2.1 AA) en telefoonweergave

## Fase 4: CMS (wo 2 – do 3 dec)

- [ ] Inloggen voor medewerkers, met beveiliging
- [ ] Locaties bewerken: naam, tekst, starttijd ("Gebruik dit moment"), plek op de kaart
- [ ] Foto's uploaden

## Fase 5: Afronden (vr 4 – zo 6 dec)

- [ ] Testen en testrapport schrijven (met gebruikerstest)
- [ ] Offerte maken
- [ ] Demovideo opnemen (app + CMS)
- [ ] Presentatie voorbereiden

## Als er tijd over is

- [ ] NL/EN
- [ ] Wachtscherm

## Al klaar (prototype)

- [x] VideoSpeler met eigen afspeelknop en tijdbalk
- [x] Kaart met Leaflet, stippen en route
- [x] InfoPaneel
- [x] Film, kaart en info werken samen
- [x] Indeling volgens de eerste schets
