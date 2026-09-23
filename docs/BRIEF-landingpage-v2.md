# Bouwopdracht v2 — versimpelen

De v1-pagina (index.html, src/style.css, src/main.js) is te druk: te veel tekst, blokken, lijnen,
cards en marketingtaal. We gaan **schrappen**. Gebruik de bestaande code, maar verwijder echt wat niet
meer nodig is (HTML, CSS én JS). Geen nieuwe dependencies.

## Behouden
- Zwart/wit, Anton + Inter, grain-overlay, grote typografie, veel ruimte.
- Echt logo `/logo/logo.jpg` met `mix-blend-mode: screen` + `.logo--missing`-fallback (werkt al, niet breken).
  NB: `.hero-logo` heeft bewust `background: var(--black)` zodat de blend werkt tijdens de reveal.
- `src/config.js` en de config-logica in main.js (instagram-links, e-mail → mailto, anders Instagram DM; telefoon/whatsapp alleen als gevuld; Fakesniff-link alleen als gevuld; footerjaar).
- Scroll-reveal (subtiel), prefers-reduced-motion, skip-link, focus-states, geen horizontale scroll, `font-synthesis: none`.
- Sticky topbar mag blijven (kroontje + "SAMENWERKEN" → #contact). Houd hem minimaal.

## Weg
- Genummerde section-labels (01 — …), tijdlijn met 5 stappen, "de kracht zit in"-grid, 1.8M-mega-stat,
  reach-grid, marquee, grote Dennis-quote, dienstenlijst met 9 rijen, tags-rij, scroll-hint,
  alle cards/kaders, de meeste scheidingslijnen. Verwijder de bijbehorende CSS ook echt.

## Structuur en tekst (LETTERLIJK overnemen, niets toevoegen, niet "mooier" maken)

### 1. Hero (id="top")
- Groot logo (zoals nu).
- `<h1>`: DE STRAAT LACHT — mag visueel klein/medium zijn onder het logo (het logo is al groot), of sr-only
  als het dubbel oogt. Kies: zichtbaar maar bescheiden, Anton, letter-spacing ruim. (Logo-img heeft alt="").
- Regel eronder (Inter, rustig, groter dan body):
  "Humor, actualiteit en social media.<br>Op mijn manier."
- Twee knoppen: **INSTAGRAM** (wit vlak, → instagram, `data-ig-link`) en **SAMENWERKEN** (outline, → #contact).
- Verder niets. Hero gecentreerd.

### 2. Wie ik ben (id="wie")
- Kop (groot, Anton): IK BEN DENNIS.
- Korte alinea's (Inter, ~1.25–1.5rem op desktop, max ~34rem breed, ruime alinea-afstand):
  1. Ik maak al jaren content voor social media.
  2. De Straat Lacht begon ooit gewoon als hobby. Ik plaatste filmpjes waar ik zelf om moest lachen en een paar honderd mensen keken mee.
  3. Op een gegeven moment stopte ik ermee.
  4. Toen kreeg ik ineens berichten: <q-achtig> “Waarom ben je gestopt?” </q-achtig>  (dit citaat mag op een eigen regel, iets groter/Anton)
  5. Dat vond ik bijzonder.

### 3. Hoe het begon (id="begin")
- Groot visueel statement (Anton, heel groot, het visuele hoogtepunt van de pagina):
  VAN 300 VIEWS<br>NAAR 1,8 MILJOEN.
  ("300 views" regel mag grijs, "1,8 miljoen." wit; houd "1,8 MILJOEN." bij elkaar met nowrap; moet op 320px passen.)
- Daaronder alinea's (zelfde stijl als sectie 2):
  1. Ik besloot een filmpje te plaatsen met mijn eigen tekst erbij.
  2. Een Italiaanse vrouw stond te zingen en ik vond haar op dat moment sprekend lijken op Inez Weski.
  3. Ik schreef:
  4. (quote, groot, Anton, eigen regel) “Inez Weski in de EBI in Vught, karaokeavond.”
  5. Diezelfde dag ging het filmpje naar ongeveer 1,8 miljoen views.
  6. Toen wist ik: mensen moesten niet alleen lachen om de filmpjes, maar vooral om mijn manier van kijken.
     (mag als: "Toen wist ik:" + regelbreuk + rest)
  7. Dat is eigenlijk waar De Straat Lacht echt begon.

### 4. Wat ik doe (id="wat")
- Kop: WAT IK DOE
- Alinea's:
  1. Ik help met social media, content en ideeën.
  2. Niet vanuit een marketingboek, maar vanuit jaren ervaring met kijken wat mensen wel en niet bekijken.
  3. Ik denk mee over:
- Simpele lijst, geen nummers, geen kaders, geen omschrijvingen. Mag inline/wrapping in Anton middelgroot, of een eenvoudige verticale lijst:
  content · formats · social media · campagnes · samenwerkingen
  (kleine letters zoals hier of uppercase Anton — kies wat het rustigst oogt.)

### 5. Contact (id="contact")
- Invers blok (wit vlak, zwarte tekst) mag blijven — het is het enige accent. Veel ruimte.
- Kop (groot): SAMEN IETS MAKEN?
- Tekst: Voor merken, horeca, artiesten, events en andere ideeën.
- Knop (groot, zwart vlak): STUUR EEN BERICHT → `data-collaboration-link` (config-logica: mailto of Instagram DM).
- Daaronder: "Instagram: @destraatlacht" (link, `data-ig-link`).
- Optionele contactregels uit config (e-mail/telefoon/whatsapp) blijven, verborgen als leeg.

### Footer (klein, rustig, één regel/blok)
- De Straat Lacht · Instagram: @destraatlacht · © jaar
- Heel subtiel, kleinste tekst op de pagina, grijs: "Fakesniff" (link alleen als `fakesniffUrl` gevuld, via bestaande `data-fakesniff-link`). Geen "Nothing is real", geen label "Collaboration / creative network".

## Design-regels
- Veel minder lijnen: hooguit één dunne lijn onder topbar. Secties gescheiden door ruimte, niet door borders.
- Geen cards, geen grids met kaders.
- Eén kolom, links uitgelijnd (hero gecentreerd), max-width tekst ~34rem, koppen mogen breder.
- Weinig kleine uppercase-labeltjes. Geen letter-spaced microtekst behalve eventueel de knoppen.
- Mobiel: rustig, knoppen full-width onder elkaar is prima, koppen passen op 320px, line-height koppen ≥ 1.0 zodat É niet tegen de regel erboven botst.
- Meta description/og-tekst aanpassen naar de nieuwe toon (kort, menselijk), bijv.:
  "De Straat Lacht. Humor, actualiteit en social media. Op mijn manier."

## Opleveren
- `npm run build` moet slagen. Controleer dat er geen ongebruikte CSS-classes/JS voor verwijderde onderdelen achterblijven.
- Rapporteer: verwijderde onderdelen, gewijzigde bestanden, woordtelling zichtbare tekst (ongeveer), risico's.
