# PopTwin.AI — Landing Site

Marketing + waitlist site for [poptwin.ai](https://poptwin.ai).

Stack: Vite + React 19 + Tailwind CSS 4. Forms embedded via Tally. Data stored in Airtable. Live counter via Vercel serverless function.

## Local development

```bash
npm install
npm run dev
```

## Configuration

After Tally and Airtable are set up, fill in:

1. `src/config.js` — Tally form IDs + Airtable shared view URL
2. Vercel env vars — `AIRTABLE_TOKEN`, `AIRTABLE_BASE_ID`, `AIRTABLE_TABLE`

## Architecture

- **Landing page** = single-page React app
- **Three forms** = embedded Tally iframes (Talent, Brand, Agency)
- **Storage** = Tally → Airtable integration writes signups
- **Counter** = `/api/counter` queries Airtable, returns aggregated stats
- **Investor view** = shared Airtable view URL (no separate dashboard needed)
