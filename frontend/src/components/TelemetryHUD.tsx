import React, { useState, useEffect } from 'react';
import { Activity, ShieldAlert, CheckCircle2, RefreshCw, Radio, HardDrive, Terminal } from 'lucide-react';
import { apiService } from '../services/api';
import type { DefenseStatus, TelemetryStat, ThreatEvent } from '../types';

export const TelemetryHUD: React.FC = () => {
  const [defense, setDefense] = useState<DefenseStatus | null>(null);
  const [metrics, setMetrics] = useState<TelemetryStat[]>([]);
  const [threats, setThreats] = useState<ThreatEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const loadTelemetry = async () => {
    setLoading(true);
    try {
      const [def, met, thr] = await Promise.all([
        apiService.getDefenseStatus(),
        apiService.getTelemetryMetrics(),
        apiService.getThreatFeed()
      ]);
      setDefense(def);
      setMetrics(met);
      setThreats(thr);
      setLastUpdated(new Date().toLocaleTimeString());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTelemetry();
    const interval = setInterval(loadTelemetry, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetry" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
              <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              <span>LIVE DEFENSE TELEMETRY & OBSERVABILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real-Time{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Threat Telemetry HUD
              </span>
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
              Direct telemetry stream from our Python FastAPI backend and autonomous Cloudflare Enterprise WAF scrubbing nodes.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-400">
              Synced: <span className="text-cyan-400">{lastUpdated || 'Initial Handshake...'}</span>
            </span>
            <button
              onClick={loadTelemetry}
              disabled={loading}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
              <span>Poll Network</span>
            </button>
          </div>
        </div>

        {/* Defense Grid Banner */}
        {defense && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Grid Status</div>
                <div className="text-sm font-bold font-mono text-emerald-400 mt-0.5">{defense.grid_status}</div>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Blocked Threats</div>
                <div className="text-sm font-bold font-mono text-cyan-400 mt-0.5">
                  {defense.active_threats_blocked.toLocaleString()} attacks
                </div>
              </div>
              <ShieldAlert className="w-6 h-6 text-cyan-400 shrink-0" />
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-purple-500/30 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Encryption Cipher</div>
                <div className="text-sm font-bold font-mono text-purple-400 mt-0.5">AES-256-GCM / TLS 1.3</div>
              </div>
              <HardDrive className="w-6 h-6 text-purple-400 shrink-0" />
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/30 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">WAF Engine</div>
                <div className="text-sm font-bold font-mono text-amber-400 mt-0.5">Cloudflare Enterprise</div>
              </div>
              <Activity className="w-6 h-6 text-amber-400 shrink-0" />
            </div>
          </div>
        )}

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {metrics.map((m, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-md">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate">
                {m.metric}
              </div>
              <div className="text-lg font-bold font-mono text-white mt-1">
                {m.value}
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800 text-[10px] font-mono">
                <span className="text-cyan-400">{m.status}</span>
                <span className="text-slate-400">{m.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time Threat Stream Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden shadow-2xl">
          <div className="p-4 bg-slate-900/70 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-xs text-white font-bold tracking-wide">
                NEUTRALIZED_INCIDENT_STREAM (WAF LOG)
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Auto-updating via Python Async Telemetry Bus
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-slate-900/40 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">EVENT ID</th>
                  <th className="py-3 px-4">TIMESTAMP</th>
                  <th className="py-3 px-4">SOURCE IP</th>
                  <th className="py-3 px-4">THREAT VECTOR</th>
                  <th className="py-3 px-4">SEVERITY</th>
                  <th className="py-3 px-4">ACTION TAKEN</th>
                  <th className="py-3 px-4 text-right">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {threats.map((t) => {
                  const severityBadge =
                    t.severity === 'CRITICAL'
                      ? 'bg-red-950/80 text-red-400 border-red-500/40'
                      : t.severity === 'HIGH'
                      ? 'bg-amber-950/80 text-amber-400 border-amber-500/40'
                      : 'bg-cyan-950/80 text-cyan-400 border-cyan-500/40';

                  return (
                    <tr key={t.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3 px-4 text-slate-300 font-bold">{t.id}</td>
                      <td className="py-3 px-4 text-slate-400">{t.timestamp}</td>
                      <td className="py-3 px-4 text-slate-300">{t.source_ip}</td>
                      <td className="py-3 px-4 text-white font-semibold">{t.threat_type}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${severityBadge}`}>
                          {t.severity}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-400">{t.action_taken}</td>
                      <td className="py-3 px-4 text-right">
                        <span className="text-emerald-400 font-bold">{t.status}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
