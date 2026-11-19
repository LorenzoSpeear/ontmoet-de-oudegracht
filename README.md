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

## 19 november 2026

### Wat heb ik gedaan?

- Ik heb een prototype gebouwd: de VideoSpeler, de Kaart en het InfoPaneel werken samen.
- Ik heb de opdracht op Notion, de beoordeling en de huisstijl van Het Utrechts Archief opnieuw bekeken.
- Ik heb een nieuw design gemaakt: de film in het midden, info links, knoppen en mini-map rechts.
- Ik heb het technisch ontwerp bijgewerkt naar versie 2.
- Ik heb het plan van aanpak geschreven.
- Ik heb een stappenplan gemaakt in docs/stappenplan.md.

### Wat ga ik hierna doen?

- Ik stuur mijn vragen naar Ellen Blom en mijn docent.
- Ik zoek de echte starttijden, coördinaten en teksten voor de locaties.

### Waar loop ik tegenaan?

- Ik weet nog niet of de film tot de Stadhuisbrug of tot de Bezembrug moet lopen.

De app draait dan op http://127.0.0.1:5173.

## Logboek

Zie [LOGBOEK.md](LOGBOEK.md).
