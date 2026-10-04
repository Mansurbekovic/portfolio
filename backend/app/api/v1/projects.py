from typing import List, Optional
from fastapi import APIRouter, HTTPException
from app.schemas.schemas import ProjectItem

router = APIRouter(prefix="/projects", tags=["Portfolio Projects Showcase"])

PROJECTS_DATA: List[ProjectItem] = [
    ProjectItem(
        id="proj-01",
        title="Word Game (24/7 Multiplayer)",
        category="Real-Time Gaming",
        summary="Real-time, 2-player interactive word puzzle platform operational 24/7 with instant state synchronization and anti-cheat validation.",
        full_description="An engaging multiplayer word challenge application that connects players in real-time. Features instant turn synchronization, high-concurrency match handling, and interactive scoring algorithms to provide a seamless 24/7 gaming experience.",
        tech_stack=["React", "TypeScript", "WebSocket Sync", "Tailwind CSS", "Game State Engine"],
        security_rating="ANTI-CHEAT VERIFIED (Grade AAA)",
        performance_score=99,
        features=[
            "24/7 multiplayer live room matchmaker",
            "Sub-50ms instant turn synchronization",
            "Anti-cheat dictionary checksum verification",
            "Smooth responsive mobile & desktop UI"
        ],
        architecture_overview="Event-driven architecture with optimistic UI updates. Client handles local word validation against an obfuscated trie while network state reconciles via real-time WebSocket signals.",
        demo_url="https://wordm.netlify.app",
        github_url="https://github.com/Muhammadislom08"
    ),
    ProjectItem(
        id="proj-02",
        title="UpNura Web Application",
        category="Modern Web Platforms",
        summary="Modern, sleek web interface engineered with high-performance UI components, dynamic motion graphics, and fluid data flow.",
        full_description="UpNura is a flagship modern web portal showcasing cutting-edge spatial design, responsive component modularity, and lightning-fast load times. Engineered with accessible layouts and hardware-accelerated transitions.",
        tech_stack=["React 19", "TypeScript", "Tailwind CSS v4", "Component Modularity", "Vite"],
        security_rating="STRICT CSP LEVEL 3 (Grade A+)",
        performance_score=98,
        features=[
            "Ultra-clean spatial layout and responsive micro-interactions",
            "Zero layout shifts across dynamic viewport changes",
            "Optimized asset bundle with sub-second LCP",
            "Modular component tree built for enterprise extensibility"
        ],
        architecture_overview="Modular component architecture with atomic separation of design tokens, utilizing GPU-accelerated CSS properties for 120 FPS render loops.",
        demo_url="https://upnura.netlify.app",
        github_url="https://github.com/Muhammadislom08"
    ),
    ProjectItem(
        id="proj-03",
        title="Qarz Daftari (Financial Ledger System)",
        category="FinTech & Accounting",
        summary="Secure accounting and debt-tracking management application tailored for precise record-keeping and financial transparency.",
        full_description="Qarz Daftari solves everyday personal and enterprise credit/debt tracking with an intuitive, highly reliable ledger. Ensures zero data corruption, instant balance calculations, and comprehensive debtor transaction logs.",
        tech_stack=["React", "Next.js / Vercel Edge", "Financial Algorithms", "Tailwind CSS", "Data Isolation"],
        security_rating="FINANCIAL AUDITED (Grade AAA+)",
        performance_score=100,
        features=[
            "Precise floating-point currency computation engine",
            "Instant debt/credit settlement and historical timeline audit",
            "Encrypted local and cloud persistent state synchronizer",
            "Exportable ledger statements and receipt generator"
        ],
        architecture_overview="Client-side sandboxed ledger engine with cryptographically checksummed local storage and optional cloud backup pipelines.",
        demo_url="https://qarz-daftari-islombe.vercel.app",
        github_url="https://github.com/Muhammadislom08"
    ),
    ProjectItem(
        id="proj-04",
        title="EnglIF (Language Learning Platform)",
        category="EdTech & Interactive Learning",
        summary="Interactive educational platform designed to streamline English language vocabulary mastery, grammar practice, and retention.",
        full_description="EnglIF offers interactive gamified modules that accelerate English language acquisition. Features dynamic vocabulary drills, real-time feedback quizzes, and adaptive learning paths tailored to learner proficiency.",
        tech_stack=["React", "Audio API", "Quiz Engine", "Tailwind CSS", "State Persistence"],
        security_rating="ZERO-XSS INPUT SANITIZED (Grade A)",
        performance_score=97,
        features=[
            "Adaptive spaced repetition vocabulary modules",
            "Interactive audio pronunciation and listening challenges",
            "Real-time progress analytics and streak tracking",
            "Accessible mobile-first study interface"
        ],
        architecture_overview="Client-side reactive quiz state machine with spaced repetition scheduling algorithms and instant local persistence.",
        demo_url="https://englif.netlify.app",
        github_url="https://github.com/Muhammadislom08"
    ),
    ProjectItem(
        id="proj-05",
        title="Web Shopping (E-Commerce Platform)",
        category="E-Commerce & Retail",
        summary="Full-featured online store interface with multi-criteria product filtering, persistent cart state management, and streamlined checkout.",
        full_description="An end-to-end e-commerce storefront delivering seamless product exploration. Includes real-time category filtering, dynamic price range sliders, instant cart balance updates, and responsive product showcase modals.",
        tech_stack=["React", "Global Cart State", "E-Commerce Filtering", "Tailwind CSS", "REST API"],
        security_rating="TAMPER-PROOF CART HASH (Grade A+)",
        performance_score=98,
        features=[
            "Multi-dimensional catalog filtering (category, price, rating)",
            "Persistent cart state across browser sessions",
            "Dynamic checkout summary with coupon validation engine",
            "Instant product detail modal previews"
        ],
        architecture_overview="State-driven e-commerce architecture utilizing centralized store patterns for cart and inventory, ensuring zero desync between views.",
        demo_url="https://web-shopping.netlify.app",
        github_url="https://github.com/Muhammadislom08"
    ),
    ProjectItem(
        id="proj-06",
        title="FC Point Platform",
        category="Sports Analytics",
        summary="Interactive football scoring and sports analytics platform built for passionate fans, real-time match tracking, and points estimation.",
        full_description="FC Point delivers live sports tracking, match statistics, team analytics, and interactive point calculations. Designed with sleek sports typography and high-contrast dashboards for fast information retrieval during matchdays.",
        tech_stack=["React", "Sports Analytics Engine", "Real-Time Scoring", "Tailwind CSS", "Dynamic Dashboards"],
        security_rating="DDOS ARMORED (Grade A)",
        performance_score=99,
        features=[
            "Live match point computation and league standings",
            "High-contrast sports UI optimized for mobile matchday viewing",
            "Team head-to-head metrics and performance radar charts",
            "Instant state caching for zero-latency browsing"
        ],
        architecture_overview="Lightweight sports scoring engine optimized for low-bandwidth mobile connections with intelligent background revalidation.",
        demo_url="https://fc-point.netlify.app",
        github_url="https://github.com/Muhammadislom08"
    )
]

@router.get("", response_model=List[ProjectItem])
async def list_projects(category: Optional[str] = None):
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
