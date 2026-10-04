import React, { useState, useMemo } from 'react';
import {
  Lock,
  RefreshCw,
  Copy,
  Check,
  Coins,
  FileCode,
  Binary,
  CheckCircle2,
  AlertCircle,
  Type,
  Clock,
  Mic,
  Palette,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ToolsPage: React.FC = () => {
  const { t } = useLanguage();

  // 1. Password Generator State
  const [passLength, setPassLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPass, setGeneratedPass] = useState('k9#mP$7vQ!2xL@8w');
  const [copiedPass, setCopiedPass] = useState(false);

  const generatePassword = () => {
    let chars = '';
    if (includeLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';

    let result = '';
    const array = new Uint32Array(passLength);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < passLength; i++) {
      result += chars[array[i] % chars.length];
    }
    setGeneratedPass(result);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(generatedPass);
    setCopiedPass(true);
    setTimeout(() => setCopiedPass(false), 2000);
  };

  // 2. Currency & Crypto Converter State
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState<'USD' | 'EUR' | 'UZS' | 'BTC' | 'ETH'>('USD');
  const [toCurrency, setToCurrency] = useState<'USD' | 'EUR' | 'UZS' | 'BTC' | 'ETH'>('UZS');

  const ratesToUSD: Record<string, number> = {
    USD: 1,
    EUR: 1.08,
    UZS: 0.000078, // ~12,800 UZS per USD
    BTC: 68500,
    ETH: 3500
  };

  const calculateConversion = () => {
    const amountInUSD = amount * ratesToUSD[fromCurrency];
    const converted = amountInUSD / ratesToUSD[toCurrency];
    if (toCurrency === 'BTC' || toCurrency === 'ETH') {
      return converted.toFixed(6);
    }
    if (toCurrency === 'UZS') {
      return Math.round(converted).toLocaleString();
    }
    return converted.toFixed(2);
  };

  // 3. JSON Formatter & Validator State
  const [jsonInput, setJsonInput] = useState('{\n  "developer": "Muhammadislom",\n  "status": "active",\n  "projects": 6\n}');
  const [jsonStatus, setJsonStatus] = useState<{ valid: boolean; message: string } | null>({ valid: true, message: t.toolJsonValid });
  const [copiedJson, setCopiedJson] = useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonInput(JSON.stringify(parsed, null, 2));
      setJsonStatus({ valid: true, message: t.toolJsonValid });
    } catch (err: any) {
      setJsonStatus({ valid: false, message: `Syntax Error: ${err.message}` });
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonInput(JSON.stringify(parsed));
      setJsonStatus({ valid: true, message: 'JSON successfully minified.' });
    } catch (err: any) {
      setJsonStatus({ valid: false, message: `Syntax Error: ${err.message}` });
    }
  };

  const copyJson = () => {
    navigator.clipboard.writeText(jsonInput);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  // 4. Base64 Encoder / Decoder State
  const [b64Input, setB64Input] = useState('Hello Antigravity!');
  const [b64Output, setB64Output] = useState('SGVsbG8gQW50aWdyYXZpdHkh');
  const [b64Mode, setB64Mode] = useState<'encode' | 'decode'>('encode');

  const handleB64Convert = () => {
    try {
      if (b64Mode === 'encode') {
        setB64Output(btoa(b64Input));
      } else {
        setB64Output(atob(b64Input));
      }
    } catch {
      setB64Output('Error: Invalid base64 sequence');
    }
  };

  // 5. Text Statistics & Readability State
  const [statsText, setStatsText] = useState(
    'Antigravity Innovations provides enterprise-grade full-stack solutions and high-throughput Telegram bots. Certified by Turon International Education Center, Muhammadislom Rustambekov engineers resilient and ultra-secure web services.'
  );

  const textMetrics = useMemo(() => {
    const charsWithSpaces = statsText.length;
    const charsWithoutSpaces = statsText.replace(/\s+/g, '').length;
    const trimmed = statsText.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const sentences = trimmed ? (trimmed.match(/[^.!?]+[.!?]+(\s|$)/g) || [trimmed]).length : 0;

    const readMinutes = Math.ceil((words / 200) * 60);
    const readTimeFormatted = readMinutes < 60 ? `${readMinutes}s` : `${Math.ceil(readMinutes / 60)} min`;

    const speakMinutes = Math.ceil((words / 130) * 60);
    const speakTimeFormatted = speakMinutes < 60 ? `${speakMinutes}s` : `${Math.ceil(speakMinutes / 60)} min`;

    return {
      charsWithSpaces,
      charsWithoutSpaces,
      words,
      sentences,
      readTimeFormatted,
      speakTimeFormatted
    };
  }, [statsText]);

  // 6. Code Snippet Card Generator State
  const [snippetCode, setSnippetCode] = useState(
    `// FastAPI Async Dispatcher\nasync def stream_telemetry(session_id: str):\n    digest = hmac.new(SECRET, session_id.encode(), hashlib.sha256).hexdigest()\n    return {"status": "authorized", "digest": digest}`
  );
  const [snippetLang, setSnippetLang] = useState('python');
  const [snippetTheme, setSnippetTheme] = useState<'charcoal' | 'slate' | 'cyber' | 'amber'>('charcoal');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const copySnippet = () => {
    navigator.clipboard.writeText(snippetCode);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const themeStyles = {
    charcoal: { bg: 'bg-[#111827]', border: 'border-[#1F2937]', text: 'text-[#F9FAFB]' },
    slate: { bg: 'bg-[#0F172A]', border: 'border-[#1E293B]', text: 'text-[#38BDF8]' },
    cyber: { bg: 'bg-[#022C22]', border: 'border-[#064E3B]', text: 'text-[#34D399]' },
    amber: { bg: 'bg-[#291804]', border: 'border-[#78350F]', text: 'text-[#FDE047]' }
  };

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Header */}
        <div className="border-b border-[var(--border-subtle)] pb-8 mb-10">
          <div className="text-xs font-mono font-semibold text-[var(--accent-amber)] uppercase tracking-wider mb-2">
            {t.toolsHeaderBadge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
            {t.toolsHeaderTitle}
          </h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            {t.toolsHeaderSubtitle}
          </p>
        </div>

        {/* 2x3 Grid of Operational Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Tool 1: Password & Secret Generator */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[var(--accent-amber)] flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[var(--text-primary)]">{t.toolPassTitle}</h3>
                    <p className="text-[11px] text-[var(--text-muted)]">{t.toolPassSubtitle}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[var(--bg-muted)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                  {passLength * 5} {t.toolPassEntropy}
                </span>
              </div>

              {/* Display Result */}
              <div className="p-3 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] font-mono text-sm text-[var(--text-primary)] break-all flex items-center justify-between mb-5">
                <span className="select-all font-semibold">{generatedPass}</span>
                <button
                  type="button"
                  onClick={copyPassword}
                  className="text-xs text-[var(--accent-amber)] hover:opacity-80 flex items-center gap-1 font-mono shrink-0 ml-2 cursor-pointer"
                >
                  {copiedPass ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPass ? t.toolCopied : t.toolCopy}</span>
                </button>
              </div>

              {/* Controls */}
              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between text-[var(--text-secondary)] mb-1 font-mono">
                    <span>{t.toolPassLength}: {passLength}</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="64"
                    value={passLength}
                    onChange={(e) => setPassLength(Number(e.target.value))}
                    className="w-full accent-[var(--accent-amber)] cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-[var(--text-secondary)] font-mono">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeUpper}
                      onChange={(e) => setIncludeUpper(e.target.checked)}
                      className="accent-[var(--accent-amber)]"
                    />
                    <span>{t.toolPassUpper}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeLower}
                      onChange={(e) => setIncludeLower(e.target.checked)}
                      className="accent-[var(--accent-amber)]"
                    />
                    <span>{t.toolPassLower}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeNumbers}
                      onChange={(e) => setIncludeNumbers(e.target.checked)}
                      className="accent-[var(--accent-amber)]"
                    />
                    <span>{t.toolPassNumbers}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeSymbols}
                      onChange={(e) => setIncludeSymbols(e.target.checked)}
                      className="accent-[var(--accent-amber)]"
                    />
                    <span>{t.toolPassSymbols}</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={generatePassword}
                className="w-full btn-primary text-xs py-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{t.toolPassGenerateBtn}</span>
              </button>
            </div>
          </div>

          {/* Tool 2: Currency & Crypto Converter */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[var(--accent-amber)] flex items-center justify-center">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[var(--text-primary)]">{t.toolCurrTitle}</h3>
                    <p className="text-[11px] text-[var(--text-muted)]">{t.toolCurrSubtitle}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[#92400E] dark:text-[var(--accent-amber)]">
                  {t.toolCurrBadge}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">{t.toolCurrAmount}</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    min="0"
                    className="w-full p-2.5 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-sm font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-amber)]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">{t.toolCurrFrom}</label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value as any)}
                      className="w-full p-2 rounded-[5px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-amber)]"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="UZS">UZS (So'm)</option>
                      <option value="BTC">BTC (Bitcoin)</option>
                      <option value="ETH">ETH (Ethereum)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">{t.toolCurrTo}</label>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value as any)}
                      className="w-full p-2 rounded-[5px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-amber)]"
                    >
                      <option value="UZS">UZS (So'm)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="BTC">BTC (Bitcoin)</option>
                      <option value="ETH">ETH (Ethereum)</option>
                    </select>
                  </div>
                </div>

                {/* Result Card */}
                <div className="p-4 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-center">
                  <div className="text-xs text-[var(--text-muted)] font-mono mb-1">
                    {amount.toLocaleString()} {fromCurrency} =
                  </div>
                  <div className="text-2xl font-extrabold text-[var(--text-primary)] font-mono">
                    {calculateConversion()} <span className="text-sm font-semibold text-[var(--accent-amber)]">{toCurrency}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 text-[11px] text-[var(--text-muted)] text-center font-mono">
              {t.toolCurrNote}
            </div>
          </div>

          {/* Tool 3: JSON Formatter & Validator */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[var(--accent-amber)] flex items-center justify-center">
                    <FileCode className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[var(--text-primary)]">{t.toolJsonTitle}</h3>
                    <p className="text-[11px] text-[var(--text-muted)]">{t.toolJsonSubtitle}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyJson}
                  className="text-xs text-[var(--accent-amber)] hover:opacity-80 flex items-center gap-1 font-mono cursor-pointer"
                >
                  {copiedJson ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedJson ? t.toolCopied : t.toolCopy}</span>
                </button>
              </div>

              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                rows={6}
                className="w-full p-3 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-amber)]"
              />

              {jsonStatus && (
                <div className={`mt-2 flex items-center gap-1.5 text-xs font-mono ${jsonStatus.valid ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                  {jsonStatus.valid ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> : <AlertCircle className="w-3.5 h-3.5 shrink-0" />}
                  <span>{jsonStatus.message}</span>
                </div>
              )}
            </div>

            <div className="pt-4 flex gap-2">
              <button
                type="button"
                onClick={formatJson}
                className="flex-1 btn-primary text-xs py-2 cursor-pointer"
              >
                {t.toolJsonFormatBtn}
              </button>
              <button
                type="button"
                onClick={minifyJson}
                className="flex-1 btn-outline text-xs py-2 cursor-pointer"
              >
                {t.toolJsonMinifyBtn}
              </button>
            </div>
          </div>

          {/* Tool 4: Base64 Encoder / Decoder */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[var(--accent-amber)] flex items-center justify-center">
                    <Binary className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[var(--text-primary)]">{t.toolB64Title}</h3>
                    <p className="text-[11px] text-[var(--text-muted)]">{t.toolB64Subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-[var(--bg-muted)] p-0.5 rounded-[4px] text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setB64Mode('encode')}
                    className={`px-2 py-0.5 rounded-[3px] cursor-pointer ${b64Mode === 'encode' ? 'bg-[var(--accent-amber)] text-[#111827] font-bold shadow-xs' : 'text-[var(--text-muted)]'}`}
                  >
                    {t.toolB64Encode}
                  </button>
                  <button
                    type="button"
                    onClick={() => setB64Mode('decode')}
                    className={`px-2 py-0.5 rounded-[3px] cursor-pointer ${b64Mode === 'decode' ? 'bg-[var(--accent-amber)] text-[#111827] font-bold shadow-xs' : 'text-[var(--text-muted)]'}`}
                  >
                    {t.toolB64Decode}
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                    {t.toolB64Input}
                  </label>
                  <input
                    type="text"
                    value={b64Input}
                    onChange={(e) => setB64Input(e.target.value)}
                    className="w-full p-2.5 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-amber)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">{t.toolB64Output}</label>
                  <div className="p-2.5 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] break-all min-h-[38px] flex items-center font-bold">
                    {b64Output}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleB64Convert}
                className="w-full btn-primary text-xs py-2 cursor-pointer"
              >
                {t.toolB64ConvertBtn}
              </button>
            </div>
          </div>

          {/* Tool 5: Text Statistics & Readability Analyzer */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[var(--accent-amber)] flex items-center justify-center">
                    <Type className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[var(--text-primary)]">{t.toolStatsTitle}</h3>
                    <p className="text-[11px] text-[var(--text-muted)]">{t.toolStatsSubtitle}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStatsText('')}
                  className="text-xs text-[var(--text-muted)] hover:text-[#EF4444] font-mono transition-colors cursor-pointer"
                >
                  {t.toolStatsClear}
                </button>
              </div>

              <textarea
                value={statsText}
                onChange={(e) => setStatsText(e.target.value)}
                placeholder={t.toolStatsPlaceholder}
                rows={4}
                className="w-full p-3 rounded-[5px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] font-sans text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-amber)]"
              />

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
                <div className="p-2.5 rounded-[4px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-center">
                  <div className="text-[10px] font-mono text-[var(--text-muted)]">{t.toolStatsWords}</div>
                  <div className="text-base font-extrabold text-[var(--text-primary)] font-mono mt-0.5">{textMetrics.words}</div>
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-center">
                  <div className="text-[10px] font-mono text-[var(--text-muted)]">{t.toolStatsChars}</div>
                  <div className="text-base font-extrabold text-[var(--text-primary)] font-mono mt-0.5">{textMetrics.charsWithSpaces}</div>
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-center">
                  <div className="text-[10px] font-mono text-[var(--text-muted)]">{t.toolStatsNoSpaces}</div>
                  <div className="text-base font-extrabold text-[var(--text-primary)] font-mono mt-0.5">{textMetrics.charsWithoutSpaces}</div>
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-center">
                  <div className="text-[10px] font-mono text-[var(--text-muted)]">{t.toolStatsSentences}</div>
                  <div className="text-base font-extrabold text-[var(--text-primary)] font-mono mt-0.5">{textMetrics.sentences}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 p-2 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[#92400E] dark:text-[var(--accent-amber)]">
                <Clock className="w-3.5 h-3.5 text-[var(--accent-amber)] shrink-0" />
                <span className="truncate">{t.toolStatsReading}: {textMetrics.readTimeFormatted}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-[4px] bg-[var(--bg-muted)] text-[var(--text-primary)]">
                <Mic className="w-3.5 h-3.5 text-[var(--accent-amber)] shrink-0" />
                <span className="truncate">{t.toolStatsSpeech}: {textMetrics.speakTimeFormatted}</span>
              </div>
            </div>
          </div>

          {/* Tool 6: Code Snippet Card Generator */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] dark:bg-[var(--accent-amber-light)] text-[var(--accent-amber)] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[var(--text-primary)]">{t.toolSnippetTitle}</h3>
                    <p className="text-[11px] text-[var(--text-muted)]">{t.toolSnippetSubtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={snippetLang}
                    onChange={(e) => setSnippetLang(e.target.value)}
                    className="p-1 rounded-[3px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-primary)] cursor-pointer"
                  >
                    <option value="python">Python</option>
                    <option value="typescript">TypeScript</option>
                    <option value="rust">Rust</option>
                    <option value="go">Go</option>
                    <option value="sql">SQL</option>
                  </select>

                  <button
                    type="button"
                    onClick={copySnippet}
                    className="text-xs text-[var(--accent-amber)] hover:opacity-80 flex items-center gap-1 font-mono cursor-pointer"
                  >
                    {copiedSnippet ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedSnippet ? t.toolCopied : t.toolCopy}</span>
                  </button>
                </div>
              </div>

              {/* Theme Picker */}
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[var(--text-secondary)]">
                <Palette className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <span className="text-[11px]">{t.toolSnippetTheme}</span>
                {(['charcoal', 'slate', 'cyber', 'amber'] as const).map((themeName) => (
                  <button
                    key={themeName}
                    type="button"
                    onClick={() => setSnippetTheme(themeName)}
                    className={`px-2 py-0.5 rounded-[3px] text-[10px] uppercase font-bold transition-all cursor-pointer ${
                      snippetTheme === themeName
                        ? 'bg-[var(--accent-amber)] text-[#111827]'
                        : 'bg-[var(--bg-muted)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {themeName}
                  </button>
                ))}
              </div>

              {/* Live Styled Code Card Preview */}
              <div className={`p-4 rounded-[6px] ${themeStyles[snippetTheme].bg} border ${themeStyles[snippetTheme].border} shadow-inner`}>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  </div>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">{snippetLang}</span>
                </div>
                <textarea
                  value={snippetCode}
                  onChange={(e) => setSnippetCode(e.target.value)}
                  rows={4}
                  className={`w-full bg-transparent border-0 font-mono text-xs ${themeStyles[snippetTheme].text} focus:outline-none resize-none`}
                />
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex justify-between items-center text-[11px] font-mono text-[var(--text-muted)]">
              <span>{t.toolSnippetFooter}</span>
              <button
                type="button"
                onClick={copySnippet}
                className="btn-primary text-xs py-1.5 px-3 cursor-pointer"
              >
                {t.toolSnippetCopyBtn}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
