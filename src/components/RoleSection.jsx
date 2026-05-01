import { Check, ArrowRight } from 'lucide-react'

export default function RoleSection({ id, eyebrow, title, subhead, bullets, ctaLabel, onOpenForm }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-16 md:py-24 border-t border-card-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left — copy + bullets */}
        <div>
          <p className="text-[11px] text-lime font-bold uppercase tracking-widest mb-3">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/70 mb-8">{subhead}</p>

          <ul className="space-y-4">
            {bullets.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-lime" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">{b.title}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — CTA card (form opens in modal) */}
        <div className="lg:sticky lg:top-8">
          <div className="bg-card border border-card-border rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-[11px] text-lime font-bold uppercase tracking-widest mb-3">Waitlist</p>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
              Get on the list.
            </h3>
            <p className="text-sm text-white/60 mb-8 leading-relaxed">
              Early access ahead of public launch. Build your profile, complete onboarding,
              and start using the platform first.
            </p>
            <button
              onClick={onOpenForm}
              className="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-lime hover:bg-lime/90 text-black text-sm font-bold uppercase tracking-widest rounded-xl transition-all hover:-translate-y-0.5"
            >
              {ctaLabel}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="text-[11px] text-white/30 mt-4">
              Takes 60 seconds. No spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
