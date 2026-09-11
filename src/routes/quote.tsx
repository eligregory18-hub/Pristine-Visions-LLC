import { createFileRoute, Link } from "@tanstack/react-router";

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
    <section id="quote" className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="section-head text-center">
          <p className="eyebrow">Get Started</p>
          <h2 className="text-5xl sm:text-6xl" style={{ marginTop: 12 }}>
            Request a <span style={{ color: "var(--primary)" }}>Free Quote</span>
          </h2>
          <p className="lead">Fill out the form and we&apos;ll get back to you fast — usually the same day.</p>
        </div>

        <div
          className="mx-auto rounded-sm"
          style={{ border: "1px solid var(--primary)" }}
        >
          <form
            className="quote-form panel rounded-sm p-6 text-left sm:p-10"
            id="quoteForm"
          >
          <div className="form-grid grid gap-5 sm:grid-cols-2">
            <div className="form-field">
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="first-name">First Name*</label>
              <input className="w-full rounded-sm border border-input bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none" type="text" id="first-name" name="first_name" placeholder="John" required />
            </div>
            <div className="form-field">
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="last-name">Last Name*</label>
              <input className="w-full rounded-sm border border-input bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none" type="text" id="last-name" name="last_name" placeholder="Smith" required />
            </div>
            <div className="form-field">
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="phone-number">Phone Number*</label>
              <input className="w-full rounded-sm border border-input bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none" type="tel" id="phone-number" name="phone_number" placeholder="620-000-0000" required />
            </div>
            <div className="form-field">
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="city">City*</label>
              <input className="w-full rounded-sm border border-input bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none" type="text" id="city" name="city" placeholder="McPherson" required />
            </div>
            <div className="form-field full sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="service-needed">Service Needed*</label>
              <select className="w-full rounded-sm border border-input bg-surface-2 px-4 py-3 text-sm text-foreground outline-none" id="service-needed" name="service_needed" defaultValue="" required>
                <option value="" disabled>Select a service...</option>
                <option value="window_washing">Window Washing</option>
                <option value="pressure_washing">Pressure Washing &amp; Soft Washing</option>
                <option value="screen_gutter_cleaning">Screen &amp; Gutter Cleaning</option>
                <option value="ceramic_window_coating">Ceramic Window Coating</option>
                <option value="multiple_services">Multiple Services</option>
              </select>
            </div>
            <div className="form-field full sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="additional-details">Additional Details (optional)</label>
              <textarea
                className="w-full resize-y rounded-sm border border-input bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none"
                id="additional-details"
                name="additional_details"
                rows={4}
                placeholder="Tell us about your property, what needs to be done, or any questions you have..."
              />
            </div>
          </div>
          <label className="consent mt-6 flex items-start gap-3 rounded-sm border border-border bg-surface-2/50 p-4 text-xs leading-relaxed text-muted-foreground">
            <input className="mt-1 size-4 shrink-0 accent-[#c98c1a]" type="checkbox" name="sms_consent" />
            <span className="text-left">
              <strong style={{ color: "var(--white)" }}>(Optional)</strong> I agree to receive SMS text messages from CGA Property Services about my quote, appointment confirmations, service reminders, and review requests. Consent is not required to get a quote or service. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. See our Privacy Policy and Terms. We don&apos;t sell or share your mobile information with third parties for marketing.
            </span>
          </label>
          <button type="submit" className="btn btn-primary mt-6 w-full rounded-sm bg-primary px-6 py-4 font-semibold text-primary-foreground">
            Submit Quote Request
          </button>
          <p className="form-footer mt-5 text-center text-sm text-muted-foreground">
            Or call/text us directly: <a href="tel:3202009941">(320) 200-9941</a>
          </p>
          </form>
        </div>

        <div className="sent-panel panel" id="sentPanel" style={{ display: "none" }}>
          <h3>Request received</h3>
          <p>Thanks — we&apos;ll be in touch shortly, usually the same day. Need it faster? Call (320) 200-9941.</p>
        </div>
      </div>
    </section>
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
