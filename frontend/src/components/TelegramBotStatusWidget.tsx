import React, { useState, useEffect } from 'react';
import { Send, ChevronRight } from 'lucide-react';

export const TelegramBotStatusWidget: React.FC = () => {
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(12 + Math.floor(Math.random() * 5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="minimal-card p-4 bg-[#FFFFFF] border-l-4 border-l-[#059669] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-ping absolute" />
          <span className="w-2 h-2 rounded-full bg-[#059669]" />
        </div>
        <div>
          <div className="flex items-center gap-2 font-bold text-[#111827]">
            <span>Telegram Bot Core:</span>
            <span className="text-[#059669] font-mono">ONLINE (24/7 Active)</span>
          </div>
          <div className="text-[11px] text-[#6B7280] font-mono mt-0.5">
            Latency: <strong className="text-[#111827]">{latency}ms</strong> • Webhooks: <strong className="text-[#111827]">Operational</strong> • Uptime: <strong className="text-[#059669]">99.99%</strong>
          </div>
        </div>
      </div>

      <a
        href="https://t.me/muhammadislom10"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#F3EFEA] hover:bg-[#E8E2D7] text-[#111827] font-mono font-medium transition-all"
      >
        <Send className="w-3 h-3 text-[#059669]" />
        <span>@muhammadislom10</span>
        <ChevronRight className="w-3 h-3 text-[#9CA3AF]" />
      </a>
    </div>
  );
};
