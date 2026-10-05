"""
╔══════════════════════════════════════════════════════════════════╗
║  ⚡ ANTIGRAVITY TELEGRAM BOT — Intelligent Automation Engine   ║
║  Developer: Rustambekov Muhammadislom                          ║
║  Stack: Python • Aiogram 3.x • Async I/O                      ║
║  Architecture: Modular Router • FSM • Persistent Queue         ║
╚══════════════════════════════════════════════════════════════════╝
"""

import asyncio
import logging
import os
import json
import time
import random
from datetime import datetime, timezone, timedelta
from typing import Dict, List, Optional

from aiogram import Bot, Dispatcher, Router, F
from aiogram.types import (
    Message, CallbackQuery, InlineKeyboardMarkup, InlineKeyboardButton,
    BotCommand, InlineQuery, InlineQueryResultArticle, InputTextMessageContent
)
from aiogram.filters import CommandStart, Command
from aiogram.enums import ParseMode
from aiogram.client.default import DefaultBotProperties

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# CONFIGURATION
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BOT_TOKEN = os.getenv("BOT_TOKEN", "8998536495:AAFjX6H191oD0p9PMyAVQKX3UV7CkPRjoSw")
OWNER_CHAT_ID = int(os.getenv("OWNER_CHAT_ID", "8452066082"))
PORTFOLIO_URL = os.getenv("PORTFOLIO_URL", "https://rustambekov-portfolio-backend.onrender.com")
BOT_START_TIME = time.time()

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger(__name__)

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# METRICS TRACKER
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class BotMetrics:
    def __init__(self):
        self.total_users = set()
        self.total_commands = 0
        self.total_callbacks = 0
        self.queue_processed = 0
        self.projects_viewed = 0

    def track_user(self, user_id: int):
        self.total_users.add(user_id)
        self.total_commands += 1

    def track_callback(self):
        self.total_callbacks += 1

    def track_project_view(self):
        self.projects_viewed += 1

    @property
    def uptime(self) -> str:
        elapsed = time.time() - BOT_START_TIME
        hours, remainder = divmod(int(elapsed), 3600)
        minutes, seconds = divmod(remainder, 60)
        if hours > 0:
            return f"{hours}s {minutes}d {seconds}s"
        return f"{minutes}d {seconds}s"


metrics = BotMetrics()

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# DEVELOPER DATA
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEVELOPER = {
    "full_name": "Rustambekov Muhammadislom",
    "role": "Full-Stack Software Engineer",
    "age": "17 yoshda",
    "location": "O'zbekiston 🇺🇿",
    "phone": "+998 50 301 63 47",
    "email": "rustambekov.islom@gmail.com",
    "telegram": "@muhammadislom10",
    "github": "https://github.com/Muhammadislom08",
    "portfolio": PORTFOLIO_URL,
}

SKILLS = {
    "React / React 19": 95,
    "TypeScript": 90,
    "Next.js": 88,
    "Tailwind CSS": 95,
    "Python": 92,
    "FastAPI": 90,
    "Telegram Bot (Aiogram)": 93,
    "Git & GitHub": 90,
    "REST API Design": 88,
    "Security (JWT, AES-256)": 85,
}

TECH_STACK = {
    "🎨 Frontend": [
        "React 19", "Next.js", "TypeScript", "Tailwind CSS v4",
        "Zustand", "React Query", "Framer Motion", "Vite"
    ],
    "⚙️ Backend": [
        "Python", "FastAPI", "Node.js", "REST API",
        "JWT Auth", "Argon2id", "WebSocket"
    ],
    "🤖 Bot Development": [
        "Aiogram 3.x", "Telegram Bot API",
        "Async Event Loop", "Webhook / Polling"
    ],
    "🗄️ Database & DevOps": [
        "PostgreSQL", "LocalStorage Sync",
        "Git & GitHub", "Docker", "Render", "Netlify", "Vercel"
    ],
    "🔒 Security": [
        "AES-256-GCM", "HSTS", "CSP Level 3",
        "Rate Limiting", "Zero-Trust Architecture"
    ],
}

