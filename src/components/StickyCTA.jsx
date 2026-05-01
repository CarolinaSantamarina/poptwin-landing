// Mobile-only sticky CTA at the bottom of the screen.
// Opens the appropriate Tally modal when clicked.

import { useEffect, useState } from 'react'

export default function StickyCTA({ onOpenForm }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past hero (~60vh)
      setVisible(window.scrollY > window.innerHeight * 0.6)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-bg/95 backdrop-blur-md border-t border-card-border p-3">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onOpenForm('talent')}
          className="flex-1 px-3 py-2.5 bg-lime text-black text-[11px] font-bold uppercase tracking-widest rounded-lg"
        >
          Talent
        </button>
        <button
          onClick={() => onOpenForm('brand')}
          className="flex-1 px-3 py-2.5 bg-card border border-card-border text-white text-[11px] font-bold uppercase tracking-widest rounded-lg"
        >
          Brand
        </button>
        <button
          onClick={() => onOpenForm('agency')}
          className="flex-1 px-3 py-2.5 bg-card border border-card-border text-white text-[11px] font-bold uppercase tracking-widest rounded-lg"
        >
          Agency
        </button>
      </div>
    </div>
  )
}
