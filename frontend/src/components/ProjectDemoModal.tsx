import React, { useState } from 'react';
import { X, ExternalLink, RefreshCw } from 'lucide-react';
import type { LiveProject } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';

interface ProjectDemoModalProps {
  project: LiveProject | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { t } = useLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs no-print">
      <div className="relative w-full max-w-4xl rounded-[6px] bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl p-5 sm:p-7 text-[var(--text-primary)] max-h-[92vh] flex flex-col transition-colors">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{project.emoji}</span>
            <div>
              <h3 className="font-bold text-base text-[var(--text-primary)]">{project.title}</h3>
              <p className="text-xs text-[var(--text-muted)] font-mono">{project.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#111827] dark:bg-[var(--accent-amber)] text-white dark:text-[#111827] text-xs font-semibold hover:opacity-90 transition-all"
            >
              <span>{t.demoModalNewTab}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F59E0B] dark:text-[#111827]" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Frame Preview Container */}
        <div className="relative w-full h-80 sm:h-96 my-4 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-muted)] overflow-hidden flex flex-col items-center justify-center">
          <iframe
            src={project.url}
            title={project.title}
            onLoad={() => setIframeLoaded(true)}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />

          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--bg-muted)] text-xs text-[var(--text-muted)] gap-2 font-mono">
              <RefreshCw className="w-5 h-5 animate-spin text-[var(--accent-amber)]" />
              <span>{t.demoModalConnecting} ({project.url.replace('https://', '')})...</span>
            </div>
          )}
        </div>

        {/* Footer specs */}
        <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                {tag}
              </span>
            ))}
          </div>

          <div className="text-[var(--text-muted)] font-mono text-[11px]">
            {t.demoModalTarget} <strong className="text-[var(--text-primary)]">{project.url}</strong>
          </div>
        </div>

      </div>
    </div>
  );
};
