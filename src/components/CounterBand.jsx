// Live counter band — appears between Modules and FAQ.
// Below COUNTER_THRESHOLD signups, renders a static trust strip instead.
// Above the threshold, fetches from /api/counter (Vercel serverless function querying Airtable).

import { useEffect, useState } from 'react'
import { TrendingUp, Globe, Users, DollarSign } from 'lucide-react'
import { COUNTER_API, COUNTER_THRESHOLD, TRUST_BADGES } from '../config.js'

export default function CounterBand() {
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch(COUNTER_API)
      .then((r) => r.ok ? r.json() : null)
      .then((d) => { setData(d); setLoaded(true) })
      .catch(() => setLoaded(true))
  }, [])

  // While loading or below threshold, show the trust strip
  const showCounter = loaded && data && data.total_count >= COUNTER_THRESHOLD

  if (!showCounter) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-card-border">
        <div className="bg-card border border-card-border rounded-2xl p-6 md:p-8 text-center">
          <p className="text-[10px] text-lime uppercase tracking-widest font-bold mb-3">Built right, from the start</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            {TRUST_BADGES.map((badge, i) => (
              <span key={badge} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/20">·</span>}
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 border-t border-card-border">
      <div className="bg-gradient-to-br from-lime/10 via-card to-card border border-lime/30 rounded-2xl p-8 text-center">
        <p className="text-[10px] text-lime uppercase tracking-widest font-bold mb-3">Live waitlist</p>
        <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none mb-2">
          <span className="text-lime">{data.total_count.toLocaleString()}</span> on the waitlist
          <span className="text-white/40"> and growing</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm text-white/70">
          <Stat icon={TrendingUp} value={`+${data.new_this_week ?? 0}`} label="this week" />
          <span className="text-white/20">·</span>
          <Stat icon={Globe} value={data.countries ?? 0} label="countries" />
          {data.combined_reach > 0 && (
            <>
              <span className="text-white/20">·</span>
              <Stat icon={Users} value={formatBig(data.combined_reach)} label="combined reach" />
            </>
          )}
          {data.brand_pipeline > 0 && (
            <>
              <span className="text-white/20">·</span>
              <Stat icon={DollarSign} value={`$${formatBig(data.brand_pipeline)}`} label="brand pipeline" />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function Stat({ icon: Icon, value, label }) {
  return (
    <span className="flex items-center gap-1.5">
      <Icon size={12} className="text-lime" />
      <span className="font-bold text-white">{value}</span>
      <span className="text-white/50">{label}</span>
    </span>
  )
}

function formatBig(num) {
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1)}B`
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(0)}M`
  if (num >= 1_000) return `${(num / 1_000).toFixed(0)}K`
  return num.toString()
}
