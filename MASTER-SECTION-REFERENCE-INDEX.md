# Treact Project Master Reference Index

This is the main index for reusable sections in this project.
Use this as the first file to open when building new projects.

## Quick Links

1. [Project Markup](index.html)
2. [Project Styles](style.css)
3. [Project Scripts](script.js)
4. [HTML Snippets](HTML-TEMPLATES.md)
5. [CSS Snippets](CSS-TEMPLATES.md)
6. [Navigation Reference](NAV-REFERENCE.md)
7. [Start CTA Reference](START-CTA-REFERENCE.md)
8. [Footer Reference](FOOTER-REFERENCE-LIBRARY.md)
9. [Workflow Rules](COPILOT-OPERATING-RULES.md)

## Reusable Section Map

1. Landing and Navigation
- Markup: [index.html](index.html#L18)
- Styles: [style.css](style.css)
- Notes: Use for logo, desktop links, auth buttons, and mobile menu.

2. Hero Header
- Markup: [index.html](index.html)
- Styles: [style.css](style.css)
- Notes: Reuse for headline + description + form/button + image split layout.

3. Features Grid
- Markup: [index.html](index.html)
- Styles: [style.css](style.css)
- Notes: Card-based grid with icon, title, body text.

4. Quality Split Section
- Markup: [index.html](index.html)
- Styles: [style.css](style.css)
- Notes: Two-column text and image pattern.

5. Steps Section
- Markup: [index.html](index.html)
- Styles: [style.css](style.css)
- Notes: Numbered list system with title and paragraph per step.

6. Values Section
- Markup: [index.html](index.html)
- Styles: [style.css](style.css)
- Notes: Icon + title-row + description pattern, reusable for principles/benefits.

7. Pricing Cards
- Markup: [index.html](index.html#L371)
- Styles: [style.css](style.css)
- Notes: Three-card layout with highlighted center plan and stripe variations.

8. Testimonials Slider
- Markup: [index.html](index.html#L450)
- Styles: [style.css](style.css)
- Script: [script.js](script.js)
- Notes: Uses id hooks for title/text/avatar/name/role and prev/next buttons.

9. FAQ Accordion
- Markup: [index.html](index.html#L522)
- Styles: [style.css](style.css)
- Script: [script.js](script.js)
- Notes: Expand/collapse behavior with accessible aria-expanded toggling.

10. Start CTA Block
- Markup: [index.html](index.html#L623)
- Styles: [style.css](style.css)
- Deep Guide: [START-CTA-REFERENCE.md](START-CTA-REFERENCE.md)
- Notes: Message + primary/secondary actions with responsive stacking.

11. Footer
- Markup: [index.html](index.html)
- Styles: [style.css](style.css)
- Deep Guide: [FOOTER-REFERENCE-LIBRARY.md](FOOTER-REFERENCE-LIBRARY.md)
- Notes: Columns, divider, and bottom identity row.

## JavaScript Pattern Index

1. Menu Toggle Pattern
- File: [script.js](script.js)
- Functions: openMenu, closeMenu
- Reuse: Mobile menu overlays and side drawers.

2. Content Slider Pattern
- File: [script.js](script.js)
- Reuse: Reviews, quotes, product highlights.

3. Accordion Pattern
- File: [script.js](script.js)
- Reuse: FAQ, policy, troubleshooting sections.

## Responsive Breakpoint Index

1. Desktop wide: 1280
2. Tablet: 1024
3. Tablet/mobile: 768
4. Mobile: 640

Defined in [style.css](style.css).

## Pre-Commit Quality Checklist

1. Validate HTML and CSS for errors.
2. Check desktop and mobile layouts.
3. Test slider and FAQ interactions.
4. Verify hover and keyboard focus states.
5. Confirm assets paths are valid.
6. Commit only when section behavior is stable.

## Recommended Reuse Workflow

1. Start from this index.
2. Pick one section from Reusable Section Map.
3. Copy matching HTML structure.
4. Copy matching CSS block.
5. Add JS pattern only if interaction is needed.
6. Run quick validation and commit.
