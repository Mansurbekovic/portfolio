import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Send, Award, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-12 text-[var(--text-secondary)] text-sm transition-colors">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[var(--border-subtle)]">
          
          {/* Identity */}
          <div className="md:col-span-2">
            <div className="font-bold text-[var(--text-primary)] text-base mb-2">
              Muhammadislom Rustambekov (Mansurbekovich)
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm mb-4">
              {t.footerBio}
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[#92400E] dark:text-[var(--accent-amber)] border border-[#FDE68A] dark:border-[var(--accent-amber)] text-xs font-mono font-medium">
              <Award className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
              <span>{t.footerCert}</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div>
            <div className="font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wider mb-3">
              {t.footerNav}
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <NavLink to="/" className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors">
                {t.navOverview}
              </NavLink>
              <NavLink to="/about" className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors">
                {t.navAbout}
              </NavLink>
              <NavLink to="/projects" className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors">
                {t.navProjects} (6)
              </NavLink>
              <NavLink to="/tools" className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors">
                {t.navTools}
              </NavLink>
              <NavLink to="/contact" className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors">
                {t.navContact}
              </NavLink>
            </div>
          </div>

          {/* Direct Channels */}
          <div>
            <div className="font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wider mb-3">
              {t.footerDirect}
            </div>
            <div className="flex flex-col gap-2 text-xs font-mono">
              <a
                href="tel:+998503016347"
                className="flex items-center gap-1.5 text-[var(--text-primary)] font-semibold hover:text-[var(--accent-amber)] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                <span>+998 50 301 63 47</span>
              </a>
              <a
                href="https://t.me/muhammadislom10"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                <span>@muhammadislom10</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
              </a>
              <span className="text-[var(--text-muted)] text-[11px] mt-1">
                {t.footerLocation}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4">
          <div>
            © {new Date().getFullYear()} {t.footerCopyright}
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>React 19</span>
            <span>•</span>
            <span>Python FastAPI</span>
            <span>•</span>
            <span>Turon Accredited</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
