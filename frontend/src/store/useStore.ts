import { create } from 'zustand';
import type { ProjectItem, DefenseStatus, TelemetryStat, ThreatEvent } from '../types';

interface PortfolioState {
  activeTab: string;
  setActiveTab: (tab: string) => void;

  selectedProject: ProjectItem | null;
  setSelectedProject: (proj: ProjectItem | null) => void;

  isTerminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;

  defenseStatus: DefenseStatus | null;
  setDefenseStatus: (status: DefenseStatus) => void;

  telemetryMetrics: TelemetryStat[];
  setTelemetryMetrics: (metrics: TelemetryStat[]) => void;

  threatEvents: ThreatEvent[];
  setThreatEvents: (events: ThreatEvent[]) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedProject: null,
  setSelectedProject: (proj) => set({ selectedProject: proj }),

  isTerminalOpen: false,
  setTerminalOpen: (open) => set({ isTerminalOpen: open }),

  defenseStatus: null,
  setDefenseStatus: (status) => set({ defenseStatus: status }),

  telemetryMetrics: [],
  setTelemetryMetrics: (metrics) => set({ telemetryMetrics: metrics }),

  threatEvents: [],
  setThreatEvents: (events) => set({ threatEvents: events }),
}));
