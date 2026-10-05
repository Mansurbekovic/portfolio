"""
╔══════════════════════════════════════════════════════════════╗
║  🚀 RUSTAMBEKOV MUHAMMADISLOM — PORTFOLIO TELEGRAM BOT     ║
║  Full-Stack Developer • Aiogram 3.x • Python               ║
╚══════════════════════════════════════════════════════════════╝
"""

import asyncio
import logging
import os
import json
from datetime import datetime, timezone
from typing import Dict, List, Optional

from aiogram import Bot, Dispatcher, Router, F
from aiogram.types import (
    Message, CallbackQuery, InlineKeyboardMarkup, InlineKeyboardButton,
    BotCommand
)
from aiogram.filters import CommandStart, Command
from aiogram.enums import ParseMode
from aiogram.client.default import DefaultBotProperties

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# CONFIGURATION
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BOT_TOKEN = os.getenv("BOT_TOKEN", "8998536495:AAFjX6H191oD0p9PMyAVQKX3UV7CkPRjoSw")
OWNER_CHAT_ID = int(os.getenv("OWNER_CHAT_ID", "8452066082"))
PORTFOLIO_URL = os.getenv("PORTFOLIO_URL", "https://rustambekov-portfolio.onrender.com")

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger(__name__)

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# DEVELOPER DATA
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEVELOPER = {
    "full_name": "Rustambekov Muhammadislom",
    "role": "Full-Stack Software Engineer",
    "age": "17 yoshda",
    "location": "🇺🇿 O'zbekiston",
    "phone": "+998 50 301 63 47",
    "email": "rustambekov.islom@gmail.com",
    "telegram": "@muhammadislom10",
    "github": "https://github.com/Muhammadislom08",
    "portfolio": PORTFOLIO_URL,
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
    "🗄️ Database & Tools": [
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
        "desc": "24/7 ishlovchi 2 kishilik interaktiv real-time so'z o'yini. WebSocket orqali tezkor sinxronizatsiya va anticheat tizimi bilan.",
        "tech": "React • WebSocket • Tailwind CSS",
    },
    {
        "id": "upnura",
        "emoji": "🚀",
        "title": "UpNura Web Application",
        "category": "Zamonaviy Veb-Ilovalar",
        "url": "https://upnura.netlify.app",
        "desc": "Modulli UI komponentlari, silliq animatsiyalar va sub-second yuklanish tezligiga ega zamonaviy veb-interfeys.",
        "tech": "React 19 • TypeScript • Tailwind CSS v4",
    },
    {
        "id": "qarz-daftari",
        "emoji": "📖",
        "title": "Qarz Daftari (Moliyaviy Ledger)",
        "category": "FinTech & Hisob-Kitob",
        "url": "https://qarz-daftari-islombe.vercel.app",
        "desc": "Xavfsiz moliyaviy hisob-kitob tizimi. Qarzdorlar ro'yxati, aniq hisoblash va hisobotlarni eksport qilish imkoniyati.",
        "tech": "Next.js • Financial Algorithms • Tailwind CSS",
    },
    {
        "id": "englif",
        "emoji": "🇬🇧",
        "title": "EnglIF (Ingliz Tili Platformasi)",
        "category": "Ta'lim Platformasi",
        "url": "https://englif.netlify.app",
        "desc": "Intervalli takrorlash, audio talaffuz va interaktiv testlar orqali ingliz tilini o'rganish platformasi.",
        "tech": "React • Audio API • Spaced Repetition",
    },
    {
        "id": "web-shopping",
        "emoji": "🛒",
        "title": "Web Shopping (Internet Do'kon)",
        "category": "Elektron Tijorat",
        "url": "https://web-shopping.netlify.app",
        "desc": "Katalog filtrlari, doimiy savat va buyurtma berish tizimiga ega to'liq funksional internet-do'kon.",
        "tech": "React • Global State • REST API",
    },
    {
        "id": "fc-point",
        "emoji": "⚽",
        "title": "FC Point Platform",
        "category": "Sport Tahlili",
        "url": "https://fc-point.netlify.app",
        "desc": "Jonli futbol natijalari, jamoalar statistikasi va ochkolarni hisoblash uchun interaktiv sport platformasi.",
        "tech": "React • Sports Analytics • Dynamic Dashboard",
    },
]

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# QUEUE SYSTEM (Navbat)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUEUE_FILE = os.path.join(os.path.dirname(__file__), "queue_data.json")
user_states: Dict[int, dict] = {}


