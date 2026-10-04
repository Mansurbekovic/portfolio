import React from 'react';
import { Terminal, Shield, Code2, Globe, Share2 } from 'lucide-react';
import { usePortfolioStore } from '../store/useStore';

export const Footer: React.FC = () => {
  const { setTerminalOpen } = usePortfolioStore();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
              <Shield className="w-4 h-4" />
              <span>ANTIGRAVITY INNOVATIONS PLATFORM</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white">
              Beyond limits.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Beyond gravity.
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Where unbreakable security meets artful engineering.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTerminalOpen(true)}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Open Terminal"
            >
              <Terminal className="w-5 h-5" />
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Code Repository"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href="https://antigravity.innovations"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Global Network"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Secure Channel"
            >
              <Share2 className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Antigravity Innovations. All digital assets encrypted under Zero-Trust protocols.
          </div>
          <div className="flex items-center gap-6">
            <span>React 19 + TypeScript</span>
            <span>Python FastAPI</span>
            <span>Argon2id + AES-256</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
