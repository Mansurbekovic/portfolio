import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, Send, Menu, X, Sun, Moon, FileText, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { ResumeModal } from './ResumeModal';
import type { Language } from '../i18n/translations';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.navOverview, to: '/' },
    { label: t.navAbout, to: '/about' },
    { label: t.navProjects, to: '/projects', badge: '6' },
    { label: t.navTools, to: '/tools' },
    { label: t.navContact, to: '/contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 no-print ${
          scrolled
            ? 'bg-[var(--bg-surface)]/95 shadow-xs backdrop-blur-md border-b border-[var(--border-subtle)]'
            : 'bg-[var(--bg-surface)]/90 backdrop-blur-sm border-b border-[var(--border-subtle)]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          
          {/* Brand */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 text-decoration-none shrink-0 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-[6px] bg-[#111827] text-white flex items-center justify-center font-bold text-xs tracking-wider border border-[var(--border-strong)] relative overflow-hidden group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/images/profile.jpg"
                alt="Muhammadislom Rustambekov"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-[#10B981] border border-white dark:border-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-sm text-[var(--text-primary)] tracking-tight flex items-center gap-1.5">
                <span>Muhammadislom</span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded-[3px] bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] font-semibold">
                  {t.turonCertShort}
                </span>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse inline-block" />
                <span>{t.onlineStatus}</span>
              </span>
            </div>
          </NavLink>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-2.5 lg:px-3 py-1.5 rounded-[5px] text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[var(--bg-muted)] text-[var(--accent-amber)] font-bold shadow-2xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)]/60'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-[var(--accent-amber)] text-[#111827] font-bold leading-none">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Language Switcher (UZ | RU | EN) */}
            <div className="flex items-center p-0.5 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-[10px] font-mono font-bold">
              <Globe className="w-3 h-3 text-[var(--text-muted)] ml-1 mr-0.5 hidden sm:inline-block" />
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLanguage(l.code)}
                  className={`px-1.5 py-0.5 rounded-[3px] transition-all cursor-pointer ${
                    language === l.code
                      ? 'bg-[var(--accent-amber)] text-[#111827] font-extrabold shadow-2xs'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                  title={`Switch language to ${l.label}`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle (Sun/Moon) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-[5px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all cursor-pointer"
              title={theme === 'cream' ? t.themeDarkTooltip : t.themeLightTooltip}
              aria-label="Toggle Theme"
            >
              {theme === 'cream' ? (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              ) : (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FACC15]" />
              )}
            </button>

            {/* Resume / CV Modal Trigger */}
            <button
              onClick={() => setResumeOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[5px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-mono font-medium transition-all cursor-pointer"
              title="View & Download Official CV (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
              <span>{t.resume}</span>
            </button>

            {/* Telegram Shortcut (Desktop) */}
            <a
              href="https://t.me/muhammadislom10"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[5px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-mono transition-all"
              title="Telegram: @muhammadislom10"
            >
              <Send className="w-3 h-3 text-[var(--accent-amber)]" />
              <span>@muhammadislom10</span>
            </a>

            {/* Direct Phone Call Button */}
            <a
              href="tel:+998503016347"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-[5px] bg-[#111827] dark:bg-[var(--accent-amber)] text-white dark:text-[#111827] hover:opacity-90 text-xs font-mono font-semibold transition-all shadow-xs"
              title="Hotline: +998 50 301 63 47"
            >
              <Phone className="w-3 h-3 text-[#F59E0B] dark:text-[#111827]" />
              <span className="hidden sm:inline">+998 50 301 63 47</span>
              <span className="sm:hidden">{t.call}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-[5px] bg-[var(--bg-muted)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--border-subtle)] transition-colors"
              aria-label="Open mobile navigation menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] px-5 py-4 flex flex-col gap-2.5 shadow-lg animate-in slide-in-from-top-2 duration-150">
            
            {/* Quick Header in Drawer */}
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-[var(--border-subtle)]">
              <span className="text-[11px] font-mono text-[var(--text-muted)]">{t.navMenu}</span>
              <div className="flex items-center gap-1 font-mono text-[10px]">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLanguage(l.code)}
                    className={`px-2 py-0.5 rounded-[3px] ${
                      language === l.code
                        ? 'bg-[var(--accent-amber)] text-[#111827] font-bold'
                        : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Links List */}
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2 rounded-[5px] text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[var(--bg-muted)] text-[var(--accent-amber)] font-bold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)]/50'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-[var(--accent-amber)] text-[#111827] font-bold">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}

            {/* Mobile Actions Drawer Footer */}
            <div className="pt-3 mt-1 border-t border-[var(--border-subtle)] flex flex-col gap-2">
              <button
                onClick={() => {
                  setResumeOpen(true);
                  setMobileOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs font-mono font-medium hover:bg-[var(--border-subtle)] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                <span>{t.resume} (PDF)</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://t.me/muhammadislom10"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs font-mono"
                >
                  <Send className="w-3 h-3 text-[var(--accent-amber)]" />
                  <span>Telegram</span>
                </a>

                <a
                  href="tel:+998503016347"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-[5px] bg-[#111827] dark:bg-[var(--accent-amber)] text-white dark:text-[#111827] text-xs font-mono font-medium"
                >
                  <Phone className="w-3 h-3 text-[#F59E0B] dark:text-[#111827]" />
                  <span>{t.call}</span>
                </a>
              </div>
            </div>

          </div>
        )}
      </header>

      {/* CV / Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};
