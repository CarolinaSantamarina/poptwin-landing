import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'When does PopTwin launch?',
    a: 'We’re targeting public launch in Q3 2026. Waitlist members are invited to onboard ahead of public availability.',
  },
  {
    q: 'How does PopTwin make money?',
    a: 'A platform fee on completed licensing transactions, charged when a deal closes and assets are delivered. Talent retains the majority of every deal. Specific terms are shared during onboarding.',
  },
  {
    q: 'What do I get for joining the waitlist?',
    a: 'Early access. Waitlist members are invited to onboard before public availability so they can build their profile, complete identity verification (talent), and start using the platform first. No tiered pricing, no special perks — just first access.',
  },
  {
    q: 'What countries are supported?',
    a: 'Global discovery from day one. Commercial licensing is restricted to intended use in the United States and Canada for the MVP launch. Additional regions roll out post-launch as compliance and partner integrations are confirmed.',
  },
  {
    q: 'How is talent identity verified?',
    a: 'Mandatory identity verification during onboarding: government-issued ID plus a selfie liveness check. No exceptions — every Talent profile on PopTwin is identity-verified.',
  },
  {
    q: 'How is my biometric data protected?',
    a: 'PopVault uses AES-256 encryption at rest with CloudFront-signed URL access. Asset access is gated behind fully executed licensing agreements and settled payments. BIPA-compliant explicit consent at upload, with published retention and destruction schedules.',
  },
  {
    q: 'Who is behind PopTwin?',
    a: 'TalentPortal AI Inc. is a Delaware C-Corporation founded in 2026 by Caro Santamarina, with trademark applications filed in USPTO Classes 35 and 45.',
  },
  {
    q: 'I represent multiple talent / multiple brands. How does that work?',
    a: 'For talent management companies and multi-talent representation, contact us at partnerships@poptwin.ai. We’re building white-label and multi-tenancy for talent management firms post-MVP. Brand agencies are supported in the MVP via the multi-brand workspace switcher.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 md:py-24 border-t border-card-border">
      <div className="text-center mb-10">
        <p className="text-[11px] text-lime font-bold uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
          Questions <span className="text-lime">we hear most</span>.
        </h2>
      </div>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="bg-card border border-card-border rounded-xl overflow-hidden group"
            open={open === i}
            onToggle={(e) => { if (e.target.open) setOpen(i) }}
          >
            <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
              <span className="text-sm font-bold text-white">{faq.q}</span>
              <ChevronDown size={16} className="text-white/40 flex-shrink-0 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-5 pb-4 text-sm text-white/70 leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
