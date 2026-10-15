/** Single entrypoint: shared behavior first, then the current page's feature. */
import { initNavigation } from './common/navigation.js';
import { initTheme } from './common/theme.js';
import { observeReveals } from './common/reveal.js';
import { initPageSwiper } from './features/swipers.js';
import { initContactForm } from './features/contact-form.js';
import { initProjectsPage } from './pages/projects.js';
import { initProjectDetail } from './pages/project-detail.js';

initTheme();
initNavigation();
observeReveals();

const page = document.body.id;
if (page === 'home' || page === 'resume') initPageSwiper(page);
if (page === 'project') initProjectsPage();
if (page === 'project-detail') initProjectDetail();
if (page === 'contact') initContactForm();

// All existing HTML pages contain this footer year placeholder.
document.querySelectorAll('#year').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
