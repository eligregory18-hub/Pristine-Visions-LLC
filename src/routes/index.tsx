import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/logo.png.asset.json";
import poleWashAsset from "@/assets/pole-wash.png.asset.json";
import baWindowAsset from "@/assets/ba-window.png.asset.json";
import baStairsAsset from "@/assets/ba-stairs.png.asset.json";
import baPergolaAsset from "@/assets/ba-pergola.png.asset.json";
import cleanGlassAsset from "@/assets/clean-glass.png.asset.json";
import lakeHomeAsset from "@/assets/lake-home.png.asset.json";
import baDeckAsset from "@/assets/ba-deck.png.asset.json";
import baPictureWindowAsset from "@/assets/ba-picture-window.png.asset.json";
import { QuoteForm } from "@/components/site/QuoteForm";

const logoImg = logoAsset.url;
const heroImg = poleWashAsset.url;
const pressureImg = baDeckAsset.url;
const screensImg = cleanGlassAsset.url;
const FACEBOOK_URL = "https://www.facebook.com/PristineVisionsLLC";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?kgmid=/g/11nqy0khb8&q=Pristine+Visions+LLC";

const gallery = [
  { src: baWindowAsset.url, alt: "Before and after window cleaning" },
  { src: baDeckAsset.url, alt: "Before and after deck pressure washing" },
  { src: baStairsAsset.url, alt: "Before and after stairway pressure washing" },
  { src: baPictureWindowAsset.url, alt: "Before and after picture window cleaning" },
  { src: baPergolaAsset.url, alt: "Before and after pergola pressure washing" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pristine Visions LLC — Window & Pressure Washing, Lincoln & Omaha NE" },
      {
        name: "description",
        content:
          "Locally owned window washing, pressure washing, screen cleaning and gutter cleaning in Lincoln & Omaha, NE and central Minnesota. Free estimates, residential and commercial.",
      },
      { property: "og:title", content: "Pristine Visions LLC — Your Property. Done Right." },
      {
        property: "og:description",
        content:
          "Owner-operated window washing, pressure washing, screen cleaning and gutter cleaning serving Lincoln & Omaha, NE and central Minnesota communities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Service Area", href: "#area" },
];

const services = [
  {
    n: "01",
    title: "Window Washing",
    img: heroImg,
    body: "Our primary service. A purified water-fed pole system leaves glass streak-free and chemical-free, reaching windows at any height safely.",
    tags: ["Residential", "Commercial", "Purified Water", "Streak-Free"],
  },
  {
    n: "02",
    title: "Pressure Washing",
    img: pressureImg,
    body: "Years of grime lifted off driveways, patios, siding and brick with a 4400 PSI commercial-grade machine. Big difference in a single visit.",
    tags: ["Driveways", "Siding", "Patios", "Brick"],
  },
  {
    n: "03",
    title: "Screen Cleaning & Gutters",
    img: screensImg,
    body: "We remove, deep clean and reinstall every screen, then clear gutters so water flows freely. Often bundled with window washing.",
    tags: ["Screen Removal", "Deep Clean", "Gutter Clearing"],
  },
  {
    n: "04",
    title: "Ceramic Window Coating",
    img: screensImg,
    body: "We use a hydrophobic coating that bonds to your glass. This will reduce & repel rain, hard water, and stains while helping protect your windows against buildup and long-term damage, lasting up to 12 months.",
    tags: ["Exterior Window", "Hydrophobic Coating", "Bundle with Window Cleaning"],
  },
];

const reasons = [
  {
    icon: "🪟",
    title: "Pure Water. Spotless Results.",
    body: "We use a professional water-fed pole system with 0 TDS purified water, allowing us to clean your windows without harsh chemicals, soap, or residue. The result? Crystal clear glass with no streaks or water spots.",
  },
  {
    icon: "👋",
    title: "Owner-Operated",
    body: "When you book with us, you’re not getting a random crew. The owner is personally involved in every job, ensuring the work meets our standards from start to finish. Your satisfaction, and our reputation, matters every time we show up.",
  },
  {
    icon: "🌟",
    title: "Local, Reliable & Easy to Work With",
    body: "Proudly serving our local communities. We show up on time ready to go, communicate throughout the process, and leave your property looking better than we found it. Professional service you can trust without a hassle.",
  },
];

const areas = [
  "Lincoln",
  "Omaha",
  "Spicer",
  "New London",
  "Alexandria",
  "Sauk Center",
  "Willmar",
  "Surrounding Areas",
];

const badges = [
  "Locally Owned & Operated",
  "Licensed & Insured",
  "Free Estimates",
  "Residential & Commercial",
  "Purified Water System",
  "Streak-Free Guarantee",
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoImg} alt="Pristine Visions LLC logo" className="h-11 w-auto" />
            <span className="font-display text-3xl leading-none tracking-wider">
              Pristine Visions LLC
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.16em] lg:flex">
            {nav.map((i) => (
              <a key={i.href} href={i.href} className="text-muted-foreground hover:text-foreground">
                {i.label}
              </a>
            ))}
            <a href="tel:3202009941" className="text-primary">
              (320) 200-9941
            </a>
            <a
              href="#quote"
              className="rounded-sm bg-primary px-4 py-2.5 font-display text-base tracking-wide text-primary-foreground"
            >
              Free Quote
            </a>
          </nav>
          <a
            href="#quote"
            className="rounded-sm bg-primary px-4 py-2 font-display text-base tracking-wide text-primary-foreground lg:hidden"
          >
            Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-block bg-primary px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-primary-foreground">
              Student Owned · Local · Reliable
            </span>
            <h1 className="mt-6 text-6xl sm:text-7xl lg:text-8xl">
              Your Property.
              <br />
              <span className="text-primary">Done Right.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Owner-operated by a local team that shows up on time, works hard, and treats every
              property like our own. Window washing, pressure washing, screen cleaning and
              gutter cleaning — residential and commercial.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="rounded-sm bg-primary px-7 py-4 font-display text-xl tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:3202009941"
                className="rounded-sm border border-border px-7 py-4 font-display text-xl tracking-wide hover:bg-surface"
              >
                Call (320) 200-9941
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 border-y border-border">
              {[
                ["5★", "Satisfaction"],
                ["Free", "Estimates"],
                ["Local", "Owner-Operated"],
              ].map(([big, small]) => (
                <div key={small} className="border-l border-border px-4 py-5 first:border-l-0">
                  <dt className="font-display text-3xl text-primary">{big}</dt>
                  <dd className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {small}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full border border-primary lg:block" />
            <div className="relative aspect-[4/5] overflow-hidden shadow-[var(--shadow-panel)]">
              <img
                src={heroImg}
                alt="Technician washing second-story windows with a water-fed pole"
                width={1200}
                height={1408}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="relative border-y border-border bg-surface">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {badges.map((b) => (
              <span key={b}>
                <span className="text-primary">✓</span> {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <h2 className="text-5xl sm:text-6xl">Our Services</h2>
        <p className="eyebrow mt-4 text-[0.8rem]">Residential & Commercial</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.n} className="panel group overflow-hidden rounded-sm">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-0 top-0 bg-primary px-3 py-1.5 font-display text-lg text-primary-foreground">
                  {s.n}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm bg-surface-2 px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow">Real Results</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Before &amp; After</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <div key={g.src} className="aspect-[4/3] overflow-hidden rounded-sm border border-border bg-background">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-contain object-center"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-primary px-6 py-3 font-display text-xl tracking-wide text-primary-foreground"
            >
              ★ Read Our Google Reviews
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border px-6 py-3 font-display text-xl tracking-wide hover:bg-surface-2"
            >
              Follow Us on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={lakeHomeAsset.url}
                alt="Clean windows on a modern lakeside home"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-primary px-6 py-4 text-primary-foreground">
              <p className="font-display text-4xl leading-none">100%</p>
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.2em]">Locally Owned</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Why Pristine Visions</p>
            <h2 className="mt-3 text-5xl sm:text-6xl">
              Reliable, <span className="text-primary">Professional</span> & Local
            </h2>
            <div className="mt-10 space-y-8">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-surface-2 text-xl">
                    {r.icon}
                  </span>
                  <div>
                    <h3 className="text-2xl">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section id="area" className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <p className="eyebrow">Where We Work</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Service Area</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Serving in Lincoln, NE | Omaha, NE | Spicer, MN | New London, MN | Alexandria, MN | Sauk Center, MN | Willmar, MN | and surrounding communities. Not sure if we cover your area? Give us a call and we&apos;ll let you know.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <span
                key={a}
                className="rounded-sm border border-border bg-background px-5 py-3 font-display text-xl tracking-wide"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="mx-auto max-w-3xl px-5 py-24">
        <div className="text-center">
          <p className="eyebrow">Get Started</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">
            Request a <span className="text-primary">Free Quote</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Fill out the form and we&apos;ll get back to you fast — usually the same day.
          </p>
        </div>
        <div className="mt-10">
          <QuoteForm />
        </div>
      </section>

      <footer className="border-t border-border bg-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Pristine Visions LLC logo" className="h-10 w-auto" />
            <p className="font-display text-2xl tracking-wider text-foreground">
              Pristine Visions LLC
            </p>
          </div>
          <p>Lincoln & Omaha, NE · Licensed & Insured</p>
          <div className="flex items-center gap-5">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              Facebook
            </a>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              Google Reviews
            </a>
            <a href="tel:3202009941" className="text-primary">
              (320) 200-9941
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
