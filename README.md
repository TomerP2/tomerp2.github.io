# Portfolio website
Little portfolio website for me. Made with the help of Claude Code.

# TODO's
- Hero text: 'geospatial data scientist' section should be centered as well

---

# Project structure

```
portfolio/
  index.html              ← Page markup + project card <template> and project popup <dialog>
  data/
    projects.json         ← All project info (cards + popups are built from this)
  css/
    style.css             ← All styles: reset, variables, layout, components, responsive
  js/
    main.js               ← Scroll-reveal (+ global observeReveal helper), active nav link, project drag-scroll
    projects.js           ← Renders project cards from data/projects.json, opens the project popup + carousel
    gradient.js           ← Animated background (ESM module — imports @firecms/neat via CDN)
  img/
    image_of_me.jpeg      ← Guitar performance photo (hero + photo strip)
    Closeup_me.png        ← Close-up portrait
    van_oord_project.png  ← Project card image (Point Cloud Segmentation / Digital Twin)
    GIS_in_context_project.png
    fietsmeister_project.png
    Groenlo_project.png
    projects/
      van-oord/           ← Popup images for the Van Oord project (one folder per project id)
  .claude/
    launch.json           ← Preview server config (python3 http.server on port 3000)
  CLAUDE.md               ← Instructions for Claude Code
  README.md               ← This file
```

## Key files

| File | Purpose |
|------|---------|
| `index.html` | The only page right now. All sections (About, Experience, Skills, Projects, Contact) live here. Add content by editing the clearly commented blocks inside each section. |
| `css/style.css` | Single stylesheet. CSS custom properties (variables) are at the top under `:root` — change colors/spacing there first. |
| `js/main.js` | Vanilla JS for UI behaviour: IntersectionObserver scroll-reveal (exposed as `window.observeReveal`), scroll-aware nav highlighting, drag-to-scroll on project cards (marks the wrapper `data-dragged` so a drag doesn't open a popup). |
| `js/projects.js` | Fetches `data/projects.json`, clones `#project-card-template` per project, and fills/opens the `#project-modal` dialog (info boxes + image carousel). Only fills `[data-field]` elements; empty fields hide their `[data-box]`. |
| `data/projects.json` | Array of projects in display order. Fields: `id`, `title`, `cardTitle` (optional, `
` = line break), `tag`, `cardImage`, `date`, `commissioner`, `skills[]`, `description[]` (one string per paragraph), `images[]` (`src`, `alt`, `caption`), `links[]` (`label`, `url`). Maps directly to Eleventy `_data/projects.json` later. |
| `js/gradient.js` | ES module. Initialises the `NeatGradient` canvas background and wires up scroll → `yOffset`. Loaded with `<script type="module">` so it runs independently from `main.js`. |

---

## Adding / editing a project
1. Add or edit an entry in `data/projects.json`. Empty strings/arrays are fine — that box is simply hidden in the popup.
2. Put popup images in `img/projects/<id>/` and list them under `images`.
3. Popup styling: tweak the `/* Project modal — tweak me */` variables in `:root` in `css/style.css` (sizes, colours, column widths, carousel). Each popup box has its own class (`.pm-title`, `.pm-meta`, `.pm-skills`, `.pm-desc`, `.pm-links`, `.pm-media`).

> Projects are loaded with `fetch()`, so the site must be served over HTTP (e.g. `python3 -m http.server 3000`). Opening `index.html` straight from disk shows no project cards.