PROJECTS = [
    {
        "id": "word-game",
        "emoji": "🎮",
        "title": "Word Game (24/7 Multiplayer)",
        "category": "Multiplayer O'yinlar",
        "url": "https://wordm.netlify.app",
        "short": "24/7 real-time so'z o'yini",
        "desc": (
            "Butun dunyo bo'ylab o'yinchilarni birlashtiruvchi, sekunddan tezkor "
            "sinxronizatsiya va anticheat lug'at nazoratiga ega 24/7 onlayn "
            "so'z o'yini platformasi."
        ),
        "tech": ["React", "WebSocket Sync", "Tailwind CSS", "Game State Engine"],
        "features": [
            "24/7 jonli ulanish va matchmaking",
            "Sub-50ms real-time sinxronizatsiya",
            "Anticheat lug'at checksum tekshiruvi",
            "Moslashuvchan mobil va desktop UI",
        ],
        "performance": 99,
    },
    {
        "id": "upnura",
        "emoji": "🚀",
        "title": "UpNura Web Application",
        "category": "Zamonaviy Veb-Ilovalar",
        "url": "https://upnura.netlify.app",
        "short": "Zamonaviy high-performance UI",
        "desc": (
            "Modulli UI komponentlari, silliq animatsiyalar va sub-second "
            "yuklanish tezligiga ega zamonaviy veb-interfeys. Zero CLS va "
            "GPU-accelerated transitions."
        ),
        "tech": ["React 19", "TypeScript", "Tailwind CSS v4", "Vite"],
        "features": [
            "Ultra-toza fazoviy layout dizayn",
            "Zero layout shift (0 CLS)",
            "Sub-second LCP (<0.6s)",
            "GPU-accelerated CSS transitions",
        ],
        "performance": 98,
    },
    {
        "id": "qarz-daftari",
        "emoji": "📖",
        "title": "Qarz Daftari (Moliyaviy Ledger)",
        "category": "FinTech & Hisob-Kitob",
        "url": "https://qarz-daftari-islombe.vercel.app",
        "short": "Xavfsiz moliyaviy hisob-kitob",
        "desc": (
            "Xavfsiz moliyaviy hisob-kitob tizimi. Qarzdorlar ro'yxati, "
            "aniq floating-point hisoblash va hisobotlarni eksport qilish imkoniyati."
        ),
        "tech": ["Next.js / Edge", "Financial Algorithms", "Tailwind CSS", "Data Isolation"],
        "features": [
            "Aniq valyuta hisob-kitoblari",
            "Qarzdorlar xronologiyasi",
            "Hisobotlarni PDF/CSV eksport",
            "Shifrlangan lokal saqlash",
        ],
        "performance": 100,
    },
    {
        "id": "englif",
        "emoji": "🇬🇧",
        "title": "EnglIF (Ingliz Tili Platformasi)",
        "category": "Ta'lim Platformasi",
        "url": "https://englif.netlify.app",
        "short": "Interaktiv til o'rganish",
        "desc": (
            "Intervalli takrorlash, audio talaffuz va interaktiv testlar orqali "
            "ingliz tilini o'rganish platformasi. SM-2 algoritmi bilan."
        ),
        "tech": ["React", "Audio API", "Spaced Repetition", "Tailwind CSS"],
        "features": [
            "Adaptiv intervalli takrorlash (SM-2)",
            "Interaktiv audio talaffuz mashqlari",
            "Real-time progress va streak tracking",
            "Offline-first o'quv rejimi",
        ],
        "performance": 97,
    },
    {
        "id": "web-shopping",
        "emoji": "🛒",
        "title": "Web Shopping (Internet Do'kon)",
        "category": "Elektron Tijorat",
        "url": "https://web-shopping.netlify.app",
        "short": "To'liq E-Commerce platforma",
        "desc": (
            "Katalog filtrlari, doimiy savat va buyurtma berish tizimiga ega "
            "to'liq funksional internet-do'kon. Promocod va checkout."
        ),
        "tech": ["React", "Global Cart State", "E-Commerce Filtering", "REST API"],
        "features": [
            "Ko'p mezonli katalog filtrlari",
            "Doimiy savat holati (session recovery)",
            "Promocod va chegirma tekshiruvi",
            "Tezkor modal preview",
        ],
        "performance": 98,
    },
    {
        "id": "fc-point",
        "emoji": "⚽",
        "title": "FC Point Platform",
        "category": "Sport Tahlili",
        "url": "https://fc-point.netlify.app",
        "short": "Futbol analytics dashboard",
        "desc": (
            "Jonli futbol natijalari, jamoalar statistikasi va ochkolarni "
            "hisoblash uchun interaktiv sport platformasi. Matchday optimized."
        ),
        "tech": ["React", "Sports Analytics Engine", "Dynamic Dashboards", "Tailwind CSS"],
        "features": [
            "Jonli match hisob-kitoblari",
            "Jamoalar head-to-head statistikasi",
            "Yuqori kontrastli matchday UI",
            "Tezkor offline kesh",
        ],
        "performance": 99,
    },
]

SERVICES = [
    {"emoji": "🌐", "name": "Veb-sayt yaratish", "desc": "React, Next.js, Tailwind CSS asosida zamonaviy, responsive sayt", "price": "Kelishuv asosida", "time": "3-14 kun"},
    {"emoji": "⚙️", "name": "Backend API", "desc": "FastAPI, Python bilan xavfsiz va tezkor REST API", "price": "Kelishuv asosida", "time": "2-7 kun"},
    {"emoji": "🤖", "name": "Telegram Bot", "desc": "Aiogram 3.x bilan to'liq funksional bot", "price": "Kelishuv asosida", "time": "1-5 kun"},
    {"emoji": "🛒", "name": "E-Commerce platforma", "desc": "To'liq internet-do'kon: katalog, savat, buyurtma", "price": "Kelishuv asosida", "time": "7-21 kun"},
    {"emoji": "🔒", "name": "Xavfsizlik audit", "desc": "Sayt va API xavfsizligini tekshirish, JWT, CORS, CSP", "price": "Kelishuv asosida", "time": "1-3 kun"},
    {"emoji": "📱", "name": "Full-Stack loyiha", "desc": "Frontend + Backend + Deploy to'liq tsikl", "price": "Kelishuv asosida", "time": "14-30 kun"},
]

FAQ_DATA = [
    {"q": "Qanday texnologiyalar bilan ishlaysiz?", "a": "React 19, Next.js, TypeScript, Tailwind CSS, Python, FastAPI, Aiogram, PostgreSQL, Docker va boshqalar. 30+ texnologiya."},
    {"q": "Loyiha qancha vaqt oladi?", "a": "Oddiy sayt: 3-7 kun\nO'rtacha loyiha: 7-14 kun\nMurakkab platforma: 14-30 kun\nAniq muddat loyiha murakkabligiga bog'liq."},
    {"q": "Narxlar qanday?", "a": "Har bir loyiha individual baholanadi. Navbatga yoziling yoki to'g'ridan-to'g'ri @muhammadislom10 ga yozing — bepul konsultatsiya beriladi."},
    {"q": "Portfolio saytingiz bormi?", "a": f"Ha! Portfolio saytim: {PORTFOLIO_URL}\n6 ta live loyiham bor — barchasi hozir ishlaydi."},
    {"q": "Freelance qilasizmi?", "a": "Ha! Freelance buyurtmalar qabul qilaman. Telegram orqali bog'laning va loyihangizni muhokama qilamiz."},
    {"q": "Bot yaratib bera olasizmi?", "a": "Albatta! Aiogram 3.x bilan professional Telegram botlar yarataman: inline keyboard, FSM, navbat tizimi, API integratsiya, va boshqalar."},
]

