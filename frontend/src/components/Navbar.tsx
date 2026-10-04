import React, { useState } from 'react';
import { ShieldCheck, Terminal, Menu, X, Cpu } from 'lucide-react';
import { usePortfolioStore } from '../store/useStore';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isTerminalOpen, setTerminalOpen } = usePortfolioStore();

  const navItems = [
    { label: 'Pillars', href: '#pillars' },
    { label: 'Telemetry', href: '#telemetry' },
    { label: 'Frontier AI', href: '#ai-engine' },
    { label: 'Crypto Lab', href: '#crypto-lab' },
    { label: 'Showcase', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/30 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
            <Cpu className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <div className="font-extrabold text-base tracking-wider text-white uppercase flex items-center gap-1.5">
              <span>ANTIGRAVITY</span>
              <span className="text-cyan-400 text-xs px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40">2.0</span>
            </div>
            <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
              INNOVATIONS
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200 relative py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions & Telemetry indicator */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-[0_0_12px_rgba(0,245,155,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ZERO-TRUST ARMORED</span>
          </div>

          <button
            onClick={() => setTerminalOpen(!isTerminalOpen)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
            title="Launch Terminal Emulator"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>CLI_EXEC</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setTerminalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-400 text-sm font-mono"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch Terminal CLI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
