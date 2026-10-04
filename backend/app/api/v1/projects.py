from typing import List
from fastapi import APIRouter
from app.schemas.schemas import ProjectItem

router = APIRouter(prefix="/projects", tags=["Portfolio Projects Showcase"])

PROJECTS_DATA: List[ProjectItem] = [
    ProjectItem(
        id="proj-01",
        title="Aegis Zero-Trust Sentinel",
        category="Cybersecurity",
        summary="Autonomous military-grade intrusion prevention platform featuring real-time AI packet inspection and automated BGP route mitigation.",
        full_description="Aegis Sentinel combines high-speed eBPF network hooks with frontier AI neural classifiers to spot zero-day exploits in under 4 milliseconds. Built for mission-critical enterprise infrastructure that cannot tolerate a single second of breach or downtime.",
        tech_stack=["Python FastAPI", "eBPF", "React 19", "Three.js", "Redis Cluster", "AES-256-GCM"],
        security_rating="DEFCON-1 (Grade AAA+)",
        performance_score=99,
        features=[
            "Sub-millisecond packet telemetry with eBPF kernel hooks",
            "Zero-trust mutual TLS 1.3 certificate validation",
            "Dynamic neural threat mitigation via Claude 3.5 Sonnet",
            "Real-time 120 FPS spatial telemetry HUD"
        ],
        architecture_overview="Hybrid Edge-to-Core async architecture. Ingress traffic is scrubbed at the edge via Rust/eBPF filters, evaluated via async Python FastAPI microservices, and visualized on React 19 dashboards.",
        demo_url="https://antigravity.innovations/demo/aegis",
        github_url="https://github.com/antigravity-innovations/aegis-sentinel"
    ),
    ProjectItem(
        id="proj-02",
        title="QuantumVault Enterprise",
        category="Cryptographic Storage",
        summary="Post-quantum encrypted document and secrets store using Kyber/Dilithium lattice primitives with client-side Zero-Knowledge proofs.",
        full_description="QuantumVault enables decentralized, post-quantum protected asset management. Every file is segmented, encrypted on the client device using AES-256-GCM + Post-Quantum Key Encapsulation (ML-KEM), and distributed across hardened nodes.",
        tech_stack=["React 19", "WebAssembly", "Python 3.12 Async", "Argon2id", "Post-Quantum Kyber", "Tailwind CSS v4"],
        security_rating="QUANTUM-RESISTANT (Grade A+)",
        performance_score=100,
        features=[
            "Client-side WASM AES-256-GCM encryption before network transmission",
            "Argon2id key derivation with 64MB memory hardness",
            "Zero-Knowledge metadata isolation",
            "Automated ephemeral token rotation with strict revocation lists"
        ],
        architecture_overview="Zero-Knowledge server model: the backend never encounters plaintexts or unhashed credentials. All cryptographic derivations occur within client-side WebAssembly sandboxes.",
        demo_url="https://antigravity.innovations/demo/quantumvault",
        github_url="https://github.com/antigravity-innovations/quantum-vault"
    ),
    ProjectItem(
        id="proj-03",
        title="Orbital Spatial Core UI",
        category="Creative Engineering",
        summary="A fluid 120 FPS spatial design system and micro-interaction suite for mission-control telemetry and high-stakes financial operations.",
        full_description="Orbital Core defies traditional 2D web interfaces by fusing Three.js shaders with React 19 concurrent features. High-frequency live streaming data is rendered with zero frame stutter, providing operators with unparalleled situational awareness.",
        tech_stack=["React 19", "Three.js / WebGL", "Tailwind CSS v4", "TypeScript 5", "Framer Motion", "TanStack Query"],
        security_rating="HARDENED CSP (Level 3)",
        performance_score=98,
        features=[
            "Custom GLSL anti-gravity particle shaders and spatial grids",
            "Optimistic UI updates with TanStack Query v5",
            "Zero-layout-shift micro-interactions with hardware acceleration",
            "Strict CSP with per-request cryptographic nonces"
        ],
        architecture_overview="Modular component library utilizing atomic design principles, GPU-accelerated CSS transforms, and React 19 useTransition primitives for buttery smooth 120Hz navigation.",
        demo_url="https://antigravity.innovations/demo/orbital",
        github_url="https://github.com/antigravity-innovations/orbital-ui"
    ),
    ProjectItem(
        id="proj-04",
        title="Synapse AI Code Integrity Engine",
        category="Frontier AI",
        summary="Continuous code auditing and synthetic UI synthesizer orchestrating Google Gemini 3.5 Pro and Claude 3.5 for automated AST security verification.",
        full_description="Synapse acts as a real-time copilot for engineering teams, analyzing pull requests for covert supply-chain attacks, timing vulnerabilities, and unvalidated inputs before deployment to production clusters.",
        tech_stack=["Python FastAPI", "Google Gemini 3.5 Pro", "Claude 3.5 Sonnet", "LlamaIndex", "Pydantic v2", "Docker"],
        security_rating="ENTERPRISE AUDITED (SOC 2 Type II)",
        performance_score=97,
        features=[
            "Real-time AST parsing for prototype pollution and injection vectors",
            "Dynamic React 19 UI snippet generation from natural language",
            "Zero-Trust sandbox runner for untrusted code execution",
            "Automated compliance reporting (SOC2, HIPAA, ISO 27001)"
        ],
        architecture_overview="Multi-agent orchestration pipeline using LangChain/LlamaIndex on top of FastAPI async queues, with fallback resiliency and automated model benchmarking.",
        demo_url="https://antigravity.innovations/demo/synapse",
        github_url="https://github.com/antigravity-innovations/synapse-ai"
    )
]

@router.get("", response_model=List[ProjectItem])
async def list_projects(category: str = None):
    """Retrieve portfolio projects, optionally filtered by domain category."""
    if category and category.lower() != "all":
        return [p for p in PROJECTS_DATA if p.category.lower() == category.lower()]
    return PROJECTS_DATA

@router.get("/{project_id}", response_model=ProjectItem)
async def get_project_detail(project_id: str):
    """Retrieve in-depth architecture and security specifications of a project."""
    for p in PROJECTS_DATA:
        if p.id == project_id:
            return p
    raise HTTPException(status_code=404, detail="Project specification not found")
