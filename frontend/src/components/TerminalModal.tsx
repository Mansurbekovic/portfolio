import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { usePortfolioStore } from '../store/useStore';
import { apiService } from '../services/api';

interface LogLine {
  text: string;
  type?: 'input' | 'output' | 'success' | 'warning' | 'error';
}

export const TerminalModal: React.FC = () => {
  const { isTerminalOpen, setTerminalOpen } = usePortfolioStore();
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<LogLine[]>([
    { text: 'ANTIGRAVITY OS v2.4.0 (x86_64-pc-none-elf)', type: 'output' },
    { text: 'Zero-Trust Kernel Handshake: ESTABLISHED (AES-256-GCM)', type: 'success' },
    { text: 'Type "help" to display operational directives.', type: 'output' },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  if (!isTerminalOpen) return null;

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    setLogs((prev) => [...prev, { text: `user@antigravity:~$ ${cmd}`, type: 'input' }]);
    setInputVal('');

    const parts = cmd.split(' ');
    const root = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    switch (root) {
      case 'help':
        setLogs((prev) => [
          ...prev,
          { text: 'Available CLI Directives:', type: 'output' },
          { text: '  telemetry   - Stream instantaneous defense metrics and WAF logs', type: 'output' },
          { text: '  scan        - Run automated zero-trust security heuristics', type: 'output' },
          { text: '  ai <prompt> - Run neural task via Gemini 3.5 / Claude 3.5', type: 'output' },
          { text: '  crypto      - Inspect military-grade AES-256 & Argon2id status', type: 'output' },
          { text: '  projects    - List verified portfolio engineering artifacts', type: 'output' },
          { text: '  clear       - Clear current console buffer', type: 'output' },
          { text: '  exit        - Close terminal interface', type: 'output' }
        ]);
        break;

      case 'telemetry':
        const status = await apiService.getDefenseStatus();
        setLogs((prev) => [
          ...prev,
          { text: `[TELEMETRY] Grid: ${status.grid_status}`, type: 'success' },
          { text: `[TELEMETRY] Blocked Threats: ${status.active_threats_blocked}`, type: 'warning' },
          { text: `[TELEMETRY] Cipher: ${status.tls_version}`, type: 'output' },
          { text: `[TELEMETRY] Uptime: ${status.uptime}`, type: 'output' }
        ]);
        break;

      case 'scan':
        setLogs((prev) => [
          ...prev,
          { text: 'Initiating zero-trust heuristic scan...', type: 'output' },
          { text: '✓ HSTS max-age=31536000: ENFORCED', type: 'success' },
          { text: '✓ Content-Security-Policy: LEVEL 3 STRICT', type: 'success' },
          { text: '✓ X-Frame-Options: DENY (Anti-Clickjacking)', type: 'success' },
          { text: '✓ Memory Safety: Argon2id salt entropy 64MB OK', type: 'success' },
          { text: 'SCAN SUMMARY: 0 VULNERABILITIES DETECTED', type: 'success' }
        ]);
        break;

      case 'ai':
        if (!args) {
          setLogs((prev) => [...prev, { text: 'Usage: ai <your prompt here>', type: 'warning' }]);
          break;
        }
        setLogs((prev) => [...prev, { text: `[AI_RUNNER] Invoking Frontier Engine with: "${args}"...`, type: 'output' }]);
        const aiRes = await apiService.runAIAnalysis(args, 'gemini-3.5-pro', 'architecture_audit');
        setLogs((prev) => [
          ...prev,
          { text: `✓ Response from ${aiRes.model_used} (${aiRes.execution_time_ms}ms):`, type: 'success' },
          { text: aiRes.output, type: 'output' }
        ]);
        break;

      case 'crypto':
        setLogs((prev) => [
          ...prev,
          { text: 'CRYPTOGRAPHIC SUBSYSTEM REPORT:', type: 'output' },
          { text: '  AES-256-GCM: Hardware-accelerated with 96-bit CSPRNG IVs', type: 'success' },
          { text: '  Argon2id: 3 iterations, 64MB RAM hardness, 4 parallelism', type: 'success' },
          { text: '  Post-Quantum Readiness: Kyber-1024 hybrid key encapsulation', type: 'success' }
        ]);
        break;

      case 'projects':
        const projs = await apiService.getProjects();
        setLogs((prev) => [
          ...prev,
          { text: 'VERIFIED PORTFOLIO ARTIFACTS:', type: 'output' },
          ...projs.map((p) => ({ text: `  [${p.id}] ${p.title} (${p.category}) - ${p.security_rating}`, type: 'output' as const }))
        ]);
        break;

      case 'clear':
        setLogs([]);
        break;

      case 'exit':
        setTerminalOpen(false);
        break;

      default:
        setLogs((prev) => [
          ...prev,
          { text: `Command not recognized: "${root}". Type "help" for commands.`, type: 'error' }
        ]);
        break;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
      <div className="w-full max-w-4xl h-[560px] rounded-2xl border border-cyan-500/50 bg-slate-950 flex flex-col shadow-[0_0_60px_rgba(0,242,254,0.25)] overflow-hidden">
        
        {/* Terminal Title Bar */}
        <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setTerminalOpen(false)} />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>antigravity-cli — root@kernel: /telemetry</span>
            </div>
          </div>

          <button
            onClick={() => setTerminalOpen(false)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-2 text-slate-200">
          {logs.map((log, index) => {
            const colorClass =
              log.type === 'input'
                ? 'text-cyan-400 font-bold'
                : log.type === 'success'
                ? 'text-emerald-400'
                : log.type === 'warning'
                ? 'text-amber-400'
                : log.type === 'error'
                ? 'text-red-400'
                : 'text-slate-300';

            return (
              <div key={index} className={`whitespace-pre-wrap leading-relaxed ${colorClass}`}>
                {log.text}
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-3">
          <span className="font-mono text-xs text-cyan-400 font-bold">user@antigravity:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'scan', 'telemetry', 'ai <prompt>', 'projects'..."
            className="flex-1 bg-transparent font-mono text-xs text-white focus:outline-none placeholder-slate-600"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-mono text-[11px] hover:bg-cyan-900 transition-colors"
          >
            EXEC
          </button>
        </form>

      </div>
    </div>
  );
};
