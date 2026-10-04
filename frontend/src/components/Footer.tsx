import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Send, Award, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E8E2D7] bg-[#FFFFFF] py-12 text-[#4B5563] text-sm">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#E8E2D7]">
          
          {/* Identity */}
          <div className="md:col-span-2">
            <div className="font-bold text-[#111827] text-base mb-2">
              Muhammadislom Rustambekov (Mansurbekovich)
            </div>
            <p className="text-xs text-[#6B7280] leading-relaxed max-w-sm mb-4">
              Full-Stack Software Engineer & Telegram Bot Developer. Certified by Turon International Education Center. Dedicated to building reliable, high-performance web applications and automated systems.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Turon International Education Center Certified</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div>
            <div className="font-semibold text-[#111827] text-xs uppercase tracking-wider mb-3">
              Navigation
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <NavLink to="/" className="hover:text-[#111827] transition-colors">Overview</NavLink>
              <NavLink to="/about" className="hover:text-[#111827] transition-colors">About Developer</NavLink>
              <NavLink to="/projects" className="hover:text-[#111827] transition-colors">Live Projects (6)</NavLink>
              <NavLink to="/tools" className="hover:text-[#111827] transition-colors">Utility Lab</NavLink>
              <NavLink to="/contact" className="hover:text-[#111827] transition-colors">Contact & Ordering</NavLink>
            </div>
          </div>

          {/* Direct Channels */}
          <div>
            <div className="font-semibold text-[#111827] text-xs uppercase tracking-wider mb-3">
              Direct Contact
            </div>
            <div className="flex flex-col gap-2 text-xs font-mono">
              <a
                href="tel:+998503016347"
                className="flex items-center gap-1.5 text-[#111827] font-semibold hover:text-[#D97706] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                <span>+998 50 301 63 47</span>
              </a>
              <a
                href="https://t.me/muhammadislom10"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#111827] transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#D97706]" />
                <span>@muhammadislom10</span>
                <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
              </a>
              <span className="text-[#6B7280] text-[11px] mt-1">
                Tashkent / Worldwide Ingress
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-4">
          <div>
            © {new Date().getFullYear()} Muhammadislom Rustambekov. All rights reserved.
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
