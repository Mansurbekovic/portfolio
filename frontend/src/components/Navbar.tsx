import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, Send, Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ResumeModal } from './ResumeModal';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Track scroll for enhanced shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects', badge: '6' },
    { label: 'Tools', to: '/tools' },
    { label: 'Contact', to: '/contact' },
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Brand / Developer Monogram */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 text-decoration-none shrink-0 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-[5px] bg-[#111827] text-white flex items-center justify-center font-bold text-xs tracking-wider border border-[var(--border-strong)] relative overflow-hidden group-hover:scale-105 transition-transform">
              <span>MR</span>
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#D97706]" />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-sm text-[var(--text-primary)] tracking-tight flex items-center gap-1.5">
                <span>Muhammadislom</span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded-[3px] bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] font-semibold">
                  Turon Cert.
                </span>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse inline-block" />
                <span>Full-Stack Engineer</span>
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
                  `px-3 py-1.5 rounded-[5px] text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[var(--bg-muted)] text-[var(--accent-amber)] font-bold shadow-2xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)]/60'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-[var(--accent-amber)] text-white font-bold leading-none">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Theme Toggle (Always visible) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-[5px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all"
              title={theme === 'cream' ? 'Switch to Charcoal Dark Theme' : 'Switch to Cream Light Theme'}
              aria-label="Toggle Theme"
            >
              {theme === 'cream' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-[#F59E0B]" />
              )}
            </button>

            {/* Resume / CV Modal Trigger (Desktop/Tablet) */}
            <button
              onClick={() => setResumeOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[5px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-mono font-medium transition-all"
              title="View & Download Official CV (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Resume</span>
            </button>

            {/* Telegram Shortcut (Large screens) */}
            <a
              href="https://t.me/muhammadislom10"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[5px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-mono transition-all"
              title="Message on Telegram"
            >
              <Send className="w-3 h-3 text-[#D97706]" />
              <span>@muhammadislom10</span>
            </a>

            {/* Direct Phone Call Button */}
            <a
              href="tel:+998503016347"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[5px] bg-[#111827] text-white hover:bg-[#1F2937] text-xs font-mono font-medium transition-all shadow-xs border border-transparent"
              title="Click to Call Hotline"
            >
              <Phone className="w-3 h-3 text-[#F59E0B]" />
              <span className="hidden sm:inline">+998 50 301 63 47</span>
              <span className="sm:hidden">Call</span>
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
            
            {/* Quick Badge */}
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-[var(--border-subtle)]">
              <span className="text-[11px] font-mono text-[var(--text-muted)]">Navigation Menu</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[#FEF3C7] text-[#92400E] font-bold">
                Turon Certified
              </span>
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
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-[var(--accent-amber)] text-white">
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
                <FileText className="w-3.5 h-3.5 text-[#D97706]" />
                <span>View & Download CV (PDF)</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://t.me/muhammadislom10"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs font-mono"
                >
                  <Send className="w-3 h-3 text-[#D97706]" />
                  <span>Telegram</span>
                </a>

                <a
                  href="tel:+998503016347"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-[5px] bg-[#111827] text-white text-xs font-mono font-medium"
                >
                  <Phone className="w-3 h-3 text-[#F59E0B]" />
                  <span>Hotline</span>
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
