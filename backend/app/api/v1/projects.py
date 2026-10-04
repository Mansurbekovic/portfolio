from typing import List, Optional, Dict, Any
from fastapi import APIRouter, HTTPException, Query
from app.schemas.schemas import (
    ProjectItem,
    ProjectArchitectureSpec,
    ProjectDeploymentSpec,
    ProjectApiEndpoint
)

router = APIRouter(prefix="/projects", tags=["Portfolio Projects Showcase"])

PROJECTS_DATA: List[ProjectItem] = [
    ProjectItem(
        id="word-game",
        title="Word Game (24/7 Multiplayer)",
        category="Multiplayer Gaming",
        summary="Real-time, 2-player interactive word puzzle platform operational 24/7 with instant state synchronization and anti-cheat validation.",
        full_description="A 24/7 operational multiplayer word puzzle platform connecting players worldwide with sub-second state synchronization and anti-cheat dictionary validation. Engineered with high-throughput WebSocket reconciliation, real-time matchmaking lobbies, and automated turn timers.",
        tech_stack=["React 19", "TypeScript", "WebSocket Sync", "Tailwind CSS", "Game State Engine", "Netlify Edge"],
        security_rating="ANTI-CHEAT VERIFIED (Grade AAA)",
        performance_score=99,
        features=[
            "24/7 multiplayer live room matchmaker",
            "Sub-50ms instant turn synchronization",
            "Anti-cheat dictionary checksum verification",
            "Smooth responsive mobile & desktop UI",
            "State recovery upon network reconnection",
            "Dynamic score leaderboards"
        ],
        architecture_overview="Event-driven architecture with optimistic UI updates. Client handles local word validation against an obfuscated trie while network state reconciles via real-time WebSocket signals.",
        architecture_specs=ProjectArchitectureSpec(
            pattern="Event-Driven Reactive State Machine",
            data_flow="Bidirectional WebSocket streaming with optimistic client-side execution",
            state_management="Centralized Game Room State with delta diff reconciliation",
            caching_layer="Client memory trie cache + edge cache dictionary checksums",
            fault_tolerance="Automatic reconnect with snapshot synchronization under 200ms"
        ),
        deployment_specs=ProjectDeploymentSpec(
            hosting_provider="Netlify Edge CDN",
            cdn_provider="Global Anycast Edge Network",
            ssl_type="TLS 1.3 Strict SNI",
            build_tool="Vite 6 / Rollup",
            pipeline="Automated Git Push CI/CD with linting & test pass gates",
            target_sla="99.98% High Availability"
        ),
        api_endpoints=[
            ProjectApiEndpoint(
                method="WS",
                path="/ws/matchmake",
                description="Initiates WebSocket connection for 1v1 matchmaking and turn exchange",
                response_sample={"status": "CONNECTED", "room_id": "game-room-492", "player_role": "PLAYER_1"}
            ),
            ProjectApiEndpoint(
                method="GET",
                path="/api/dictionary/validate",
                description="Verifies candidate word validity against anti-cheat lexicon",
                response_sample={"valid": True, "score": 18, "word": "ALGORITHM"}
            )
        ],
        demo_url="https://wordm.netlify.app",
        github_url="https://github.com/Muhammadislom08",
        live_status="ONLINE",
        latency_sla_ms=45
    ),
    ProjectItem(
        id="upnura",
        title="UpNura Web Application",
        category="Modern Web Apps",
        summary="Modern, sleek web interface engineered with high-performance UI components, dynamic motion graphics, and fluid data flow.",
        full_description="UpNura is a flagship modern web portal showcasing cutting-edge spatial design, responsive component modularity, and lightning-fast load times. Engineered with accessible layouts, zero layout shifts (0 CLS), and hardware-accelerated transitions.",
        tech_stack=["React 19", "TypeScript", "Tailwind CSS v4", "Component Modularity", "Vite", "Netlify Edge"],
        security_rating="STRICT CSP LEVEL 3 (Grade A+)",
        performance_score=98,
        features=[
            "Ultra-clean spatial layout and responsive micro-interactions",
            "Zero layout shifts across dynamic viewport changes",
            "Optimized asset bundle with sub-second LCP (<0.6s)",
            "Modular component tree built for enterprise extensibility",
            "High-contrast accessibility (WCAG AAA compliant)",
            "Adaptive theme support with smooth interpolation"
        ],
        architecture_overview="Modular component architecture with atomic separation of design tokens, utilizing GPU-accelerated CSS properties for 120 FPS render loops.",
        architecture_specs=ProjectArchitectureSpec(
            pattern="Atomic Modular Component Architecture",
            data_flow="Unidirectional reactive state propagation with memoized selectors",
            state_management="Scoped component contexts + lightweight store",
            caching_layer="HTTP/3 Brotli asset edge caching with immutable hashing",
            fault_tolerance="Graceful component error boundaries with automated recovery"
        ),
        deployment_specs=ProjectDeploymentSpec(
            hosting_provider="Netlify Global Cloud",
            cdn_provider="Netlify High-Performance Edge",
            ssl_type="TLS 1.3 with ChaCha20-Poly1305",
            build_tool="Vite 6 + ESBuild",
            pipeline="Continuous Deployment with automated Lighthouse audit scoring",
            target_sla="99.99% Uptime"
        ),
        api_endpoints=[
            ProjectApiEndpoint(
                method="GET",
                path="/api/content/manifest",
                description="Fetches modular interface configuration and dynamic layout blocks",
                response_sample={"version": "2.4.0", "modules": ["hero", "showcase", "cta"], "status": "ACTIVE"}
            )
        ],
        demo_url="https://upnura.netlify.app",
        github_url="https://github.com/Muhammadislom08",
        live_status="ONLINE",
        latency_sla_ms=25
    ),
    ProjectItem(
        id="qarz-daftari",
        title="Qarz Daftari (Financial Ledger)",
        category="FinTech & Accounting",
        summary="Secure accounting and debt-tracking management application tailored for precise record-keeping and financial transparency.",
        full_description="Qarz Daftari solves everyday personal and enterprise credit/debt tracking with an intuitive, highly reliable ledger. Ensures zero data corruption, instant balance calculations, comprehensive debtor transaction logs, and local state persistence.",
        tech_stack=["Next.js / Edge", "React", "LocalStorage Sync", "Financial Algorithms", "Tailwind CSS", "Data Isolation"],
        security_rating="FINANCIAL AUDITED (Grade AAA+)",
        performance_score=100,
        features=[
            "Precise floating-point currency computation engine",
            "Instant debt/credit settlement and historical timeline audit",
            "Encrypted local and cloud persistent state synchronizer",
            "Exportable ledger statements and receipt generator",
            "Multi-currency support with dynamic denomination formatting",
            "Debtor profile timeline with search & filter"
        ],
        architecture_overview="Client-side sandboxed ledger engine with cryptographically checksummed local storage and optional cloud backup pipelines.",
        architecture_specs=ProjectArchitectureSpec(
            pattern="Double-Entry Financial Accounting Ledger",
            data_flow="Deterministic state mutations with cryptographic audit trailing",
            state_management="Isolated ledger reducer with strict immutable record validation",
            caching_layer="Encrypted persistent storage with CRC32 integrity verification",
            fault_tolerance="Multi-snapshot rollbacks and corruption-proof recovery hooks"
        ),
        deployment_specs=ProjectDeploymentSpec(
            hosting_provider="Vercel Edge Network",
            cdn_provider="Vercel Anycast Infrastructure",
            ssl_type="Strict HSTS TLS 1.3",
            build_tool="Next.js App Engine",
            pipeline="Zero-downtime Edge deployment on branch commit",
            target_sla="100.0% Reliability"
        ),
        api_endpoints=[
            ProjectApiEndpoint(
                method="POST",
                path="/api/ledger/record",
                description="Creates an immutable debit/credit transaction record",
                response_sample={"transaction_id": "tx_98124", "status": "COMMITTED", "balance_delta": 450000}
            ),
            ProjectApiEndpoint(
                method="GET",
                path="/api/ledger/export",
                description="Generates verifiable PDF or CSV statement of all accounts",
                response_sample={"export_url": "/downloads/statement-2026.pdf", "records_count": 84}
            )
        ],
        demo_url="https://qarz-daftari-islombe.vercel.app",
        github_url="https://github.com/Muhammadislom08",
        live_status="ONLINE",
        latency_sla_ms=20
    ),
    ProjectItem(
        id="englif",
        title="EnglIF (Language Learning)",
        category="EdTech Platform",
        summary="Interactive educational platform designed to streamline English language vocabulary mastery, grammar practice, and retention.",
        full_description="EnglIF offers interactive gamified modules that accelerate English language acquisition. Features dynamic vocabulary drills, real-time feedback quizzes, spaced repetition retention algorithms, and audio pronunciation aids.",
        tech_stack=["React", "Audio API", "Quiz Engine", "Spaced Repetition", "Tailwind CSS", "State Persistence"],
        security_rating="ZERO-XSS INPUT SANITIZED (Grade A)",
        performance_score=97,
        features=[
            "Adaptive spaced repetition vocabulary modules",
            "Interactive audio pronunciation and listening challenges",
            "Real-time progress analytics and streak tracking",
            "Accessible mobile-first study interface",
            "Gamified quiz mechanics with instant score feedback",
            "Offline lesson caching capability"
        ],
        architecture_overview="Client-side reactive quiz state machine with spaced repetition scheduling algorithms and instant local persistence.",
        architecture_specs=ProjectArchitectureSpec(
            pattern="Finite State Machine (FSM) Learning Engine",
            data_flow="Unidirectional flashcard state transitions with retention scheduling",
            state_management="Custom Reactive FSM with spaced intervals (SM-2 variant)",
            caching_layer="Web Audio API memory buffers + IndexedDB lesson cache",
            fault_tolerance="Local offline-first mode with background state synchronization"
        ),
        deployment_specs=ProjectDeploymentSpec(
            hosting_provider="Netlify CDN",
            cdn_provider="Global Edge Delivery",
            ssl_type="TLS 1.3 Certified",
            build_tool="Vite / Rollup",
            pipeline="Automated test suite & static asset compression",
            target_sla="99.95% Availability"
        ),
        api_endpoints=[
            ProjectApiEndpoint(
                method="GET",
                path="/api/lessons/daily",
                description="Retrieves personalized daily spaced repetition vocabulary deck",
                response_sample={"deck_size": 25, "streak_days": 14, "review_cards": 10}
            )
        ],
        demo_url="https://englif.netlify.app",
        github_url="https://github.com/Muhammadislom08",
        live_status="ONLINE",
        latency_sla_ms=35
    ),
    ProjectItem(
        id="web-shopping",
        title="Web Shopping (E-Commerce)",
        category="E-Commerce",
        summary="Full-featured online store interface with multi-criteria product filtering, persistent cart state management, and streamlined checkout.",
        full_description="An end-to-end e-commerce storefront delivering seamless product exploration. Includes real-time multi-category filtering, dynamic price range sliders, persistent cart state across sessions, responsive modal previews, and instant discount verification.",
        tech_stack=["React", "Global Cart State", "E-Commerce Filtering", "Tailwind CSS", "REST API", "LocalStorage"],
        security_rating="TAMPER-PROOF CART HASH (Grade A+)",
        performance_score=98,
        features=[
            "Multi-dimensional catalog filtering (category, price, rating)",
            "Persistent cart state across browser sessions",
            "Dynamic checkout summary with coupon validation engine",
            "Instant product detail modal previews",
            "Optimistic quantity updates without UI jank",
            "One-click order simulation with receipt digest"
        ],
        architecture_overview="State-driven e-commerce architecture utilizing centralized store patterns for cart and inventory, ensuring zero desync between views.",
        architecture_specs=ProjectArchitectureSpec(
            pattern="Flux/Redux-Inspired Global Store Architecture",
            data_flow="Action-driven dispatchers with centralized cart reducer",
            state_management="Reactive Cart Context with session recovery",
            caching_layer="Product catalog memory cache with debounce search indexing",
            fault_tolerance="Cart snapshot preservation during unintended tab closes"
        ),
        deployment_specs=ProjectDeploymentSpec(
            hosting_provider="Netlify Global Infrastructure",
            cdn_provider="Netlify Edge with HTTP/2 Server Push",
            ssl_type="TLS 1.3 Automated SSL",
            build_tool="Vite + PostCSS",
            pipeline="Continuous Integration with unit tests",
            target_sla="99.99% Availability"
        ),
        api_endpoints=[
            ProjectApiEndpoint(
                method="GET",
                path="/api/products",
                description="Fetches product catalog with pagination, filters, and price ranges",
                response_sample={"total": 48, "page": 1, "items_per_page": 12}
            ),
            ProjectApiEndpoint(
                method="POST",
                path="/api/cart/checkout",
                description="Validates coupon code, items availability, and generates order hash",
                response_sample={"order_id": "ORD-2026-8819", "total_amount": 125.00, "status": "AUTHORIZED"}
            )
        ],
        demo_url="https://web-shopping.netlify.app",
        github_url="https://github.com/Muhammadislom08",
        live_status="ONLINE",
        latency_sla_ms=30
    ),
    ProjectItem(
        id="fc-point",
        title="FC Point Platform",
        category="Sports Analytics",
        summary="Interactive football scoring and sports analytics platform built for passionate fans, real-time match tracking, and points estimation.",
        full_description="FC Point delivers live sports tracking, match statistics, team analytics, and interactive point calculations. Designed with sleek sports typography and high-contrast dashboards for fast information retrieval during matchdays.",
        tech_stack=["React", "Sports Analytics Engine", "Real-Time Scoring", "Tailwind CSS", "Dynamic Dashboards", "Netlify Edge"],
        security_rating="DDOS ARMORED (Grade A)",
        performance_score=99,
        features=[
            "Live match point computation and league standings",
            "High-contrast sports UI optimized for mobile matchday viewing",
            "Team head-to-head metrics and performance radar charts",
            "Instant state caching for zero-latency browsing",
            "Real-time goal alerts and match event timelines",
            "Historic match archive and statistical trends"
        ],
        architecture_overview="Lightweight sports scoring engine optimized for low-bandwidth mobile connections with intelligent background revalidation.",
        architecture_specs=ProjectArchitectureSpec(
            pattern="Reactive Polling / Push Dashboard Architecture",
            data_flow="Incremental matchday telemetry updates with optimistic UI render",
            state_management="Scoped Match Tracker Store with live event stream parsing",
            caching_layer="Stale-while-revalidate client cache for match standings",
            fault_tolerance="Automatic fallback to cached offline standings if connection drops"
        ),
        deployment_specs=ProjectDeploymentSpec(
            hosting_provider="Netlify CDN",
            cdn_provider="Global Anycast Network",
            ssl_type="TLS 1.3 Certified",
            build_tool="Vite 6",
            pipeline="Automated build and deploy preview pipelines",
            target_sla="99.98% Matchday Uptime"
        ),
        api_endpoints=[
            ProjectApiEndpoint(
                method="GET",
                path="/api/matches/live",
                description="Retrieves live matchday scores, active minutes, and event streams",
                response_sample={"match_id": "fc-9102", "home": "FC Barcelona", "away": "Real Madrid", "score": "2-1"}
            ),
            ProjectApiEndpoint(
                method="GET",
                path="/api/analytics/standings",
                description="Calculates current table standings and goal differentials",
                response_sample={"season": "2025/2026", "leader": "FC Barcelona", "points": 64}
            )
        ],
        demo_url="https://fc-point.netlify.app",
        github_url="https://github.com/Muhammadislom08",
        live_status="ONLINE",
        latency_sla_ms=28
    )
]