def load_queue() -> List[dict]:
    """Load queue from persistent storage."""
    try:
        if os.path.exists(QUEUE_FILE):
            with open(QUEUE_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
    except Exception:
        pass
    return []


def save_queue(queue: List[dict]):
    """Save queue to persistent storage."""
    with open(QUEUE_FILE, "w", encoding="utf-8") as f:
        json.dump(queue, f, ensure_ascii=False, indent=2)


def add_to_queue(user_id: int, full_name: str, username: str, phone: str, message: str) -> int:
    """Add user to consultation queue. Returns queue position."""
    queue = load_queue()
    entry = {
        "id": len(queue) + 1,
        "user_id": user_id,
        "full_name": full_name,
        "username": username,
        "phone": phone,
        "message": message,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "status": "KUTILMOQDA"
    }
    queue.append(entry)
    save_queue(queue)
    return len(queue)


def get_queue_count() -> int:
    """Get total pending queue count."""
    queue = load_queue()
    return len([q for q in queue if q["status"] == "KUTILMOQDA"])


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# KEYBOARDS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
def main_menu_kb() -> InlineKeyboardMarkup:
    """Main menu keyboard."""
    return InlineKeyboardMarkup(inline_keyboard=[
        [
            InlineKeyboardButton(text="👨‍💻 Men haqimda", callback_data="about"),
            InlineKeyboardButton(text="💻 Texnologiyalar", callback_data="tech"),
        ],
        [
            InlineKeyboardButton(text="🚀 Loyihalarim", callback_data="projects"),
            InlineKeyboardButton(text="📊 Statistika", callback_data="stats"),
        ],
        [
            InlineKeyboardButton(text="📝 Navbatga yozilish", callback_data="queue_start"),
        ],
        [
            InlineKeyboardButton(text="📞 Aloqa", callback_data="contact"),
            InlineKeyboardButton(text="🌐 Portfolio sayt", url=PORTFOLIO_URL),
        ],
    ])


def back_menu_kb() -> InlineKeyboardMarkup:
    """Back to main menu."""
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")]
    ])


def projects_list_kb() -> InlineKeyboardMarkup:
    """Projects list keyboard."""
    buttons = []
    for proj in PROJECTS:
        buttons.append([
            InlineKeyboardButton(
                text=f"{proj['emoji']} {proj['title']}",
                callback_data=f"proj_{proj['id']}"
            )
        ])
    buttons.append([InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")])
    return InlineKeyboardMarkup(inline_keyboard=buttons)


def project_detail_kb(url: str) -> InlineKeyboardMarkup:
    """Single project detail keyboard."""
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="🔗 Live Demo ko'rish", url=url)],
        [
            InlineKeyboardButton(text="◀️ Loyihalar", callback_data="projects"),
            InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu"),
        ]
    ])


def queue_confirm_kb() -> InlineKeyboardMarkup:
    """Queue confirmation keyboard."""
    return InlineKeyboardMarkup(inline_keyboard=[
        [
            InlineKeyboardButton(text="✅ Ha, yozilaman", callback_data="queue_confirm"),
            InlineKeyboardButton(text="❌ Bekor qilish", callback_data="main_menu"),
        ]
    ])


def queue_skip_phone_kb() -> InlineKeyboardMarkup:
    """Skip phone step in queue."""
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="⏭ Tashlab ketish", callback_data="queue_skip_phone")]
    ])


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BOT SETUP
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
bot = Bot(
    token=BOT_TOKEN,
    default=DefaultBotProperties(parse_mode=ParseMode.HTML)
)
dp = Dispatcher()
router = Router()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# HANDLERS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

