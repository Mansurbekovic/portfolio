import React from 'react';
import { X, Printer, Phone, Send, Mail } from 'lucide-react';
import { LIVE_PROJECTS } from '../data/projectsData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto no-print">
      <div className="relative w-full max-w-3xl rounded-[6px] bg-[#FFFFFF] border border-[#D5CBBF] shadow-2xl p-6 sm:p-10 my-8 text-[#111827] max-h-[90vh] overflow-y-auto">
        
        {/* Modal Controls */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E2D7]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#D97706] uppercase">Professional Resume Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#111827] text-white text-xs font-medium hover:bg-[#1F2937] transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Download PDF / Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6B7280] hover:text-[#111827] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-6">
          
          {/* Header */}
          <div className="border-b border-[#E8E2D7] pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
              Muhammadislom Rustambekov
            </h1>
            <p className="text-sm font-semibold text-[#D97706] mt-1">
              Full-Stack Software Engineer & Telegram Bot Developer
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-[#4B5563]">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                +998 50 301 63 47
              </span>
              <span className="flex items-center gap-1">
                <Send className="w-3.5 h-3.5 text-[#D97706]" />
                @muhammadislom10
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#D97706]" />
                muhammadislom@antigravity.innovations
              </span>
            </div>
          </div>

          {/* Education & Certification */}
          <div>
            <h2 className="text-xs font-mono font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              Education & Accreditation
            </h2>
            <div className="p-3.5 rounded-[4px] bg-[#FEF3C7] border border-[#FDE68A] text-xs">
              <div className="flex items-center justify-between font-bold text-[#92400E]">
                <span>Certified Full-Stack Software Developer</span>
                <span>Turon International Education Center</span>
              </div>
              <p className="text-[#B45309] mt-1">
                Comprehensive training in modern React ecosystem, Python asynchronous backends, database architecture, and data security.
              </p>
            </div>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h2 className="text-xs font-mono font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              Technical Core
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#374151]">
              <div className="p-2 rounded-[4px] bg-[#F9FAFB] border border-[#E5E7EB]">
                <strong className="block text-[#111827] text-[11px]">Frontend</strong>
                React 19, TypeScript, Next.js, Tailwind v4
              </div>
              <div className="p-2 rounded-[4px] bg-[#F9FAFB] border border-[#E5E7EB]">
                <strong className="block text-[#111827] text-[11px]">Backend</strong>
                Python FastAPI, Node.js, WebSockets, REST
              </div>
              <div className="p-2 rounded-[4px] bg-[#F9FAFB] border border-[#E5E7EB]">
                <strong className="block text-[#111827] text-[11px]">Automation</strong>
                Telegram Bot API, Aiogram, Webhooks
              </div>
              <div className="p-2 rounded-[4px] bg-[#F9FAFB] border border-[#E5E7EB]">
                <strong className="block text-[#111827] text-[11px]">Security</strong>
                Argon2id, AES-256-GCM, CSP, JWT
              </div>
            </div>
          </div>

          {/* Featured Live Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              Featured Live Deployments (6 Apps)
            </h2>
            <div className="space-y-3">
              {LIVE_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 rounded-[4px] bg-[#FAF8F5] border border-[#E8E2D7] text-xs">
                  <div className="flex items-center justify-between font-bold text-[#111827]">
                    <span>{proj.emoji} {proj.title}</span>
                    <span className="font-mono text-[#D97706] text-[11px]">{proj.url.replace('https://', '')}</span>
                  </div>
                  <p className="text-[#4B5563] mt-1">{proj.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {proj.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 rounded-[2px] bg-[#FFFFFF] border border-[#D5CBBF] text-[#374151]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