MOTIVATIONAL_QUOTES = [
    ("Kod yozish — bu san'at. Har bir qator qadriyat yaratishi kerak.", "Rustambekov Muhammadislom"),
    ("Talk is cheap. Show me the code.", "Linus Torvalds"),
    ("First, solve the problem. Then, write the code.", "John Johnson"),
    ("The best way to predict the future is to invent it.", "Alan Kay"),
    ("Simplicity is the soul of efficiency.", "Austin Freeman"),
    ("Code is like humor. When you have to explain it, it's bad.", "Cory House"),
    ("Fix the cause, not the symptom.", "Steve Maguire"),
    ("Make it work, make it right, make it fast.", "Kent Beck"),
    ("Every great developer you know got there by solving problems.", "Patrick McKenzie"),
    ("Clean code always looks like it was written by someone who cares.", "Robert C. Martin"),
]

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# QUEUE SYSTEM
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUEUE_FILE = os.path.join(os.path.dirname(__file__), "queue_data.json")
user_states: Dict[int, dict] = {}


def load_queue() -> List[dict]:
    try:
        if os.path.exists(QUEUE_FILE):
            with open(QUEUE_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
    except Exception:
        pass
    return []


def save_queue(queue: List[dict]):
    with open(QUEUE_FILE, "w", encoding="utf-8") as f:
        json.dump(queue, f, ensure_ascii=False, indent=2)


def add_to_queue(user_id: int, full_name: str, username: str, phone: str, service: str, message: str) -> int:
    queue = load_queue()
    entry = {
        "id": len(queue) + 1,
        "user_id": user_id,
        "full_name": full_name,
        "username": username,
        "phone": phone,
        "service": service,
        "message": message,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "status": "KUTILMOQDA"
    }
    queue.append(entry)
    save_queue(queue)
    return len(queue)


def get_pending_count() -> int:
    return len([q for q in load_queue() if q["status"] == "KUTILMOQDA"])


def get_total_count() -> int:
    return len(load_queue())


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# SKILL BAR GENERATOR
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def skill_bar(name: str, level: int) -> str:
    filled = level // 10
    empty = 10 - filled
    bar = "█" * filled + "░" * empty
    return f"  {bar} {level}% — {name}"


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# KEYBOARDS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def main_menu_kb() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [
            InlineKeyboardButton(text="👨‍💻 Men haqimda", callback_data="about"),
            InlineKeyboardButton(text="📈 Skilllarim", callback_data="skills"),
        ],
        [
            InlineKeyboardButton(text="🚀 Loyihalarim", callback_data="projects_0"),
            InlineKeyboardButton(text="💻 Tech Stack", callback_data="tech"),
        ],
        [
            InlineKeyboardButton(text="💼 Xizmatlar", callback_data="services"),
            InlineKeyboardButton(text="❓ FAQ", callback_data="faq_menu"),
        ],
        [
            InlineKeyboardButton(text="📝 Navbatga yozilish", callback_data="queue_start"),
            InlineKeyboardButton(text="📊 Dashboard", callback_data="dashboard"),
        ],
        [
            InlineKeyboardButton(text="💡 Motivatsiya", callback_data="quote"),
            InlineKeyboardButton(text="📞 Aloqa", callback_data="contact"),
        ],
        [
            InlineKeyboardButton(text="🌐 Portfolio saytim", url=PORTFOLIO_URL),
        ],
    ])


