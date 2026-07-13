# Start CTA Reference Library

Use this as a reusable baseline for a strong call-to-action section.

## 1. Structure Pattern

A strong CTA block has 2 main parts:

1. Message/title
2. Action buttons

The message should be clear and short. The actions should include one primary and one secondary button.

---

## 2. HTML Template

```html
<section id="start">
  <div class="container">
    <div class="row">
      <div class="start__box">
        <h3 class="start__title">Developers all over the world are happily using Treact.</h3>
        <div class="start__actions">
          <button class="start__btn start__btn--primary">Get Started</button>
          <button class="start__btn start__btn--secondary">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 3. CSS Template

```css
#start .row {
  position: relative;
  overflow: hidden;
  background: #6415ff;
  border-radius: 8px;
  padding: 64px 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.start__box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.start__title {
  color: #f7fafc;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4;
  max-width: 520px;
}

.start__actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.start__btn {
  padding: 16px 32px;
  border-radius: 500px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 250ms ease;
}

.start__btn--primary {
  background: #f56565;
  color: #f7fafc;
}

.start__btn--primary:hover {
  background: #e53e3e;
  transform: translateY(-1px);
}

.start__btn--secondary {
  background: transparent;
  color: #f7fafc;
  border-color: rgba(247, 250, 252, 0.6);
}

.start__btn--secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: #f7fafc;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  #start .row {
    padding: 48px 32px;
  }

  .start__box {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .start__title {
    font-size: 26px;
    max-width: 100%;
  }

  .start__actions {
    width: 100%;
    flex-wrap: wrap;
  }

  .start__btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 640px) {
  #start .row {
    padding: 36px 20px;
  }

  .start__title {
    font-size: 22px;
  }
}
```

---

## 4. Accessibility Checklist

1. Button text should be clear and action-driven.
2. Ensure strong color contrast between text and CTA background.
3. Keep focus visibility clear on both buttons.
4. Avoid relying on color only to indicate button hierarchy.

---

## 5. Build Checklist

1. Build the HTML block with message + actions.
2. Style desktop layout first.
3. Add hover and focus polish.
4. Add 768 and 640 breakpoints for stacking behavior.
5. Validate and test before commit.

---

## 6. Reuse Rules

1. Keep one primary and one secondary action.
2. Do not overload CTA with too much text.
3. Keep padding and border radius consistent with the design system.
4. Reuse button classes across projects for consistency.
