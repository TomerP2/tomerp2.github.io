// ── Timeline: built from data/timeline.json ─────────────────────────
// Markup lives in index.html (#timeline-item-template).
// Fills [data-field] elements; elements with an empty value are removed.
(() => {
  const DATA_URL = 'data/timeline.json';

  const list = document.getElementById('timeline');
  const template = document.getElementById('timeline-item-template');
  if (!list || !template) return;

  const render = entries => {
    const frag = document.createDocumentFragment();
    entries.forEach(entry => {
      const item = template.content.firstElementChild.cloneNode(true);
      item.querySelectorAll('[data-field]').forEach(el => {
        const value = entry[el.dataset.field];
        if (value) el.textContent = value;
        else el.remove();
      });
      frag.append(item);
    });
    list.replaceChildren(frag);
    list.querySelectorAll('.reveal').forEach(el => window.observeReveal && window.observeReveal(el));
  };

  fetch(DATA_URL)
    .then(res => {
      if (!res.ok) throw new Error(`${DATA_URL}: ${res.status}`);
      return res.json();
    })
    .then(render)
    .catch(err => console.error('Could not load timeline:', err));
})();
