import React, { useState } from 'react';
import { Send, ShieldCheck, Mail, Key, CheckCircle2 } from 'lucide-react';
import { apiService } from '../services/api';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    try {
      const res = await apiService.submitContact(formData);
      setReceipt(res.cryptographic_receipt);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            SECURE ENGAGEMENT CHANNEL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Contact.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Zero-Trust Encrypted.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Ready to elevate your digital horizon with unbreakable security and artful engineering? Dispatch a secure transmission directly to our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Engineering Headquarters</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Antigravity Innovations operates globally across distributed cryptographic nodes. All incoming inquiries are routed through zero-knowledge verification pipelines.
              </p>

              <div className="mt-6 space-y-4 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Secure Ingress Email</div>
                    <div className="text-white">intel@antigravity.innovations</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-950 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Key className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">PGP Fingerprint</div>
                    <div className="text-purple-300 truncate max-w-[240px]">4A9F 8B2C 001D 77FE B192</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Protection Level</div>
                    <div className="text-emerald-400">End-to-End Encrypted (AES-256-GCM)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                      Principal Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 font-mono text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                      Verification Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@enterprise.corp"
                      className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 font-mono text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Subject / Objective
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Enterprise Security Architecture"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 font-mono text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Transmission Content
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your technical requirements, architecture constraints, or project scope..."
                    className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3.5 font-mono text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:shadow-[0_0_35px_rgba(0,242,254,0.5)] transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{submitting ? 'Encrypting & Dispatching...' : 'Dispatch Encrypted Transmission'}</span>
                </button>
              </form>

              {receipt && (
                <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="font-mono text-xs">
                    <div className="text-emerald-400 font-bold">Transmission Successfully Verified & Dispatched!</div>
                    <div className="text-slate-300 mt-1">Cryptographic Audit Receipt:</div>
                    <div className="text-cyan-300 font-bold mt-0.5">{receipt}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
