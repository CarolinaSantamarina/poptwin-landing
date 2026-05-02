import { ShieldCheck, Scale, Lock, FileSignature, BadgeCheck, Building2 } from 'lucide-react'

const badges = [
  { icon: ShieldCheck,    label: 'BIPA Compliant',             sub: 'Illinois biometric data law' },
  { icon: Scale,          label: 'ELVIS Act Aware',            sub: 'Tennessee voice/likeness cloning law' },
  { icon: Lock,           label: 'Encrypted Asset Vault',      sub: 'Bank-grade encryption, gated access' },
  { icon: FileSignature,  label: 'Attorney-Drafted Contracts', sub: 'Reviewed by independent counsel' },
  { icon: BadgeCheck,     label: 'Identity Verification',      sub: 'Government ID + liveness check' },
  { icon: Building2,      label: 'Delaware C-Corp',            sub: 'TalentPortal AI Inc.' },
]

export default function Compliance() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 border-t border-card-border">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
          Built on the laws of <span className="text-lime">digital identity</span>.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {badges.map((b) => (
          <div key={b.label} className="bg-card border border-card-border rounded-xl p-4 flex items-start gap-3">
            <div className="w-8 h-8 bg-lime/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <b.icon size={14} className="text-lime" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white">{b.label}</p>
              <p className="text-[10px] text-white/40 mt-0.5">{b.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
