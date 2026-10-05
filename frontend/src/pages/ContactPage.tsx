import React, { useState } from 'react';
import { Phone, Send, CheckCircle2, MessageSquare, ShieldCheck, ArrowUpRight, Award } from 'lucide-react';
import { apiService } from '../services/api';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setError(false);
    try {
      const res = await apiService.submitContact(formData);
      setReceipt(res.cryptographic_receipt);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setReceipt(null);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-5">
        
        {/* Header */}
        <div className="border-b border-[var(--border-subtle)] pb-8 mb-10">
          <div className="text-xs font-mono font-semibold text-[var(--accent-amber)] uppercase tracking-wider mb-2">
            {t.contactHeaderBadge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
            {t.contactHeaderTitle}
          </h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            {t.contactHeaderSubtitle}
          </p>
        </div>

        {/* 2-Column Direct Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: Direct Hotline */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[5px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[var(--accent-amber)] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[var(--text-primary)] mb-1">
                {t.contactHotlineTitle}
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-4">
                {t.contactHotlineSubtitle}
              </p>
              <div className="text-lg font-mono font-bold text-[var(--text-primary)]">
                +998 50 301 63 47
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[var(--border-subtle)]">
              <a
                href="tel:+998503016347"
                className="w-full btn-amber text-xs py-2.5 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+998 50 301 63 47</span>
              </a>
            </div>
          </div>

          {/* Card 2: Telegram Messenger */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[5px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[var(--accent-amber)] flex items-center justify-center mb-4">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[var(--text-primary)] mb-1">
                {t.contactTelegramTitle}
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-4">
                {t.contactTelegramSubtitle}
              </p>
              <div className="text-lg font-mono font-bold text-[var(--accent-amber)]">
                @muhammadislom10
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[var(--border-subtle)]">
              <a
                href="https://t.me/muhammadislom10"
                target="_blank"
                rel="noreferrer"
                className="w-full btn-primary text-xs py-2.5 inline-flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                <span>Open @muhammadislom10</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Encrypted Contact Form */}
        <div className="minimal-card p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-5 h-5 text-[var(--accent-amber)]" />
              <div>
                <h3 className="font-bold text-base text-[var(--text-primary)]">{t.contactFormTitle}</h3>
                <p className="text-xs text-[var(--text-muted)] font-mono">{t.contactFormSubtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#10B981] font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Zero-Trust Secured</span>
            </div>
          </div>

          {receipt && (
            <div className="mb-6 p-4 rounded-[5px] bg-[#ECFDF5] dark:bg-[#064E3B]/40 border border-[#A7F3D0] dark:border-[#059669] text-xs font-mono">
              <div className="flex items-center gap-2 text-[#059669] dark:text-[#34D399] font-bold mb-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{t.contactSuccessDigest}</span>
              </div>
              <div className="p-2 rounded bg-white dark:bg-[#0B1728] border border-[#A7F3D0] dark:border-[#059669] text-[var(--text-primary)] break-all mt-2 select-all">
                {receipt}
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 rounded-[6px] bg-[#FEF2F2] dark:bg-[#2A1215] border border-[#FECACA] dark:border-[#7F1D1D] text-xs text-[#B91C1C] dark:text-[#FCA5A5]">
              {t.contactErrorMsg}
            </div>
          )}

          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                  {t.contactNameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contactNamePlaceholder}
                  className="w-full p-2.5 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-amber)]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                  {t.contactEmailLabel} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contactEmailPlaceholder}
                  className="w-full p-2.5 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-amber)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                {t.contactSubjectLabel}
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder={t.contactSubjectPlaceholder}
                className="w-full p-2.5 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-amber)]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                {t.contactMessageLabel} *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.contactMessagePlaceholder}
                className="w-full p-3 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-amber)]"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary text-xs py-2.5 px-6 cursor-pointer"
              >
                <span>{submitting ? t.contactSubmittingBtn : t.contactSubmitBtn}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Turon Certificate verification note */}
        <div className="mt-8 p-4 rounded-[6px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center gap-3 text-xs text-[var(--text-muted)] font-mono">
          <Award className="w-5 h-5 text-[var(--accent-amber)] shrink-0" />
          <span>
            {t.turonCertified} • Credential TIEC-FS-2026-98104
          </span>
        </div>

      </div>
    </div>
  );
};
