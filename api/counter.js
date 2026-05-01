// Vercel serverless function: live waitlist counter.
// Queries Tally's API for submission counts across the 3 waitlist forms.
//
// Env vars required (set in Vercel project settings):
//   TALLY_API_KEY         — generate at https://tally.so/settings/api
//   TALLY_TALENT_FORM_ID  — e.g., LZEQ02
//   TALLY_BRAND_FORM_ID   — e.g., XYZ123
//   TALLY_AGENCY_FORM_ID  — e.g., ABC456

const CACHE_HEADER = 'public, s-maxage=60, stale-while-revalidate=600'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', CACHE_HEADER)

  const apiKey = process.env.TALLY_API_KEY
  const formIds = {
    talent: process.env.TALLY_TALENT_FORM_ID,
    brand:  process.env.TALLY_BRAND_FORM_ID,
    agency: process.env.TALLY_AGENCY_FORM_ID,
  }

  if (!apiKey || !formIds.talent) {
    return res.status(200).json({
      total_count: 0,
      talent_count: 0,
      brand_count: 0,
      agency_count: 0,
      new_this_week: 0,
      configured: false,
      note: 'Set TALLY_API_KEY and TALLY_*_FORM_ID env vars to enable live counter.',
    })
  }

  try {
    const oneWeekAgo = Date.now() - 7 * 86_400_000
    const counts = { talent: 0, brand: 0, agency: 0 }
    const newWeek = { talent: 0, brand: 0, agency: 0 }
    const countries = new Set()

    for (const [role, formId] of Object.entries(formIds)) {
      if (!formId) continue
      const submissions = await fetchSubmissions(apiKey, formId)
      counts[role] = submissions.length
      for (const s of submissions) {
        const created = s.createdAt ? new Date(s.createdAt).getTime() : 0
        if (created >= oneWeekAgo) newWeek[role]++
        // Pull country if Tally provided respondent country in metadata
        const country = extractCountry(s)
        if (country) countries.add(country)
      }
    }

    const total = counts.talent + counts.brand + counts.agency
    const totalNew = newWeek.talent + newWeek.brand + newWeek.agency

    return res.status(200).json({
      total_count: total,
      talent_count: counts.talent,
      brand_count: counts.brand,
      agency_count: counts.agency,
      new_this_week: totalNew,
      countries: countries.size,
      combined_reach: 0,    // requires field-level parsing — TODO when forms are live
      brand_pipeline: 0,    // requires field-level parsing — TODO
      configured: true,
    })
  } catch (err) {
    console.error('[counter] Tally fetch failed', err)
    return res.status(200).json({
      total_count: 0,
      configured: false,
      error: 'fetch_failed',
    })
  }
}

async function fetchSubmissions(apiKey, formId) {
  // Tally API: GET /forms/{formId}/submissions
  // Returns paginated list. We page through all of them.
  const all = []
  let page = 1
  while (true) {
    const url = `https://api.tally.so/forms/${formId}/submissions?page=${page}&limit=100`
    const resp = await fetch(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
    })
    if (!resp.ok) {
      // 404 means form doesn't exist yet (not configured) — return empty
      if (resp.status === 404) return all
      throw new Error(`Tally ${resp.status} for form ${formId}`)
    }
    const data = await resp.json()
    const items = data.submissions ?? data.items ?? []
    all.push(...items)
    const total = data.total ?? items.length
    if (all.length >= total || items.length < 100) break
    page++
    if (page > 20) break // safety cap
  }
  return all
}

function extractCountry(submission) {
  // Tally submissions have a "responses" array with question/value pairs.
  // Look for a country-shaped value.
  const responses = submission.responses ?? []
  for (const r of responses) {
    const label = (r.questionLabel || r.label || '').toLowerCase()
    if (label.includes('country')) {
      return r.value || r.answer || null
    }
  }
  return submission.respondent?.country ?? null
}