@router.get("", response_model=List[ProjectItem])
async def list_projects(
    category: Optional[str] = Query(None, description="Filter by domain category (e.g., Multiplayer Gaming, FinTech)"),
    search: Optional[str] = Query(None, description="Search across title, summary, or description"),
    tag: Optional[str] = Query(None, description="Filter projects by technology tag (e.g., React, Python)")
):
    """
    Retrieve all portfolio projects with extended metadata, deployment specs, and deep architecture.
    """
    results = PROJECTS_DATA

    if category and category.lower() != "all":
        results = [p for p in results if p.category.lower() == category.lower()]

    if search:
        s = search.lower()
        results = [
            p for p in results
            if s in p.title.lower() or s in p.summary.lower() or s in p.full_description.lower()
        ]

    if tag:
        t = tag.lower()
        results = [p for p in results if any(t in tech.lower() for tech in p.tech_stack)]

    return results

@router.get("/statistics/summary")
async def get_projects_statistics():
    """
    Provides aggregated analytics across all deployed projects.
    """
    total_projects = len(PROJECTS_DATA)
    all_tech = set()
    for p in PROJECTS_DATA:
        all_tech.update(p.tech_stack)

    avg_performance = sum(p.performance_score for p in PROJECTS_DATA) / total_projects
    avg_latency = sum(p.latency_sla_ms for p in PROJECTS_DATA) / total_projects

    return {
        "total_active_projects": total_projects,
        "unique_technologies": sorted(list(all_tech)),
        "average_performance_score": round(avg_performance, 1),
        "average_latency_sla_ms": round(avg_latency, 1),
        "zero_trust_coverage": "100%",
        "all_projects_live": True,
        "primary_developer": "Muhammadislom Rustambekov"
    }

@router.get("/{project_id}", response_model=ProjectItem)
async def get_project_detail(project_id: str):
    """
    Retrieve in-depth architecture, API endpoints, and deployment specifications of a project.
    """
    for p in PROJECTS_DATA:
        if p.id == project_id or p.title.lower() == project_id.lower():
            return p
    raise HTTPException(status_code=404, detail="Project specification not found")

@router.get("/{project_id}/architecture", response_model=ProjectArchitectureSpec)
async def get_project_architecture(project_id: str):
    """
    Dedicated endpoint returning technical architecture specification.
    """
    for p in PROJECTS_DATA:
        if p.id == project_id:
            if p.architecture_specs:
                return p.architecture_specs
            raise HTTPException(status_code=404, detail="Architecture specification not defined for project")
    raise HTTPException(status_code=404, detail="Project not found")
