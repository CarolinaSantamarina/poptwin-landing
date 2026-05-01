import { Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-bg">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Logo + tagline */}
          <div className="col-span-2">
            <img src="/assets/logos/PopTwinai_white.png" alt="PopTwin.AI" className="h-8 mb-3" />
            <p className="text-xs text-white/50 leading-relaxed max-w-xs">
              The world&apos;s first secure marketplace for digital Name, Image, and Likeness.
              Coming Q3 2026.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <SocialLink href="https://instagram.com/poptwin.ai" icon={Instagram} label="Instagram" />
              <SocialLink href="https://x.com/poptwinai" icon={Twitter} label="X" />
              <SocialLink href="https://linkedin.com/company/poptwin" icon={Linkedin} label="LinkedIn" />
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-3">Product</p>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#talent" className="hover:text-lime transition-colors">For Talent</a></li>
              <li><a href="#brand" className="hover:text-lime transition-colors">For Brands</a></li>
              <li><a href="#agency" className="hover:text-lime transition-colors">For Agencies</a></li>
              <li><a href="#modules" className="hover:text-lime transition-colors">Modules</a></li>
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-3">Company</p>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="mailto:hello@poptwin.ai" className="hover:text-lime transition-colors">Contact</a></li>
              <li><a href="mailto:partnerships@poptwin.ai" className="hover:text-lime transition-colors">Partnerships</a></li>
              <li><a href="/privacy" className="hover:text-lime transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-lime transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} TalentPortal AI Inc. (DBA PopTwin.ai) &middot; Delaware C-Corp &middot; Miami, FL</p>
          <p>All rights reserved.</p>
        </div>
      </div>
      <div className="h-1 bg-lime" />
    </footer>
  )
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-lg bg-card border border-card-border flex items-center justify-center text-white/60 hover:text-lime hover:border-lime/30 transition-colors"
    >
      <Icon size={14} />
    </a>
  )
}
