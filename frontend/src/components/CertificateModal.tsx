import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Award, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs no-print">
      <div className="relative w-full max-w-3xl rounded-[6px] bg-[#FFFFFF] border border-[#D5CBBF] shadow-2xl p-6 sm:p-8 text-[#111827] max-h-[92vh] overflow-y-auto">
        
        {/* Controls */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E2D7]">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#D97706]" />
            <div>
              <h3 className="font-bold text-sm text-[#111827]">Turon International Education Center</h3>
              <p className="text-[11px] font-mono text-[#6B7280]">Official Certificate of Achievement</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((z: number) => Math.min(z + 0.15, 1.4))}
              className="p-1.5 rounded-[4px] bg-[#F3EFEA] hover:bg-[#E8E2D7] text-[#374151]"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel((z: number) => Math.max(z - 0.15, 0.85))}
              className="p-1.5 rounded-[4px] bg-[#F3EFEA] hover:bg-[#E8E2D7] text-[#374151]"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6B7280] hover:text-[#111827] transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Visual Rendering */}
        <div className="overflow-x-auto flex justify-center py-4">
          <div
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            className="w-full max-w-2xl border-4 border-[#D97706]/40 p-8 sm:p-10 rounded-[6px] bg-[#FAF8F5] relative transition-transform duration-200 shadow-sm"
          >
            {/* Ornamental Inner Border */}
            <div className="border border-[#D5CBBF] p-6 text-center">
              
              <div className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase mb-2">
                ACADEMIC ACCREDITATION & CERTIFICATION
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] tracking-tight mb-1">
                Turon International Education Center
              </h2>
              <div className="text-xs text-[#6B7280] font-serif italic mb-6">
                Certificate of Professional Qualification
              </div>

              <div className="text-xs text-[#4B5563] mb-1">This is officially presented to:</div>
              <div className="text-xl sm:text-2xl font-bold text-[#111827] border-b border-[#D5CBBF] pb-2 max-w-md mx-auto mb-4 font-serif">
                Rustambekov Muhammadislom Mansurbekovich
              </div>

              <p className="text-xs text-[#4B5563] max-w-lg mx-auto leading-relaxed mb-6">
                for successfully fulfilling the rigorous curriculum, comprehensive testing, and live commercial project defenses in the discipline of:
              </p>

              <div className="inline-block px-4 py-1.5 rounded-[4px] bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] font-bold text-sm font-mono uppercase tracking-wide mb-6">
                Full-Stack Software Developer
              </div>

              {/* Skills Footer */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6 border-t border-[#E8E2D7] text-[10px] font-mono text-[#4B5563]">
                <div>
                  <strong>Credential ID</strong>
                  <div>TIEC-FS-2026-98104</div>
                </div>
                <div>
                  <strong>Status</strong>
                  <div className="text-[#059669] font-bold">VERIFIED ACTIVE</div>
                </div>
                <div>
                  <strong>Major Stack</strong>
                  <div>React, Python, TS</div>
                </div>
                <div>
                  <strong>Authentication</strong>
                  <div>SHA-256 Audit Seal</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Verification footer */}
        <div className="mt-4 pt-4 border-t border-[#E8E2D7] flex items-center justify-between text-xs text-[#6B7280]">
          <div className="flex items-center gap-1.5 text-[#059669]">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Digital Credential</span>
          </div>

          <div className="font-mono text-[11px]">
            Issued by Turon International Education Center
          </div>
        </div>

      </div>
    </div>
  );
};
