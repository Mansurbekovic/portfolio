import React, { useState } from 'react';
import { Phone, Send, Mail, CheckCircle2, MessageSquare, ShieldCheck, ArrowUpRight, Award } from 'lucide-react';
import { apiService } from '../services/api';

export const ContactPage: React.FC = () => {
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
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-5">
        
        {/* Header */}
        <div className="border-b border-[#E8E2D7] pb-8 mb-10">
          <div className="text-xs font-mono font-semibold text-[#D97706] uppercase tracking-wider mb-2">
            Direct Ingress & Ordering
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
            Contact & Consultation
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-2xl">
            Have a project in mind, need a custom Telegram bot, or want to discuss full-stack web development? Reach out directly via phone, Telegram, or the inquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Hotline Card */}
            <a
              href="tel:+998503016347"
              className="minimal-card p-5 block hover:border-[#D97706] transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-[5px] bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#6B7280] uppercase">Direct Phone (Click-to-Call)</div>
                  <div className="text-base font-bold font-mono text-[#111827] group-hover:text-[#D97706] transition-colors">
                    +998 50 301 63 47
                  </div>
                  <div className="text-[11px] text-[#059669] flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                    <span>Direct line available</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Telegram Card */}
            <a
              href="https://t.me/muhammadislom10"
              target="_blank"
              rel="noreferrer"
              className="minimal-card p-5 block hover:border-[#D97706] transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-[5px] bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#6B7280] uppercase">Telegram Handle</div>
                  <div className="text-base font-bold font-mono text-[#111827] group-hover:text-[#0284C7] transition-colors flex items-center gap-1">
                    <span>@muhammadislom10</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
                  </div>
                  <div className="text-[11px] text-[#6B7280] mt-0.5">Fastest response channel</div>
                </div>
              </div>
            </a>

            {/* Ingress Email Card */}
            <div className="minimal-card p-5">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-[5px] bg-[#F3EFEA] text-[#4B5563] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#6B7280] uppercase">Official Email</div>
                  <div className="text-xs font-mono font-medium text-[#111827]">
                    muhammadislom@antigravity.innovations
                  </div>
                  <div className="text-[11px] text-[#6B7280] mt-0.5">Formal proposals & RFP</div>
                </div>
              </div>
            </div>

            {/* Certified Identity Box */}
            <div className="p-4 rounded-[6px] bg-[#FEF3C7] border border-[#FDE68A] text-xs text-[#92400E]">
              <div className="flex items-center gap-2 font-bold mb-1">
                <Award className="w-4 h-4 text-[#D97706]" />
                <span>Turon International Education Center</span>
              </div>
              <p className="leading-relaxed">
                Certified Full-Stack Software Developer. Available for contracts, enterprise solutions, and high-concurrency bot engineering.
              </p>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="minimal-card p-7">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E8E2D7]">
                <div>
                  <h3 className="font-bold text-base text-[#111827]">Send Direct Inquiry</h3>
                  <p className="text-xs text-[#6B7280]">Your transmission will be logged with a cryptographic receipt.</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-[#059669]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Channel</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#4B5563] uppercase mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Azizbek Karimov"
                      className="w-full p-2.5 rounded-[5px] bg-[#FFFFFF] border border-[#E5E7EB] text-xs text-[#111827] focus:outline-none focus:border-[#D97706]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#4B5563] uppercase mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="azizbek@enterprise.uz"
                      className="w-full p-2.5 rounded-[5px] bg-[#FFFFFF] border border-[#E5E7EB] text-xs text-[#111827] focus:outline-none focus:border-[#D97706]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#4B5563] uppercase mb-1">
                    Project Subject / Scope
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Web Application / Telegram Bot / Full-Stack System"
                    className="w-full p-2.5 rounded-[5px] bg-[#FFFFFF] border border-[#E5E7EB] text-xs text-[#111827] focus:outline-none focus:border-[#D97706]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#4B5563] uppercase mb-1">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your technical requirements, expected timeline, or questions..."
                    className="w-full p-3 rounded-[5px] bg-[#FFFFFF] border border-[#E5E7EB] text-xs text-[#111827] focus:outline-none focus:border-[#D97706]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary py-2.5 text-xs font-semibold disabled:opacity-60"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{submitting ? 'Dispatching Message...' : 'Dispatch Message'}</span>
                </button>
              </form>

              {receipt && (
                <div className="mt-5 p-4 rounded-[5px] bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-mono flex items-start gap-2.5 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Transmission Successfully Dispatched!</div>
                    <div className="mt-1 text-[11px] text-[#047857]">
                      Cryptographic Confirmation Receipt: <strong className="select-all text-[#111827]">{receipt}</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
