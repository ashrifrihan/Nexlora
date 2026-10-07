/**
 * Centralized site configuration.
 *
 * To migrate from nexzoa.dev → nexzoa.io in the future,
 * change SITE_URL (and SITE_DOMAIN) here only - every
 * metadata, canonical, sitemap, robots, OG, and JSON-LD
 * reference in the codebase derives from this constant.
 */

// ─── Primary production domain ───────────────────────────────────────────────
// Current: https://www.nexzoa.dev
// Future:  https://www.nexzoa.io  (when the .io domain is purchased)
export const SITE_URL = "https://www.nexzoa.dev" as const;

// ─── Derived helpers ──────────────────────────────────────────────────────────
export const SITE_ORIGIN = new URL(SITE_URL);

/** Absolute URL for a given path, e.g. siteUrl("/about") → "https://www.nexzoa.dev/about" */
export function siteUrl(path: string = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// ─── Brand & Entity Definition ───────────────────────────────────────────────
export const SITE_NAME = "Nexzoa" as const;
export const SITE_LEGAL_NAME = "Nexzoa" as const;
export const SITE_TAGLINE = "AI Software & SaaS Product Engineering" as const;
export const SITE_SLOGAN = "Build the system behind your business." as const;

export const SITE_DESCRIPTION_SHORT =
  "Nexzoa is an AI software technology company in Sri Lanka building proprietary AI-powered SaaS platforms and custom software engineering solutions." as const;

export const SITE_DESCRIPTION_LONG =
  "Nexzoa is an AI software technology company based in Colombo, Sri Lanka, building proprietary AI-powered SaaS platforms, intelligent automation workflows, and high-performance cloud applications." as const;

// ─── Geographic & Headquarters ───────────────────────────────────────────────
export const BUSINESS_CITY = "Colombo" as const;
export const BUSINESS_REGION = "Western Province" as const;
export const BUSINESS_COUNTRY = "Sri Lanka" as const;
export const BUSINESS_COUNTRY_CODE = "LK" as const;

// ─── Contact ─────────────────────────────────────────────────────────────────
export const CONTACT_EMAIL = "hello@nexzoa.dev" as const;
export const CONTACT_PHONE = "+94 77 200 8364" as const;
export const CONTACT_PHONE_RAW = "+94772008364" as const;

// ─── Social profiles (Verified) ──────────────────────────────────────────────
export const SOCIAL_TWITTER = "https://twitter.com/nexzoa" as const;
export const SOCIAL_LINKEDIN = "https://www.linkedin.com/company/nexzoa-io/" as const;
export const SOCIAL_GITHUB = "https://github.com/nexzoa" as const;
export const SOCIAL_INSTAGRAM = "https://instagram.com/nexzoa" as const;

// ─── Core Services ───────────────────────────────────────────────────────────
export const CORE_SERVICES = [
  "AI Software Engineering",
  "Custom SaaS Development",
  "AI Workflow Automation",
  "Cloud Application Engineering",
  "Custom Software Development",
  "Realtime Dashboard Systems",
  "Business Process Automation",
] as const;
