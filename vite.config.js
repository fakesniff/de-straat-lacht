import { defineConfig } from 'vite';

// Relatieve paden ('./'), zodat de site werkt op GitHub Pages
// (https://<gebruiker>.github.io/<repository>/) én later op een eigen domein.
export default defineConfig({
  base: './',
});
