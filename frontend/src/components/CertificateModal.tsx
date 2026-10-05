import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Award, ShieldCheck, ExternalLink, FileCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'original' | 'cover' | 'digital';

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('original');
  const [zoomLevel, setZoomLevel] = useState(1);
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm no-print animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-[8px] bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl p-5 sm:p-7 text-[var(--text-primary)] max-h-[94vh] overflow-y-auto transition-colors">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)] gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-[6px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[var(--accent-amber)] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)] truncate">
                {t.certModalIssuer}
              </h3>
              <p className="text-[11px] font-mono text-[var(--text-muted)] truncate">
                {t.certModalTitle} &bull; Litsenziya № 1043575 &bull; Qayd № 247
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 2.0))}
              className="p-1.5 rounded-[4px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] cursor-pointer"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 0.7))}
              className="p-1.5 rounded-[4px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] cursor-pointer"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 rounded-[4px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] cursor-pointer"
              title="Reset Zoom"
              aria-label="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors ml-1 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mb-4 border-b border-[var(--border-subtle)] pb-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => { setActiveTab('original'); handleResetZoom(); }}
            className={`px-3 py-1.5 rounded-[4px] text-xs font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
              activeTab === 'original'
                ? 'bg-[var(--accent-amber)] text-black font-bold shadow-2xs'
                : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>{t.certTabOriginal}</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('cover'); handleResetZoom(); }}
            className={`px-3 py-1.5 rounded-[4px] text-xs font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
              activeTab === 'cover'
                ? 'bg-[var(--accent-amber)] text-black font-bold shadow-2xs'
                : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{t.certTabCover}</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('digital'); handleResetZoom(); }}
            className={`px-3 py-1.5 rounded-[4px] text-xs font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
              activeTab === 'digital'
                ? 'bg-[var(--accent-amber)] text-black font-bold shadow-2xs'
                : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Raqamli Matn & Audit</span>
          </button>

          <a
            href={activeTab === 'cover' ? '/images/certificate_cover.jpg' : '/images/certificate.jpg'}
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-[11px] font-mono text-[var(--accent-amber)] hover:opacity-80 flex items-center gap-1 shrink-0"
            title="Open high resolution original in new tab"
          >
            <span>HD Ochish</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Viewport for Certificate */}
        <div className="relative rounded-[6px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] p-2 sm:p-4 overflow-hidden min-h-[380px] flex items-center justify-center">
          
          {activeTab === 'original' && (
            <div className="overflow-auto max-h-[62vh] w-full flex justify-center items-center">
              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.15s ease-out'
                }}
                className="relative max-w-full"
              >
                <img
                  src="/images/certificate.jpg"
                  alt="Turon International Education Center — Full-Stack Dasturchi Sertifikati (Rustambekov Muhammadislom)"
                  className="rounded-[4px] shadow-lg max-h-[58vh] sm:max-h-[62vh] object-contain mx-auto border border-[var(--border-subtle)]"
                  loading="eager"
                />
              </div>
            </div>
          )}

          {activeTab === 'cover' && (
            <div className="overflow-auto max-h-[62vh] w-full flex justify-center items-center">
              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.15s ease-out'
                }}
                className="relative max-w-full"
              >
                <img
                  src="/images/certificate_cover.jpg"
                  alt="Turon Sertifikat Muqovasi (Qizil qattiq muqova)"
                  className="rounded-[4px] shadow-lg max-h-[58vh] sm:max-h-[62vh] object-contain mx-auto border border-[var(--border-subtle)]"
                  loading="eager"
                />
              </div>
            </div>
          )}

          {activeTab === 'digital' && (
            <div
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'top center',
                transition: 'transform 0.15s ease-out'
              }}
              className="w-full max-w-2xl border-2 border-[var(--accent-amber)]/40 p-6 sm:p-8 rounded-[6px] bg-[var(--bg-surface)] shadow-md text-center"
            >
              <div className="text-xs font-mono font-bold tracking-widest text-[var(--accent-amber)] uppercase mb-2">
                NODAVLAT TA'LIM MUASSASASI
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] tracking-tight mb-1">
                Turon International Education Center
              </h2>
              <div className="text-xs text-[var(--text-muted)] font-serif italic mb-5">
                {t.certModalTitle}
              </div>

              <div className="text-xs text-[var(--text-secondary)] mb-1">{t.certModalPresentation}</div>
              <div className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] border-b border-[var(--border-strong)] pb-2 max-w-md mx-auto mb-4 font-serif">
                Rustambekov Muhammadislom Mansurbek o'g'li
              </div>

              <p className="text-xs text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed mb-5">
                {t.certModalText}
              </p>

              <div className="inline-block px-4 py-1.5 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[#92400E] dark:text-[var(--accent-amber)] border border-[#FDE68A] dark:border-[var(--accent-amber)] font-bold text-sm font-mono uppercase tracking-wide mb-6">
                Full-Stack Dasturchi
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)] text-left">
                <div>
                  <strong className="block text-[var(--text-primary)]">{t.certLicenseLabel}</strong>
                  <div>№ 1043575</div>
                </div>
                <div>
                  <strong className="block text-[var(--text-primary)]">{t.certRegNumLabel}</strong>
                  <div className="text-[var(--accent-amber)] font-bold">№ 247</div>
                </div>
                <div>
                  <strong className="block text-[var(--text-primary)]">{t.certPeriodLabel}</strong>
                  <div>2026 Yanvar - Sentabr</div>
                </div>
                <div>
                  <strong className="block text-[var(--text-primary)]">{t.certLocationLabel}</strong>
                  <div>Asaka, Andijon</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Real Accredited Metadata Grid */}
        <div className="mt-4 p-4 rounded-[6px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">{t.certLicenseLabel}</span>
            <span className="font-mono font-bold text-[var(--text-primary)]">№ 1043575</span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">{t.certRegNumLabel}</span>
            <span className="font-mono font-bold text-[var(--accent-amber)]">№ 247</span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">{t.certPeriodLabel}</span>
            <span className="font-medium text-[var(--text-secondary)]">2026 Yanvar — Sentabr</span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">{t.certLocationLabel}</span>
            <span className="font-medium text-[var(--text-secondary)]">Andijon viloyati, Asaka tumani</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between text-xs text-[var(--text-muted)] gap-2">
          <div className="flex items-center gap-1.5 text-[#10B981]">
            <CheckCircle2 className="w-4 h-4" />
            <span className="font-medium">{t.certModalVerifiedFooter}</span>
          </div>

          <div className="font-mono text-[11px] text-[var(--text-muted)]">
            Turon International Education Center &bull; Asaka
          </div>
        </div>

      </div>
    </div>
  );
};
