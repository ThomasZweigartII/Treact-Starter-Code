# Footer Reference Library

Use this as a reusable baseline for production-ready footers.

## 1. Structure Pattern

A strong footer is 3 blocks:

1. Link columns block
2. Divider
3. Bottom identity block (brand, copyright, socials)

---

## 2. HTML Template

```html
<footer>
  <div class="row footer__row">
    <div class="footer__columns">
      <div class="footer__column">
        <h4 class="footer__column-title">MAIN</h4>
        <a href="#" class="footer__link">Blog</a>
        <a href="#" class="footer__link">FAQs</a>
        <a href="#" class="footer__link">Support</a>
        <a href="#" class="footer__link">About Us</a>
      </div>

      <div class="footer__column">
        <h4 class="footer__column-title">PRODUCT</h4>
        <a href="#" class="footer__link">Log In</a>
        <a href="#" class="footer__link">Personal</a>
        <a href="#" class="footer__link">Business</a>
        <a href="#" class="footer__link">Team</a>
      </div>

      <div class="footer__column">
        <h4 class="footer__column-title">PRESS</h4>
        <a href="#" class="footer__link">Logos</a>
        <a href="#" class="footer__link">Events</a>
        <a href="#" class="footer__link">Stories</a>
        <a href="#" class="footer__link">Office</a>
      </div>

      <div class="footer__column">
        <h4 class="footer__column-title">TEAM</h4>
        <a href="#" class="footer__link">Career</a>
        <a href="#" class="footer__link">Founders</a>
        <a href="#" class="footer__link">Culture</a>
        <a href="#" class="footer__link">Onboarding</a>
      </div>

      <div class="footer__column">
        <h4 class="footer__column-title">LEGAL</h4>
        <a href="#" class="footer__link">GDPR</a>
        <a href="#" class="footer__link">Privacy Policy</a>
        <a href="#" class="footer__link">Terms of Service</a>
        <a href="#" class="footer__link">Disclaimer</a>
      </div>
    </div>

    <div class="footer__divider"></div>

    <div class="footer__bottom">
      <div class="footer__brand">
        <img src="./assets/logo-light.d9a5d1b5be5ea077b26864fdfc2e96a4.svg" alt="Treact Logo" class="footer__logo" />
        <span class="footer__brand-text">Treact Inc.</span>
      </div>

      <p class="footer__copyright">© 2018 Treact Inc. All Rights Reserved.</p>

      <div class="footer__socials">
        <a href="#" class="footer__social" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="footer__social" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" class="footer__social" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>
</footer>
```

---

## 3. CSS Template

```css
footer {
  padding: 96px 32px;
  background: linear-gradient(135deg, #6415ff 0%, #5011cc 100%);
  position: relative;
  overflow: hidden;
}

.footer__row {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.footer__columns {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 24px;
}

.footer__column {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer__column-title {
  color: #f7fafc;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 6px;
}

.footer__link {
  color: #f7fafc;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: opacity 200ms ease;
}

.footer__link:hover {
  opacity: 0.8;
}

.footer__link:focus-visible {
  outline: 2px solid #f7fafc;
  outline-offset: 2px;
  border-radius: 2px;
}

.footer__divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.25);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer__logo {
  width: 32px;
  height: 32px;
}

.footer__brand-text {
  color: #f7fafc;
  font-size: 32px;
  font-weight: 700;
}

.footer__copyright {
  color: rgba(247, 250, 252, 0.8);
  font-size: 20px;
  margin: 0;
}

.footer__socials {
  display: flex;
  gap: 16px;
}

.footer__social {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f7fafc;
  color: #1a202c;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 200ms ease;
}

.footer__social:hover {
  transform: translateY(-1px);
}

.footer__social:focus-visible {
  outline: 2px solid #f7fafc;
  outline-offset: 2px;
}

@media (max-width: 1024px) {
  .footer__columns {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 36px;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  footer {
    padding: 72px 24px;
  }

  .footer__columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  .footer__brand-text {
    font-size: 26px;
  }

  .footer__copyright {
    font-size: 16px;
  }
}

@media (max-width: 640px) {
  .footer__columns {
    grid-template-columns: 1fr;
  }

  .footer__link {
    font-size: 16px;
  }
}
```

---

## 4. Accessibility Checklist

1. Every social icon link includes an aria-label.
2. Keyboard focus is visible for links and buttons.
3. Body text contrast stays readable on dark/purple backgrounds.
4. Link text is meaningful (avoid generic "Click here").

---

## 5. Build Checklist

1. Build columns first, no styling hacks.
2. Add divider and bottom row next.
3. Add hover + focus states before final polish.
4. Add responsive behavior in 1024, 768, and 640 breakpoints.
5. Validate HTML/CSS before commit.

---

## 6. Reuse Rules

1. Keep class names consistent with the BEM style.
2. Prefer parent gap over per-link margins.
3. Avoid fixed heights in footer content areas.
4. Keep one source of truth for footer spacing tokens.
