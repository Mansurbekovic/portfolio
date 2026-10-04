import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Send, Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ResumeModal } from './ResumeModal';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Overview', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects (6 Live)', to: '/projects' },
    { label: 'Tools & Lab', to: '/tools' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E8E2D7] transition-all no-print">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          
          {/* Brand */}
          <NavLink to="/" className="flex items-center gap-2.5 text-decoration-none group">
            <div className="w-8 h-8 rounded-[4px] bg-[#111827] text-white flex items-center justify-center font-bold text-xs tracking-wider">
              MR
            </div>
            <div>
              <div className="font-bold text-sm text-[#111827] tracking-tight flex items-center gap-1.5">
                <span>Muhammadislom R.</span>
                <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-[4px] bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                  Turon Certified
                </span>
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors py-1 ${
                    isActive
                      ? 'text-[#D97706] font-semibold border-b-2 border-[#D97706]'
                      : 'text-[#4B5563] hover:text-[#111827]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Controls */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-[4px] bg-[#F3EFEA] border border-[#E8E2D7] text-[#4B5563] hover:text-[#111827] transition-all"
              title={theme === 'cream' ? 'Switch to Charcoal Dark' : 'Switch to Cream Light'}
            >
              {theme === 'cream' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#F59E0B]" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[4px] bg-[#F3EFEA] border border-[#E8E2D7] text-xs font-mono text-[#374151] hover:bg-[#EAE4DC] hover:text-[#111827] transition-all"
              title="View & Download CV"
            >
              <FileText className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Resume</span>
            </button>

            <a
              href="https://t.me/muhammadislom10"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#F3EFEA] border border-[#E8E2D7] text-xs font-mono text-[#374151] hover:bg-[#EAE4DC] hover:text-[#111827] transition-all"
            >
              <Send className="w-3 h-3 text-[#D97706]" />
              <span>@muhammadislom10</span>
            </a>

            <a
              href="tel:+998503016347"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#111827] text-white text-xs font-mono font-medium hover:bg-[#1F2937] transition-all shadow-sm"
              title="Instant Click to Call Hotline"
            >
              <Phone className="w-3 h-3 text-[#F59E0B]" />
              <span>+998 50 301 63 47</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 text-[#4B5563]"
            >
              {theme === 'cream' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#F59E0B]" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-[#374151] hover:text-[#111827]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-[#FFFFFF] border-b border-[#E8E2D7] px-5 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium py-1.5 ${
                    isActive ? 'text-[#D97706] font-bold' : 'text-[#4B5563]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-[#E8E2D7] flex flex-col gap-2">
              <button
                onClick={() => {
                  setResumeOpen(true);
                  setMobileOpen(false);
                }}
                className="inline-flex items-center justify-center gap-2 py-2 rounded-[4px] bg-[#F3EFEA] text-[#111827] text-xs font-mono"
              >
                <FileText className="w-3.5 h-3.5 text-[#D97706]" />
                <span>View & Download CV (PDF)</span>
              </button>
              <a
                href="tel:+998503016347"
                className="inline-flex items-center justify-center gap-2 py-2 rounded-[4px] bg-[#111827] text-white text-xs font-mono font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Call: +998 50 301 63 47</span>
              </a>
              <a
                href="https://t.me/muhammadislom10"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2 rounded-[4px] bg-[#F3EFEA] border border-[#E8E2D7] text-xs font-mono text-[#374151]"
              >
                <Send className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Telegram: @muhammadislom10</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* CV / Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};
