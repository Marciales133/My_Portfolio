# Rushell Portfolio — modular vanilla JavaScript

Refactored from the provided portfolio ZIP. This is still a static HTML/CSS/JavaScript project—**no framework, npm install, or build step required**.

## Run locally

Because the JavaScript uses native ES modules (`type="module"`), use an HTTP server rather than opening HTML as `file://`:

```bash
# From this folder:
python -m http.server 8000
```

Then visit `http://localhost:8000/`. VS Code Live Server also works. GitHub Pages can serve these files directly.

## Predictable directory layout

```text
index.html                        Home page
assets/
  pages/
    about.html                    About page
    contact.html                  Contact page
    project.html                  Current project + searchable previous projects
    projectDescription.html       ONE reusable project detail page
    resume.html                   Resume page
  css/
    main.css                      Shared layout/theme
    project.css                   Scoped responsive project gallery styles
    projectDescription.css        Detail page, videos and step sections
    ...                           Existing page-specific styles retained
  js/
    main.js                       Entry point and page initialization
    common/
      navigation.js               Hamburger & responsive navigation
      theme.js                    Theme preference across pages
      reveal.js                   Scroll-reveal animations
    features/
      swipers.js                  Home and résumé sliders (NOT on project page)
      contact-form.js             Contact form mailto behavior
    data/
      projects.js                 EDIT PROJECT CONTENT, CURRENT ID & LIVE LINKS HERE
    pages/
      projects.js                 Previous-project cards, category chips, filters, search
      current-project.js          Inject the selected current project and its single video
      project-detail.js           Inject a project into detail HTML
```

## Change the current project — JS DATA ONLY

Open **`assets/js/data/projects.js`**. At the very top you will see:

```js
export const portfolioSettings = {
  currentProjectId: '', // blank until you choose your next current project
};
```

**CarSell is now in the previous-project collection.** Because you have not told me
which project replaces it, `currentProjectId` is initially empty and the Current
Project section shows a tasteful coming-soon placeholder instead of inventing a
project. All 13 original projects, including CarSell, remain browsable below.

To show an existing project in the Current Project section, just set its ID:

```js
export const portfolioSettings = {
  currentProjectId: 'proj-ecommerce2', // example; use your actual current project ID
};
```

The chosen project moves into the Current Project section **automatically** and is
excluded from Previous Projects. To move it back to Previous Projects when you
start another build, change `currentProjectId` to the next project's ID.
No HTML, CSS, or JS renderer changes are needed.

### Adding a NEW project (copy & paste into the `projects` array)

```js
{
  id: 'my-new-project',                  // unique ID — never duplicate another
  category: 'Web App',                   // new categories also appear automatically
  cardDescription: 'Short summary shown in the feature and previous card',
  thumbnail: '../media/image/my-project.png', // image OR existing absolute URL
  websiteUrl: 'https://example.com/',   // optional; leave '' for details instead
  details: {
    projectName: 'My New Project',
    overviewVideo: 'https://example.com/overview.mp4', // FEATURE VIDEO, not a slider
    projectOverview: 'What the project does and why you built it.',
    techStack: 'HTML, CSS, JavaScript',
    byPartVideoExplanation: [
      { videoUrl: '', partExplanation: 'Planning and setup.' },
      { videoUrl: '', partExplanation: 'Implementation.' },
      { videoUrl: '', partExplanation: 'Testing and deployment.' },
    ],
  },
},
```

Then change the setting to:

```js
export const portfolioSettings = {
  currentProjectId: 'my-new-project',
};
```

If this is a **previous** project, simply add it to the array and do not change
`currentProjectId`. It will appear in the grid and filters by itself. Its project
detail page also works automatically.

### Which URL does "View case study" open?

| `websiteUrl` value | Destination |
| --- | --- |
| `'https://your-site.com/'` | Opens your deployed website **in the same tab** |
| `''` or omitted | Opens `projectDescription.html?project=YOUR_ID` in the **same tab** |

The same rule applies to Previous Projects cards (their link label becomes
"Visit website" if a public URL is available). The Current Project section
additionally displays a **Project details** secondary link if the primary CTA
points to an external website. CarSell's original deployed URL was copied from
the old featured HTML into the `proj-webapp` data entry.

For safety, only actual `http://` and `https://` website links are used for
external navigation. Other values fall back to the detail page.

### Current Project media

The Current Project section uses exactly **one video**, controlled by
`details.overviewVideo`. Native `.mp4`, `.webm`, and `.ogg` URLs can be played
using built-in browser controls, including on mobile. It no longer uses Swiper,
screenshot sliders, or hardcoded CarSell elements. If the video is blank or
fails to load, a responsive placeholder is displayed. `thumbnail` is the poster.
An ordinary YouTube watch-page URL is not a native video file; use a hosted
video file for the `overviewVideo` field.

