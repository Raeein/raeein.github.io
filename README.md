# raeeinbagheri.com

Personal site of Raeein Bagheri. Plain HTML, CSS and JavaScript with no build step, hosted on GitHub Pages.

## Structure

```
index.html            Home page (experience, projects, skills, education, contact)
projects/*.html       Project case studies
404.html              Not-found page (uses absolute paths; GitHub Pages serves it for any missing URL)
assets/css/style.css  All styles; color tokens and dark theme at the top
assets/js/            theme-init.js (runs in <head>, prevents theme flash) and script.js
assets/docs/resume.pdf
CNAME                 Custom domain
.nojekyll             Tells GitHub Pages to serve files as-is
```

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Push to `master`. GitHub Pages publishes the repo root.

## Updating

- **Resume:** replace `assets/docs/resume.pdf`.
- **New project page:** copy `projects/gmc.html`, edit the content, and add a card in the Projects section of `index.html`.
- **Third-party resources:** each page has a Content-Security-Policy `<meta>` tag. Any new external script, font or image host has to be added there or the browser will block it.
