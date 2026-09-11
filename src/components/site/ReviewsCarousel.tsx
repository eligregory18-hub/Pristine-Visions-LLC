type PublicReview = {
  author: string;
  photoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  source: "google" | "facebook";
};

const fallbackReviews: PublicReview[] = [
  {
    author: "Abby Thurston",
    photoUrl: null,
    rating: 5,
    text: "Great price. Eli did a great job communicating and it was very clear what to expect. Outside windows have never been cleaner! Highly recommend!",
    relativeTime: "7 weeks ago",
    source: "google",
  },
  {
    author: "Kevin Sheehan",
    photoUrl: null,
    rating: 5,
    text: "Reasonable price. We had a wonderful experience in working with Eli. Good kid, hard worker. Trustworthy. Did a wonderful job!!! All thumbs up!!!!",
    relativeTime: "5 weeks ago",
    source: "google",
  },
  {
    author: "Ray Yakimchuk",
    photoUrl: null,
    rating: 5,
    text: "We were very impressed with this self motivated ambitious young man. Would definitely recommend his window cleaning business to anyone.",
    relativeTime: "5 weeks ago",
    source: "google",
  },
  {
    author: "Jayne Solberg",
    photoUrl: null,
    rating: 5,
    text: "We have employed Eli for several years and give him the highest ratings for service, accommodating to individual needs, trustworthy and great at his job knowledge.",
    relativeTime: "July 3",
    source: "facebook",
  },
  {
    author: "Scott Haala",
    photoUrl: null,
    rating: 5,
    text: "Pristine Visions did an amazing job on my house. We had our house soft washed. We also hired them to do our patio. It looks amazing and I highly recommend.",
    relativeTime: "July 12",
    source: "facebook",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ReviewCard({ review }: { review: PublicReview }) {
  return (
    <article
      className="panel w-[85vw] max-w-sm shrink-0 snap-start rounded-sm p-6 sm:w-[22rem]"
      style={{ border: "1px solid var(--primary)" }}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-full bg-surface-2 font-display text-lg text-primary">
          {initials(review.author)}
        </span>
        <div>
          <p className="font-display text-lg leading-tight tracking-wide text-foreground">{review.author}</p>
          <p className="text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
            {review.source === "google" ? "Google Review" : "Facebook Recommendation"}
            {review.relativeTime ? ` · ${review.relativeTime}` : ""}
          </p>
        </div>
      </div>
      <div className="mt-4 flex gap-1 text-primary" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: Math.round(review.rating) }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">&ldquo;{review.text}&rdquo;</p>
    </article>
  );
}

export function ReviewsCarousel() {
  return (
    <div
      className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]"
      role="region"
      aria-label="Customer reviews"
    >
      {fallbackReviews.map((review) => (
        <ReviewCard key={`${review.author}-${review.text.slice(0, 24)}`} review={review} />
      ))}
    </div>
  );
}
