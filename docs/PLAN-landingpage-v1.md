# Plan: landingpage v1 — DE STRAAT LACHT

## Stack
- Vite (vanilla, geen framework). Alleen `vite` als devDependency.
- `index.html` + `src/main.js` + `src/style.css` + `src/config.js`.
- Fonts: `@fontsource/anton` (koppen, condensed display) + `@fontsource/inter` (body) — zelf gehost, geen Google-request, snel.
- Geen andere dependencies. Animaties met IntersectionObserver + CSS.

## Bestanden
- `index.html` — alle secties, semantische HTML, meta/OG tags, `lang="nl"`.
- `src/config.js` — één plek voor aanpasbare gegevens: instagram-url/handle, contact e-mail, telefoon/whatsapp (optioneel, leeg = verborgen), Fakesniff-link (leeg = geen link).
- `src/main.js` — vult contactgegevens uit config, footer-jaar, scroll-reveal, logo-fallback, mobiel menu niet nodig (geen nav, alleen kleine sticky topbar met logo-mark + "Samenwerken").
- `src/style.css` — design tokens (zwart #0a0a0a, wit #f5f5f0, één accent: gebroken wit/grijs; eventueel subtiele grain), fluid type met clamp().
- `public/logo.png` — HIER komt het echte logo. Als het bestand ontbreekt toont de site een typografische placeholder "DE STRAAT LACHT" met kroontje (inline SVG) — via `onerror` op de `<img>`.
- `public/favicon.svg`.

## Secties
1. Hero — groot logo, "HUMOR. BEREIK. COMMUNITY.", subtekst, CTA's: "BEKIJK @DESTRAATLACHT" (instagram, target=_blank rel=noopener) + "SAMENWERKEN" (#samenwerken).
2. Wie is Dennis — groot statement "VAN 300 VIEWS / NAAR 1,8 MILJOEN." + korte verhaal-stappen (genummerde tijdlijn: hobby-account → gestopt → "Hé, waarom ben je gestopt?" → Weski-caption → 1,8M op één dag).
3. Wat is De Straat Lacht — "Kijkt anders naar wat iedereen ziet." + zes krachten als grote genummerde lijst (herkennen, invalshoek, timing, humor, community, stoppen met scrollen).
4. Bereik — 1.8M statistiek (enige cijfer, met bronvermelding "views op een van de eerste echte posts"), + tekstblokken: organisch bereik, community, content die gedeeld wordt, social media op gevoel + ervaring. Geen verzonnen cijfers. Horizontale marquee-strip met trefwoorden (overflow hidden, geen page-scroll).
5. Wat kan Dennis doen — quote "Ik heb niet geleerd hoe social media werkt uit een boek…" + dienstenlijst in een grid (hover-states).
6. Samenwerken (#samenwerken) — donker blok, "IETS MAKEN DAT MENSEN WÉL WILLEN ZIEN?", doelgroepen, CTA "SAMENWERKEN MET DE STRAAT LACHT" → mailto uit config (placeholder e-mail duidelijk gemarkeerd) + Instagram DM als tweede optie.
7. Fakesniff — klein: "COLLABORATION / CREATIVE NETWORK — FAKESNIFF — NOTHING IS REAL."
8. Footer — DE STRAAT LACHT, @destraatlacht, instagram-link, © jaar (JS).

## Kwaliteit
- `overflow-x: clip` op html/body; marquee binnen overflow hidden.
- `prefers-reduced-motion` respecteren (geen reveal/marquee).
- Reveal-elementen zichtbaar zonder JS (class `js` op html pas zetten in script).
- Focus-states zichtbaar, contrast AA, tap targets ≥44px.
- Breakpoints getest op 360, 390, 768, 1280, 1920 px.
- `npm run build` moet slagen.
