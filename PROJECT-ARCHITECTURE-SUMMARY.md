e.
6. Validate, commit, push.
# Project Architecture Summary

This document explains how the Treact Starter Code project is organized and how to maintain it.

## 1. Folder Layout

- assets/
- .backup/
- index.html
- style.css
- script.js
- Reference docs (.md files)

### Purpose of Each Core Path

1. assets/
- Stores images, logos, and illustration files used by sections.

2. .backup/
- Stores local timestamped snapshot files for recovery.

3. index.html
- Single source of page structure and semantic section order.

4. style.css
- Single source of visual system, section styling, and responsive breakpoints.

5. script.js
- Single source of interactivity (menu, testimonial slider, FAQ accordion).

## 2. Section Order (Page Flow)

1. landing (nav + hero)
2. features
3. quality
4. steps
5. values
6. pricing
7. testimonials
8. faqs
9. start (CTA)
10. footer

## 3. Naming Convention

The project follows a BEM-like naming style:

- block: section or component root (example: pricing-card)
- element: child of a block (example: pricing-card__price)
- modifier: variation (example: pricing-card--business)

### Rules

1. Use double underscore for elements.
2. Use double hyphen for modifiers.
3. Keep class names descriptive and section-scoped.
4. Avoid one-off generic names like box1, text2, btn3.

## 4. Layout System

Global wrappers are reused across sections:

1. .container
- Handles vertical rhythm and section spacing.

2. .row / .row__narrow
- Handles max width and horizontal centering.

3. Section wrappers (example: .testimonials__header)
- Handle local split layouts and section-specific alignment.

## 5. Responsive Strategy

Breakpoints in style.css:

1. 1280
2. 1024
3. 768
4. 640

### Expected Behavior

1. Two-column sections collapse to stacked layouts on smaller screens.
2. Complex rows (pricing/testimonials/footer/start) switch to wrapped or column layouts.
3. Text scales down at smaller breakpoints to preserve readability.

## 6. JavaScript Architecture

script.js is split into simple behavior units:

1. Menu controls
- openMenu
- closeMenu

2. initializeTestimonials
- Uses id hooks in markup.
- Updates title, text, avatar, name, role on arrow click.

3. initializeFaqs
- Toggles faq-item--open class.
- Updates aria-expanded for accessibility.

### JS Rules

1. Keep section logic in dedicated initializer functions.
2. Guard each feature if required DOM nodes are missing.
3. Prefer small, readable functions over complex multi-purpose blocks.

## 7. Accessibility Baseline

1. Icon-only links need aria-label.
2. Interactive controls need visible focus styles.
3. Keep contrast high on purple/dark surfaces.
4. Preserve semantic section landmarks (header, section, footer).

## 8. Quality and Maintenance Rules

1. Avoid duplicate CSS selectors for the same block.
2. Keep one source of truth per section block.
3. Run quick validation after edits.
4. Commit stable chunks, not unfinished breakage.
5. Keep markdown reference docs updated when patterns evolve.

## 9. Recovery and Safety Workflow

1. Before major edits, create a backup in .backup/.
2. Commit after each stable section.
3. Push/sync after local commit.
4. If corruption happens, restore from backup or Git commit history.

## 10. Fast Onboarding Checklist (Future You)

1. Open MASTER-SECTION-REFERENCE-INDEX.md first.
2. Review section map and target block.
3. Open matching section in index.html and style.css.
4. If interactivity is needed, inspect script.js initializer functions.
5. Make one small change at a tim
e.
6. Validate, commit, push.
# Project Architecture Summary

This document explains how the Treact Starter Code project is organized and how to maintain it