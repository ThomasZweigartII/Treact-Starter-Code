# HTML TEMPLATES REFERENCE GUIDE
## Common Patterns for Landing Page Sections

---

## SCENARIO 1: Basic Section Structure
**Use for:** Every section (Features, Quality, Steps, etc.)
```html
<section id="section-name">
    <div class="container">
        <div class="row">
            <!-- Content goes here -->
        </div>
    </div>
</section>
```

---

## SCENARIO 2: Centered Header with Title + Description
**Use for:** Section intro (Features, Values, Testimonials intro)
```html
<section id="features">
    <div class="container">
        <div class="row__narrow">
            <div class="section__header">
                <p class="section__label">FEATURES</p>
                <h2 class="section__heading">We have Amazing <span class="purple">Service.</span></h2>
                <p class="section__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
            <!-- Your cards/grid goes here -->
        </div>
    </div>
</section>
```

---

## SCENARIO 3: Card Grid (3 Columns)
**Use for:** Features, pricing, testimonials
```html
<div class="section__grid">
    <div class="section__card">
        <div class="section__icon">
            <img src="./assets/icon-name.svg" alt="Description">
        </div>
        <h3>Card Title</h3>
        <p>Card description text goes here.</p>
    </div>
    
    <div class="section__card">
        <div class="section__icon">
            <img src="./assets/icon-name.svg" alt="Description">
        </div>
        <h3>Card Title</h3>
        <p>Card description text goes here.</p>
    </div>
    
    <!-- Repeat for 3, 4, 6 cards depending on layout -->
</div>
```

---

## SCENARIO 4: Split-Screen Layout (Text Left + Image Right)
**Use for:** Header, Quality, Steps, Values
```html
<section id="quality">
    <div class="container">
        <div class="row">
            <div class="section__wrapper">
                <!-- LEFT SIDE: Text Content -->
                <div class="section__text">
                    <p class="section__label">QUALITY WORK</p>
                    <h2 class="section__heading">Designed & Developed <span class="purple">by Professionals.</span></h2>
                    <p class="section__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button class="section__btn">Learn More</button>
                </div>
                
                <!-- RIGHT SIDE: Image -->
                <div class="section__image">
                    <img src="./assets/illustration-name.svg" alt="Section illustration" class="section__img">
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## SCENARIO 5: Navigation Bar
**Use for:** Top header navigation
```html
<nav>
    <div class="row nav__row">
        <!-- Logo -->
        <div class="nav__logo">
            <img src="./assets/logo.svg" alt="Logo" class="logo__img">
            <span class="logo__text">Brand Name</span>
        </div>
        
        <!-- Desktop Links -->
        <div class="nav__links">
            <a href="#about" class="nav__link">About</a>
            <a href="#blog" class="nav__link">Blog</a>
            <a href="#pricing" class="nav__link">Pricing</a>
            <a href="#contact" class="nav__link">Contact Us</a>
        </div>
        
        <!-- Buttons -->
        <div class="nav__buttons">
            <button class="nav__btn">Login</button>
            <button class="nav__btn nav__btn--primary">Sign Up</button>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="btn__menu" onclick="openMenu()">
            <svg><!-- hamburger icon --></svg>
        </button>
    </div>
</nav>
```

---

## SCENARIO 6: Mobile Modal Menu
**Use for:** Mobile navigation overlay
```html
<div class="modal">
    <button class="btn__menu btn__menu--close" onclick="closeMenu()">
        <svg><!-- close icon --></svg>
    </button>
    <div class="modal__links">
        <a class="modal__link">About</a>
        <a class="modal__link">Blog</a>
        <a class="modal__link">Pricing</a>
        <a class="modal__link">Contact Us</a>
        <a class="modal__link">Login</a>
        <a class="modal__link modal__link--primary">Sign Up</a>
    </div>