def back_kb(extra_buttons: list = None) -> InlineKeyboardMarkup:
    buttons = extra_buttons or []
    buttons.append([InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")])
    return InlineKeyboardMarkup(inline_keyboard=buttons)


def projects_page_kb(page: int) -> InlineKeyboardMarkup:
    PER_PAGE = 3
    start = page * PER_PAGE
    end = start + PER_PAGE
    page_projects = PROJECTS[start:end]
    total_pages = (len(PROJECTS) + PER_PAGE - 1) // PER_PAGE

    buttons = []
    for proj in page_projects:
        buttons.append([
            InlineKeyboardButton(
                text=f"{proj['emoji']} {proj['title']}",
                callback_data=f"proj_{proj['id']}"
            )
        ])

    # Pagination row
    nav = []
    if page > 0:
        nav.append(InlineKeyboardButton(text="◀️ Oldingi", callback_data=f"projects_{page - 1}"))
    nav.append(InlineKeyboardButton(text=f"📄 {page + 1}/{total_pages}", callback_data="noop"))
    if end < len(PROJECTS):
        nav.append(InlineKeyboardButton(text="Keyingi ▶️", callback_data=f"projects_{page + 1}"))
    buttons.append(nav)

    buttons.append([InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")])
    return InlineKeyboardMarkup(inline_keyboard=buttons)


def project_detail_kb(proj_id: str, url: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="🔗 Live Demo ochish", url=url)],
        [
            InlineKeyboardButton(text="◀️ Loyihalar", callback_data="projects_0"),
            InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu"),
        ]
    ])


def services_kb() -> InlineKeyboardMarkup:
    buttons = []
    for i, svc in enumerate(SERVICES):
        buttons.append([
            InlineKeyboardButton(
                text=f"{svc['emoji']} {svc['name']}",
                callback_data=f"svc_{i}"
            )
        ])
    buttons.append([InlineKeyboardButton(text="📝 Buyurtma berish", callback_data="queue_start")])
    buttons.append([InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")])
    return InlineKeyboardMarkup(inline_keyboard=buttons)


def faq_menu_kb() -> InlineKeyboardMarkup:
    buttons = []
    for i, faq in enumerate(FAQ_DATA):
        buttons.append([
            InlineKeyboardButton(text=f"❓ {faq['q'][:40]}...", callback_data=f"faq_{i}")
        ])
    buttons.append([InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")])
    return InlineKeyboardMarkup(inline_keyboard=buttons)


def queue_service_kb() -> InlineKeyboardMarkup:
    buttons = []
    row = []
    for i, svc in enumerate(SERVICES):
        row.append(InlineKeyboardButton(text=f"{svc['emoji']} {svc['name']}", callback_data=f"qsvc_{i}"))
        if len(row) == 2:
            buttons.append(row)
            row = []
    if row:
        buttons.append(row)
    buttons.append([InlineKeyboardButton(text="❌ Bekor qilish", callback_data="main_menu")])
    return InlineKeyboardMarkup(inline_keyboard=buttons)


def queue_skip_phone_kb() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="⏭ Tashlab ketish", callback_data="queue_skip_phone")]
    ])


def admin_queue_kb() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="📋 Barcha navbat", callback_data="admin_queue_all")],
        [InlineKeyboardButton(text="✅ Oxirgisini bajarildi qilish", callback_data="admin_queue_done")],
        [InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")],
    ])


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BOT SETUP
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
bot = Bot(
    token=BOT_TOKEN,
    default=DefaultBotProperties(parse_mode=ParseMode.HTML)
)
dp = Dispatcher()
router = Router()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# /start
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
@router.message(CommandStart())
async def cmd_start(message: Message):
    metrics.track_user(message.from_user.id)
    now = datetime.now(timezone(timedelta(hours=5)))
    hour = now.hour
    if hour < 6:
        greeting = "Xayrli tun"
    elif hour < 12:
        greeting = "Xayrli tong"
    elif hour < 18:
        greeting = "Xayrli kun"
    else:
        greeting = "Xayrli kech"

    welcome = (
        "⚡ <b>ANTIGRAVITY</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        "Intelligent Automation Engine\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

        f"{greeting}, <b>{message.from_user.full_name}</b>! 👋\n\n"

        "Men — <b>Rustambekov Muhammadislom</b>\n"
        "🎯 17 yoshli Full-Stack Software Engineer\n"
        "📍 O'zbekiston 🇺🇿\n\n"

        "┌─────────────────────────────┐\n"
        "│  🚀 6 ta live loyiha muallifi     │\n"
        "│  💻 30+ texnologiya ustasi         │\n"
        "│  🤖 Professional bot developer  │\n"
        "│  🔒 Kiberxavfsizlik eksperi       │\n"
        "└─────────────────────────────┘\n\n"

        "Quyidagi menyudan kerakli bo'limni tanlang 👇"
    )
    await message.answer(welcome, reply_markup=main_menu_kb())


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# MAIN MENU
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
@router.callback_query(F.data == "main_menu")
async def go_main_menu(cb: CallbackQuery):
    user_states.pop(cb.from_user.id, None)
    metrics.track_callback()
    text = (
        "⚡ <b>ANTIGRAVITY</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        "Intelligent Automation Engine\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        "Bo'limni tanlang 👇"
    )
    await cb.message.edit_text(text, reply_markup=main_menu_kb())
    await cb.answer()


@router.callback_query(F.data == "noop")
async def noop(cb: CallbackQuery):
    await cb.answer()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# /help
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
@router.message(Command("help"))
async def cmd_help(message: Message):
    metrics.track_user(message.from_user.id)
    text = (
        "⚡ <b>ANTIGRAVITY — Buyruqlar</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        "  /start    — Botni ishga tushirish\n"
        "  /about    — Men haqimda\n"
        "  /skills   — Skilllar va darajalar\n"
        "  /projects — Live loyihalar\n"
        "  /tech     — Texnologiyalar\n"
        "  /services — Xizmatlar ro'yxati\n"
        "  /faq      — Ko'p so'raladigan savollar\n"
        "  /queue    — Navbatga yozilish\n"
        "  /stats    — Dashboard statistika\n"
        "  /quote    — Motivatsion iqtibos\n"
        "  /contact  — Aloqa ma'lumotlari\n"
        "  /help     — Shu yordam\n"
    )
    await message.answer(text, reply_markup=back_kb())


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ABOUT
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async def _send_about(target, edit=False):
    dev = DEVELOPER
    text = (
        "👨‍💻 <b>RUSTAMBEKOV MUHAMMADISLOM</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

        f"🎯 <b>Kasb:</b>      {dev['role']}\n"
        f"🎂 <b>Yosh:</b>      {dev['age']}\n"
        f"📍 <b>Manzil:</b>    {dev['location']}\n"
        f"📧 <b>Email:</b>     {dev['email']}\n"
        f"✈️ <b>Telegram:</b>  {dev['telegram']}\n\n"

        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        "📝 <b>BIO:</b>\n\n"

        "Yosh va ambitsiyali Full-Stack dasturchi.\n"
        "Frontend va Backend texnologiyalarini puxta\n"
        "egallagan, zamonaviy veb-ilovalar, Telegram\n"
        "botlar va xavfsiz API tizimlarini yarataman.\n\n"

        "🏆 <b>Yutuqlar:</b>\n"
        "  ├ 6 ta real production loyiha (barchasi LIVE)\n"
        "  ├ Full-Stack: Frontend + Backend + Bot\n"
        "  ├ 30+ texnologiya bilan tajriba\n"
        "  ├ AES-256, JWT, Argon2id bilan ishlash\n"
        "  ├ CI/CD, Docker, Cloud deployment\n"
        "  └ 17 yoshda professional portfolio\n\n"

        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        "💡 <i>\"Kod yozish — bu san'at. Har bir qator\n"
        "     qadriyat yaratishi kerak.\"</i>"
    )
    if edit:
        await target.edit_text(text, reply_markup=back_kb())
    else:
        await target.answer(text, reply_markup=back_kb())


