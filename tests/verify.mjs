/** Run from the project root with: node tests/verify.mjs */
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { projects, getProject, getCurrentProject, getPreviousProjects, projectDestination, portfolioSettings } from '../assets/js/data/projects.js';
import { renderCurrentProject } from '../assets/js/pages/current-project.js';
import { initProjectsPage } from '../assets/js/pages/projects.js';
import { initProjectDetail } from '../assets/js/pages/project-detail.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');

assert.ok(projects.length >= 1, 'there should be at least one project');
const startingCurrentProject = getCurrentProject();
const startingPreviousCount = getPreviousProjects().length;
assert.equal(new Set(projects.map((item) => item.id)).size, projects.length);
for (const item of projects) {
  assert.ok(item.id && item.category && item.thumbnail);
  assert.deepEqual(Object.keys(item.details), [
    'projectName', 'overviewVideo', 'projectOverview', 'techStack', 'byPartVideoExplanation',
  ]);
  assert.ok(Array.isArray(item.details.byPartVideoExplanation));
  assert.equal(getProject(item.id), item);
  for (const part of item.details.byPartVideoExplanation) {
    assert.equal(typeof part.videoUrl, 'string');
    assert.equal(typeof part.partExplanation, 'string');
  }
}

const pages = ['index.html', 'assets/pages/about.html', 'assets/pages/contact.html',
  'assets/pages/project.html', 'assets/pages/projectDescription.html', 'assets/pages/resume.html'];
for (const page of pages) {
  const html = read(page);
  const script = html.match(/<script type="module" src="([^"]+)"/);
  assert.ok(script, `${page} must load an ES module`);
  assert.ok(existsSync(resolve(dirname(resolve(root, page)), script[1])));
  assert.ok(!html.includes('../js/index.js') && !html.includes('projectDescription.js'));
}
assert.ok(!read('assets/pages/project.html').includes('window.open'));
assert.ok(!read('assets/pages/project.html').includes('featured-project-swiper'));
assert.ok(!read('assets/pages/project.html').includes('CarSell'), 'no hardcoded project-specific HTML');
assert.ok(!read('assets/pages/project.html').includes('swiper@11'));
assert.equal(getCurrentProject()?.id, portfolioSettings.currentProjectId || undefined, 'respect owner-selected current project');
assert.equal(startingPreviousCount, projects.length - (startingCurrentProject ? 1 : 0), 'all non-current projects are previous work');
assert.equal(projectDestination(getProject('proj-webapp')), 'https://marciales133.github.io/car_dealership/');
assert.equal(projectDestination(getProject('proj-desktop1')), './projectDescription.html?project=proj-desktop1');
assert.equal(projectDestination({id: 'unsafe', websiteUrl:'javascript:alert(1)'}), './projectDescription.html?project=unsafe');
assert.ok(read('assets/pages/projectDescription.html').indexOf('id="overviewMedia"') <
  read('assets/pages/projectDescription.html').indexOf('detail-animation'));
