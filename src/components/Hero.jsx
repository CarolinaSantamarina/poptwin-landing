import { Sparkles, ArrowRight, Check, User, Building2, Briefcase } from 'lucide-react'
import { TRUST_BADGES } from '../config.js'

export default function Hero({ onOpenForm }) {
  return (
    <section className="relative min-h-[90vh] px-4 py-16 md:py-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-lime/8 via-lime/[0.02] to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-lime/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-card border border-card-border rounded-full text-[11px] font-bold uppercase tracking-widest text-lime mb-8">
          <Sparkles size={12} /> Coming Q3 2026
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[1.05] tracking-tight mb-6 max-w-5xl mx-auto">
          The world&apos;s first secure marketplace for{' '}
          <span className="text-lime">Digital Name, Image, and Likeness</span>.
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12">
          License your digital twin on your own terms. Consent-first architecture, escrow-backed payments,
          and compliance infrastructure built for talent and brands worldwide.
        </p>

        {/* Role pickers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          <RolePicker
            icon={User}
            label="I'm Talent"
            sub="Singers, actors, athletes, influencers, public figures, digital avatars, etc."
            onClick={() => onOpenForm('talent')}
          />
          <RolePicker
            icon={Building2}
            label="I'm a Brand"
            sub="License talent for campaigns, products, and content"
            onClick={() => onOpenForm('brand')}
          />
          <RolePicker
            icon={Briefcase}
            label="I'm a Brand Agency"
            sub="Manage Endorsement/Ambassador deals across multiple brand clients"
            onClick={() => onOpenForm('agency')}
          />
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-white/50">
          {TRUST_BADGES.map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <Check size={10} className="text-lime" /> {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function RolePicker({ icon: Icon, label, sub, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group bg-card border border-card-border hover:border-lime/40 rounded-2xl p-5 text-left transition-all hover:-translate-y-0.5 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 bg-lime/10 border border-lime/30 rounded-xl flex items-center justify-center">
          <Icon size={18} className="text-lime" />
        </div>
        <ArrowRight size={16} className="text-white/30 group-hover:text-lime group-hover:translate-x-0.5 transition-all" />
      </div>
      <p className="text-base font-bold text-white">{label}</p>
      <p className="text-xs text-white/50 mt-1 leading-relaxed">{sub}</p>
    </button>
  )
}
