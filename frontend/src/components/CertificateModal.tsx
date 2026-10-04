import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Award, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs no-print">
      <div className="relative w-full max-w-3xl rounded-[6px] bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl p-6 sm:p-8 text-[var(--text-primary)] max-h-[92vh] overflow-y-auto transition-colors">
        
        {/* Controls */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[var(--accent-amber)]" />
            <div>
              <h3 className="font-bold text-sm text-[var(--text-primary)]">{t.certModalIssuer}</h3>
              <p className="text-[11px] font-mono text-[var(--text-muted)]">{t.certModalTitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((z: number) => Math.min(z + 0.15, 1.4))}
              className="p-1.5 rounded-[4px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel((z: number) => Math.max(z - 0.15, 0.85))}
              className="p-1.5 rounded-[4px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Visual Rendering */}
        <div className="overflow-x-auto flex justify-center py-4">
          <div
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            className="w-full max-w-2xl border-4 border-[var(--accent-amber)]/40 p-8 sm:p-10 rounded-[6px] bg-[var(--bg-warm)] relative transition-transform duration-200 shadow-sm"
          >
            {/* Ornamental Inner Border */}
            <div className="border border-[var(--border-strong)] p-6 text-center">
              
              <div className="text-xs font-mono font-bold tracking-widest text-[var(--accent-amber)] uppercase mb-2">
                ACADEMIC ACCREDITATION & CERTIFICATION
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] tracking-tight mb-1">
                Turon International Education Center
              </h2>
              <div className="text-xs text-[var(--text-muted)] font-serif italic mb-6">
                {t.certModalTitle}
              </div>

              <div className="text-xs text-[var(--text-secondary)] mb-1">{t.certModalPresentation}</div>
              <div className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] border-b border-[var(--border-strong)] pb-2 max-w-md mx-auto mb-4 font-serif">
                {t.certModalStudentName}
              </div>

              <p className="text-xs text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed mb-6">
                {t.certModalText}
              </p>

              <div className="inline-block px-4 py-1.5 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[#92400E] dark:text-[var(--accent-amber)] border border-[#FDE68A] dark:border-[var(--accent-amber)] font-bold text-sm font-mono uppercase tracking-wide mb-6">
                {t.certModalAward}
              </div>

              {/* Skills Footer */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6 border-t border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-secondary)]">
                <div>
                  <strong className="block text-[var(--text-primary)]">{t.certModalCredId}</strong>
                  <div>TIEC-FS-2026-98104</div>
                </div>
                <div>
                  <strong className="block text-[var(--text-primary)]">{t.certModalStatus}</strong>
                  <div className="text-[#10B981] font-bold">{t.certModalStatusVal}</div>
                </div>
                <div>
                  <strong className="block text-[var(--text-primary)]">{t.certModalMajor}</strong>
                  <div>React 19, Python, TS</div>
                </div>
                <div>
                  <strong className="block text-[var(--text-primary)]">{t.certModalAuth}</strong>
                  <div>SHA-256 Audit Seal</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Verification footer */}
        <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-1.5 text-[#10B981]">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.certModalVerifiedFooter}</span>
          </div>

          <div className="font-mono text-[11px] text-[var(--text-muted)]">
            Turon International Education Center
          </div>
        </div>

      </div>
    </div>
  );
};
