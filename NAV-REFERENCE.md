# Navigation Bar - Study Reference Guide

## HTML Structure

Replace the placeholder comment `<!--  -->Enter Nav Links here<!--  -->` with this code:

```html
<div class="nav__links">
    <a href="#" class="nav__link">About</a>
    <a href="#" class="nav__link">Blog</a>
    <a href="#" class="nav__link">Pricing</a>
    <a href="#" class="nav__link">Contact Us</a>
</div>
<div class="nav__buttons">
    <button class="nav__btn">Login</button>
    <button class="nav__btn nav__btn--primary">Sign Up</button>
</div>
```

## CSS Styling

Add this to your `style.css` in the NAVBAR section:

```css
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

.nav__buttons {
    display: flex;
    gap: 16px;
    align-items: center;
}

.nav__btn {
    padding: 12px 24px;
    border: none;
    background: transparent;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 300ms ease;
}

.nav__btn--primary {
    background: #6415ff;
    color: white;
    border-radius: 500px;
}

.nav__btn--primary:hover {
    filter: brightness(1.1);
}
```

---

## Understanding the Code

### HTML Breakdown

**`.nav__links` Container:**
- Groups all the navigation links together
- Uses flexbox to arrange items horizontally

**`.nav__link` Elements:**
- Individual navigation links (About, Blog, Pricing, Contact Us)
- `href="#"` is a placeholder - replace with actual page URLs

**`.nav__buttons` Container:**
- Groups the Login and Sign Up buttons
- Keeps them separated from navigation links

**Class Naming Convention:**
- `nav__` prefix = namespace for navigation styles
- `--primary` suffix = indicates a primary/highlighted state (Sign Up button)

### CSS Breakdown

**`.nav__links` & `.nav__buttons`:**
- `display: flex;` - Creates horizontal layout
- `gap: 32px;` (links) and `gap: 16px;` (buttons) - Adds spacing between items
- `align-items: center;` - Vertically centers items

**`.nav__link`:**
- `text-decoration: none;` - Removes underline from links
- `transition: color 300ms ease;` - Smooth color change on hover
- `hover` state changes color to purple (`#6415ff`)

**`.nav__btn`:**
- `padding: 12px 24px;` - Adds space inside the button
- `border: none;` - Removes default browser border
- `background: transparent;` - Login button stays transparent
- `cursor: pointer;` - Changes cursor to hand on hover

**`.nav__btn--primary`:**
- Sign Up button styling (the purple one)
- `border-radius: 500px;` - Creates pill/rounded button shape
- `filter: brightness(1.1);` - Lightens on hover for visual feedback

---

## Making It Responsive for Mobile

Add this media query to hide desktop nav and show the menu button on mobile:

```css
@media (max-width: 768px) {
    .nav__links,
    .nav__buttons {
        display: none;
    }

    .btn__menu {
        display: block;
    }
}
```

**What this does:**
- At 768px and below (tablets/phones), the desktop navigation disappears
- The hamburger menu button (`btn__menu`) appears instead
- Users tap the hamburger to see the mobile menu (modal)

---

## Key Learning Points

1. **Flexbox Layout** - Used to align items horizontally with `display: flex`
2. **CSS Classes** - Organize styling with meaningful class names (BEM naming convention)
3. **Transitions** - Smooth animations make UI feel polished
4. **Pseudo-classes** - `:hover` adds interactivity
5. **Responsive Design** - Media queries hide/show elements based on screen size
6. **CSS Filters** - Visual effects like `brightness()` for hover states

---

## Next Steps

After implementing this navigation:
1. Update `href="#"` links to point to actual sections
2. Style the logo in `.nav__logo`
3. Add keyboard accessibility with proper focus states
4. Test on different screen sizes
