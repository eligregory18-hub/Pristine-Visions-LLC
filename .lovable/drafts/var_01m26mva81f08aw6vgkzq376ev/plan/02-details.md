# Technical Details

1. New component `src/components/site/WorkGallery.tsx`:
   - Renders the four service cards from a `services` prop.
   - Each card holds its own `open` state; the button toggles between "See More Photos ▼" and "Collapse ▲" with `aria-expanded`.
   - Smooth height animation via the CSS grid `grid-template-rows: 0fr → 1fr` transition (animates cleanly regardless of content height), wrapped in an `overflow-hidden` inner div.
2. Edit `src/routes/index.tsx`:
   - Import `WorkGallery` plus the `screens-gutters` and `clean-glass` asset pointers.
   - Replace the current flat `gallery` array and its grid markup in the `#work` section with a grouped `workGalleries` array passed to `<WorkGallery />`.
   - Everything else in the file stays identical.
3. Styling reuses existing tokens: `panel`, `border-border`, `bg-background`, `text-primary`, `font-display` — no new colors or fonts.

## Verification

Typecheck, then a browser pass: expand and collapse each of the four cards, confirm smooth animation, correct photos, and that the review strip and rest of the page render unchanged.