</div>
```

---

## SCENARIO 7: Email Input + Button Group
**Use for:** Hero section, contact forms
```html
<div class="header__input-group">
    <input 
        type="email" 
        placeholder="Your E-mail Address" 
        class="header__input"
    >
    <button class="header__btn">Get Started</button>
</div>
```

---

## SCENARIO 8: Image with Logo Strip Below
**Use for:** Customer logos, trusted brands section
```html
<div class="section__customers">
    <p class="section__customers--title">OUR TRUSTED CUSTOMERS</p>
    <img 
        src="./assets/customers-logo-strip.png" 
        alt="Trusted Customers" 
        class="customers__img"
    >
</div>
```

---

## SCENARIO 9: Two-Column Content (Image Left + Text Right)
**Use for:** When you want reversed split-screen
```html
<section id="section-name">
    <div class="container">
        <div class="row">
            <div class="section__wrapper">
                <!-- LEFT SIDE: Image -->
                <div class="section__image">
                    <img src="./assets/illustration.svg" alt="Description" class="section__img">
                </div>
                
                <!-- RIGHT SIDE: Text -->
                <div class="section__text">
                    <p class="section__label">LABEL</p>
                    <h2 class="section__heading">Heading Text</h2>
                    <p class="section__description">Description text here.</p>
                    <button class="section__btn">Button Text</button>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## SCENARIO 10: Numbered Steps/Process
**Use for:** Steps, how-it-works sections
```html
<section id="steps">
    <div class="container">
        <div class="row__narrow">
            <div class="steps__header">
                <p class="steps__label">STEPS</p>
                <h2 class="steps__heading">Easy to Get <span class="purple">Started.</span></h2>
                <p class="steps__description">Lorem ipsum dolor sit amet.</p>
            </div>
            
            <div class="steps__grid">
                <div class="step__card">
                    <div class="step__number">1</div>
                    <h3>Step Title</h3>
                    <p>Step description text.</p>
                </div>
                
                <div class="step__card">
                    <div class="step__number">2</div>
                    <h3>Step Title</h3>
                    <p>Step description text.</p>
                </div>
                
                <div class="step__card">
                    <div class="step__number">3</div>
                    <h3>Step Title</h3>
                    <p>Step description text.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## SCENARIO 11: Pricing Cards
**Use for:** Pricing section
```html
<section id="pricing">
    <div class="container">
        <div class="row__narrow">
            <div class="pricing__header">
                <p class="pricing__label">PRICING</p>
                <h2 class="pricing__heading">Flexible Pricing</h2>
                <p class="pricing__description">Choose the plan that fits your needs.</p>
            </div>
            
            <div class="pricing__grid">
                <div class="pricing__card">
                    <h3 class="pricing__name">Starter</h3>
                    <p class="pricing__price">$29<span>/month</span></p>
                    <ul class="pricing__features">
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button class="pricing__btn">Get Started</button>
                </div>
                
                <!-- Repeat for other pricing tiers -->
            </div>
        </div>
    </div>
</section>
```

---

## SCENARIO 12: Testimonials
**Use for:** Customer quotes, reviews
```html
<section id="testimonials">
    <div class="container">
        <div class="row__narrow">
            <div class="testimonials__header">
                <p class="testimonials__label">TESTIMONIALS</p>
                <h2 class="testimonials__heading">What Our <span class="purple">Customers</span> Say</h2>
            </div>
            
            <div class="testimonials__grid">
                <div class="testimonial__card">
                    <p class="testimonial__text">"This is an amazing product. Highly recommend!"</p>
                    <div class="testimonial__author">
                        <img src="./assets/avatar.jpg" alt="Name" class="testimonial__avatar">
                        <div>
                            <p class="testimonial__name">John Doe</p>
                            <p class="testimonial__title">CEO, Company Name</p>
                        </div>
                    </div>
                </div>
                
                <!-- Repeat for more testimonials -->
            </div>
        </div>
    </div>