assert.equal((read('assets/pages/projectDescription.html').match(/class="circle-wrapper /g) || []).length, 2);

/** Mini DOM covers state, filtering, URL syncing and dynamic cards without dependencies. */
class Element {
  constructor(tag = 'div') {
    this.tagName = tag.toUpperCase();
    this.children = [];
    this.dataset = {};
    this.listeners = {};
    this.attributes = {};
    this.hidden = false;
    this.value = '';
    this.classNames = new Set();
    this.classList = {
      toggle: (name, isActive) => {
        if (isActive) this.classNames.add(name);
        else this.classNames.delete(name);
      },
      add: (name) => this.classNames.add(name),
    };
  }
  append(...items) { this.children.push(...items); }
  replaceChildren(...items) { this.children = items.flatMap((item) => item.tagName === '#FRAGMENT' ? item.children : [item]); }
  setAttribute(name, value) { this.attributes[name] = value; }
  addEventListener(name, cb) { this.listeners[name] = cb; }
  querySelectorAll(selector) {
    if (selector === 'button[data-category]') return this.children.filter((child) => 'category' in child.dataset);
    return [];
  }
  closest() { return this; }
}

const elements = {};
const get = (id) => elements[id] ??= new Element();
const grid = get('projectGrid');
const filterBar = get('projectFilters');
const search = get('projectSearch');
const reset = get('resetProjectFilters');
const keyListeners = {};
const listeners = {};
let lastUpdatedUrl = '';
globalThis.window = {
  location: {
    search: '',
    href: 'https://portfolio.example/assets/pages/project.html',
  },
  history: { replaceState: (_state, _title, url) => { lastUpdatedUrl = String(url); } },
  addEventListener: (type, cb) => { listeners[type] = cb; },
};
globalThis.document = {
  createElement: (name) => new Element(name),
  createTextNode: (content) => ({ tagName: '#TEXT', textContent: content }),
  createDocumentFragment: () => new Element('#FRAGMENT'),
  getElementById: (id) => get(id),
  addEventListener: (type, cb) => { keyListeners[type] = cb; },
  querySelectorAll: () => [],
  querySelector: (selector) => {
    if (selector === '#projectDetail') return get('projectDetail');
    if (selector.startsWith('meta[')) return get('meta');
    return null;
  },
  title: '',
};

initProjectsPage();
assert.equal(grid.children.length, startingPreviousCount, 'all previous project cards must render');
assert.equal(filterBar.children.length, new Set(getPreviousProjects().map(p => p.category)).size + 1, 'all categories plus All work');
assert.equal(get('projectTotalCount').textContent, String(projects.length));
assert.equal(get('currentProject').children.length, 1, 'empty current has a friendly spotlight');
assert.equal(get('currentProject').children[0].className, startingCurrentProject ? 'featured-project' : 'featured-project featured-project--empty');
assert.equal(grid.children.find((card) => card.href.includes('car_dealership/')).attributes['aria-label'], 'Visit CarSell website');
const allHrefs = grid.children.map((card) => card.href);
for (const href of allHrefs) {
  assert.ok(href.startsWith('./projectDescription.html?project=') || href.startsWith('https://'));
  assert.ok(!href.includes('NewTab'));
}
function chooseCategory(category) {
  filterBar.listeners.click({ target: filterBar.children.find((button) => button.dataset.category === category) });
}
chooseCategory('Web App');
assert.equal(grid.children.length, getPreviousProjects().filter(p => p.category === 'Web App').length, 'category filter');
assert.equal(get('projectResultCount').textContent, grid.children.length === 1 ? '1 project' : `${grid.children.length} projects`);
assert.ok(lastUpdatedUrl.includes('category=Web+App'), 'URL retains filter for browser Back');
chooseCategory('');
assert.equal(grid.children.length, startingPreviousCount, 'all previous projects restored');
search.value = 'pygame';
search.listeners.input();
assert.equal(grid.children.length, getPreviousProjects().filter(p => [p.details.projectName, p.cardDescription, p.category, p.details.techStack].join(' ').toLowerCase().includes('pygame')).length, 'tech search works');
search.value = 'no such project';
search.listeners.input();
assert.equal(grid.children.length, 0, 'no matches');
assert.equal(get('projectsEmpty').hidden, false, 'empty state visible');
reset.listeners.click();
assert.equal(grid.children.length, startingPreviousCount, 'reset clears search and filters');
assert.equal(search.value, '');

// Switching current project uses only the data setting, without editing HTML.
portfolioSettings.currentProjectId = 'proj-desktop2';
assert.equal(getCurrentProject()?.details.projectName, 'School Supply Store');
assert.equal(getPreviousProjects().length, projects.length - 1);
assert.ok(getPreviousProjects().some((item) => item.id === 'proj-webapp'), 'CarSell remains previous');
renderCurrentProject();
const spotlight = get('currentProject').children[0];
assert.equal(spotlight.className, 'featured-project');
assert.equal(spotlight.children[0].children[1].children[0].tagName, 'VIDEO', 'featured media is a video, not Swiper');
assert.equal(spotlight.children[0].children[1].children[0].src, '../media/video/SchoolSupplyStoreTransactionApp.mp4');
assert.equal(spotlight.children[1].children[5].children[0].href, './projectDescription.html?project=proj-desktop2');
portfolioSettings.currentProjectId = 'proj-webapp';
renderCurrentProject();
const ctaLinks = get('currentProject').children[0].children[1].children[5].children;
assert.equal(ctaLinks[0].href, 'https://marciales133.github.io/car_dealership/');
assert.equal(ctaLinks[1].href, './projectDescription.html?project=proj-webapp');
assert.equal(getPreviousProjects().length, projects.length - 1);
portfolioSettings.currentProjectId = '';
renderCurrentProject();

window.location.search = '?project=proj-webapp';
initProjectDetail();
assert.equal(get('projectTitle').textContent, 'CarSell');
assert.equal(get('projectParts').children.length, 3, 'three part sections rendered');
assert.equal(get('technologiesList').children.length, 8);
assert.equal(get('overviewMedia').children[0].tagName, 'VIDEO');
assert.equal(get('overviewMedia').children[0].src, '../media/video/CarsellDemo.mp4');
assert.equal(get('projectParts').children[0].children.length, 2, 'stage has media and copy');

window.location.search = '?tab=proj-desktop1NewTab';
initProjectDetail();
assert.equal(get('projectTitle').textContent, 'Band Player');
assert.equal(get('overviewMedia').children[0].children.length, 4, 'legacy screenshot gallery retained');

window.location.search = '?project=does-not-exist';
initProjectDetail();
assert.equal(get('projectDetail').hidden, true);
assert.equal(get('projectNotFound').hidden, false);

// The gallery must inherit its visual palette from the existing site themes.
const projectsCss = read('assets/css/project.css');
for (const token of ['--backgroundColor', '--sectionBackground', '--cardBackground',
  '--color', '--p-color', '--primary-500', '--tertiary-500', '--grey-700']) {
  assert.ok(projectsCss.includes(`var(${token})`), `missing shared palette token ${token}`);
}
assert.ok(!projectsCss.includes('#0b1018'), 'old standalone navy palette must not return');
assert.ok(!projectsCss.includes('body#project {\n  --p-bg: #'), 'no hardcoded new background');
assert.ok(!projectsCss.includes('#project nav {'), 'projects nav uses main.css styling');
assert.ok(!projectsCss.includes('#project .myLogo {'), 'projects brand uses main.css styling');

// About/Resume skill inventory and development experience stay consistent with owner's update.
const aboutHtml = read('assets/pages/about.html');
const resumeHtml = read('assets/pages/resume.html');
const aboutTechnical = aboutHtml.split('SOFTWARE SKILLS')[1].split('DEVELOPMENT EXPERIENCE')[0];
const resumeTechnical = resumeHtml.split('ri-star-line"></i> Skills')[1].split('ri-translate"></i> Language')[0];
assert.equal((aboutTechnical.match(/role="progressbar"/g) ?? []).length, 7, 'About keeps seven technical skills');
assert.equal((resumeTechnical.match(/role="progressbar"/g) ?? []).length, 8, 'Resume contains eight technical skills');
assert.equal((resumeHtml.match(/class="progress-bar (?:tagalog|english)"/g) ?? []).length, 2, 'Resume preserves both language bars');
for (const phrase of ['Full-Stack Websites', 'SQL Server (SSMS)', 'MongoDB', 'PostgreSQL', 'MySQL', 'Vercel Deployment', 'GitHub Pages']) {
  assert.ok(aboutHtml.includes(phrase), `missing experience highlight: ${phrase}`);
}
assert.ok(read('assets/css/aboutStyle.css').includes('about-skill-fill'), 'About skill fill animation intact');
assert.ok(read('assets/css/resume.css').includes('@keyframes tagalog'), 'Resume language fill animations intact');
for (const label of ['Backend &amp; REST APIs', 'C# &amp; .NET', 'Java Development']) {
  assert.ok(resumeTechnical.includes(label), `missing updated Resume skill: ${label}`);
}
console.log('PASS: About/Resume skills, eight Resume technical bars and two language bars.');

console.log(`PASS: ${projects.length} projects, modular project spotlight and same-tab URLs, category chips,`);
console.log('      project/tech search, zero-results/reset, URL state, media/details injection,');
console.log('      live URL fallback, featured video, current/previous switching,');
console.log('      screenshot galleries, legacy links, and missing-project handling.');
