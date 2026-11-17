# Codex instructions

## First: read the README
Before starting any task, read `README.md`. It contains:
- The current file/folder structure with descriptions of every file
- What each JS module does
- The Eleventy migration plan

Use README.md as your map for where things live and what they are for.

## Keeping the README up to date
After completing a task, update `README.md` if you:
- Created a new file or folder
- Renamed or moved a file
- Changed what a file is responsible for
- Added a new dependency or external resource
- Made a significant structural decision

Keep the structure diagram and the key files table accurate at all times.

## General guidelines
- The site is a dark-mode portfolio. Keep all visual changes consistent with the existing color palette defined in `css/style.css` under `:root`.
- `js/gradient.js` is an ES module — it must stay as `<script type="module">` and cannot be bundled with `main.js`.
- When adding new sections or content, follow the existing HTML comment conventions (`<!-- Add/edit ... here -->`).
- The Eleventy migration plan in README.md describes the intended future structure. Don't implement it yet, but keep new code compatible with it (e.g. avoid inline styles or scripts that would be hard to templatise).
