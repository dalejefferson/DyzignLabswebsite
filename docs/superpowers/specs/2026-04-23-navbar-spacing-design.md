# Navbar Spacing Refresh Design

## Goal
Update the existing website navbar to visually match the provided reference more closely without changing the current label set or navigation destinations.

## Scope
- Keep the existing labels:
  - `Work`
  - `Case Studies`
  - `Tech Services`
  - `Process`
  - `Pricing`
- Keep the current CTA behavior and mobile menu pattern.
- Improve spacing, proportions, and alignment so the desktop navbar feels lighter and more polished.
- Make sure `Case Studies` remains readable and does not feel cramped at intermediate viewport widths.

## Design Direction
Use the current navbar structure and styling system, but tune its proportions to better match the reference:

- Reduce desktop nav gap so the links sit closer together with a more premium rhythm.
- Slightly rebalance internal header spacing so the logo, nav group, and CTA feel aligned rather than stretched.
- Keep the active indicator subtle and directly beneath the active link.
- Preserve the mobile drawer, but improve breakpoint behavior so the desktop nav does not feel crowded before it collapses.

## Responsive Behavior
- Desktop:
  - Keep the nav visible.
  - Tighten link spacing to better match the reference.
  - Keep `Case Studies` on one line.
- Tablet / intermediate widths:
  - Reduce nav gap and CTA footprint before mobile takeover.
  - Allow the layout to breathe so the text does not collide or feel compressed.
- Mobile:
  - Keep the hamburger interaction and full label set.
  - Preserve clear tap targets and centered menu layout.

## Implementation Notes
- Update the shared navbar markup and spacing classes in `index.html`.
- Apply the same spacing system to `case-studies.html`, `privacy-policy.html`, `standard-terms.html`, and `sitemap.html` so the header stays consistent site-wide.
- Prefer small class and CSS adjustments over structural rewrites.
- Do not rename items or change destinations.

## Verification
- Check desktop alignment against the provided reference.
- Check that `Case Studies` stays visually comfortable before the menu collapses.
- Check mobile drawer behavior and tap targets.
- Start a fresh local server after the change for manual review.
