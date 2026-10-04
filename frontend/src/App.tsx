import React from 'react';
import { AntigravityCanvas } from './components/AntigravityCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { TelemetryHUD } from './components/TelemetryHUD';
import { FrontierAICopilot } from './components/FrontierAICopilot';
import { CryptoSandbox } from './components/CryptoSandbox';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Background Interactive Antigravity Canvas */}
      <AntigravityCanvas />

      {/* Cyber Ambient Grids */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-40" />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Pillars />
          <TelemetryHUD />
          <FrontierAICopilot />
          <CryptoSandbox />
          <ProjectShowcase />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Interactive Cyber CLI Terminal Modal */}
      <TerminalModal />
    </div>
  );
};

export default App;
