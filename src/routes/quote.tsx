import { createFileRoute, Link } from "@tanstack/react-router";

const services = [
  "Window Washing",
  "Pressure Washing",
  "Screen & Gutter Cleaning",
  "Ceramic Window Coating",
  "Multiple Services",
];

const field =
  "w-full rounded-sm border border-input bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Free Quote — Pristine Visions LLC" },
      {
        name: "description",
        content:
          "Request a free quote for window washing, pressure washing, ceramic window coating, screen cleaning, or gutter cleaning.",
      },
    ],
  }),
  component: QuotePage,
});

export function QuoteForm() {
  return (
    <form
      className="rounded-sm border border-primary bg-surface p-6 shadow-[var(--shadow-panel)] sm:p-10"
      action="https://formspree.io/f/xbgjqqkb"
      method="POST"
    >
      <input type="hidden" name="_subject" value="New Pristine Visions quote request" />
      <input type="hidden" name="_next" value="https://pristinevisionsllc.com/quote?sent=1" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            First Name
          </span>
          <input required className={field} placeholder="Jane" name="first" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Last Name
          </span>
          <input required className={field} placeholder="Doe" name="last" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Phone Number
          </span>
          <input required type="tel" inputMode="tel" className={field} placeholder="320-200-9941" name="phone" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            City
          </span>
          <input required className={field} placeholder="Lincoln" name="city" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Service Needed
          </span>
          <select required className={field} name="service" defaultValue="">
            <option value="" disabled>
              Select a service...
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Additional Details <span className="font-normal">(Optional)</span>
          </span>
          <textarea
            rows={6}
            className={field}
            name="details"
            placeholder="Tell us about your property, what needs to be done, or any questions you have..."
          />
        </label>
      </div>

      <label className="mt-6 flex gap-3 rounded-sm border border-border p-4 text-xs leading-relaxed text-muted-foreground">
        <input type="checkbox" className="mt-1 size-4 accent-[#c98c1a]" name="sms-consent" value="yes" />
        <span>
          <strong className="text-foreground">(Optional)</strong> I agree to receive text messages
          with (320) 200-9941 about my quote, appointment confirmations, and service reminders.
          Consent is not required to get a quote. Message frequency varies; message and data rates
          may apply. Reply STOP to opt out.
        </span>
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-sm bg-primary px-6 py-5 font-display text-2xl tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        Submit Quote Request
      </button>

      <p className="mt-5 text-center text-sm text-muted-foreground">
        Or call/text us directly:{" "}
        <a className="text-primary hover:underline" href="tel:3202009941">
          (320) 200-9941
        </a>
      </p>
    </form>
  );
}

function QuotePage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Link
            to="/"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-primary hover:underline"
          >
            ← Back to Pristine Visions
          </Link>
          <h1 className="mt-8 text-6xl sm:text-8xl">
            Request a
            <br />
            <span className="text-primary">Free Quote</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground">
            Fill out the form below and we&apos;ll get back to you fast — usually the same day.
          </p>
        </div>

        <QuoteForm />
      </div>
    </main>
  );
}