@router.message(Command("about"))
async def cmd_about(msg: Message):
    metrics.track_user(msg.from_user.id)
    await _send_about(msg)


@router.callback_query(F.data == "about")
async def cb_about(cb: CallbackQuery):
    metrics.track_callback()
    await _send_about(cb.message, edit=True)
    await cb.answer()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# SKILLS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async def _send_skills(target, edit=False):
    lines = [
        "📈 <b>SKILL DARAJALARI</b>",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n",
    ]
    for name, level in SKILLS.items():
        lines.append(f"<code>{skill_bar(name, level)}</code>")

    avg = sum(SKILLS.values()) // len(SKILLS)
    lines.append(f"\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    lines.append(f"📊 <b>O'rtacha daraja:</b> {avg}%")
    lines.append("🔥 <b>Status:</b> Doimiy rivojlanishda")

    text = "\n".join(lines)
    if edit:
        await target.edit_text(text, reply_markup=back_kb())
    else:
        await target.answer(text, reply_markup=back_kb())


@router.message(Command("skills"))
async def cmd_skills(msg: Message):
    metrics.track_user(msg.from_user.id)
    await _send_skills(msg)


@router.callback_query(F.data == "skills")
async def cb_skills(cb: CallbackQuery):
    metrics.track_callback()
    await _send_skills(cb.message, edit=True)
    await cb.answer()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# TECH STACK
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async def _send_tech(target, edit=False):
    lines = [
        "💻 <b>TEXNOLOGIYALAR</b>",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n",
    ]
    for category, techs in TECH_STACK.items():
        lines.append(f"<b>{category}</b>")
        for t in techs:
            lines.append(f"  ├ {t}")
        lines[-1] = lines[-1].replace("├", "└")
        lines.append("")

    total = sum(len(v) for v in TECH_STACK.values())
    lines.append("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    lines.append(f"📊 <b>Jami:</b> {total}+ texnologiya")

    text = "\n".join(lines)
    if edit:
        await target.edit_text(text, reply_markup=back_kb())
    else:
        await target.answer(text, reply_markup=back_kb())


@router.message(Command("tech"))
async def cmd_tech(msg: Message):
    metrics.track_user(msg.from_user.id)
    await _send_tech(msg)


@router.callback_query(F.data == "tech")
async def cb_tech(cb: CallbackQuery):
    metrics.track_callback()
    await _send_tech(cb.message, edit=True)
    await cb.answer()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PROJECTS (with pagination)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async def _send_projects(target, page=0, edit=False):
    text = (
        "🚀 <b>LIVE LOYIHALARIM</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        "Barcha loyihalar real va <b>hozir ishlaydi</b>.\n"
        "Batafsil ko'rish uchun tanlang 👇\n"
    )
    if edit:
        await target.edit_text(text, reply_markup=projects_page_kb(page))
    else:
        await target.answer(text, reply_markup=projects_page_kb(page))


@router.message(Command("projects"))
async def cmd_projects(msg: Message):
    metrics.track_user(msg.from_user.id)
    await _send_projects(msg)


@router.callback_query(F.data.startswith("projects_"))
async def cb_projects_page(cb: CallbackQuery):
    metrics.track_callback()
    page = int(cb.data.split("_")[1])
    await _send_projects(cb.message, page=page, edit=True)
    await cb.answer()


@router.callback_query(F.data.startswith("proj_"))
async def cb_project_detail(cb: CallbackQuery):
    metrics.track_callback()
    metrics.track_project_view()
    proj_id = cb.data.replace("proj_", "")
    proj = next((p for p in PROJECTS if p["id"] == proj_id), None)
    if not proj:
        await cb.answer("Topilmadi", show_alert=True)
        return

    perf_bar = "█" * (proj["performance"] // 10) + "░" * (10 - proj["performance"] // 10)
    features_text = "\n".join(f"  ├ {f}" for f in proj["features"][:-1])
    features_text += f"\n  └ {proj['features'][-1]}"
    tech_text = " • ".join(proj["tech"])

    text = (
        f"{proj['emoji']} <b>{proj['title']}</b>\n"
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"📂 <b>Kategoriya:</b> {proj['category']}\n"
        f"🟢 <b>Status:</b> LIVE\n\n"
        f"📝 <b>Tavsif:</b>\n{proj['desc']}\n\n"
        f"✨ <b>Xususiyatlar:</b>\n{features_text}\n\n"
        f"🛠 <b>Tech:</b> <code>{tech_text}</code>\n\n"
        f"📊 <b>Performance:</b>\n"
        f"  <code>{perf_bar}</code> {proj['performance']}/100\n\n"
        f"🔗 {proj['url']}"
    )
    await cb.message.edit_text(text, reply_markup=project_detail_kb(proj_id, proj["url"]))
    await cb.answer()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# SERVICES
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async def _send_services(target, edit=False):
    text = (
        "💼 <b>XIZMATLAR</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        "Professional dasturlash xizmatlari.\n"
        "Batafsil ma'lumot uchun tanlang 👇\n"
    )
    if edit:
        await target.edit_text(text, reply_markup=services_kb())
    else:
        await target.answer(text, reply_markup=services_kb())


@router.message(Command("services"))
async def cmd_services(msg: Message):
    metrics.track_user(msg.from_user.id)
    await _send_services(msg)


@router.callback_query(F.data == "services")
async def cb_services(cb: CallbackQuery):
    metrics.track_callback()
    await _send_services(cb.message, edit=True)
    await cb.answer()


@router.callback_query(F.data.startswith("svc_"))
async def cb_service_detail(cb: CallbackQuery):
    metrics.track_callback()
    idx = int(cb.data.replace("svc_", ""))
    svc = SERVICES[idx]
    text = (
        f"{svc['emoji']} <b>{svc['name']}</b>\n"
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"📝 <b>Tavsif:</b>\n{svc['desc']}\n\n"
        f"💰 <b>Narx:</b> {svc['price']}\n"
        f"⏱ <b>Muddat:</b> {svc['time']}\n\n"
        f"💬 Buyurtma berish uchun navbatga yoziling!"
    )
    kb = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="📝 Buyurtma berish", callback_data="queue_start")],
        [InlineKeyboardButton(text="◀️ Xizmatlar", callback_data="services")],
        [InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")],
    ])
    await cb.message.edit_text(text, reply_markup=kb)
    await cb.answer()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# FAQ
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
@router.message(Command("faq"))
async def cmd_faq(msg: Message):
    metrics.track_user(msg.from_user.id)
    text = (
        "❓ <b>KO'P SO'RALADIGAN SAVOLLAR</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        "Savol tanlang 👇"
    )
    await msg.answer(text, reply_markup=faq_menu_kb())


