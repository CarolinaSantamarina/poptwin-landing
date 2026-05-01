import { Lock, FileText, Gift, QrCode, Activity } from 'lucide-react'

const modules = [
  { icon: Lock,     name: 'PopVault',     desc: 'Encrypted biometric and asset storage with consent-first access controls' },
  { icon: FileText, name: 'Deal Builder', desc: 'End-to-end licensing workflow from offer to escrow to asset delivery' },
  { icon: Gift,     name: 'Merch Me',     desc: 'Privacy-preserving product gifting with no-address-exposure logistics' },
  { icon: QrCode,   name: 'KIT Code',     desc: 'AI-generated face-shaped QR business card for talent discovery' },
  { icon: Activity, name: 'TPI Score',    desc: 'Real-time engagement analytics beyond follower counts' },
]

export default function Modules() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 border-t border-card-border">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
          Five modules. <span className="text-lime">One platform.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {modules.map((m) => (
          <div key={m.name} className="bg-card border border-card-border rounded-2xl p-5 hover:border-lime/30 transition-colors">
            <div className="w-10 h-10 bg-lime/10 rounded-lg flex items-center justify-center mb-4">
              <m.icon size={18} className="text-lime" />
            </div>
            <p className="text-sm font-black text-white uppercase tracking-wide mb-2">{m.name}</p>
            <p className="text-xs text-white/50 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
