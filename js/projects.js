// ── Projects: cards + popup, built from data/projects.json ──────────
// Markup lives in index.html (#project-card-template and #project-modal).
// This script only fills in [data-field] elements and toggles [data-box] visibility.
(() => {
  const DATA_URL = 'data/projects.json';

  const row = document.getElementById('projects-row');
  const wrapper = document.querySelector('.projects-scroll-wrapper');
  const cardTemplate = document.getElementById('project-card-template');
  const modal = document.getElementById('project-modal');
  if (!row || !cardTemplate || !modal) return;

  const field = name => modal.querySelector(`[data-field="${name}"]`);
  const box = name => modal.querySelector(`[data-box="${name}"]`);

  // Put text into an element, turning "\n" into <br>
  const setMultiline = (el, text) => {
    el.replaceChildren();
    String(text).split('\n').forEach((line, i) => {
      if (i) el.append(document.createElement('br'));
      el.append(line);
    });
  };

  const hasValue = v => Array.isArray(v) ? v.length > 0 : Boolean(v);

  // ── Cards ─────────────────────────────────────────
  const renderCard = (project, index) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    card.dataset.index = index;
    card.setAttribute('aria-label', `Open project: ${project.title}`);

    const img = card.querySelector('[data-field="cardImage"]');
    img.src = project.cardImage;
    img.alt = project.title;
    img.draggable = false;

    card.querySelector('[data-field="tag"]').textContent = project.tag || '';
    setMultiline(card.querySelector('[data-field="cardTitle"]'), project.cardTitle || project.title);

    row.append(card);
    if (window.observeReveal) window.observeReveal(card);
  };

  // ── Carousel ──────────────────────────────────────
  let images = [];
  let current = 0;

  const showSlide = i => {
    if (!images.length) return;
    current = (i + images.length) % images.length;
    field('images').querySelectorAll('.pm-slide').forEach((s, n) => s.classList.toggle('active', n === current));
    field('dots').querySelectorAll('.pm-dot').forEach((d, n) => {
      d.classList.toggle('active', n === current);
      d.setAttribute('aria-current', n === current ? 'true' : 'false');
    });
    const caption = images[current].caption || '';
    field('caption').textContent = caption;
    field('caption').hidden = !caption;
  };

  const renderCarousel = list => {
    images = list || [];
    const slides = field('images');
    const dots = field('dots');
    slides.replaceChildren();
    dots.replaceChildren();

    images.forEach((image, n) => {
      const img = document.createElement('img');
      img.className = 'pm-slide';
      img.src = image.src;
      img.alt = image.alt || '';
      img.draggable = false;
      slides.append(img);

      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'pm-dot';
      dot.setAttribute('aria-label', `Show image ${n + 1}`);
      dot.addEventListener('click', () => showSlide(n));
      dots.append(dot);
    });

    const multiple = images.length > 1;
    modal.querySelectorAll('.pm-nav').forEach(b => (b.hidden = !multiple));
    dots.hidden = !multiple;
    modal.querySelector('.pm-media').hidden = images.length === 0;
    showSlide(0);
  };

  // ── Popup ─────────────────────────────────────────
  const openProject = project => {
    field('title').textContent = project.title;

    field('date').textContent = project.date || '';
    box('date').hidden = !hasValue(project.date);
    field('commissioner').textContent = project.commissioner || '';
    box('commissioner').hidden = !hasValue(project.commissioner);
    modal.querySelector('.pm-meta').hidden = !hasValue(project.date) && !hasValue(project.commissioner);

    const skills = field('skills');
    skills.replaceChildren(...(project.skills || []).map(s => {
      const chip = document.createElement('span');
      chip.className = 'skill-chip blue';
      chip.textContent = s;
      return chip;
    }));
    box('skills').hidden = !hasValue(project.skills);

    const desc = [].concat(project.description || []);
    field('description').replaceChildren(...desc.map(text => {
      const p = document.createElement('p');
      p.textContent = text;
      return p;
    }));
    box('description').hidden = desc.length === 0;

    field('links').replaceChildren(...(project.links || []).map(link => {
      const a = document.createElement('a');
      a.className = 'pm-link';
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = link.label || link.url;
      return a;
    }));
    box('links').hidden = !hasValue(project.links);

    renderCarousel(project.images);

    modal.scrollTop = 0;
    modal.showModal();
    document.body.classList.add('modal-open');
  };

  const closeModal = () => modal.close();

  modal.addEventListener('close', () => document.body.classList.remove('modal-open'));

  modal.addEventListener('click', e => {
    // Click on the backdrop (the dialog element itself, outside .pm-inner)
    if (e.target === modal) return closeModal();
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action === 'close') closeModal();
    if (action === 'prev') showSlide(current - 1);
    if (action === 'next') showSlide(current + 1);
  });

  modal.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') showSlide(current - 1);
    if (e.key === 'ArrowRight') showSlide(current + 1);
  });

  // ── Load data and wire up card clicks ─────────────
  fetch(DATA_URL)
    .then(res => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res.json();
    })
    .then(projects => {
      projects.forEach(renderCard);

      const openFromCard = card => openProject(projects[Number(card.dataset.index)]);

      row.addEventListener('click', e => {
        const card = e.target.closest('.project-card');
        if (!card) return;
        // Ignore the click that ends a drag-to-scroll
        if (wrapper && wrapper.dataset.dragged === 'true') return;
        openFromCard(card);
      });

      row.addEventListener('keydown', e => {
        const card = e.target.closest('.project-card');
        if (card && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          openFromCard(card);
        }
      });
    })
    .catch(err => console.error(`Could not load ${DATA_URL}:`, err));
})();
