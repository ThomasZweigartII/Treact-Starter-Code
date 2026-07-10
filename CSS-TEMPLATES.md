# CSS TEMPLATES REFERENCE GUIDE
## Common Patterns for Flexbox Layouts

---

## SCENARIO 1: Centered Header with Title + Description
**Use for:** Section intro (Features, Quality intro, Values intro)
```css
.section__header {
    width: 100%;
    text-align: center;
    margin-bottom: 64px;
}

.section__label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    color: #a0aec0;
    text-transform: uppercase;
    margin-bottom: 16px;
}

.section__heading {
    font-size: 42px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 24px;
}

.section__description {
    font-size: 18px;
    line-height: 1.75;
    color: #718096;
    max-width: 600px;
    margin: 0 auto;
}
```

---

## SCENARIO 2: Split-Screen Layout (Text Left + Image Right)
**Use for:** Header, Quality, any two-column content
```css
.section__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    width: 100%;
}

.section__text {
    flex: 1;
    max-width: 560px;
}

.section__heading {
    font-size: 42px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 24px;
}

.section__description {
    font-size: 18px;
    line-height: 1.75;
    color: #4a5568;
    margin-bottom: 32px;
}

.section__btn {
    padding: 16px 32px;
    background: #6415ff;
    color: white;
    border: none;
    border-radius: 500px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 300ms ease;
}

.section__btn:hover {
    filter: brightness(1.1);
}

.section__image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.section__img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}
```

---

## SCENARIO 3: Card Grid (3 Columns with Flex-Wrap)
**Use for:** Features, testimonials, pricing cards
```css
.section .row__narrow {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
}

.section__card {
    flex: 1 1 calc(33.333% - 27px);
    min-width: 250px;
    padding: 40px;
    background: #f7fafc;
    border-radius: 8px;
    text-align: center;
    transition: all 300ms ease;
}

.section__card:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
}

.section__card h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
}

.section__card p {
    font-size: 14px;
    line-height: 1.6;
    color: #718096;
}
```

---

## SCENARIO 4: Icon + Text (Small Box)
**Use for:** Feature card icon, step indicator
```css
.section__icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 8px;
}

.section__icon img {
    width: 32px;
    height: 32px;
}
```

---

## SCENARIO 5: Primary Button
**Use for:** All CTA buttons (Get Started, Learn More, Sign Up)
```css
.btn--primary {
    padding: 16px 32px;
    background: #6415ff;
    color: white;
    border: none;
    border-radius: 500px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 300ms ease;
    white-space: nowrap;
}

.btn--primary:hover {
    filter: brightness(1.1);
}

.btn--primary:active {
    transform: scale(0.98);
}
```

---

## SCENARIO 6: Secondary Button
**Use for:** Navigation, optional actions
```css
.btn--secondary {
    padding: 12px 24px;
    background: transparent;
    color: #243e63;
    border: 2px solid #e2e8f0;
    border-radius: 500px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 300ms ease;
}

.btn--secondary:hover {
    border-color: #6415ff;
    color: #6415ff;
}
```

---

## SCENARIO 7: Input Field with Focus State
**Use for:** Email inputs, forms
```css
.input {
    flex: 1;
    min-width: 240px;
    padding: 16px 20px;
    border: 2px solid #e2e8f0;
    border-radius: 500px;
    font-size: 16px;
    transition: border-color 300ms ease;
}

.input:focus {
    outline: none;
    border-color: #6415ff;
}

.input::placeholder {
    color: #cbd5e0;
}
```

---

## SCENARIO 8: Responsive Split-Screen (Column on Mobile)
**Use for:** All split-screen sections
```css
@media(max-width: 1024px) {
    .section__wrapper {
        flex-direction: column;
        gap: 40px;
    }
    
    .section__text,
    .section__image {
        flex: 1 1 100%;
        max-width: 100%;
    }
}
```

---

## SCENARIO 9: Two-Column Card Layout
**Use for:** Testimonials, case studies
```css
.section .row {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
}

.section__card {
    flex: 1 1 calc(50% - 20px);
    min-width: 300px;
    padding: 32px;
    background: #f7fafc;
    border-radius: 8px;
}

@media(max-width: 768px) {
    .section__card {
        flex: 1 1 100%;
    }
}
```

---

## SCENARIO 10: Navigation Bar (Flex with Space-Between)
**Use for:** Header navigation
```css
.nav__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__links {
    display: flex;
    gap: 32px;
    align-items: center;
}

.nav__link {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: color 300ms ease;
}

.nav__link:hover {
    color: #6415ff;
}
```

---

## SCENARIO 11: Text with Highlight
**Use for:** Headings with colored words
```html
<h2>Beautiful React Templates <span class="purple">for you.</span></h2>
```

```css
.purple {
    color: #6415ff;
}
```

---

## SCENARIO 12: Section Container Pattern
**Use for:** Every section wrapper
```css
section {
    padding: 0 32px;
}

.container {
    padding: 96px 0;
}

.row {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
}

.row__narrow {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
}
```

---

## COLOR & TYPOGRAPHY REFERENCE
```css
/* Colors */
--primary: #6415ff (purple)
--dark: #243e63
--gray-medium: #4a5568
--gray-light: #718096
--gray-lighter: #a0aec0
--bg-light: #f7fafc
--bg-white: #fff

/* Font Sizes */
--h1: 48px
--h2: 42px
--h3: 20px
--body: 18px
--small: 16px
--label: 12px

/* Font Weight */
--light: 300
--normal: 400
--medium: 500
--semibold: 600
--bold: 700
--extrabold: 800
--black: 900

/* Spacing */
--gap-small: 12px
--gap-medium: 32px
--gap-large: 64px
--padding-section: 96px 0

/* Border Radius */
--rounded-small: 8px
--rounded-full: 500px
```

---

## PRO TIPS 🚀

1. **Always use flexbox with `gap`** instead of margin — cleaner, easier
2. **Use `flex: 1` on children** to make them grow equally
3. **`max-width` + `margin: 0 auto`** = centered column
4. **`transition: all 300ms ease`** = smooth hover effects
5. **`box-shadow` > `border`** for depth and elegance
6. **Use `filter: brightness()`** for button hovers instead of changing colors
7. **Set `white-space: nowrap`** on buttons to prevent text wrap
8. **Always include `:hover` and `:focus` states** for accessibility
9. **Use `align-items: center` + `justify-content: center`** to center everything
10. **Mobile-first media queries** start at smallest screens and work up

---

## COMMON BREAKPOINTS
```css
@media(max-width: 1280px) { /* Large desktop tweaks */ }
@media(max-width: 1024px) { /* Tablet */ }
@media(max-width: 768px) { /* Medium tablet */ }
@media(max-width: 640px) { /* Mobile */ }
```

---

**Practice:** Use these templates to build the remaining sections!