@router.callback_query(F.data == "faq_menu")
async def cb_faq_menu(cb: CallbackQuery):
    metrics.track_callback()
    text = (
        "❓ <b>KO'P SO'RALADIGAN SAVOLLAR</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        "Savol tanlang 👇"
    )
    await cb.message.edit_text(text, reply_markup=faq_menu_kb())
    await cb.answer()


@router.callback_query(F.data.startswith("faq_"))
async def cb_faq_answer(cb: CallbackQuery):
    if cb.data == "faq_menu":
        return
    metrics.track_callback()
    idx = int(cb.data.replace("faq_", ""))
    faq = FAQ_DATA[idx]
    text = (
        f"❓ <b>{faq['q']}</b>\n"
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"💬 {faq['a']}"
    )
    kb = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="❓ Boshqa savollar", callback_data="faq_menu")],
        [InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")],
    ])
    await cb.message.edit_text(text, reply_markup=kb)
    await cb.answer()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# DASHBOARD
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async def _send_dashboard(target, edit=False):
    total_tech = sum(len(v) for v in TECH_STACK.values())
    now = datetime.now(timezone(timedelta(hours=5))).strftime("%H:%M:%S")

    text = (
        "📊 <b>ANTIGRAVITY DASHBOARD</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        f"⏰ Toshkent vaqti: <code>{now}</code>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

        "📈 <b>BOT METRIKALARI</b>\n"
        f"  ├ 👥 Foydalanuvchilar:  {len(metrics.total_users)}\n"
        f"  ├ 📨 Buyruqlar:         {metrics.total_commands}\n"
        f"  ├ 🖱 Callback'lar:      {metrics.total_callbacks}\n"
        f"  ├ 🚀 Ko'rilgan loyiha:  {metrics.projects_viewed}\n"
        f"  └ ⏱ Uptime:             {metrics.uptime}\n\n"

        "🏗 <b>PORTFOLIO METRIKALARI</b>\n"
        f"  ├ 🚀 Live loyihalar:    {len(PROJECTS)}\n"
        f"  ├ 💻 Texnologiyalar:    {total_tech}+\n"
        f"  ├ 💼 Xizmatlar:         {len(SERVICES)}\n"
        f"  ├ 📝 Navbatda:          {get_pending_count()} kishi\n"
        f"  └ 📋 Jami so'rovlar:    {get_total_count()}\n\n"

        "🟢 <b>SYSTEM STATUS</b>\n"
        f"  ├ Bot:       <code>ONLINE</code>\n"
        f"  ├ Backend:   <code>DEPLOYED</code>\n"
        f"  ├ Frontend:  <code>LIVE</code>\n"
        f"  └ Security:  <code>ACTIVE</code>\n\n"

        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        "💡 <i>Real-time dashboard — har safar yangilanadi</i>"
    )
    kb = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="🔄 Yangilash", callback_data="dashboard")],
        [InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")],
    ])
    if edit:
        await target.edit_text(text, reply_markup=kb)
    else:
        await target.answer(text, reply_markup=kb)


@router.message(Command("stats"))
async def cmd_stats(msg: Message):
    metrics.track_user(msg.from_user.id)
    await _send_dashboard(msg)


@router.callback_query(F.data == "dashboard")
async def cb_dashboard(cb: CallbackQuery):
    metrics.track_callback()
    await _send_dashboard(cb.message, edit=True)
    await cb.answer("📊 Dashboard yangilandi!")


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# QUOTE
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async def _send_quote(target, edit=False):
    quote, author = random.choice(MOTIVATIONAL_QUOTES)
    text = (
        "💡 <b>MOTIVATSIYA</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"<i>\"{quote}\"</i>\n\n"
        f"— <b>{author}</b>"
    )
    kb = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="🔄 Boshqa iqtibos", callback_data="quote")],
        [InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")],
    ])
    if edit:
        await target.edit_text(text, reply_markup=kb)
    else:
        await target.answer(text, reply_markup=kb)