@router.message(CommandStart())
async def cmd_start(message: Message):
    """Welcome message with developer intro."""
    welcome = (
        "╔══════════════════════════════════════╗\n"
        "║  <b>🚀 RUSTAMBEKOV MUHAMMADISLOM</b>       ║\n"
        "║  <i>Full-Stack Software Engineer</i>       ║\n"
        "╚══════════════════════════════════════╝\n\n"

        f"Assalomu alaykum, <b>{message.from_user.full_name}</b>! 👋\n\n"

        "Men — <b>Rustambekov Muhammadislom</b>,\n"
        "17 yoshli Full-Stack dasturchi 🇺🇿\n\n"

        "🔥 <b>6 ta live loyiha</b> muallifi\n"
        "💻 <b>React, Next.js, FastAPI, Python</b> ustasi\n"
        "🤖 <b>Telegram Bot</b> yaratuvchisi\n"
        "🔒 <b>Kiberxavfsizlik</b> mutaxassisi\n\n"

        "Quyidagi menyudan kerakli bo'limni tanlang 👇"
    )
    await message.answer(welcome, reply_markup=main_menu_kb())


@router.message(Command("help"))
async def cmd_help(message: Message):
    """Help command."""
    help_text = (
        "📖 <b>Bot buyruqlari:</b>\n\n"
        "/start — Botni ishga tushirish\n"
        "/help — Yordam va buyruqlar\n"
        "/about — Men haqimda\n"
        "/projects — Loyihalarim\n"
        "/tech — Texnologiyalar\n"
        "/contact — Aloqa ma'lumotlari\n"
        "/queue — Navbatga yozilish\n"
        "/stats — Statistika\n"
    )
    await message.answer(help_text, reply_markup=back_menu_kb())


@router.message(Command("about"))
@router.callback_query(F.data == "about")
async def show_about(event: Message | CallbackQuery):
    """About developer section."""
    dev = DEVELOPER
    about_text = (
        "👨‍💻 <b>RUSTAMBEKOV MUHAMMADISLOM</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

        f"🎯 <b>Kasb:</b> {dev['role']}\n"
        f"🎂 <b>Yosh:</b> {dev['age']}\n"
        f"📍 <b>Manzil:</b> {dev['location']}\n\n"

        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        "📝 <b>Haqimda:</b>\n\n"

        "Men yosh va ambitsiyali Full-Stack dasturchiman.\n"
        "Frontend va Backend texnologiyalarini puxta egallagan,\n"
        "zamonaviy veb-ilovalar, Telegram botlar va xavfsiz\n"
        "API tizimlarini yarataman.\n\n"

        "🏆 <b>Yutuqlarim:</b>\n"
        "  ├ 6 ta real loyiha — barchasi <b>LIVE</b> ishlaydi\n"
        "  ├ Full-Stack (Frontend + Backend + Bot)\n"
        "  ├ Kiberxavfsizlik bo'yicha chuqur bilim\n"
        "  ├ AES-256, JWT, Argon2id bilan ishlash tajribasi\n"
        "  └ 17 yoshda professional darajadagi portfolio\n\n"

        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        "💡 <i>\"Kod yozish — bu san'at. Har bir qator\n"
        "   qadriyat yaratishi kerak.\"</i>\n"
    )
    if isinstance(event, CallbackQuery):
        await event.message.edit_text(about_text, reply_markup=back_menu_kb())
        await event.answer()
    else:
        await event.answer(about_text, reply_markup=back_menu_kb())


