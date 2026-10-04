export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  full_description: string;
  tech_stack: string[];
  security_rating: string;
  performance_score: number;
  features: string[];
  architecture_overview: string;
  demo_url?: string;
  github_url?: string;
}

export interface TelemetryStat {
  metric: string;
  value: string;
  status: string;
  trend: string;
}

export interface ThreatEvent {
  id: string;
  timestamp: string;
  source_ip: string;
  threat_type: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  action_taken: string;
  status: string;
}

export interface DefenseStatus {
  grid_status: string;
  active_threats_blocked: number;
  waf_status: string;
  zero_trust_handshake: string;
  tls_version: string;
  encryption_standard: string;
  ddos_mitigation: string;
  uptime: string;
}

export interface AIAnalysisResponse {
  model_used: string;
  mode: string;
  execution_time_ms: number;
  output: string;
  confidence_score: number;
  security_score: number;
  recommendations: string[];
}

export interface CryptoResult {
  ciphertext: string;
  nonce: string;
  key: string;
  algorithm: string;
  timestamp: string;
}