@router.message(Command("quote"))
async def cmd_quote(msg: Message):
    metrics.track_user(msg.from_user.id)
    await _send_quote(msg)


@router.callback_query(F.data == "quote")
async def cb_quote(cb: CallbackQuery):
    metrics.track_callback()
    await _send_quote(cb.message, edit=True)
    await cb.answer()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# CONTACT
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async def _send_contact(target, edit=False):
    dev = DEVELOPER
    text = (
        "📞 <b>ALOQA</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"👤 <b>Ism:</b>       {dev['full_name']}\n"
        f"📱 <b>Telefon:</b>   {dev['phone']}\n"
        f"📧 <b>Email:</b>     {dev['email']}\n"
        f"✈️ <b>Telegram:</b>  {dev['telegram']}\n"
        f"🐙 <b>GitHub:</b>    {dev['github']}\n\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        "💬 <i>Loyiha muhokamasi yoki savol uchun\n"
        "   yozing — tez javob kafolatlanadi!</i>"
    )
    tg_user = dev["telegram"].replace("@", "")
    kb = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="✈️ Telegram orqali yozish", url=f"https://t.me/{tg_user}")],
        [InlineKeyboardButton(text="📝 Navbatga yozilish", callback_data="queue_start")],
        [InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")],
    ])
    if edit:
        await target.edit_text(text, reply_markup=kb)
    else:
        await target.answer(text, reply_markup=kb)


@router.message(Command("contact"))
async def cmd_contact(msg: Message):
    metrics.track_user(msg.from_user.id)
    await _send_contact(msg)


@router.callback_query(F.data == "contact")
async def cb_contact(cb: CallbackQuery):
    metrics.track_callback()
    await _send_contact(cb.message, edit=True)
    await cb.answer()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# QUEUE SYSTEM (Navbatga yozilish)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
@router.message(Command("queue"))
@router.callback_query(F.data == "queue_start")
async def queue_start(event: Message | CallbackQuery):
    if isinstance(event, CallbackQuery):
        metrics.track_callback()
    else:
        metrics.track_user(event.from_user.id)

    pending = get_pending_count()
    text = (
        "📝 <b>NAVBATGA YOZILISH</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

        "Professional konsultatsiya va loyiha\n"
        "buyurtmasi uchun navbatga yoziling.\n\n"

        f"👥 <b>Hozirgi navbat:</b> {pending} kishi\n"
        f"⏱ <b>Javob vaqti:</b> 1-24 soat\n\n"

        "Qaysi xizmat kerak? 👇"
    )
    if isinstance(event, CallbackQuery):
        await event.message.edit_text(text, reply_markup=queue_service_kb())
        await event.answer()
    else:
        await event.answer(text, reply_markup=queue_service_kb())


@router.callback_query(F.data.startswith("qsvc_"))
async def queue_select_service(cb: CallbackQuery):
    idx = int(cb.data.replace("qsvc_", ""))
    svc = SERVICES[idx]
    user_states[cb.from_user.id] = {"step": "phone", "service": svc["name"]}
    await cb.message.edit_text(
        f"✅ <b>Tanlandi:</b> {svc['emoji']} {svc['name']}\n\n"
        "📱 <b>1-qadam:</b> Telefon raqamingizni yozing\n\n"
        "<i>Masalan: +998 90 123 45 67</i>\n"
        "Yoki tashlab keting 👇",
        reply_markup=queue_skip_phone_kb()
    )
    await cb.answer()


@router.callback_query(F.data == "queue_skip_phone")
async def queue_skip_phone(cb: CallbackQuery):
    state = user_states.get(cb.from_user.id, {})
    state["step"] = "message"
    state["phone"] = "Ko'rsatilmagan"
    user_states[cb.from_user.id] = state
    await cb.message.edit_text(
        "💬 <b>2-qadam:</b> Loyihangiz haqida yozing\n\n"
        "<i>Nima kerak? Qanday loyiha?\n"
        "Qisqacha tasvirlab bering.</i>"
    )
    await cb.answer()


