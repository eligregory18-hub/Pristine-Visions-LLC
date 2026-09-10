# Rework "Before & After" Section — Grouped Service Gallery

The current flat 5-photo grid in "Real Results / Before & After" becomes four service cards, each expandable inline.

```text
┌─────────────────────┐  ┌─────────────────────┐
│  [before/after img] │  │  [before/after img] │
│  Window Washing     │  │  Pressure Washing   │
│  [See More Photos]  │  │  [See More Photos]  │
└─────────────────────┘  └─────────────────────┘
┌─────────────────────┐  ┌─────────────────────┐
│  [before/after img] │  │  [before/after img] │
│  Screen & Gutter    │  │  Ceramic Coating    │
│  [See More Photos]  │  │  [See More Photos]  │
└─────────────────────┘  └─────────────────────┘

Expanded card:
┌───────────────────────────┐
│  [featured photo]         │
│  Window Washing           │
│  [Collapse]               │
│  ┌────────┐  ┌────────┐   │  <- reveals with smooth
│  │ photo  │  │ photo  │   │     height animation
│  └────────┘  └────────┘   │
└───────────────────────────┘
```

## Photo assignments (existing uploaded photos only)

| Service | Featured | Extra photos when expanded |
|---|---|---|
| Window Washing | window before/after | picture-window, clean glass |
| Pressure Washing & Soft Washing | deck before/after | stairs, pergola |
| Screen & Gutter Cleaning | screens & gutters photo | stairs, pergola (stand-ins for now) |
| Ceramic Window Coating | picture-window before/after | window, clean glass (stand-ins for now) |

Where a service has only one real photo, shared-pool photos fill in as extras for now — easy to swap later.

## Untouched

Section heading, Google Reviews / Facebook buttons, the review strip below, the navy/gold theme and fonts, and every other section of the page.