@router.message(Command("tech"))
@router.callback_query(F.data == "tech")
async def show_tech(event: Message | CallbackQuery):
    """Technology stack showcase."""
    lines = ["💻 <b>TEXNOLOGIYALAR VA KO'NIKMALAR</b>\n", "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"]

    for category, techs in TECH_STACK.items():
        lines.append(f"\n<b>{category}</b>")
        tech_line = "  ┊  ".join(techs)
        lines.append(f"  <code>{tech_line}</code>\n")

    lines.append("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    lines.append(f"\n📊 <b>Jami:</b> {sum(len(v) for v in TECH_STACK.values())}+ texnologiya")
    lines.append("🔥 <b>Status:</b> Doimiy o'rganish va rivojlanishda")

    text = "\n".join(lines)
    if isinstance(event, CallbackQuery):
        await event.message.edit_text(text, reply_markup=back_menu_kb())
        await event.answer()
    else:
        await event.answer(text, reply_markup=back_menu_kb())


@router.message(Command("projects"))
@router.callback_query(F.data == "projects")
async def show_projects(event: Message | CallbackQuery):
    """Projects list."""
    text = (
        "🚀 <b>LIVE LOYIHALARIM</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        "Barcha loyihalar real va <b>hozir ishlaydi</b>.\n"
        "Tanlang va batafsil ko'ring 👇\n"
    )
    if isinstance(event, CallbackQuery):
        await event.message.edit_text(text, reply_markup=projects_list_kb())
        await event.answer()
    else:
        await event.answer(text, reply_markup=projects_list_kb())


@router.callback_query(F.data.startswith("proj_"))
async def show_project_detail(callback: CallbackQuery):
    """Individual project detail."""
    project_id = callback.data.replace("proj_", "")
    proj = next((p for p in PROJECTS if p["id"] == project_id), None)

    if not proj:
        await callback.answer("Loyiha topilmadi", show_alert=True)
        return

    text = (
        f"{proj['emoji']} <b>{proj['title']}</b>\n"
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"📂 <b>Kategoriya:</b> {proj['category']}\n\n"
        f"📝 <b>Tavsif:</b>\n{proj['desc']}\n\n"
        f"🛠 <b>Texnologiyalar:</b>\n<code>{proj['tech']}</code>\n\n"
        f"🟢 <b>Status:</b> LIVE — Hozir ishlayapti!\n"
        f"🔗 <b>URL:</b> {proj['url']}"
    )
    await callback.message.edit_text(text, reply_markup=project_detail_kb(proj["url"]))
    await callback.answer()


@router.message(Command("stats"))
@router.callback_query(F.data == "stats")
async def show_stats(event: Message | CallbackQuery):
    """Portfolio statistics."""
    total_tech = sum(len(v) for v in TECH_STACK.values())
    queue_count = get_queue_count()

    text = (
        "📊 <b>PORTFOLIO STATISTIKASI</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

        f"🚀 <b>Live loyihalar:</b>        {len(PROJECTS)}\n"
        f"💻 <b>Texnologiyalar:</b>        {total_tech}+\n"
        f"🎨 <b>Frontend stack:</b>        {len(TECH_STACK['🎨 Frontend'])} tool\n"
        f"⚙️ <b>Backend stack:</b>         {len(TECH_STACK['⚙️ Backend'])} tool\n"
        f"🔒 <b>Security tools:</b>        {len(TECH_STACK['🔒 Security'])} tool\n\n"

        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

        f"📝 <b>Navbatdagilar soni:</b>    {queue_count} kishi\n"
        f"🟢 <b>Barcha loyihalar:</b>      ONLINE\n"
        f"⚡ <b>O'rtacha yuklanish:</b>     &lt;1 soniya\n"
        f"🏆 <b>Performance score:</b>     98-100/100\n\n"

        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        "💡 <i>Har bir loyiha real foydalanuvchilar uchun\n"
        "   ishlab chiqilgan va live ishlaydi.</i>"
    )
    if isinstance(event, CallbackQuery):
        await event.message.edit_text(text, reply_markup=back_menu_kb())
        await event.answer()
    else:
        await event.answer(text, reply_markup=back_menu_kb())


@router.message(Command("contact"))
@router.callback_query(F.data == "contact")
async def show_contact(event: Message | CallbackQuery):
    """Contact information."""
    dev = DEVELOPER
    text = (
        "📞 <b>ALOQA MA'LUMOTLARI</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

        f"👤 <b>Ism:</b> {dev['full_name']}\n"
        f"📱 <b>Telefon:</b> {dev['phone']}\n"
        f"📧 <b>Email:</b> {dev['email']}\n"
        f"✈️ <b>Telegram:</b> {dev['telegram']}\n"
        f"🐙 <b>GitHub:</b> {dev['github']}\n\n"

        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

        "💼 <b>Xizmatlar:</b>\n"
        "  ├ 🌐 Veb-sayt yaratish (React, Next.js)\n"
        "  ├ ⚙️ Backend API (FastAPI, Python)\n"
        "  ├ 🤖 Telegram Bot ishlab chiqish\n"
        "  ├ 🛒 E-Commerce platformalar\n"
        "  ├ 📱 Responsive mobil dizayn\n"
        "  └ 🔒 Kiberxavfsizlik yechimlari\n\n"

        "💬 <i>Loyiha buyurtma berish yoki savol uchun\n"
        "   to'g'ridan-to'g'ri yozing yoki navbatga yoziling!</i>"
    )
    kb = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="✈️ Telegram orqali yozish", url=f"https://t.me/{dev['telegram'].replace('@', '')}")],
        [InlineKeyboardButton(text="📝 Navbatga yozilish", callback_data="queue_start")],
        [InlineKeyboardButton(text="🔙 Bosh menyu", callback_data="main_menu")],
    ])
    if isinstance(event, CallbackQuery):
        await event.message.edit_text(text, reply_markup=kb)
        await event.answer()
    else:
        await event.answer(text, reply_markup=kb)


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# QUEUE HANDLERS (Navbatga yozilish)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

