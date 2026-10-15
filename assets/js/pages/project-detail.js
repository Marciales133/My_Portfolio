import { getProject } from '../data/projects.js';

/**
 * Detail page renderer. Every card points to this SAME HTML file with its own
 * ?project=id query; refresh, bookmarks, and browser Back/Forward all work.
 * No window.open(), popup messaging, or separate project HTML files.
 */
export function initProjectDetail() {
  const params = new URLSearchParams(window.location.search);
  // Old links used ?tab=...NewTab. Accept those bookmarks too.
  const id = params.get('project') ?? params.get('tab')?.replace(/NewTab$/, '');
  const record = getProject(id);
  const main = document.querySelector('#projectDetail');
  const title = document.getElementById('projectTitle');
  if (!main || !title) return;

  if (!record) {
    title.textContent = 'Project not found';
    main.hidden = true;
    const message = document.getElementById('projectNotFound');
    message.hidden = false;
    return;
  }

  const project = record.details;
  document.title = `${project.projectName} | Rushell Marciales`;
  document.querySelector('meta[name="description"]')?.setAttribute(
    'content', `Project overview and video explanations for ${project.projectName}.`,
  );
  title.textContent = project.projectName;
  document.getElementById('projectCategory').textContent = record.category;

  renderOverviewMedia(document.getElementById('overviewMedia'), project.overviewVideo, record);
  document.getElementById('projectOverview').textContent = project.projectOverview || 'Project details are coming soon.';

  const technologies = document.getElementById('technologiesList');
  const stack = Array.isArray(project.techStack)
    ? project.techStack
    : String(project.techStack ?? '').split(',').map((word) => word.trim()).filter(Boolean);
  technologies.replaceChildren(...stack.map((technology) => {
    const item = document.createElement('li');
    item.textContent = technology;
    return item;
  }));
  if (!stack.length) {
    const item = document.createElement('li');
    item.textContent = 'To be added';
    technologies.append(item);
  }

  renderParts(document.getElementById('projectParts'), project.byPartVideoExplanation);
}

function videoPlayer(videoUrl, poster, caption) {
  const media = document.createElement('video');
  media.className = 'project-video';
  media.controls = true;
  media.preload = 'metadata';
  media.playsInline = true;
  media.src = videoUrl;
  if (poster) media.poster = poster;
  media.setAttribute('aria-label', caption);
  return media;
}

function videoPlaceholder(poster, message) {
  const element = document.createElement('div');
  element.className = 'video-placeholder';
  if (poster) {
    const image = document.createElement('img');
    image.src = poster;
    image.alt = '';
    image.loading = 'lazy';
    element.append(image);
  }
  const label = document.createElement('span');
  label.textContent = message;
  element.append(label);
  return element;
}

function renderOverviewMedia(target, url, record) {
  if (url && url !== '#') {
    target.replaceChildren(videoPlayer(url, record.thumbnail, `${record.details.projectName} overview video`));
    return;
  }
  // An original desktop project used a screenshot gallery instead of a demo video.
  if (record.overviewGallery?.length) {
    const gallery = document.createElement('div');
    gallery.className = 'detail-gallery';
    gallery.setAttribute('aria-label', `${record.details.projectName} screenshots`);
    for (const [index, source] of record.overviewGallery.entries()) {
      const image = document.createElement('img');
      image.src = source;
      image.alt = `${record.details.projectName} screenshot ${index + 1}`;
      image.loading = index ? 'lazy' : 'eager';
      gallery.append(image);
    }
    target.replaceChildren(gallery);
    return;
  }
  target.replaceChildren(videoPlaceholder(record.thumbnail, 'Overview video coming soon'));
}

function renderParts(target, entries) {
  const parts = Array.isArray(entries) ? entries : [];
  if (!parts.length) {
    const empty = document.createElement('p');
    empty.textContent = 'Part-by-part explanations will be added soon.';
    target.replaceChildren(empty);
    return;
  }

  const titles = ['Planning & Setup', 'Development', 'Testing & Delivery'];
  const fragment = document.createDocumentFragment();
  parts.forEach((part, index) => {
    const item = document.createElement('article');
    item.className = 'project-part';
    item.id = `part-${index + 1}`;

    const mediaContainer = document.createElement('div');
    mediaContainer.className = 'part-media';
    mediaContainer.append(
      part.videoUrl && part.videoUrl !== '#'
        ? videoPlayer(part.videoUrl, '', `Part ${index + 1} explanation video`)
        : videoPlaceholder('', `Part ${index + 1} video coming soon`),
    );

    const content = document.createElement('div');
    content.className = 'part-copy';
    const eyebrow = document.createElement('span');
    eyebrow.className = 'part-index';
    eyebrow.textContent = `PART ${String(index + 1).padStart(2, '0')}`;
    const heading = document.createElement('h3');
    heading.textContent = titles[index] ?? `Part ${index + 1}`;
    const explanation = document.createElement('p');
    explanation.textContent = part.partExplanation?.trim() || 'Explanation coming soon.';
    content.append(eyebrow, heading, explanation);
    item.append(mediaContainer, content);
    fragment.append(item);
  });
  target.replaceChildren(fragment);
}
