import React, { useState, useEffect } from 'react';
import { Send, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TelegramBotStatusWidget: React.FC = () => {
  const [latency, setLatency] = useState(14);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(12 + Math.floor(Math.random() * 5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="minimal-card p-4 bg-[var(--bg-surface)] border-l-4 border-l-[#10B981] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs transition-colors">
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping absolute" />
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
        </div>
        <div>
          <div className="flex items-center gap-2 font-bold text-[var(--text-primary)]">
            <span>{t.botTelemetryTitle}:</span>
            <span className="text-[#10B981] font-mono">{t.botStatusOnline}</span>
          </div>
          <div className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">
            {t.botLatencyLabel}: <strong className="text-[var(--text-primary)]">{latency}ms</strong> • {t.botArchitectureLabel}: <strong className="text-[var(--text-primary)]">{t.botArchitectureValue}</strong> • {t.botUptimeLabel}: <strong className="text-[#10B981]">99.99%</strong>
          </div>
        </div>
      </div>

      <a
        href="https://t.me/muhammadislom10"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[var(--bg-muted)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] font-mono font-medium transition-all"
      >
        <Send className="w-3 h-3 text-[#10B981]" />
        <span>@muhammadislom10</span>
        <ChevronRight className="w-3 h-3 text-[var(--text-muted)]" />
      </a>
    </div>
  );
};
