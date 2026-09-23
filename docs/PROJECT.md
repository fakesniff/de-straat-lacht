# De Straat Lacht — landingpage

## Goal
Eén krachtige one-page voorstelpagina voor De Straat Lacht (@destraatlacht) van Dennis Riko:
wie Dennis is, het ontstaansverhaal, bereik, wat hij voor merken kan doen, en samenwerken/contact.

## Current status
Definitieve versie op `main`. Publicatie via GitHub Pages (workflow `.github/workflows/deploy.yml`, deployt bij elke push naar main).

## Important decisions
- Stack: Vite (vanilla HTML/CSS/JS), geen framework. Fonts zelf gehost via @fontsource (Anton + Inter).
- Aanpasbare gegevens (e-mail, telefoon, WhatsApp, Instagram, Fakesniff-link, logo-pad) staan in `src/config.js`.
  Lege e-mail = samenwerk-knop opent Instagram DM.
- Logo: `public/logo/logo.jpg` (bijgesneden uit `public/assets/…jpg`), zwarte achtergrond valt weg via `mix-blend-mode: screen`.
- Geen verzonnen statistieken of marketingtaal. Toon: korte zinnen, ik-vorm, alsof Dennis zelf praat (feedback gebruiker na v1: "te druk, AI-achtig").
- Vite `base: './'` (relatieve paden) zodat de site werkt op `<user>.github.io/<repo>/` en op een eigen domein.
- Laatste sectie is "Samenwerkingen" met Fakesniff-logo (`public/logo/fakesniff.png`); geen contactknop meer.
- Lokale dev-server: `npx vite --port 5180` (5173 was bezet door een ander proces).

## Next steps
- Contact-e-mail invullen in `src/config.js`.
- Eventueel Fakesniff-link toevoegen.
- Domein kiezen → og:image + canonical toevoegen in `index.html`.
