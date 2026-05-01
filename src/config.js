// Configuration for the landing site.
// All values are public-safe (no secrets here) — secrets go in Vercel env vars.

export const TALLY_FORM_IDS = {
  // Get these from Tally after publishing each form.
  // URL pattern: https://tally.so/r/FORM_ID — that's the FORM_ID.
  talent: 'LZEQ02',                  // PopTwin Talent Waitlist (published)
  brand:  'b5Ndbo',                  // PopTwin Brand Waitlist (published)
  agency: 'xX9Yko',                  // PopTwin Agency Waitlist (published)
}

// Investor "Pulse" view — for now we direct investors to Tally's submissions page.
// When you have Tally Pro, you can share a public submissions URL.
// For now Caro shares CSV exports manually until volume justifies a custom dashboard.
export const PULSE_NOTE = 'Investor data shared via direct outreach until volume justifies a public dashboard.'

// Counter API endpoint (Vercel serverless function in /api/counter.js).
export const COUNTER_API = '/api/counter'

// Visibility threshold: counter band hides until total signups ≥ this number.
// Below this, the trust-signals strip renders instead.
export const COUNTER_THRESHOLD = 25

// Static fallback metrics — shown when the counter API is unreachable or below threshold.
export const TRUST_BADGES = [
  'BIPA + ELVIS Act compliant',
  'Consent-first architecture',
  'Identity-verified talent',
  'Encrypted asset vault',
]
