# Ontmoet de Oudegracht

Interactieve webapp voor de tentoonstelling *Ontmoet de Oudegracht* van Het Utrechts Archief (maart 2027).
Bezoekers zien een film uit 1929 van een boottocht over de Oudegracht, van de Gaardbrug tot de Stadhuisbrug.
Naast de film loopt een kaart mee. Tik je op een plek op de kaart, dan springt de film daarheen.
Medewerkers beheren de inhoud via een CMS.

**Team:** Gracht in Beeld – Lorenzo Speear (WDV2)

## Mappenstructuur

| Map | Inhoud |
| --- | --- |
| `docs/` | Debriefing, technisch ontwerp, plan van aanpak, offerte, testrapport |
| `src/` | React-app (bezoekers) |
| `src/components/` | Onderdelen zoals VideoSpeler, Kaart, InfoPaneel |
| `src/beheer/` | CMS-schermen voor medewerkers |
| `api/` | PHP-endpoints die JSON teruggeven |
| `database/` | `schema.sql` met de tabellen |
| `assets/` | Film, logo en afbeeldingen |

## Technieken

React + Vite + Tailwind CSS (frontend), PHP 8 + MySQL (backend en CMS), Docker-XAMPP (ontwikkelomgeving).

## Starten

```bash
npm install
npm run dev
```