@router.message(Command("queue"))
@router.callback_query(F.data == "queue_start")
async def queue_start(event: Message | CallbackQuery):
    """Start queue registration."""
    queue_count = get_queue_count()
    text = (
        "📝 <b>NAVBATGA YOZILISH</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

        "Rustambekov Muhammadislomdan <b>professional\n"
        "konsultatsiya</b> olish uchun navbatga yoziling.\n\n"

        "📋 <b>Xizmatlar:</b>\n"
        "  ├ Veb-sayt loyihasi muhokamasi\n"
        "  ├ Bot ishlab chiqish\n"
        "  ├ Kod review va mentorlik\n"
        "  ├ Freelance hamkorlik\n"
        "  └ Texnik maslahat\n\n"

        f"👥 <b>Hozirgi navbat:</b> {queue_count} kishi\n"
        f"⏱ <b>Javob vaqti:</b> 1-24 soat ichida\n\n"

        "Davom etasizmi? 👇"
    )
    if isinstance(event, CallbackQuery):
        await event.message.edit_text(text, reply_markup=queue_confirm_kb())
        await event.answer()
    else:
        await event.answer(text, reply_markup=queue_confirm_kb())


@router.callback_query(F.data == "queue_confirm")
async def queue_ask_phone(callback: CallbackQuery):
    """Ask for phone number."""
    user_states[callback.from_user.id] = {"step": "phone"}
    await callback.message.edit_text(
        "📱 <b>1-qadam:</b> Telefon raqamingizni yozing\n\n"
        "<i>Masalan: +998 90 123 45 67</i>\n\n"
        "Yoki tashlab keting 👇",
        reply_markup=queue_skip_phone_kb()
    )
    await callback.answer()


@router.callback_query(F.data == "queue_skip_phone")
async def queue_skip_phone(callback: CallbackQuery):
    """Skip phone, go to message."""
    user_states[callback.from_user.id] = {"step": "message", "phone": "Ko'rsatilmagan"}
    await callback.message.edit_text(
        "💬 <b>2-qadam:</b> Xabaringizni yozing\n\n"
        "<i>Qanday loyiha yoki xizmat kerak?\n"
        "Qisqacha tasvirlab bering.</i>"
    )
    await callback.answer()


