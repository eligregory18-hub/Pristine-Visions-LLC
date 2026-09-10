# Bug Review & Fixes

I reviewed the full codebase (`src/routes/index.tsx`, `QuoteForm`, `ReviewsCarousel`, `reviews.functions.ts`, `__root.tsx`, `styles.css`, `server.ts`, `router.tsx`, `index.html`, `public/`). The site builds and renders cleanly — no crashes. The issues found are below.

## Bugs found

1. **Quote form may not deliver to your email.** The form posts to a Formspree endpoint (`formspree.io/f/xbgjqqkb`). That Formspree form must be registered under your account with `pristinevisionllc@outlook.com` as the recipient, otherwise submissions go nowhere. This needs verification, and if it isn't yours, we need a different delivery method.

2. **Automatic Google reviews never actually pull.** The review-fetching code requires two server keys (`LOVABLE_API_KEY`, `GOOGLE_MAPS_API_KEY`) that aren't configured, so it silently falls back to the five saved reviews every time. Fix: properly wire the Google Maps connector keys so live reviews flow in.

3. **Repeated photos.** The deck before/after photo appears both on the "Pressure Washing" service card and in the gallery; the picture-window photo appears both on "Ceramic Window Coating" and in the gallery. You asked for no repeats — the service cards should use distinct images.

4. **Gold color drift.** You asked for gold `#B38228`, but the theme uses `#c98c1a` in several places (`styles.css` tokens + a hardcoded value in the quote form checkbox). Fix: unify everything to `#B38228`.

## Minor (not bugs, noting for your call)

- On phones, the top bar shows only the logo and a "Free Quote" button — no menu for Services / FAQ / etc. Links still reachable by scrolling.

## Plan

1. Verify/replace the quote form delivery so requests reliably reach `pristinevisionllc@outlook.com`.
2. Configure the Google Maps connector keys so live reviews pull automatically (fallback stays as safety net).
3. Swap the two service-card images so no photo repeats between cards and gallery.
4. Change all gold values to `#B38228` and remove the hardcoded hex in the form.
5. Rebuild and verify with a visual pass.

### Technical details
- `src/components/site/QuoteForm.tsx` — replace Formspree POST target if the form ID isn't tied to the Outlook address.
- `src/lib/reviews.functions.ts` — env keys `LOVABLE_API_KEY` / `GOOGLE_MAPS_API_KEY` currently unset; fallback renders.
- `src/routes/index.tsx` — `services[1].img` and `services[3].img` share assets with `gallery`.
- `src/styles.css` — `--primary`, `--accent`, `--ring`, `--shadow-glow` use `#c98c1a`; `QuoteForm.tsx` has `accent-[#c98c1a]`.
