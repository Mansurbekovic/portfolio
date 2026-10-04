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

export const ToolsPage: React.FC = () => {
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

  // Realistic exchange rates relative to 1 USD
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
  const [jsonStatus, setJsonStatus] = useState<{ valid: boolean; message: string } | null>({ valid: true, message: 'Valid JSON' });
  const [copiedJson, setCopiedJson] = useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonInput(JSON.stringify(parsed, null, 2));
      setJsonStatus({ valid: true, message: 'JSON successfully formatted and valid.' });
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
    const paragraphs = trimmed ? trimmed.split(/\n+/).filter(Boolean).length : 0;

    // Reading time: avg 200 words per minute
    const readMinutes = Math.ceil((words / 200) * 60); // in seconds
    const readTimeFormatted =
      readMinutes < 60 ? `${readMinutes}s read` : `${Math.ceil(readMinutes / 60)} min read`;

    // Speaking time: avg 130 words per minute
    const speakMinutes = Math.ceil((words / 130) * 60); // in seconds
    const speakTimeFormatted =
      speakMinutes < 60 ? `${speakMinutes}s speech` : `${Math.ceil(speakMinutes / 60)} min speech`;

    return {
      charsWithSpaces,
      charsWithoutSpaces,
      words,
      sentences,
      paragraphs,
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
    charcoal: { bg: 'bg-[#111827]', border: 'border-[#1F2937]', text: 'text-[#F9FAFB]', dot: 'bg-[#4B5563]' },
    slate: { bg: 'bg-[#0F172A]', border: 'border-[#1E293B]', text: 'text-[#38BDF8]', dot: 'bg-[#334155]' },
    cyber: { bg: 'bg-[#022C22]', border: 'border-[#064E3B]', text: 'text-[#34D399]', dot: 'bg-[#065F46]' },
    amber: { bg: 'bg-[#291804]', border: 'border-[#78350F]', text: 'text-[#FCD34D]', dot: 'bg-[#B45309]' }
  };

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Header */}
        <div className="border-b border-[#E8E2D7] pb-8 mb-10">
          <div className="text-xs font-mono font-semibold text-[#D97706] uppercase tracking-wider mb-2">
            Interactive Utilities
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
            Developer & Visitor Utility Lab
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-2xl">
            A collection of real-world, 100% operational web utilities built directly into this portfolio. Generate cryptographically strong secrets, convert currencies, and validate data.
          </p>
        </div>

        {/* 2x2 Grid of Operational Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Tool 1: Password & Secret Generator */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E8E2D7]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#111827]">Secure Password Generator</h3>
                    <p className="text-[11px] text-[#6B7280]">CSPRNG Entropy Generator</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[#F3EFEA] text-[#4B5563]">
                  {passLength * 5} bits entropy
                </span>
              </div>

              {/* Display Result */}
              <div className="p-3 rounded-[5px] bg-[#F9FAFB] border border-[#E5E7EB] font-mono text-sm text-[#111827] break-all flex items-center justify-between mb-5">
                <span className="select-all">{generatedPass}</span>
                <button
                  type="button"
                  onClick={copyPassword}
                  className="text-xs text-[#D97706] hover:text-[#B45309] flex items-center gap-1 font-mono shrink-0 ml-2"
                >
                  {copiedPass ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPass ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Controls */}
              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between text-[#4B5563] mb-1 font-mono">
                    <span>Length: {passLength} characters</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="64"
                    value={passLength}
                    onChange={(e) => setPassLength(Number(e.target.value))}
                    className="w-full accent-[#D97706]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-[#4B5563]">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeUpper}
                      onChange={(e) => setIncludeUpper(e.target.checked)}
                      className="accent-[#D97706]"
                    />
                    <span>Uppercase (A-Z)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeLower}
                      onChange={(e) => setIncludeLower(e.target.checked)}
                      className="accent-[#D97706]"
                    />
                    <span>Lowercase (a-z)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeNumbers}
                      onChange={(e) => setIncludeNumbers(e.target.checked)}
                      className="accent-[#D97706]"
                    />
                    <span>Numbers (0-9)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeSymbols}
                      onChange={(e) => setIncludeSymbols(e.target.checked)}
                      className="accent-[#D97706]"
                    />
                    <span>Symbols (!@#$)</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#F3EFEA]">
              <button
                type="button"
                onClick={generatePassword}
                className="w-full btn-primary text-xs py-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Generate New Secret</span>
              </button>
            </div>
          </div>

          {/* Tool 2: Currency & Crypto Converter */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E8E2D7]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#111827]">Currency & Crypto Calculator</h3>
                    <p className="text-[11px] text-[#6B7280]">Instant Valuation Engine</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[#FEF3C7] text-[#92400E]">
                  Live Formulas
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#4B5563] mb-1">Amount to Convert</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    min="0"
                    className="w-full p-2.5 rounded-[5px] bg-[#F9FAFB] border border-[#E5E7EB] text-sm font-mono text-[#111827] focus:outline-none focus:border-[#D97706]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-[#4B5563] mb-1">From</label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value as any)}
                      className="w-full p-2 rounded-[5px] bg-[#FFFFFF] border border-[#E5E7EB] text-xs font-mono text-[#111827] focus:outline-none focus:border-[#D97706]"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="UZS">UZS (So'm)</option>
                      <option value="BTC">BTC (Bitcoin)</option>
                      <option value="ETH">ETH (Ethereum)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#4B5563] mb-1">To</label>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value as any)}
                      className="w-full p-2 rounded-[5px] bg-[#FFFFFF] border border-[#E5E7EB] text-xs font-mono text-[#111827] focus:outline-none focus:border-[#D97706]"
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
                <div className="p-4 rounded-[5px] bg-[#F9FAFB] border border-[#E8E2D7] text-center">
                  <div className="text-xs text-[#6B7280] font-mono mb-1">
                    {amount.toLocaleString()} {fromCurrency} =
                  </div>
                  <div className="text-2xl font-extrabold text-[#111827] font-mono">
                    {calculateConversion()} <span className="text-sm font-semibold text-[#D97706]">{toCurrency}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 text-[11px] text-[#9CA3AF] text-center font-mono">
              Formula based on global weighted averages.
            </div>
          </div>

          {/* Tool 3: JSON Formatter & Validator */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E2D7]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                    <FileCode className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#111827]">JSON Formatter & Validator</h3>
                    <p className="text-[11px] text-[#6B7280]">Syntax Analyzer</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyJson}
                  className="text-xs text-[#D97706] hover:text-[#B45309] flex items-center gap-1 font-mono"
                >
                  {copiedJson ? <Check className="w-3 h-3 text-[#059669]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedJson ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                rows={6}
                className="w-full p-3 rounded-[5px] bg-[#F9FAFB] border border-[#E5E7EB] font-mono text-xs text-[#111827] focus:outline-none focus:border-[#D97706]"
              />

              {jsonStatus && (
                <div className={`mt-2 flex items-center gap-1.5 text-xs font-mono ${jsonStatus.valid ? 'text-[#059669]' : 'text-[#DC2626]'}`}>
                  {jsonStatus.valid ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> : <AlertCircle className="w-3.5 h-3.5 shrink-0" />}
                  <span>{jsonStatus.message}</span>
                </div>
              )}
            </div>

            <div className="pt-4 flex gap-2">
              <button
                type="button"
                onClick={formatJson}
                className="flex-1 btn-primary text-xs py-2"
              >
                Format / Beautify
              </button>
              <button
                type="button"
                onClick={minifyJson}
                className="flex-1 btn-outline text-xs py-2"
              >
                Minify Compact
              </button>
            </div>
          </div>

          {/* Tool 4: Base64 Encoder / Decoder */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E2D7]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                    <Binary className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#111827]">Base64 Encode / Decode</h3>
                    <p className="text-[11px] text-[#6B7280]">Binary & String Transformer</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-[#F3EFEA] p-0.5 rounded-[4px] text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setB64Mode('encode')}
                    className={`px-2 py-0.5 rounded-[3px] ${b64Mode === 'encode' ? 'bg-[#FFFFFF] text-[#111827] font-bold shadow-xs' : 'text-[#6B7280]'}`}
                  >
                    Encode
                  </button>
                  <button
                    type="button"
                    onClick={() => setB64Mode('decode')}
                    className={`px-2 py-0.5 rounded-[3px] ${b64Mode === 'decode' ? 'bg-[#FFFFFF] text-[#111827] font-bold shadow-xs' : 'text-[#6B7280]'}`}
                  >
                    Decode
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-mono text-[#4B5563] mb-1">
                    Input String ({b64Mode === 'encode' ? 'Plaintext' : 'Base64'})
                  </label>
                  <input
                    type="text"
                    value={b64Input}
                    onChange={(e) => setB64Input(e.target.value)}
                    className="w-full p-2.5 rounded-[5px] bg-[#F9FAFB] border border-[#E5E7EB] text-xs font-mono text-[#111827] focus:outline-none focus:border-[#D97706]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#4B5563] mb-1">Output Result</label>
                  <div className="p-2.5 rounded-[5px] bg-[#F9FAFB] border border-[#E5E7EB] text-xs font-mono text-[#111827] break-all min-h-[38px] flex items-center">
                    {b64Output}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleB64Convert}
                className="w-full btn-primary text-xs py-2"
              >
                Execute Conversion
              </button>
            </div>
          </div>

          {/* Tool 5: Text Statistics & Readability Analyzer */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E2D7]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                    <Type className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#111827]">Text Statistics & Reading Time</h3>
                    <p className="text-[11px] text-[#6B7280]">Content & Speech Analyzer</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStatsText('')}
                  className="text-xs text-[#9CA3AF] hover:text-[#DC2626] font-mono transition-colors"
                >
                  Clear
                </button>
              </div>

              <textarea
                value={statsText}
                onChange={(e) => setStatsText(e.target.value)}
                placeholder="Type or paste your text here to compute statistics..."
                rows={4}
                className="w-full p-3 rounded-[5px] bg-[#F9FAFB] border border-[#E5E7EB] font-sans text-xs text-[#111827] focus:outline-none focus:border-[#D97706]"
              />

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
                <div className="p-2.5 rounded-[4px] bg-[#F9FAFB] border border-[#E8E2D7] text-center">
                  <div className="text-[10px] font-mono text-[#6B7280]">Words</div>
                  <div className="text-base font-extrabold text-[#111827] font-mono mt-0.5">{textMetrics.words}</div>
                </div>
                <div className="p-2.5 rounded-[4px] bg-[#F9FAFB] border border-[#E8E2D7] text-center">
                  <div className="text-[10px] font-mono text-[#6B7280]">Characters</div>
                  <div className="text-base font-extrabold text-[#111827] font-mono mt-0.5">{textMetrics.charsWithSpaces}</div>
                </div>
                <div className="p-2.5 rounded-[4px] bg-[#F9FAFB] border border-[#E8E2D7] text-center">
                  <div className="text-[10px] font-mono text-[#6B7280]">No Spaces</div>
                  <div className="text-base font-extrabold text-[#111827] font-mono mt-0.5">{textMetrics.charsWithoutSpaces}</div>
                </div>
                <div className="p-2.5 rounded-[4px] bg-[#F9FAFB] border border-[#E8E2D7] text-center">
                  <div className="text-[10px] font-mono text-[#6B7280]">Sentences</div>
                  <div className="text-base font-extrabold text-[#111827] font-mono mt-0.5">{textMetrics.sentences}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#F3EFEA] grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 p-2 rounded-[4px] bg-[#FEF3C7] text-[#92400E]">
                <Clock className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span className="truncate">Reading: {textMetrics.readTimeFormatted}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-[4px] bg-[#F3EFEA] text-[#374151]">
                <Mic className="w-3.5 h-3.5 text-[#6B7280] shrink-0" />
                <span className="truncate">Speech: {textMetrics.speakTimeFormatted}</span>
              </div>
            </div>
          </div>

          {/* Tool 6: Code Snippet Card Generator */}
          <div className="minimal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E2D7]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[4px] bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#111827]">Code Snippet Card Generator</h3>
                    <p className="text-[11px] text-[#6B7280]">Syntax Presenter</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={snippetLang}
                    onChange={(e) => setSnippetLang(e.target.value)}
                    className="p-1 rounded-[3px] bg-[#FFFFFF] border border-[#E5E7EB] text-[11px] font-mono text-[#111827]"
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
                    className="text-xs text-[#D97706] hover:text-[#B45309] flex items-center gap-1 font-mono"
                  >
                    {copiedSnippet ? <Check className="w-3 h-3 text-[#059669]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Theme Picker */}
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#4B5563]">
                <Palette className="w-3.5 h-3.5 text-[#6B7280]" />
                <span className="text-[11px]">Theme:</span>
                {(['charcoal', 'slate', 'cyber', 'amber'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSnippetTheme(t)}
                    className={`px-2 py-0.5 rounded-[3px] text-[10px] uppercase font-bold transition-all ${
                      snippetTheme === t
                        ? 'bg-[#111827] text-white'
                        : 'bg-[#F3EFEA] text-[#6B7280] hover:text-[#111827]'
                    }`}
                  >
                    {t}
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

            <div className="pt-4 mt-4 border-t border-[#F3EFEA] flex justify-between items-center text-[11px] font-mono text-[#6B7280]">
              <span>Ready for documentation or sharing</span>
              <button
                type="button"
                onClick={copySnippet}
                className="btn-primary text-xs py-1.5 px-3"
              >
                Copy Code
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
