import { projects, getPreviousProjects, projectDestination } from '../data/projects.js';
import { renderCurrentProject } from './current-project.js';
import { observeReveals } from '../common/reveal.js';

/**
 * The project catalog page only handles discovery and cards.
 * Edit project content in data/projects.js; edit appearance in css/project.css.
 * The project detail page is independent and still opens in the SAME tab.
 */
const CATEGORY_ICONS = {
  Portfolio: 'ri-layout-5-line',
  'E-commerce': 'ri-shopping-bag-3-line',
  'Landing Page': 'ri-layout-4-line',
  'Blog Page': 'ri-article-line',
  'Web App': 'ri-apps-2-line',
  'Desktop App': 'ri-computer-line',
  '2D Games': 'ri-gamepad-line',
};

function makeElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function projectHref(project) {
  return projectDestination(project);
}

function createProjectCard(project) {
  // One same-tab anchor per card: the entire card is clickable and keyboard accessible.
  const card = makeElement('a', 'project-card reveal reveal-bottom');
  card.href = projectHref(project);
  const live = /^https?:\/\//i.test(projectHref(project));
  card.setAttribute('aria-label', live
    ? `Visit ${project.details.projectName} website`
    : `View ${project.details.projectName} case study`);
  const link = makeElement('div', 'project-card__image-link');

  // The large image files were deliberately omitted from the supplied ZIP.
  // Fallback is visible if they aren't hosted yet, without changing their URLs.
  const fallback = makeElement('div', 'project-card__fallback');
  fallback.setAttribute('aria-hidden', 'true');
  const icon = makeElement('i', CATEGORY_ICONS[project.category] ?? 'ri-code-line');
  fallback.append(icon, makeElement('span', '', project.category));

  const image = makeElement('img');
  image.src = project.thumbnail;
  image.alt = `${project.details.projectName} project preview`;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.addEventListener('error', () => image.classList.add('is-unavailable'));
  const category = makeElement('span', 'project-card__category', project.category);
  link.append(fallback, image, category);

  const body = makeElement('div', 'project-card__body');
  const isComingSoon = /placeholder/i.test(project.details.projectName)
    || /inproduction\.png$/i.test(project.thumbnail);
  if (isComingSoon) body.append(makeElement('span', 'project-card__status', 'IN PROGRESS'));
  body.append(
    makeElement('h3', '', project.details.projectName),
    makeElement('p', 'project-card__description', project.cardDescription),
  );

  // Keep tech badges useful by skipping editors and showing the first 3 tools.
  const technologies = project.details.techStack.split(',')
    .map((name) => name.trim()).filter((name) => name && !/^VSCode$/i.test(name)).slice(0, 3);
  if (technologies.length) {
    const tech = makeElement('div', 'project-card__tech');
    tech.setAttribute('aria-label', 'Technologies');
    technologies.forEach((name) => tech.append(makeElement('span', '', name)));
    body.append(tech);
  }

  const bottom = makeElement('div', 'project-card__bottom');
  const action = makeElement('span', 'project-card__action', live ? 'Visit website' : 'View case study');
  const arrow = makeElement('i', 'ri-arrow-right-up-line project-card__arrow');
  arrow.setAttribute('aria-hidden', 'true');
  bottom.append(action, arrow);
  body.append(bottom);
  card.append(link, body);
  return card;
}

/** Category chips are generated from the project data so they cannot drift. */
function createCategoryButton(category, count) {
  const button = makeElement('button', 'project-filter');
  button.type = 'button';
  button.dataset.category = category;
  button.setAttribute('aria-pressed', 'false');
  button.append(document.createTextNode(category === '' ? 'All work' : category));
  button.append(makeElement('span', '', String(count)));
  return button;
}

function matches(project, query, category) {
  if (category && project.category !== category) return false;
  if (!query) return true;
  return [project.details.projectName, project.cardDescription, project.category,
    project.details.techStack].join(' ').toLocaleLowerCase().includes(query);
}

/** Initialize once when body#project is loaded. */
export function initProjectsPage() {
  const grid = document.getElementById('projectGrid');
  const filterBar = document.getElementById('projectFilters');
  const search = document.getElementById('projectSearch');
  const count = document.getElementById('projectResultCount');
  const empty = document.getElementById('projectsEmpty');
  if (!grid || !filterBar || !search || !count || !empty) return;

  renderCurrentProject();
  const previousProjects = getPreviousProjects();
  const categories = [...new Set(previousProjects.map((project) => project.category))];
  const counts = new Map(categories.map((category) => [category,
    previousProjects.filter((project) => project.category === category).length]));
  filterBar.append(createCategoryButton('', previousProjects.length),
    ...categories.map((category) => createCategoryButton(category, counts.get(category))));

  const total = document.getElementById('projectTotalCount');
  if (total) total.textContent = String(projects.length);

  function readUrl() {
    const params = new URLSearchParams(window.location.search);
    return {
      category: categories.includes(params.get('category')) ? params.get('category') : '',
      term: params.get('search') || '',
    };
  }

  let { category: selectedCategory, term } = readUrl();
  search.value = term;

  function syncUrl() {
    if (!window.history?.replaceState) return;
    const url = new URL(window.location.href);
    if (selectedCategory) url.searchParams.set('category', selectedCategory);
    else url.searchParams.delete('category');
    if (term.trim()) url.searchParams.set('search', term.trim());
    else url.searchParams.delete('search');
    window.history.replaceState(null, '', url);
  }

  function render() {
    const normalized = term.trim().toLocaleLowerCase();
    const visible = previousProjects.filter((project) => matches(project, normalized, selectedCategory));
    grid.replaceChildren(...visible.map(createProjectCard));
    count.textContent = `${visible.length} ${visible.length === 1 ? 'project' : 'projects'}`;
    empty.hidden = visible.length !== 0;
    filterBar.querySelectorAll('button[data-category]').forEach((button) => {
      const active = button.dataset.category === selectedCategory;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    observeReveals(grid);
  }

  filterBar.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-category]');
    if (!button) return;
    selectedCategory = button.dataset.category;
    syncUrl();
    render();
  });

  search.addEventListener('input', () => {
    term = search.value;
    syncUrl();
    render();
  });

  function reset() {
    selectedCategory = '';
    term = '';
    search.value = '';
    syncUrl();
    render();
  }
  document.getElementById('resetProjectFilters')?.addEventListener('click', reset);

  // / focuses search, Escape clears it. Ignore these when typing elsewhere.
  document.addEventListener('keydown', (event) => {
    const element = event.target;
    const typing = element.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName);
    if (event.key === '/' && !typing && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      search.focus();
    } else if (event.key === 'Escape' && document.activeElement === search) {
      search.value = '';
      term = '';
      syncUrl();
      render();
      search.blur();
    }
  });

  window.addEventListener('popstate', () => {
    ({ category: selectedCategory, term } = readUrl());
    search.value = term;
    render();
  });

  render();
}