</section>
```

---

## SCENARIO 13: Call-to-Action Section
**Use for:** Final conversion push before footer
```html
<section id="start">
    <div class="container">
        <div class="row">
            <div class="cta__content">
                <h2 class="cta__heading">Ready to Get <span class="purple">Started?</span></h2>
                <p class="cta__description">Join thousands of happy customers using our platform.</p>
                <button class="cta__btn">Get Started Now</button>
            </div>
        </div>
    </div>
</section>
```

---

## SCENARIO 14: Footer
**Use for:** Bottom section with links and copyright
```html
<footer>
    <div class="row footer__row">
        <div class="footer__section">
            <h4 class="footer__heading">Company</h4>
            <ul class="footer__links">
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
        </div>
        
        <div class="footer__section">
            <h4 class="footer__heading">Product</h4>
            <ul class="footer__links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#docs">Documentation</a></li>
            </ul>
        </div>
        
        <div class="footer__section">
            <h4 class="footer__heading">Legal</h4>
            <ul class="footer__links">
                <li><a href="#privacy">Privacy</a></li>
                <li><a href="#terms">Terms</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
        <div class="footer__copyright">
            <p>&copy; 2026 Brand Name. All rights reserved.</p>
        </div>
    </div>
</footer>
```

---

## SCENARIO 15: Single Feature Highlight
**Use for:** Highlighting one key feature with details
```html
<section id="feature">
    <div class="container">
        <div class="row">
            <div class="feature__wrapper">
                <!-- Left: Text -->
                <div class="feature__text">
                    <p class="feature__label">FEATURE HIGHLIGHT</p>
                    <h2 class="feature__heading">Powerful & Easy to Use</h2>
                    <p class="feature__description">Description of the feature with benefits.</p>
                    
                    <div class="feature__benefits">
                        <div class="benefit">
                            <svg class="benefit__icon"><!-- checkmark --></svg>
                            <p>Benefit #1</p>
                        </div>
                        <div class="benefit">
                            <svg class="benefit__icon"><!-- checkmark --></svg>
                            <p>Benefit #2</p>
                        </div>
                    </div>
                    
                    <button class="feature__btn">Learn More</button>
                </div>
                
                <!-- Right: Screenshot/Image -->
                <div class="feature__image">
                    <img src="./assets/screenshot.png" alt="Feature screenshot" class="feature__img">
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## SCENARIO 16: Comparison Table
**Use for:** Comparing plans, features, or products
```html
<section id="comparison">
    <div class="container">
        <div class="row__narrow">
            <h2 class="comparison__heading">Compare Plans</h2>
            
            <table class="comparison__table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Starter</th>
                        <th>Professional</th>
                        <th>Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Feature 1</td>
                        <td>✓</td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td>Feature 2</td>
                        <td>-</td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td>Feature 3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>✓</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
```

---

## BEM NAMING CONVENTION
**Format:** `.block__element--modifier`

**Example:**
```html
<!-- Block: nav -->
<nav class="nav">
    <!-- Element: nav__logo -->
    <div class="nav__logo">
        
        <!-- Element: logo__img -->
        <img class="logo__img">
        
        <!-- Element: logo__text -->
        <span class="logo__text">Brand</span>
    </div>
    
    <!-- Element: nav__links -->
    <div class="nav__links">
        <!-- Element: nav__link -->
        <a class="nav__link">About</a>
    </div>
    
    <!-- Element with Modifier: nav__btn (primary modifier) -->
    <button class="nav__btn nav__btn--primary">Sign Up</button>
</nav>
```

**BEM Rules:**
- `.block` = main component
- `.block__element` = part of block (use double underscore `__`)
- `.block--modifier` = variation (use double dash `--`)
- `.block__element--modifier` = variation of element

**Examples:**
- ✅ `.header__content`
- ✅ `.nav__btn--primary`
- ✅ `.feature-card:hover`
- ❌ `.header-content` (wrong format)
- ❌ `.nav.btn.primary` (wrong format)

---