@router.message(F.text)
async def handle_text(message: Message):
    user_id = message.from_user.id
    state = user_states.get(user_id)

    if not state:
        # If user sends random text, show help
        await message.answer(
            "👋 Menyudan foydalaning yoki /start bosing!",
            reply_markup=back_kb()
        )
        return

    if state["step"] == "phone":
        state["phone"] = message.text
        state["step"] = "message"
        user_states[user_id] = state
        await message.answer(
            "✅ Telefon qabul qilindi!\n\n"
            "💬 <b>2-qadam:</b> Loyihangiz haqida yozing\n\n"
            "<i>Nima kerak? Qanday loyiha?\n"
            "Qisqacha tasvirlab bering.</i>"
        )

    elif state["step"] == "message":
        phone = state.get("phone", "Ko'rsatilmagan")
        service = state.get("service", "Umumiy")
        username = f"@{message.from_user.username}" if message.from_user.username else "Yo'q"

        position = add_to_queue(
            user_id=user_id,
            full_name=message.from_user.full_name,
            username=username,
            phone=phone,
            service=service,
            message=message.text
        )

        del user_states[user_id]

        await message.answer(
            "✅ <b>NAVBATGA YOZILDINGIZ!</b>\n"
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
            f"📋 <b>Navbat:</b>     #{position}\n"
            f"👤 <b>Ism:</b>        {message.from_user.full_name}\n"
            f"💼 <b>Xizmat:</b>     {service}\n"
            f"📱 <b>Telefon:</b>    {phone}\n"
            f"💬 <b>Xabar:</b>      {message.text[:80]}...\n\n"
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
            "⏱ <b>Muhammadislom 1-24 soat ichida\n"
            "   siz bilan bog'lanadi.</b>\n\n"
            "💡 <i>Tezroq javob: @muhammadislom10</i>",
            reply_markup=back_kb()
        )

        # Notify owner
        try:
            owner_text = (
                "🔔 <b>YANGI BUYURTMA!</b>\n"
                "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
                f"📋 <b>#:</b>       {position}\n"
                f"👤 <b>Ism:</b>     {message.from_user.full_name}\n"
                f"🆔 <b>User:</b>    {username}\n"
                f"📱 <b>Tel:</b>     {phone}\n"
                f"💼 <b>Xizmat:</b>  {service}\n"
                f"🆔 <b>ID:</b>      <code>{user_id}</code>\n\n"
                f"💬 <b>Xabar:</b>\n{message.text}\n\n"
                f"⏰ {datetime.now(timezone(timedelta(hours=5))).strftime('%Y-%m-%d %H:%M')}"
            )
            await bot.send_message(OWNER_CHAT_ID, owner_text)
        except Exception as e:
            logger.error(f"Owner notification failed: {e}")


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ADMIN COMMANDS (only for owner)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
@router.message(Command("admin"))
async def cmd_admin(message: Message):
    if message.from_user.id != OWNER_CHAT_ID:
        await message.answer("⛔ Ruxsat yo'q.")
        return
    text = (
        "🔐 <b>ADMIN PANEL</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"👥 Foydalanuvchilar:  {len(metrics.total_users)}\n"
        f"📨 Buyruqlar:         {metrics.total_commands}\n"
        f"📝 Navbatda:          {get_pending_count()}\n"
        f"📋 Jami so'rovlar:    {get_total_count()}\n"
        f"⏱ Uptime:             {metrics.uptime}\n"
    )
    await message.answer(text, reply_markup=admin_queue_kb())


@router.callback_query(F.data == "admin_queue_all")
async def admin_queue_all(cb: CallbackQuery):
    if cb.from_user.id != OWNER_CHAT_ID:
        await cb.answer("⛔ Ruxsat yo'q.", show_alert=True)
        return
    queue = load_queue()
    pending = [q for q in queue if q["status"] == "KUTILMOQDA"]
    if not pending:
        await cb.answer("Navbat bo'sh!", show_alert=True)
        return
    lines = ["📋 <b>NAVBAT RO'YXATI</b>\n"]
    for q in pending[-10:]:
        lines.append(
            f"#{q['id']} | {q['full_name']} | {q['service']}\n"
            f"   Tel: {q['phone']} | {q['username']}\n"
            f"   {q['message'][:60]}...\n"
        )
    await cb.message.edit_text("\n".join(lines), reply_markup=admin_queue_kb())
    await cb.answer()


@router.callback_query(F.data == "admin_queue_done")
async def admin_queue_done(cb: CallbackQuery):
    if cb.from_user.id != OWNER_CHAT_ID:
        await cb.answer("⛔ Ruxsat yo'q.", show_alert=True)
        return
    queue = load_queue()
    pending = [q for q in queue if q["status"] == "KUTILMOQDA"]
    if not pending:
        await cb.answer("Navbat bo'sh!", show_alert=True)
        return
    pending[-1]["status"] = "BAJARILDI"
    save_queue(queue)
    await cb.answer(f"✅ #{pending[-1]['id']} bajarildi!", show_alert=True)


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# INLINE MODE (sharing projects in other chats)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
@router.inline_query()
async def inline_handler(query: InlineQuery):
    results = []
    search = query.query.lower()
    for proj in PROJECTS:
        if search and search not in proj["title"].lower() and search not in proj["category"].lower():
            continue
        results.append(
            InlineQueryResultArticle(
                id=proj["id"],
                title=f"{proj['emoji']} {proj['title']}",
                description=proj["short"],
                input_message_content=InputTextMessageContent(
                    message_text=(
                        f"{proj['emoji']} <b>{proj['title']}</b>\n\n"
                        f"{proj['desc']}\n\n"
                        f"🛠 {' • '.join(proj['tech'])}\n"
                        f"🔗 {proj['url']}\n\n"
                        f"👨‍💻 Developer: @muhammadislom10"
                    ),
                    parse_mode=ParseMode.HTML
                )
            )
        )
    await query.answer(results, cache_time=60, is_personal=True)


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# MAIN
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async def set_commands():
    commands = [
        BotCommand(command="start", description="⚡ Botni ishga tushirish"),
        BotCommand(command="about", description="👨‍💻 Men haqimda"),
        BotCommand(command="skills", description="📈 Skill darajalari"),
        BotCommand(command="projects", description="🚀 Live loyihalar"),
        BotCommand(command="tech", description="💻 Texnologiyalar"),
        BotCommand(command="services", description="💼 Xizmatlar"),
        BotCommand(command="faq", description="❓ Savollar"),
        BotCommand(command="queue", description="📝 Navbatga yozilish"),
        BotCommand(command="stats", description="📊 Dashboard"),
        BotCommand(command="quote", description="💡 Motivatsiya"),
        BotCommand(command="contact", description="📞 Aloqa"),
        BotCommand(command="help", description="📖 Yordam"),
    ]
    await bot.set_my_commands(commands)


async def main():
    logger.info("⚡ Antigravity Bot ishga tushmoqda...")
    dp.include_router(router)
    await set_commands()
    logger.info("✅ Bot tayyor! Polling boshlandi...")
    await dp.start_polling(bot, skip_updates=True)


if __name__ == "__main__":
    asyncio.run(main())
