import { getCurrentProject, projectDestination } from '../data/projects.js';

/**
 * Current project spotlight: one VIDEO and content from the project catalog.
 * The HTML owns only <div id="currentProject">; no hardcoded project markup.
 */
function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}

function icon(name) {
  const node = element('i', name);
  node.setAttribute('aria-hidden', 'true');
  return node;
}

function placeholder(text) {
  const box = element('div', 'featured-video-fallback');
  box.append(icon('ri-video-line'), element('span', '', text));
  return box;
}

function createVideo(record) {
  const outer = element('div', 'featured-project__visual');
  const heading = element('div', 'featured-media-heading');
  heading.append(icon('ri-video-line'), element('span', '', 'PROJECT VIDEO'));
  const dots = element('span', 'featured-media-heading__dots');
  dots.setAttribute('aria-hidden', 'true');
  dots.append(element('b'), element('b'), element('b'));
  heading.append(dots);

  const shell = element('div', 'featured-video-shell');
  const src = String(record.details.overviewVideo || '').trim();
  if (src && src !== '#') {
    const video = element('video', 'featured-video');
    video.src = src;
    video.controls = true;
    video.preload = 'metadata';
    video.playsInline = true;
    video.setAttribute('aria-label', `${record.details.projectName} project overview video`);
    if (record.thumbnail) video.poster = record.thumbnail;
    video.addEventListener('error', () => {
      video.classList.add('is-unavailable');
      shell.append(placeholder('The video is unavailable right now.'));
    }, { once: true });
    shell.append(video);
  } else {
    shell.append(placeholder('A project overview video will be available soon.'));
  }

  const footer = element('div', 'featured-visual-footer');
  const label = element('span');
  label.append(element('span', 'featured-live-dot'),
    document.createTextNode(` ${record.details.projectName.toUpperCase()} / ${record.category.toUpperCase()}`));
  footer.append(label, icon('ri-film-line'));
  outer.append(heading, shell, footer);
  return outer;
}

function previewText(record) {
  const overview = String(record.details.projectOverview || '').trim().replace(/\s+/g, ' ');
  if (!overview) return 'Explore the project and how it came together.';
  return overview.length > 270 ? `${overview.slice(0, 267).trimEnd()}…` : overview;
}

function createCopy(record) {
  const content = element('div', 'featured-project__copy');
  const label = element('span', 'featured-project__label');
  label.append(icon('ri-sparkling-line'), document.createTextNode(` CURRENT PROJECT / ${record.category.toUpperCase()}`));
  const title = element('h3', '', record.details.projectName);
  const subtitle = element('p', 'featured-project__lead', record.cardDescription || record.category);
  const description = element('p', 'featured-project__description', previewText(record));
  const tags = element('div', 'featured-project__tags');
  tags.setAttribute('aria-label', 'Technologies used');
  const stack = Array.isArray(record.details.techStack)
    ? record.details.techStack
    : String(record.details.techStack ?? '').split(',');
  stack.map((item) => item.trim()).filter((item) => item && !/^VSCode$/i.test(item))
    .slice(0, 4).forEach((item) => tags.append(element('span', '', item)));

  const links = element('div', 'featured-project__links');
  const mainLink = element('a', 'primary-project-link');
  mainLink.href = projectDestination(record);
  mainLink.append(document.createTextNode('View case study'), icon('ri-arrow-right-up-line'));
  links.append(mainLink);

  // A public website may not explain the development process, so keep details accessible.
  if (mainLink.href !== `./projectDescription.html?project=${encodeURIComponent(record.id)}`) {
    const detailLink = element('a', 'secondary-project-link');
    detailLink.href = `./projectDescription.html?project=${encodeURIComponent(record.id)}`;
    detailLink.append(document.createTextNode('Project details'), icon('ri-file-list-3-line'));
    links.append(detailLink);
  }
  content.append(label, title, subtitle, description, tags, links);
  return content;
}

function createEmptySpotlight() {
  // The user has not named the replacement current project. Do not invent one.
  const feature = element('article', 'featured-project featured-project--empty');
  const visual = element('div', 'featured-project__visual');
  const shell = element('div', 'featured-video-shell');
  shell.append(placeholder('The next project will be showcased here.'));
  visual.append(shell);
  const copy = element('div', 'featured-project__copy');
  copy.append(
    element('span', 'featured-project__label', 'WHAT\'S NEXT'),
    element('h3', '', 'Something new is taking shape.'),
    element('p', 'featured-project__description', 'In the meantime, explore the projects I have worked on so far.'),
  );
  const links = element('div', 'featured-project__links');
  const browse = element('a', 'primary-project-link', 'Browse previous projects');
  browse.href = '#all-projects';
  links.append(browse);
  copy.append(links);
  feature.append(visual, copy);
  return feature;
}

export function renderCurrentProject() {
  const mount = document.getElementById('currentProject');
  if (!mount) return;
  const record = getCurrentProject();
  if (!record) {
    mount.replaceChildren(createEmptySpotlight());
    return;
  }
  const feature = element('article', 'featured-project');
  feature.append(createVideo(record), createCopy(record));
  mount.replaceChildren(feature);
}
