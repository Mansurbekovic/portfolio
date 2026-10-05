import React from 'react';
import { X, ShieldCheck, Award, CheckCircle2, MapPin, Send, Fingerprint } from 'lucide-react';

interface IdentityProofModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCertificate: () => void;
}

export const IdentityProofModal: React.FC<IdentityProofModalProps> = ({
  isOpen,
  onClose,
  onOpenCertificate
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md no-print animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-[12px] bg-[var(--bg-surface)] border-2 border-[var(--border-strong)] shadow-2xl overflow-hidden transition-all text-[var(--text-primary)]">
        
        {/* Top Security Banner */}
        <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-black px-5 py-3 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[11px] font-mono tracking-widest uppercase font-bold text-amber-300">
                Rasmiy Muhandislik Hujjati &bull; Proof of Identity
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Turon Xalqaro Ta'lim Markazi Litsenziyasi bilan bog'langan
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-[4px] bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Yopish"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body: High-End Security Dossier Card */}
        <div className="p-5 sm:p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            
            {/* Serious Portrait Frame */}
            <div className="sm:col-span-5 flex justify-center">
              <div className="relative group w-44 sm:w-full max-w-[200px] aspect-[4/5] rounded-[8px] overflow-hidden border-2 border-amber-500/40 shadow-xl bg-slate-950">
                {/* Photo with subtle high-contrast studio filter */}
                <img
                  src="/images/profile.jpg"
                  alt="Rustambekov Muhammadislom"
                  className="w-full h-full object-cover object-top contrast-[1.05] brightness-[0.98] saturate-[0.95]"
                />
                
                {/* Subtle vignette & cyber overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                
                {/* Security hologram watermark */}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-[3px] bg-black/70 backdrop-blur-sm border border-amber-400/30 text-[9px] font-mono text-amber-300 flex items-center gap-1">
                  <Fingerprint className="w-3 h-3 text-amber-400" />
                  <span>VERIFIED ID</span>
                </div>

                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <div className="text-[10px] font-mono text-emerald-400 flex items-center justify-center gap-1 bg-black/70 backdrop-blur-sm py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Haqiqiy Muallif</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Credentials Data */}
            <div className="sm:col-span-7 space-y-3">
              <div>
                <div className="text-[11px] font-mono text-[var(--accent-amber)] font-bold tracking-wider uppercase">
                  Dasturchi Shaxsi
                </div>
                <h3 className="text-xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  Rustambekov Muhammadislom
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">
                  Full-Stack Software Engineer &bull; 17 yoshda
                </p>
              </div>

              {/* Data Table */}
              <div className="bg-[var(--bg-muted)] rounded-[6px] border border-[var(--border-subtle)] p-3 text-xs space-y-2 font-mono">
                <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">Akkreditatsiya:</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400">Turon Xalqaro Markazi</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">Davlat Litsenziyasi:</span>
                  <span className="font-bold text-[var(--text-primary)]">№ 1043575</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">Qayd raqami:</span>
                  <span className="font-bold text-[var(--text-primary)]">№ 247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)]">Hudud:</span>
                  <span className="text-[var(--text-primary)] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[var(--accent-amber)]" />
                    <span>Andijon, Asaka &bull; Toshkent</span>
                  </span>
                </div>
              </div>

              {/* Security Statement */}
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed italic">
                Ushbu shaxsiy profil va surat portfoliodagi 6 ta live loyiha va backend mikroxizmatlarining yagona qonuniy muallifiga tegishli ekanligini tasdiqlaydi.
              </p>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenCertificate();
              }}
              className="btn-amber text-xs py-2 px-3 flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Turon Sertifikatini ko'rish</span>
            </button>

            <a
              href="https://t.me/muhammadislom10"
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-xs py-2 px-3 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
              <span>@muhammadislom10 bilan bog'lanish</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
