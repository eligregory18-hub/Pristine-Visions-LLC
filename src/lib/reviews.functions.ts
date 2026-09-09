import { createServerFn } from "@tanstack/react-start";

export type PublicReview = {
  author: string;
  photoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  source: "google" | "facebook";
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";
const BUSINESS_QUERY = "Pristine Visions LLC window cleaning Minnesota";

type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; photoUri?: string };
};

async function gateway(path: string, init: RequestInit & { fieldMask: string }) {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const mapsKey = process.env["GOOGLE_MAPS_API_KEY"];
  if (!lovableKey || !mapsKey) return null;

  const response = await fetch(`${GATEWAY_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": mapsKey,
      "Content-Type": "application/json",
      "X-Goog-FieldMask": init.fieldMask,
    },
  });

  if (!response.ok) {
    console.error(`Google Maps gateway ${path} failed [${response.status}]: ${await response.text()}`);
    return null;
  }
  return (await response.json()) as Record<string, unknown>;
}

/**
 * Pulls the latest reviews from the business' Google listing.
 * Returns an empty array when the listing cannot be reached, so the
 * site can fall back to the reviews stored in the page.
 */
export const getGoogleReviews = createServerFn({ method: "GET" }).handler(async (): Promise<PublicReview[]> => {
  const search = (await gateway("/places/v1/places:searchText", {
    method: "POST",
    body: JSON.stringify({ textQuery: BUSINESS_QUERY }),
    fieldMask: "places.id,places.displayName",
  })) as { places?: Array<{ id?: string }> } | null;

  const placeId = search?.places?.[0]?.id;
  if (!placeId) return [];

  const details = (await gateway(`/places/v1/places/${placeId}`, {
    method: "GET",
    fieldMask: "reviews",
  })) as { reviews?: PlacesReview[] } | null;

  return (details?.reviews ?? [])
    .map((review): PublicReview => ({
      author: review.authorAttribution?.displayName ?? "Google user",
      photoUrl: review.authorAttribution?.photoUri ?? null,
      rating: review.rating ?? 5,
      text: review.text?.text ?? review.originalText?.text ?? "",
      relativeTime: review.relativePublishTimeDescription ?? "",
      source: "google",
    }))
    .filter((review) => review.text.length > 0);
});
