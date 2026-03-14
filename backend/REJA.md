# EchoTax AI — Backend Rejasi

## 1. Texnologik Stack
- **Runtime**: Node.js (TypeScript)
- **Framework**: Express.js
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma yoki Drizzle
- **AI**: Google Gemini 1.5 Pro API (Tahlil uchun)
- **Scraping**: Puppeteer / Cheerio (Lex.uz va Soliq.uz tahlili uchun)
- **Auth**: Supabase Auth / JWT

## 2. API Endpoints (Reja)

### Yangiliklar (News)
- `GET /api/news` - So'nggi soliq yangiliklari (AI tahlili bilan)
- `GET /api/news/:id` - Batafsil ma'lumot va AI sharhi

### AI Chat
- `POST /api/chat` - Foydalanuvchi savollariga soliq kodeksi asosida javob berish

### Foydalanuvchi (User)
- `GET /api/user/profile` - Foydalanuvchi sozlamalari (korxona turi, bildirishnomalar)
- `PATCH /api/user/settings` - Sozlamalarni yangilash

### Eksport
- `GET /api/export/pdf/:newsId` - Yangilikni PDF qilib berish

## 3. Avtomatlashtirish (Jobs)
- **Scraper Job**: Har 6 soatda Lex.uz ni tekshiradi.
- **AI Analyzer**: Yangi qonun topilsa, uni avtomatik tahlil qilib bazaga saqlaydi.
- **Notify Service**: Muhim o'zgarish bo'lsa, Telegram bot orqali xabar yuboradi.

## 4. Ma'lumotlar Strukturasi (Schema)
- `User`: id, email, business_type, subscription_status
- `LawChange`: id, title, original_url, content, ai_summary, urgency_level (1-4), category
- `Deadline`: id, title, date, description, type