The detail page retains the original media gallery fallback for older projects
and the animated section immediately below its overview media. Its
`byPartVideoExplanation` array accepts any number of parts (not strictly three).

## Projects page colors match the rest of the site

The Projects page no longer defines a separate navy/mint light/dark theme.
Its background, cards, text, borders, green highlights, and purple primary
buttons inherit from **`assets/css/main.css`**, just like Home, About, Resume,
and Contact. Its navbar uses the same logo, bar, spacing, and theme toggle as
those pages. The Project link retains the site's existing blue-violet active
navigation color.

To change colors for the **entire portfolio**, edit the existing variables at
the top of `assets/css/main.css` (`--backgroundColor`, `--sectionBackground`,
`--cardBackground`, `--color`, `--p-color`, `--primary-*`, `--tertiary-*`, etc.).
`assets/css/project.css` handles project-specific layout, sizes, and local
aliases; it does not maintain its own separate mode palette.

> Note: the original project calls black mode `data-theme="light"` and white
> mode `data-theme="dark"`. That unusual convention is preserved to avoid
> altering the behavior of other pages.

## Responsive projects layout

The static `assets/pages/project.html` contains only two empty dynamic mounts:
`#currentProject` for the current spotlight and `#projectGrid` for Previous
Projects. All featured text, video, links, technologies, categories, cards, and
counts come from the **JS data**. The Previous Projects grid has live search,
category filters, shareable `?category=` and `?search=` state, and an empty state.

The layout stacks on phones, uses a two-column tablet grid and a three-column
desktop grid, preserves the site's existing light/dark toggle, keyboard focus
states, reduced-motion support and missing-image fallbacks. On small screens,
category chips scroll sideways instead of overflowing the viewport.

**Shortcut:** `/` focuses the search field, `Esc` clears it.

### Navigation and links

- Project cards navigate to `websiteUrl` when present, otherwise `projectDescription.html?project=my-new-project`, **in the same browser tab**.
- The reusable detail page reads the query string to choose the record. URLs are bookmarkable, refreshable and support browser Back.
- Old links in the form `projectDescription.html?tab=proj-webappNewTab` are still supported.
- Category buttons filter the project catalog without rebuilding page-specific handlers.

### Asset URLs

The user-provided ZIP omits large files from `assets/media/`. **The original paths were intentionally preserved**, not considered mistakes. Supply the missing media at their relative paths, or replace these strings with existing absolute `https://` URLs. If the site is deployed from a different directory, make sure relative URLs resolve from `assets/pages/`. The missing media could not be visually verified from this ZIP.

### Known original placeholders

- Some project summaries were originally `Lorem ipsum` and are now clearly marked as in-progress rather than showing dummy text.
- The 20 (or 24) old step-plan bullets were moved into three `partExplanation` sections per project to preserve content. **No part videos existed in the old ZIP**, so `videoUrl` values are left empty for you to fill in.
- The existing contact form still uses `mailto:your@email.com`; replace that address with your real receiving address when publishing.
- Home and résumé still use Swiper from CDN, and all pages use Remix Icon from CDN; the project listing page itself no longer loads Swiper.

## Skills and experience (About / Resume)

The skills displayed in **About** and **Resume** were updated to reflect current hands-on
full-stack work. This update deliberately keeps **seven About technical bars** and the
Resume's **eight technical bars plus the original two language bars**. Three technical
skills were added: Backend & REST APIs, C# & .NET, and Java Development. The existing
Resume skill-bar design and the language bars were preserved. Stretching was fixed by
keeping skill rows grouped together rather than distributing them over the height of
the Project Experience column. The About page also contains four experience highlights (3 full-stack
websites, 7 databases across SQL Server/SSMS, MongoDB, PostgreSQL and MySQL,
1 Vercel deployment, and beginner Git/GitHub/GitHub Pages familiarity).

To adjust a skill bar later, edit `assets/pages/about.html` or
`assets/pages/resume.html`, find its `style="--skill-level: 85%"`, and set the
value to the desired percentage. Also update `aria-valuenow="85"` to match
for screen-reader accessibility. Bars use one shared CSS animation instead of
a different keyframe for every language. The percentages are approximate
self-assessments, **not certifications**.

The user-supplied Resume HTML is also preserved, including the updated DMC E-Shop,
Street Flex, and CarSell Project Experience descriptions. The animation-related
library starting with **D** was not named explicitly, so the text refers to
UI/animation libraries without assuming which one.
