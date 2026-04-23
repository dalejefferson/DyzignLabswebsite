# Navbar Spacing Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tighten the website navbar spacing to match the provided reference while keeping the current labels, destinations, and responsive mobile menu behavior.

**Architecture:** Reuse the existing fixed-header structure and make small class/CSS adjustments instead of rewriting the navigation. Apply one spacing system to the homepage and align the simpler secondary-page headers to the same proportions so `Case Studies` remains readable before the mobile breakpoint.

**Tech Stack:** Static HTML, Tailwind utility classes via CDN, small inline CSS and vanilla JavaScript

---

### Task 1: Refresh the homepage navbar proportions

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Verify the current navbar structure to update**

Read the header block and confirm these targets exist before editing:

```html
<nav class="relative flex justify-center md:justify-between items-center max-w-7xl mx-auto px-5 md:px-16 h-20">
  <!-- logo -->
  <div class="hidden md:flex items-center space-x-12 desktop-nav-links" id="desktop-nav-links">
    <!-- nav links -->
  </div>
  <div class="absolute right-5 md:right-0 md:static flex items-center gap-4">
    <!-- CTA / phone / mobile toggle -->
  </div>
</nav>
```

- [ ] **Step 2: Tighten the desktop spacing and add intermediate-width breathing room**

Replace the nav container, nav link group, and CTA wrapper classes with a more compact set:

```html
<nav class="relative flex justify-center lg:justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 h-[76px]">
  <!-- logo -->
  <div class="hidden lg:flex items-center gap-6 xl:gap-8 desktop-nav-links" id="desktop-nav-links">
    <!-- nav links -->
  </div>
  <div class="absolute right-4 sm:right-6 lg:right-0 lg:static flex items-center gap-3 xl:gap-4">
    <!-- CTA / phone / mobile toggle -->
  </div>
</nav>
```

- [ ] **Step 3: Keep nav labels readable, especially `Case Studies`**

Update each desktop link and CTA sizing so the text stays on one line and feels closer to the reference:

```html
<a class="text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors desktop-nav-link whitespace-nowrap font-['Montserrat'] text-[13px] xl:text-[14px] font-bold tracking-tight uppercase" href="case-studies.html" data-nav-item="true">Case Studies</a>

<a class="hidden lg:inline-flex bg-primary-container text-black px-5 xl:px-7 py-3 text-[13px] font-label-bold uppercase transition-all duration-200 rounded-5px border border-black items-center justify-center whitespace-nowrap hover:bg-lime-400" href="#start-project-form">Get a Free Quote</a>
```

- [ ] **Step 4: Keep the phone CTA from crowding the nav**

Reduce the phone CTA footprint while keeping desktop-only visibility:

```html
<a class="hidden xl:inline-flex items-center gap-2 text-black font-['Montserrat'] text-[13px] font-bold tracking-tight hover:text-lime-500 transition-colors whitespace-nowrap" href="tel:+14056874981">
  <span class="material-symbols-outlined text-[20px]">call</span>
  <span>+1(405)687-4981</span>
</a>
```

- [ ] **Step 5: Preserve mobile behavior while shifting the desktop breakpoint**

Change desktop-only classes from `md:` to `lg:` where needed so the hamburger appears earlier:

```html
<button class="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-5px border border-black bg-white text-black" id="mobile-menu-toggle" type="button">
  <span class="material-symbols-outlined text-[28px]" id="mobile-menu-icon">menu</span>
</button>

<div class="hidden lg:hidden border-t border-gray-200 bg-white px-5 py-6" id="mobile-nav-menu">
```

- [ ] **Step 6: Update the desktop indicator logic for the new breakpoint**

Change the media query threshold in the script:

```js
var desktopMediaQuery = window.matchMedia("(min-width: 1024px)");
```

and update the resize reset logic:

```js
if (window.innerWidth >= 1024) {
  setMenuState(false);
}
```

### Task 2: Match secondary-page headers to the same spacing system

**Files:**
- Modify: `case-studies.html`
- Modify: `privacy-policy.html`
- Modify: `standard-terms.html`
- Modify: `sitemap.html`

- [ ] **Step 1: Update each secondary-page nav wrapper**

Replace each current nav wrapper:

```html
<nav class="relative flex justify-center md:justify-between items-center max-w-7xl mx-auto px-5 md:px-16 h-20">
```

with:

```html
<nav class="relative flex justify-center lg:justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 h-[76px]">
```

- [ ] **Step 2: Tighten the desktop nav groups**

Replace desktop nav group classes such as:

```html
<div class="hidden md:flex items-center space-x-10">
```

with:

```html
<div class="hidden lg:flex items-center gap-6 xl:gap-8">
```

and give the anchor tags `whitespace-nowrap text-[13px] xl:text-[14px]`.

- [ ] **Step 3: Reduce CTA crowding and shift the mobile breakpoint**

Update each CTA wrapper and button:

```html
<div class="absolute right-4 sm:right-6 lg:right-0 lg:static flex items-center gap-3">
  <a class="hidden lg:inline-flex bg-[#c7ff3c] text-black px-5 xl:px-7 py-3 text-[13px] font-bold uppercase hover:bg-lime-400 transition-all rounded-[5px] border border-black items-center justify-center whitespace-nowrap min-h-[44px]" href="index.html#start-project-form">Get a Free Quote</a>
  <button class="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-[5px] border border-black bg-white text-black" id="mobile-menu-toggle" type="button">
```

- [ ] **Step 4: Keep mobile menus unchanged in content but aligned to the new breakpoint**

Change menu wrappers from `md:hidden` to `lg:hidden` and keep the existing centered touch-target layout:

```html
<div class="hidden lg:hidden border-t border-gray-200 bg-white px-5 py-6" id="mobile-nav-menu">
```

- [ ] **Step 5: Update each resize listener**

Use the new breakpoint in each page script:

```js
if (window.innerWidth >= 1024) setMenuState(false);
```

### Task 3: Document and verify the change

**Files:**
- Modify: `changelog.md`

- [ ] **Step 1: Add the navbar spacing update to the changelog**

Append a new entry under `2026-04-23` describing the tighter reference-matched header spacing, earlier mobile collapse, and `Case Studies` readability protection.

- [ ] **Step 2: Run a quick visual verification in the browser**

Check:

```text
1. Desktop nav spacing feels closer to the provided reference.
2. `Case Studies` remains on one line before mobile takeover.
3. Mobile menu still opens, closes, and closes on link click.
4. Secondary pages use the same header proportions.
```

- [ ] **Step 3: Start a fresh local server**

Run:

```bash
python3 -m http.server 8081
```

Expected:

```text
Serving HTTP on 0.0.0.0 port 8081
```