## COMMON ATTRIBUTES CHECKLIST

### Images
```html
<img 
    src="./assets/image-name.svg"  <!-- Always use ./assets/ -->
    alt="Descriptive text"           <!-- Always add alt text -->
    class="element__img"             <!-- Add CSS class -->
>
```

### Links
```html
<a 
    href="#section-id"    <!-- Link to page sections -->
    class="nav__link"     <!-- Add CSS class -->
>Link Text</a>
```

### Buttons
```html
<button 
    class="btn--primary"     <!-- Add CSS class -->
    onclick="functionName()" <!-- JavaScript handler -->
>
    Button Text
</button>
```

### Input Fields
```html
<input 
    type="email"                    <!-- Specify type -->
    placeholder="Your email"        <!-- Add placeholder -->
    class="header__input"           <!-- Add CSS class -->
>
```

### Text Elements
```html
<p class="section__description">Text content with proper semantic HTML</p>
<h2 class="section__heading">Main heading</h2>
<span class="purple">Colored text</span>
```

---

## SEMANTIC HTML STRUCTURE
Always follow this order:

```html
<section id="unique-id">              <!-- Unique ID for linking -->
    <div class="container">           <!-- Standard container padding -->
        <div class="row">             <!-- Standard row width/centering -->
            <!-- Content here -->
        </div>
    </div>
</section>
```

**Use semantic tags:**
- `<section>` for major content blocks
- `<header>` for page/section headers
- `<footer>` for footer content
- `<nav>` for navigation
- `<h1>-<h6>` for headings (in order)
- `<p>` for paragraphs
- `<button>` for interactive buttons
- `<a>` for links

---

## PRO TIPS 🚀

1. **Always start with a section/ID**
   ```html
   <section id="features">  <!-- Not <div> -->
   ```

2. **Use consistent class naming** — BEM format makes it predictable
   ```html
   <!-- Good -->
   <div class="card__image">
   
   <!-- Bad -->
   <div class="image">
   ```

3. **Image paths use `./assets/`** — always relative, not absolute
   ```html
   <!-- Good -->
   <img src="./assets/icon.svg">
   
   <!-- Bad -->
   <img src="/assets/icon.svg">
   <img src="C://Users/...">
   ```

4. **Always add alt text to images** — accessibility + SEO
   ```html
   <img src="./assets/logo.svg" alt="Company Logo">
   ```

5. **Wrap button text, don't use value attribute**
   ```html
   <!-- Good -->
   <button class="btn">Click Me</button>
   
   <!-- Bad -->
   <button value="Click Me"></button>
   ```

6. **Use `class` not `id`** for styling (exceptions: section anchors)
   ```html
   <!-- Good -->
   <div class="card">
   
   <!-- Bad for styling -->
   <div id="card">
   ```

7. **Keep nesting simple** — max 3-4 levels deep
   ```html
   <!-- Good depth -->
   <section>
       <div class="container">
           <div class="row">
               <div class="card">Content</div>
           </div>
       </div>
   </section>
   ```

8. **Use spans for inline text highlighting**
   ```html
   <h2>Amazing <span class="purple">Features</span></h2>
   ```

9. **Format code with Shift+Alt+F** — keeps it clean and readable

10. **Validate your HTML** — check for unclosed tags, missing attributes

---

## QUICK CHECKLIST FOR NEW SECTIONS

- [ ] Created `<section id="section-name">`
- [ ] Added `.container` and `.row` (or `.row__narrow`)
- [ ] Added semantic class names using BEM
- [ ] All images have `./assets/` path and alt text
- [ ] All buttons have `onclick` handlers if needed
- [ ] All links have `href="#section-id"`
- [ ] HTML is formatted (Shift+Alt+F)
- [ ] No unclosed tags or orphaned elements
- [ ] Indentation is consistent (2 or 4 spaces)
- [ ] Read-through to catch typos

---

**Practice:** Use these templates to build all remaining sections!
