// Modal that pops up when a user clicks a role picker.
// Renders the appropriate Tally form inside an overlay.

import { useEffect } from 'react'
import { X } from 'lucide-react'
import TallyEmbed from './TallyEmbed.jsx'
import { TALLY_FORM_IDS } from '../config.js'

const ROLE_LABELS = {
  talent: { label: 'Talent', heading: "Join the Talent waitlist" },
  brand:  { label: 'Brand',  heading: "Join the Brand waitlist" },
  agency: { label: 'Brand Agency', heading: "Join the Brand Agency waitlist" },
}

export default function TallyModal({ role, onClose }) {
  // Esc-to-close + lock body scroll while open
  useEffect(() => {
    if (!role) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [role, onClose])

  if (!role) return null
  const meta = ROLE_LABELS[role]
  const formId = TALLY_FORM_IDS[role]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-bg border border-card-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-card-border flex-shrink-0">
          <div>
            <p className="text-[11px] text-lime font-bold uppercase tracking-widest mb-1">{meta.label}</p>
            <h3 className="text-lg font-bold text-white">{meta.heading}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-card border border-card-border hover:border-lime/40 hover:text-lime text-white/60 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body — scrollable form area */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-4">
          <TallyEmbed formId={formId} height={700} key={role} />
        </div>
      </div>
    </div>
  )
}
