import React from 'react';
import { X, Printer, Phone, Send, Mail } from 'lucide-react';
import { getProjects } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const projects = getProjects(language);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto no-print">
      <div className="relative w-full max-w-3xl rounded-[6px] bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl p-6 sm:p-10 my-8 text-[var(--text-primary)] max-h-[90vh] overflow-y-auto transition-colors">
        
        {/* Modal Controls */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[var(--accent-amber)] uppercase">{t.resumeModalTitle}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#111827] dark:bg-[var(--accent-amber)] text-white dark:text-[#111827] text-xs font-medium hover:opacity-90 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.resumePrintBtn}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-6">
          
          {/* Header */}
          <div className="border-b border-[var(--border-subtle)] pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
              Muhammadislom Rustambekov
            </h1>
            <p className="text-sm font-semibold text-[var(--accent-amber)] mt-1">
              {t.roleTitle}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-[var(--text-secondary)]">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                +998 50 301 63 47
              </span>
              <span className="flex items-center gap-1">
                <Send className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                @muhammadislom10
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                muhammadislom@antigravity.innovations
              </span>
            </div>
          </div>

          {/* Education & Certification */}
          <div>
            <h2 className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
              {t.resumeEduHeading}
            </h2>
            <div className="p-3.5 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] border border-[#FDE68A] dark:border-[var(--accent-amber)] text-xs">
              <div className="flex items-center justify-between font-bold text-[#92400E] dark:text-[var(--accent-amber)]">
                <span>{t.diplomaMajor}</span>
                <span>Turon International Education Center</span>
              </div>
              <p className="text-[#B45309] dark:text-[#FEF08A] mt-1">
                {t.bioP1}
              </p>
            </div>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h2 className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
              {t.resumeStackHeading}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[var(--text-secondary)]">
              <div className="p-2 rounded-[4px] bg-[var(--bg-muted)] border border-[var(--border-subtle)]">
                <strong className="block text-[var(--text-primary)] text-[11px]">{t.skillCatFrontend}</strong>
                React 19, TypeScript, Next.js, Tailwind v4
              </div>
              <div className="p-2 rounded-[4px] bg-[var(--bg-muted)] border border-[var(--border-subtle)]">
                <strong className="block text-[var(--text-primary)] text-[11px]">{t.skillCatBackend}</strong>
                Python FastAPI, Node.js, WebSockets, REST
              </div>
              <div className="p-2 rounded-[4px] bg-[var(--bg-muted)] border border-[var(--border-subtle)]">
                <strong className="block text-[var(--text-primary)] text-[11px]">{t.skillCatTelegram}</strong>
                Aiogram, Asyncio, Webhooks, CRM Sync
              </div>
              <div className="p-2 rounded-[4px] bg-[var(--bg-muted)] border border-[var(--border-subtle)]">
                <strong className="block text-[var(--text-primary)] text-[11px]">{t.skillCatSecurity}</strong>
                Argon2id, AES-256-GCM, Zero-Trust
              </div>
            </div>
          </div>

          {/* Projects Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
              {t.resumeProjectsHeading}
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-[4px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs"
                >
                  <div className="flex items-center justify-between font-bold text-[var(--text-primary)]">
                    <span className="flex items-center gap-1.5">
                      <span>{proj.emoji}</span>
                      <span>{proj.title}</span>
                    </span>
                    <span className="text-[10px] font-mono text-[var(--accent-amber)]">{proj.category}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] mt-1">{proj.description}</p>
                  <div className="mt-2 text-[11px] font-mono text-[var(--accent-amber)]">
                    URL: {proj.url}
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
