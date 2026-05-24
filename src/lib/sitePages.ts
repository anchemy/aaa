export interface SitePage {
  title: string;
  slug: string;
  description: string;
}

export const sitePages: SitePage[] = [
  { title: "About", slug: "about", description: "Past and present" },
  { title: "Projects", slug: "projects", description: "Decisions, results, and reflections" },
  { title: "Graveyard", slug: "graveyard", description: "Here lies my old projects" },
  { title: "Chef's Specialty", slug: "chefs-specialty", description: "For cookouts with friends" },
  { title: "Bradbury Challenge", slug: "bradbury-challenge", description: "A short story, essay and poem a day" },
  { title: "Links", slug: "links", description: "Other places I'm at across the web" },
  { title: "Contact", slug: "contact", description: "Send me a message" },
  { title: "Subscription Sharing", slug: "subscription-sharing", description: "Share a subscription with me" },
  { title: "Working With Me", slug: "working-with-me", description: "Things to expect when working with me" },
  { title: "Portal", slug: "portal", description: "Client & collab portals, payment rollout calendar" },
  { title: "Wishlist", slug: "wishlist", description: "Things I'd love to be gifted" },
];

export function sitePageHref(slug: string) {
  return `/${slug}`;
}
