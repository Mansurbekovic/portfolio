import React, { useState } from 'react';
import { X, ExternalLink, RefreshCw } from 'lucide-react';
import type { LiveProject } from '../data/projectsData';

interface ProjectDemoModalProps {
  project: LiveProject | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs no-print">
      <div className="relative w-full max-w-4xl rounded-[6px] bg-[#FFFFFF] border border-[#D5CBBF] shadow-2xl p-5 sm:p-7 text-[#111827] max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[#E8E2D7]">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{project.emoji}</span>
            <div>
              <h3 className="font-bold text-base text-[#111827]">{project.title}</h3>
              <p className="text-xs text-[#6B7280] font-mono">{project.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#111827] text-white text-xs font-medium hover:bg-[#1F2937] transition-all"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F59E0B]" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6B7280] hover:text-[#111827] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Frame Preview Container */}
        <div className="relative w-full h-80 sm:h-96 my-4 rounded-[4px] border border-[#E8E2D7] bg-[#F9FAFB] overflow-hidden flex flex-col items-center justify-center">
          <iframe
            src={project.url}
            title={project.title}
            onLoad={() => setIframeLoaded(true)}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />

          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F9FAFB] text-xs text-[#6B7280] gap-2 font-mono">
              <RefreshCw className="w-5 h-5 animate-spin text-[#D97706]" />
              <span>Connecting to live production node ({project.url.replace('https://', '')})...</span>
            </div>
          )}
        </div>

        {/* Footer specs */}
        <div className="pt-3 border-t border-[#E8E2D7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[#F3EFEA] text-[#374151] border border-[#E8E2D7]">
                {tag}
              </span>
            ))}
          </div>

          <div className="text-[#6B7280] font-mono text-[11px]">
            Target: <strong className="text-[#111827]">{project.url}</strong>
          </div>
        </div>

      </div>
    </div>
  );
};
