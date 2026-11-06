# RANRE website

A section-by-section rebuild of the Roya Al Najah Real Estate website. The current version contains the responsive glass navigation and an illustrative temporary background. The original site is the reference: https://ranre.ae/.

## Project structure

- `index.html` — page content and accessible navigation markup.
- `src/styles/main.css` — site styles, including responsive and reduced-motion rules.
- `src/scripts/main.js` — application entry point.
- `src/scripts/components/navigation.js` — mobile menu and scroll behavior.
- `assets/images/` — image assets, including the original RANRE logo.

## Preview locally

Serve the project folder with a local web server, for example:

```sh
python3 -m http.server 5174
```

Then visit http://localhost:5174. No installation or build step is required. A server is needed for JavaScript modules.

The About, Services, Projects and Contact links currently lead to the existing site until the new sections are ready. The background is a CSS illustration, not a property listing.
