import { useState } from "react";

const services = [
  "Window Washing",
  "Pressure Washing",
  "Screen & Gutter Cleaning",
  "Ceramic Window Coating",
  "Multiple Services",
];

const field =
  "w-full rounded-sm border border-input bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  if (sent) {
    return (
      <div className="panel rounded-sm p-10 text-center">
        <h3 className="text-3xl">Request received</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Thanks — we&apos;ll be in touch shortly, usually the same day. Need it faster? Call
          (320) 200-9941.
        </p>
      </div>
    );
  }

  return (
    <form
      className="panel rounded-sm p-6 sm:p-8"
      action="https://formspree.io/f/xbgjqqkb"
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setSending(true);
        setError("");

        try {
          const response = await fetch("https://formspree.io/f/xbgjqqkb", {
            method: "POST",
            headers: {
              Accept: "application/json",
            },
            body: new FormData(form),
          });

          if (!response.ok) {
            throw new Error("Form submission failed");
          }

          setSent(true);
        } catch {
          setError(
            "We couldn't send your request right now. Please call (320) 200-9941 instead.",
          );
        } finally {
          setSending(false);
        }
      }}
    >
      <input type="hidden" name="_subject" value="New Pristine Visions quote request" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            First Name
          </span>
          <input required aria-required="true" className={field} placeholder="Jane" name="first" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Last Name
          </span>
          <input required aria-required="true" className={field} placeholder="Doe" name="last" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Phone Number
          </span>
          <input
            required
            aria-required="true"
            type="tel"
            className={field}
            placeholder="320-200-9941"
            name="phone"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            City
          </span>
          <input required aria-required="true" className={field} placeholder="Lincoln" name="city" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Service Needed
          </span>
          <select required aria-required="true" className={field} name="service" defaultValue="">
            <option value="" disabled>
              Select a service...
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Additional Details (optional)
          </span>
          <textarea
            rows={4}
            className={field}
            name="details"
            placeholder="Number of windows, square footage, timing..."
          />
        </label>
      </div>

      <label className="mt-5 flex gap-3 text-xs leading-relaxed text-muted-foreground">
        <input
          type="checkbox"
          className="mt-1 size-4 accent-[#c98c1a]"
          name="sms-consent"
          value="yes"
        />
        <span>
          <strong className="text-foreground">(Optional)</strong> I agree to receive text messages
          with (320) 200-9941 about my quote, appointment confirmations, and service reminders.
          Consent is not required to get a quote. Message frequency varies; message and data rates
          may apply. Reply STOP to opt out.
        </span>
      </label>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-sm bg-primary px-6 py-4 font-display text-xl tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        {sending ? "Sending..." : "Submit Quote Request"}
      </button>

      {error && (
        <p role="alert" className="mt-4 text-center text-sm text-destructive">
          {error}
        </p>
      )}

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Or call/text us directly:{" "}
        <a className="text-primary hover:underline" href="tel:3202009941">
          (320) 200-9941
        </a>
      </p>
    </form>
  );
}
