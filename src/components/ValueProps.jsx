import { ShieldCheck, Zap, Lock } from 'lucide-react'

const props = [
  {
    icon: ShieldCheck,
    title: 'Consent-First',
    description: 'Every license requires explicit signature. Every payout requires explicit approval. BIPA + ELVIS Act compliant by design.',
  },
  {
    icon: Zap,
    title: 'One-Day Activation',
    description: 'Attorney-drafted contracts auto-populate. Escrow holds funds until delivery. Bundle pricing matrix priced per vertical and term. From discovery to funded in hours, not weeks.',
  },
  {
    icon: Lock,
    title: 'Privacy by Default',
    description: 'Merch Me protects talent home addresses. PopVault releases source files only post-payment. PII masked at every layer. KIT Code is the discovery layer, not your phone number.',
  },
]

export default function ValueProps() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Why <span className="text-lime">PopTwin</span>.
        </h2>
        <p className="text-white/60 max-w-3xl mx-auto leading-relaxed">
          Three commitments that shape every product decision &mdash; from how talent onboards
          to how brands pay.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {props.map((p) => (
          <div key={p.title} className="bg-card border border-card-border rounded-2xl p-6 hover:border-lime/30 transition-colors">
            <div className="w-10 h-10 bg-lime/10 rounded-lg flex items-center justify-center mb-4">
              <p.icon size={20} className="text-lime" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wide mb-3">{p.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
