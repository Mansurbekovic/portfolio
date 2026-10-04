import React, { useState } from 'react';
import { Lock, Unlock, ShieldCheck, Copy, Check } from 'lucide-react';
import { apiService } from '../services/api';
import type { CryptoResult } from '../types';

export const CryptoSandbox: React.FC = () => {
  const [plaintext, setPlaintext] = useState('TOP_SECRET_ENTERPRISE_ASSET: Zero-Trust Telemetry Active');
  const [customKey, setCustomKey] = useState('');
  const [encryptedData, setEncryptedData] = useState<CryptoResult | null>(null);
  const [decryptInput, setDecryptInput] = useState('');
  const [nonceInput, setNonceInput] = useState('');
  const [keyInput, setKeyInput] = useState('');
  const [decryptedText, setDecryptedText] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [encrypting, setEncrypting] = useState(false);

  const handleEncrypt = async () => {
    if (!plaintext) return;
    setEncrypting(true);
    try {
      const res = await apiService.encryptPayload(plaintext, customKey);
      setEncryptedData(res);
      setDecryptInput(res.ciphertext);
      setNonceInput(res.nonce);
      setKeyInput(res.key);
      setDecryptedText(null);
    } finally {
      setEncrypting(false);
    }
  };

  const handleDecrypt = async () => {
    if (!decryptInput || !nonceInput || !keyInput) return;
    const res = await apiService.decryptPayload(decryptInput, nonceInput, keyInput);
    setDecryptedText(res.plaintext);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="crypto-lab" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
            <Lock className="w-4 h-4 text-cyan-400" />
            <span>CRYPTOGRAPHIC LABORATORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Military-Grade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              AES-256-GCM Sandbox
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Directly test authenticated symmetric encryption, ephemeral 96-bit nonce derivation, and zero-knowledge integrity verification in real time.
          </p>
        </div>

        {/* Crypto Sandbox Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Encryption Panel */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Encryption Pipeline</h3>
                    <p className="text-xs font-mono text-slate-400">Cipher: AES-256-GCM (Authenticated)</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  AEAD SECURE
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Plaintext Message to Encrypt
                  </label>
                  <textarea
                    value={plaintext}
                    onChange={(e) => setPlaintext(e.target.value)}
                    rows={3}
                    className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3.5 font-mono text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                    Custom 256-Bit Key (Optional - Auto-generated if blank)
                  </label>
                  <input
                    type="text"
                    value={customKey}
                    onChange={(e) => setCustomKey(e.target.value)}
                    placeholder="Leave empty for CSPRNG 256-bit generation..."
                    className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-2.5 font-mono text-xs text-slate-300 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleEncrypt}
                disabled={encrypting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all"
              >
                {encrypting ? 'Computing Ciphertext...' : 'Generate Authenticated Ciphertext'}
              </button>

              {encryptedData && (
                <div className="mt-4 p-4 rounded-xl bg-black/60 border border-cyan-500/30 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Ciphertext (Base64 + Auth Tag):</span>
                    <button
                      onClick={() => copyToClipboard(encryptedData.ciphertext)}
                      className="text-cyan-400 hover:text-white flex items-center gap-1 text-[11px]"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>Copy</span>
                    </button>
                  </div>
                  <div className="text-cyan-300 break-all text-[11px] p-2 rounded bg-slate-900 border border-slate-800">
                    {encryptedData.ciphertext}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] text-slate-400">
                    <div>Nonce: <strong className="text-slate-200">{encryptedData.nonce.substring(0, 12)}...</strong></div>
                    <div>Key: <strong className="text-slate-200">{encryptedData.key.substring(0, 12)}...</strong></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Decryption Panel */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-950/80 border border-purple-400/40 flex items-center justify-center text-purple-400">
                    <Unlock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Decryption & Integrity Check</h3>
                    <p className="text-xs font-mono text-slate-400">AEAD Tag Verification</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-500/30">
                  ZERO-KNOWLEDGE
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Ciphertext to Decrypt</label>
                  <input
                    type="text"
                    value={decryptInput}
                    onChange={(e) => setDecryptInput(e.target.value)}
                    placeholder="Base64 ciphertext..."
                    className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-2.5 text-white focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 uppercase mb-1">Nonce (IV)</label>
                    <input
                      type="text"
                      value={nonceInput}
                      onChange={(e) => setNonceInput(e.target.value)}
                      placeholder="Base64 nonce..."
                      className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-2.5 text-slate-200 focus:outline-none focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 uppercase mb-1">Decryption Key</label>
                    <input
                      type="text"
                      value={keyInput}
                      onChange={(e) => setKeyInput(e.target.value)}
                      placeholder="Base64 256-bit key..."
                      className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-2.5 text-slate-200 focus:outline-none focus:border-purple-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleDecrypt}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold font-mono text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(157,78,221,0.3)] hover:shadow-[0_0_30px_rgba(157,78,221,0.5)] transition-all"
              >
                Verify Tag & Decrypt Payload
              </button>

              {decryptedText && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 font-mono text-xs">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Cryptographic Authentication Passed!</span>
                  </div>
                  <div className="text-white text-sm mt-2 p-2.5 rounded bg-slate-950 border border-slate-800 break-words">
                    {decryptedText}
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