@router.message(F.text)
async def handle_text_input(message: Message):
    """Handle text inputs for queue registration."""
    user_id = message.from_user.id
    state = user_states.get(user_id)

    if not state:
        return

    if state["step"] == "phone":
        user_states[user_id] = {"step": "message", "phone": message.text}
        await message.answer(
            "✅ Telefon qabul qilindi!\n\n"
            "💬 <b>2-qadam:</b> Xabaringizni yozing\n\n"
            "<i>Qanday loyiha yoki xizmat kerak?\n"
            "Qisqacha tasvirlab bering.</i>"
        )

    elif state["step"] == "message":
        phone = state.get("phone", "Ko'rsatilmagan")
        username = f"@{message.from_user.username}" if message.from_user.username else "Yo'q"

        # Add to queue
        position = add_to_queue(
            user_id=user_id,
            full_name=message.from_user.full_name,
            username=username,
            phone=phone,
            message=message.text
        )

        # Remove state
        del user_states[user_id]

        # Confirm to user
        await message.answer(
            "✅ <b>NAVBATGA MUVAFFAQIYATLI YOZILDINGIZ!</b>\n"
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

            f"📋 <b>Navbat raqami:</b> #{position}\n"
            f"👤 <b>Ism:</b> {message.from_user.full_name}\n"
            f"📱 <b>Telefon:</b> {phone}\n"
            f"💬 <b>Xabar:</b> {message.text[:100]}...\n\n"

            "⏱ <b>Muhammadislom 1-24 soat ichida\n"
            "   siz bilan bog'lanadi.</b>\n\n"

            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            "💡 <i>Tezroq javob uchun to'g'ridan-to'g'ri\n"
            "   @muhammadislom10 ga yozing.</i>",
            reply_markup=back_menu_kb()
        )

        # Notify owner
        try:
            owner_text = (
                "🔔 <b>YANGI NAVBAT SO'ROVI!</b>\n"
                "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
                f"📋 <b>Navbat #:</b> {position}\n"
                f"👤 <b>Ism:</b> {message.from_user.full_name}\n"
                f"🆔 <b>Username:</b> {username}\n"
                f"📱 <b>Telefon:</b> {phone}\n"
                f"🆔 <b>User ID:</b> <code>{user_id}</code>\n\n"
                f"💬 <b>Xabar:</b>\n{message.text}\n\n"
                f"⏰ <b>Vaqt:</b> {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}"
            )
            await bot.send_message(OWNER_CHAT_ID, owner_text)
        except Exception as e:
            logger.error(f"Failed to notify owner: {e}")


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# NAVIGATION
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

@router.callback_query(F.data == "main_menu")
async def go_main_menu(callback: CallbackQuery):
    """Return to main menu."""
    # Clear any active state
    user_states.pop(callback.from_user.id, None)

    text = (
        "╔══════════════════════════════════════╗\n"
        "║  <b>🚀 RUSTAMBEKOV MUHAMMADISLOM</b>       ║\n"
        "║  <i>Full-Stack Software Engineer</i>       ║\n"
        "╚══════════════════════════════════════╝\n\n"
        "Quyidagi menyudan tanlang 👇"
    )
    await callback.message.edit_text(text, reply_markup=main_menu_kb())
    await callback.answer()


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# MAIN
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

async def set_bot_commands():
    """Set bot commands menu."""
    commands = [
        BotCommand(command="start", description="🚀 Botni ishga tushirish"),
        BotCommand(command="about", description="👨‍💻 Men haqimda"),
        BotCommand(command="projects", description="🚀 Loyihalarim"),
        BotCommand(command="tech", description="💻 Texnologiyalar"),
        BotCommand(command="stats", description="📊 Statistika"),
        BotCommand(command="queue", description="📝 Navbatga yozilish"),
        BotCommand(command="contact", description="📞 Aloqa"),
        BotCommand(command="help", description="📖 Yordam"),
    ]
    await bot.set_my_commands(commands)


async def main():
    """Start the bot."""
    logger.info("🚀 Rustambekov Portfolio Bot ishga tushmoqda...")

    dp.include_router(router)
    await set_bot_commands()

    logger.info("✅ Bot tayyor! Polling boshlandi...")
    await dp.start_polling(bot, skip_updates=True)


if __name__ == "__main__":
    asyncio.run(main())
