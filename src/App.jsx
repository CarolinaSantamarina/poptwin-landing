import { useState, useCallback } from 'react'
import Hero from './components/Hero.jsx'
import ValueProps from './components/ValueProps.jsx'
import RoleSection from './components/RoleSection.jsx'
import Modules from './components/Modules.jsx'
import Compliance from './components/Compliance.jsx'
import CounterBand from './components/CounterBand.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import StickyCTA from './components/StickyCTA.jsx'
import TallyModal from './components/TallyModal.jsx'

const TALENT_BULLETS = [
  { title: 'You set the price.', body: 'Three licensing verticals — Image, Voice, Video — across three terms (3, 6, 12 months). Smart Pricing auto-calculates the longer terms from your 3-month anchor, or you set them manually.' },
  { title: 'You get paid on delivery.', body: 'Funds held in escrow on contract execution. Released on asset delivery. No chasing invoices, no back-channel disputes.' },
  { title: 'You stay in control.', body: 'Every deal requires your signature. Every asset stays in PopVault until escrow funds. Disputes pause payout automatically.' },
]

const BRAND_BULLETS = [
  { title: 'Verified, scored, ranked.', body: 'Every talent identity-verified. TPI Score surfaces engagement trajectory and brand-safety signals. Filter by category, budget, reach, region.' },
  { title: 'One workflow, end-to-end.', body: 'Auto-populated licensing agreement. E-signature in-platform. Platform-managed escrow. Asset delivery on completion. No back-and-forth across email, DocuSign, and accounting.' },
  { title: 'Privacy-preserving Merch Me.', body: 'Send products to talent without seeing their address. Build relationships before formal licensing.' },
]

const AGENCY_BULLETS = [
  { title: 'Multi-brand workspace.', body: 'Switch between client brands at login or in-session. Deals, search, and reporting scope to whichever brand you’re representing.' },
  { title: 'Cross-brand visibility.', body: 'Portfolio dashboard across all your clients — deal counts, total value, top-performing talent, pending action items.' },
  { title: 'Built for compliance reporting.', body: 'Audit trail per client, per deal. Export-ready records for client billing and rights management.' },
]

export default function App() {
  // Which role's modal is open: null | 'talent' | 'brand' | 'agency'
  const [openRole, setOpenRole] = useState(null)
  const openModal = useCallback((role) => setOpenRole(role), [])
  const closeModal = useCallback(() => setOpenRole(null), [])

  return (
    <div className="min-h-screen bg-bg">
      <Hero onOpenForm={openModal} />
      <ValueProps />
      <RoleSection
        id="talent"
        eyebrow="For Talent"
        title="Set your prices. Own your likeness. Get paid in escrow."
        subhead="The first marketplace for digital twin licensing. Singers, actors, athletes, influencers, public figures, digital avatars — your terms, your price, your control."
        bullets={TALENT_BULLETS}
        ctaLabel="Join the Talent waitlist"
        onOpenForm={() => openModal('talent')}
      />
      <RoleSection
        id="brand"
        eyebrow="For Brands"
        title="Discover verified talent. License safely. Activate at scale."
        subhead="From discovery to funded campaign in hours, not weeks. Identity-verified talent, attorney-drafted contracts, escrow-backed payouts."
        bullets={BRAND_BULLETS}
        ctaLabel="Join the Brand waitlist"
        onOpenForm={() => openModal('brand')}
      />
      <RoleSection
        id="agency"
        eyebrow="For Brand Agencies"
        title="One agency account. Multiple brand clients. Cleaner reporting."
        subhead="The infrastructure layer for agencies running endorsement and ambassador programs across multiple clients."
        bullets={AGENCY_BULLETS}
        ctaLabel="Join the Brand Agency waitlist"
        onOpenForm={() => openModal('agency')}
      />
      <Modules />
      <Compliance />
      <CounterBand />
      <FAQ />
      <Footer />
      <StickyCTA onOpenForm={openModal} />
      <TallyModal role={openRole} onClose={closeModal} />
    </div>
  )
}
