# Portfolio website
Little portfolio website for me. Made with the help of Claude Code.

# TODO's
- Hero text: 'geospatial data scientist' section should be centered as well

---

# Project structure

```
portfolio/
  index.html              ← Page markup (single home page for now)
  css/
    style.css             ← All styles: reset, variables, layout, components, responsive
  js/
    main.js               ← Scroll-reveal, active nav link, project card drag-scroll & click
    gradient.js           ← Animated background (ESM module — imports @firecms/neat via CDN)
  img/
    image_of_me.jpeg      ← Guitar performance photo (hero + photo strip)
    Closeup_me.png        ← Close-up portrait
    van_oord_project.png  ← Project card image (Point Cloud Segmentation / Digital Twin)
    GIS_in_context_project.png
    fietsmeister_project.png
    Groenlo_project.png
  design/
    Design Document.md    ← Original design brief, color palette, gradient config, content
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
| `js/main.js` | Vanilla JS for UI behaviour: IntersectionObserver scroll-reveal, scroll-aware nav highlighting, drag-to-scroll on project cards. |
| `js/gradient.js` | ES module. Initialises the `NeatGradient` canvas background and wires up scroll → `yOffset`. Loaded with `<script type="module">` so it runs independently from `main.js`. |

---

# Eleventy (planned)

The project will be migrated to [Eleventy](https://www.11ty.dev/) to make adding new pages (e.g. individual project pages) easy without repeating boilerplate.

## Planned structure after migration

```
portfolio/
  src/
    _includes/
      base.njk            ← Shared <head>, nav, footer
    index.njk             ← Home page (extends base.njk)
    projects/
      point-cloud.njk     ← Individual project pages
      ...
    _data/
      projects.json       ← Project metadata (title, tags, image, href)
      experience.json     ← Timeline entries
  css/                    ← Passed through as-is
  js/                     ← Passed through as-is
  img/                    ← Passed through as-is
  .eleventy.js            ← Config: passthrough copy for css/, js/, img/
  package.json
```

## Migration steps (when ready)
1. `npm install @11ty/eleventy`
2. Create `.eleventy.js` — add `addPassthroughCopy` for `css`, `js`, `img`
3. Rename `index.html` → `src/index.njk`, extract `<head>` + nav + footer into `src/_includes/base.njk`
4. Move repeated data (timeline entries, skill cards, project cards) into `src/_data/` JSON files and loop over them with Nunjucks `{% for %}`
5. `npx eleventy --serve` to run the dev server
