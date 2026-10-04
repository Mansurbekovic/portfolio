import React, { useState } from 'react';
import { Send, Mail, CheckCircle2, Phone, Award, MessageSquare } from 'lucide-react';
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
            DIRECT ENGINEERING HOTLINE & INGRESS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect With Muhammadislom.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Zero-Trust Encrypted.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Ready to deploy enterprise web platforms, high-throughput Telegram automation bots, or secure backend architectures? Get in touch directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Rustambekov Muhammadislom</h3>
                  <p className="text-xs font-mono text-cyan-400">Full-Stack Software Engineer</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed mb-6">
                Certified by <strong className="text-white">Turon International Education Center</strong>. Specializing in high-performance React 19 apps, Python FastAPI services, and Telegram bot automation.
              </div>

              <div className="space-y-4 font-mono text-xs text-slate-300">
                {/* Phone Link */}
                <a
                  href="tel:+998503016347"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400 hover:bg-slate-900 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Direct Phone Hotline</div>
                    <div className="text-emerald-400 font-bold text-sm">+998 50 301 63 47</div>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Secure Ingress Email</div>
                    <div className="text-white">muhammadislom@antigravity.innovations</div>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Telegram Automation Hub</div>
                    <div className="text-sky-300">@Muhammadislom_08</div>
                  </div>
                </div>

                {/* Credo */}
                <div className="pt-2 text-[11px] text-slate-400 italic">
                  "Ethical Engineering. Absolute Security. Beyond Gravity."
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
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Azizbek Karimov"
                      className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 font-mono text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="azizbek@enterprise.uz"
                      className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 font-mono text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Project Type / Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Web Application / Telegram Bot / Backend Architecture"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 font-mono text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Message / Technical Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your technical requirements, goals, or project scope..."
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
