import React, { useState } from 'react';
import { BrainCircuit, Sparkles, Code2, ShieldAlert, Cpu, Check, Play, Loader2 } from 'lucide-react';
import { apiService } from '../services/api';
import type { AIAnalysisResponse } from '../types';

export const FrontierAICopilot: React.FC = () => {
  const [model, setModel] = useState<'gemini-3.5-pro' | 'claude-3.5-sonnet'>('gemini-3.5-pro');
  const [mode, setMode] = useState<'ui_generation' | 'code_integrity' | 'architecture_audit'>('ui_generation');
  const [prompt, setPrompt] = useState<string>('Synthesize a zero-trust telemetry spatial card with 120 FPS micro-interactions');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIAnalysisResponse | null>(null);

  const presets = [
    {
      label: 'Spatial Telemetry Card',
      mode: 'ui_generation' as const,
      prompt: 'Synthesize a zero-trust telemetry spatial card with 120 FPS micro-interactions and Framer Motion effects'
    },
    {
      label: 'AST & Supply Chain Audit',
      mode: 'code_integrity' as const,
      prompt: 'Perform deep AST vulnerability audit on Python FastAPI JWT rotation and Argon2id hash parameters'
    },
    {
      label: 'Edge Anycast Topology',
      mode: 'architecture_audit' as const,
      prompt: 'Analyze multi-region edge deployment with Cloudflare Enterprise WAF scrubbing and sub-10ms p99 SLA'
    }
  ];

  const handleRunInference = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await apiService.runAIAnalysis(prompt, model, mode);
      setResult(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-engine" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 tracking-widest uppercase mb-3">
            <BrainCircuit className="w-4 h-4 text-purple-400" />
            <span>FRONTIER AI ORCHESTRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cognitive Power:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Gemini & Claude Copilot
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Directly test our integrated frontier AI models for real-time dynamic UI synthesis, automated AST code security audits, and mission-critical architecture analysis.
          </p>
        </div>

        {/* Playground Container */}
        <div className="rounded-2xl border border-purple-500/30 bg-slate-900/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(157,78,221,0.15)]">
          
          {/* Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-slate-800">
            {/* Model Selection */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                Target Frontier Model
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setModel('gemini-3.5-pro')}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border font-mono text-xs transition-all ${
                    model === 'gemini-3.5-pro'
                      ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold">Google Gemini 3.5 Pro</span>
                </button>

                <button
                  type="button"
                  onClick={() => setModel('claude-3.5-sonnet')}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border font-mono text-xs transition-all ${
                    model === 'claude-3.5-sonnet'
                      ? 'bg-purple-950/60 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(157,78,221,0.3)]'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="font-bold">Claude 3.5 Sonnet</span>
                </button>
              </div>
            </div>

            {/* Mode Selection */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                Operational Task Mode
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'ui_generation', label: 'Dynamic UI', icon: Code2 },
                  { id: 'code_integrity', label: 'AST Audit', icon: ShieldAlert },
                  { id: 'architecture_audit', label: 'Architecture', icon: BrainCircuit }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMode(item.id as any)}
                      className={`flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl border font-mono text-[11px] transition-all ${
                        mode === item.id
                          ? 'bg-slate-800 border-white/30 text-white'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="py-4 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-slate-400 mr-2">Presets:</span>
            {presets.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setMode(p.mode);
                  setPrompt(p.prompt);
                }}
                className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Prompt Input & Execute */}
          <div className="relative mt-2">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              placeholder="Enter system prompt for AI code synthesis or architecture audit..."
              className="w-full rounded-xl bg-slate-950/90 border border-slate-700/80 p-4 font-mono text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
            <div className="mt-3 flex justify-end">
              <button
                onClick={handleRunInference}
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-mono text-xs font-bold shadow-lg hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] disabled:opacity-50 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Inference in progress...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Execute Frontier AI Task</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Inference Output View */}
          {result && (
            <div className="mt-8 rounded-xl border border-cyan-500/30 bg-black/70 overflow-hidden animate-in fade-in duration-300">
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Synthesized via {result.model_used.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <span>Latency: <strong className="text-white">{result.execution_time_ms}ms</strong></span>
                  <span>Confidence: <strong className="text-emerald-400">{(result.confidence_score * 100).toFixed(1)}%</strong></span>
                  <span>Security Score: <strong className="text-cyan-400">{result.security_score}/100</strong></span>
                </div>
              </div>

              <div className="p-5 font-mono text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96">
                {result.output}
              </div>

              {result.recommendations && result.recommendations.length > 0 && (
                <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center gap-3">
                  <span className="text-[11px] font-mono text-slate-400">Integrity Directives:</span>
                  {result.recommendations.map((rec, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                      ✓ {rec}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
