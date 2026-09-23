# Bouwopdracht landingpage v1 — DE STRAAT LACHT

Lees eerst `docs/PLAN-landingpage-v1.md` en `AGENTS.md`. Dit document gaat vóór het plan waar ze verschillen.

## Al gedaan (niet opnieuw doen)
- `package.json` met scripts dev/build/preview.
- Geïnstalleerd: `vite`, `@fontsource/anton`, `@fontsource/inter`. Installeer GEEN extra packages.

## Bouwen
Bestanden: `index.html`, `src/main.js`, `src/style.css`, `src/config.js`, `public/favicon.svg`, `public/logo/README.md`.

### Stijl
- Zwart (#0a0a0a) achtergrond, wit (#f4f3ee) tekst, grijs (#8a8a85) voor secundaire tekst. Hooguit één klein accent; liever geen kleur.
- Rauw, straat, volwassen, eigenwijs. Géén agency-template, géén glans, geen gradients, geen afgeronde "cards" met schaduw. Denk: posterdruk, grote condensed koppen (Anton, uppercase), dunne witte lijnen/rules, genummerde labels (01 / 02 …) in kleine monospace-achtige of Inter-uppercase met letter-spacing, veel negatieve ruimte.
- Subtiele grain/noise-overlay mag (via kleine inline SVG feTurbulence als data-URI in CSS, lage opacity, pointer-events none).
- Fluid typografie met clamp(); koppen moeten op 320px breed passen (geen overflow). Gebruik `overflow-wrap: anywhere` niet op koppen maar kies veilige minima.
- Hover states: knoppen invert (wit vlak ↔ zwart), links onderstreping die groeit, dienstenlijst-rij invert of pijl die schuift.
- Scroll-reveal: elementen met `data-reveal` faden/schuiven 24px in via IntersectionObserver. Alleen actief als `<html class="js">` (in main.js zetten) en niet bij prefers-reduced-motion. Zonder JS alles zichtbaar.
- Geen horizontale scroll op welke breedte dan ook. Test op 320/360/390/768/1280/1920.

### Topbar
Klein, sticky, zwart met dunne onderlijn: links kroontje + "DE STRAAT LACHT" (klein, Anton), rechts knop "SAMENWERKEN" → #samenwerken. Op <400px mag de tekst links wegvallen (alleen kroontje). Secties krijgen `scroll-margin-top` gelijk aan topbarhoogte.

### Logo
- `<img src="/logo/logo.png" alt="De Straat Lacht">` in de hero, groot (max ~900px breed, 90vw mobiel).
- Fallback: direct naast de img staat een HTML-placeholder (`.logo-fallback`): inline SVG kroontje boven "DE", daaronder "DE STRAAT LACHT" in grote Anton, licht "handgemaakt" (bijv. kleine rotaties per woord), plus een klein label "LOGO PLACEHOLDER — plaats bestand in public/logo/logo.png". Standaard toont CSS de fallback en verbergt de img; main.js zet `.logo--loaded` op de wrapper wanneer de img succesvol laadt (check `img.complete && img.naturalWidth` én `load`-event), en dan wordt de img getoond en de fallback verborgen. Geen inline event handlers.
- `public/logo/README.md`: uitleg in het Nederlands: bestand `logo.png` (of pas pad aan in config), wit logo op transparante achtergrond, ideaal ~2000px breed PNG of SVG.
- Het logopad komt uit `config.js` (`logoSrc`), main.js zet het.

### config.js
```js
export const config = {
  instagramHandle: 'destraatlacht',
  instagramUrl: 'https://instagram.com/destraatlacht',
  instagramDmUrl: 'https://ig.me/m/destraatlacht',
  email: '',          // bv. 'samenwerken@destraatlacht.nl' — leeg = verborgen, CTA valt terug op Instagram DM
  phone: '',          // leeg = verborgen
  whatsapp: '',       // internationaal formaat zonder +, bv. '31612345678'; leeg = verborgen
  logoSrc: '/logo/logo.png',
  fakesniffUrl: '',   // leeg = geen link, alleen tekst
};
```
main.js vult: alle `[data-ig-link]` hrefs, `[data-ig-handle]` tekst, de samenwerk-CTA (`mailto:` als email gevuld, anders instagramDmUrl met target _blank), contactregels (e-mail/telefoon/whatsapp alleen tonen als gevuld; `wa.me/<nr>`), Fakesniff-link alleen als url gevuld, footerjaar. Valideer simpel (email bevat @, whatsapp alleen cijfers). HTML moet zonder JS al werkende Instagram-links hebben (hardcoded href als default).

Alle externe links: `target="_blank" rel="noopener noreferrer"`.

### Secties en tekst (gebruik deze tekst; kleine stilistische verbeteringen mogen, feiten NIET veranderen, niets verzinnen)

**Hero**
- Logo
- Kop: HUMOR. BEREIK. COMMUNITY.
- Sub: Wat begon als een hobbyaccount groeide uit tot een platform waar humor, actualiteit en een eigen kijk op de wereld samenkomen.
- CTA primair (wit vlak): BEKIJK @DESTRAATLACHT → instagram
- CTA secundair (outline): SAMENWERKEN → #samenwerken
- Kleine scroll-hint onderaan ("SCROLL" + lijn), verbergen op kleine hoogte.

**01 — Wie is Dennis** (id="dennis")
- Label: 01 — HET VERHAAL
- Grote statement: VAN 300 VIEWS / NAAR 1,8 MILJOEN.  ("1,8 MILJOEN" visueel het zwaarst)
- Intro: Dennis Riko maakt al jaren content. Zo'n tien jaar lang beheerde hij een Instagramaccount met grappige filmpjes. Gemiddeld keken er 200 tot 300 mensen.
- Tijdlijn in korte stappen (genummerde rijen met dunne lijnen ertussen):
  1. **Hij stopte.** Het account ging stil.
  2. **"Hé, waarom ben je gestopt?"** Vrijwel direct stroomden de berichten binnen. En 's avonds in bed keek hij zelf nog steeds oude filmpjes terug.
  3. **Het kantelpunt.** Niet meer alleen filmpjes delen, maar er zijn eigen blik en humor aan toevoegen.
  4. **Eén caption.** Een filmpje van een zingende Italiaanse vrouw — die sprekend leek op advocaat Inez Weski, op dat moment in het nieuws omdat ze vastzat in de EBI in Vught. Dennis zette erbij: *"Inez Weski in de EBI in Vught karaoke avond."*
  5. **1,8 miljoen views. Dezelfde dag.** Toen wist hij: veel meer mensen lachen om zijn manier van kijken naar de wereld. Dat was het echte begin van De Straat Lacht.
- Maak stap 4 citaat groot/als quote. Stap 5 het hoogtepunt.

**02 — Wat is De Straat Lacht** (id="wat")
- Label: 02 — WAT IS DE STRAAT LACHT
- Kop: DE STRAAT LACHT KIJKT ANDERS NAAR WAT IEDEREEN ZIET.
- Tekst: Actualiteit, straatcultuur, televisie, internet en alledaagse situaties — voorzien van Dennis' eigen timing, captions en humor. Niet simpelweg content doorplaatsen. Er iets van maken.
- Tussenkop: DE KRACHT ZIT IN
- Zes items als grote genummerde lijst/grid (Anton, groot; op desktop 2 of 3 kolommen, mobiel 1):
  01 Zien wat potentie heeft
  02 De juiste invalshoek
  03 Timing
  04 Humor
  05 Gevoel voor de community
  06 Weten waarom mensen stoppen met scrollen

**03 — Bereik** (id="bereik")
- Label: 03 — BEREIK
- Enorme statistiek: 1.8M  (echt enorm, poster-achtig)
- Onder de stat: VIEWS OP ÉÉN VAN DE EERSTE ECHTE DE STRAAT LACHT-POSTS.
- Tekst: Sterk bereik ten opzichte van de omvang van het account. Dennis kijkt niet alleen naar volgers, maar vooral naar bereik, interactie en deelbaarheid.
- Vier blokken (kop + één zin):
  - ORGANISCH BEREIK — Bereik dat ontstaat omdat mensen het zelf willen delen.
  - COMMUNITY — Volgers die reageren, taggen en terugkomen.
  - CONTENT DIE WORDT GEDEELD — Gemaakt om door te sturen, niet om weg te scrollen.
  - SOCIAL MEDIA OP GEVOEL + ERVARING — Jarenlang zien wat werkt. En wat niet.
- Marquee-strip (loopt horizontaal, langzaam): HUMOR ✦ ACTUALITEIT ✦ STRAATCULTUUR ✦ TIMING ✦ COMMUNITY ✦ DEELBAAR ✦ — duplicaat aria-hidden, strip zelf in overflow:hidden container, statisch bij reduced motion.
- GEEN andere cijfers.

**04 — Wat kan Dennis doen** (id="diensten")
- Label: 04 — SOCIAL MEDIA & CONTENT
- Grote quote: "Ik heb niet geleerd hoe social media werkt uit een boek. Ik heb jarenlang gezien waar mensen op stoppen, om lachen en wat ze doorsturen." — Dennis Riko
- Intro: Voor merken en bedrijven die niet nóg een gepolijste post willen, maar iets waar mensen écht op reageren.
- Dienstenlijst als rijen (nummer + naam + korte omschrijving; hover invert):
  - Social media management — Je kanalen draaien alsof ze leven.
  - Contentstrategie — Wat post je, waarom, en wanneer.
  - Ideeën & concepten — Formats en social concepts die blijven hangen.
  - Shareable content — Content die mensen doorsturen naar hun groepsapp.
  - Meme marketing — Je merk in de taal van het internet. Zonder cringe.
  - Community building — Van volgers naar mensen die terugkomen.
  - Branded content & samenwerkingen — Je merk op De Straat Lacht, op een manier die past.
  - Instagram & TikTok formats — Meedenken over wat werkt op welk platform.
  - Organische groei — Groeien omdat mensen het willen zien.

**05 — Samenwerken** (id="samenwerken")
- Donker blok, visueel zwaarste sectie. Omdat alles al zwart is: maak dit blok INVERS (wit vlak, zwarte tekst) of met dikke witte kader — kies invers, dat valt op.
- Label: 05 — SAMENWERKEN
- Kop: IETS MAKEN DAT MENSEN WÉL WILLEN ZIEN?
- Tekst: Voor merken, horeca, artiesten, kleding, events en andere samenwerkingen.
- Tags-rij: MERKEN · HORECA · ARTIESTEN · KLEDING · EVENTS
- CTA (groot, zwart vlak): SAMENWERKEN MET DE STRAAT LACHT → zie config-logica
- Contactregels (uit config, verborgen als leeg). Altijd zichtbaar: "Of stuur een DM: @destraatlacht" (link).

**Fakesniff** (klein, boven footer)
- Klein label: COLLABORATION / CREATIVE NETWORK
- FAKESNIFF (Anton, klein, bijv. 1.25–1.5rem) en eronder "NOTHING IS REAL." klein, grijs.
- Duidelijk kleiner dan alles van De Straat Lacht.

**Footer**
- DE STRAAT LACHT (Anton), @destraatlacht (link), "Instagram ↗" link, © <jaar> De Straat Lacht.

### Techniek / kwaliteit
- `index.html`: lang="nl", title "De Straat Lacht — Humor. Bereik. Community.", meta description, theme-color #0a0a0a, OG title/description/type (og:image en canonical als TODO-commentaar, nog geen domein), favicon.svg (kroontje wit op zwart).
- Fonts importeren in main.js: `@fontsource/anton/400.css`, `@fontsource/inter/400.css`, `/500.css`, `/700.css`. Alleen latin-subset is prima als dat kan (`@fontsource/inter/latin-400.css` bestaat); anders standaard.
- Semantisch: header, main, section met aria-labelledby, footer. Eén h1 (in hero; visueel mag het logo zijn: geef de h1 tekst "De Straat Lacht" visueel verborgen of gebruik logo-alt).
- Focus-visible stijl duidelijk. Tap targets ≥44px. Contrast AA.
- `html, body { overflow-x: clip }` als vangnet, maar layout mag niet afhankelijk zijn daarvan.
- CSS custom properties voor kleuren, spacing, max-width (~1320px), gutter clamp(16px, 4vw, 48px).
- Geen console errors.
- Draai `npm run build` en meld resultaat.

Rapporteer aan het eind: gewijzigde/nieuwe bestanden, keuzes, resultaat build, bekende risico's.
