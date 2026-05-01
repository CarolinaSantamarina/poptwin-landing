// Inline Tally form embed.
// Tally provides a script (loaded in index.html) that auto-resizes the iframe to fit content.

import { useEffect, useRef } from 'react'

export default function TallyEmbed({ formId, dataLayout = 'inline', height = 700 }) {
  const ref = useRef(null)

  // After mount, ping Tally's resize widget (loaded via script tag in index.html).
  useEffect(() => {
    if (typeof window === 'undefined') return
    const tryLoad = () => {
      if (window.Tally?.loadEmbeds) {
        window.Tally.loadEmbeds()
      }
    }
    tryLoad()
    // Retry once a moment later in case the script hasn't loaded yet
    const t = setTimeout(tryLoad, 500)
    return () => clearTimeout(t)
  }, [formId])

  if (!formId || formId.includes('FORM_ID_HERE')) {
    return (
      <div className="bg-card border border-card-border rounded-2xl p-12 text-center">
        <p className="text-white/40 text-sm font-mono">Tally form ID not yet configured.</p>
        <p className="text-[11px] text-white/30 mt-2">Update <code>src/config.js</code> with your Tally form ID after publishing the form.</p>
      </div>
    )
  }

  const src = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`

  return (
    <iframe
      ref={ref}
      data-tally-src={src}
      src={src}
      loading="lazy"
      width="100%"
      height={height}
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="PopTwin waitlist form"
      style={{ minHeight: 600 }}
    />
  )
}
