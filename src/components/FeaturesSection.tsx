'use client';

import { Bell, Filter, FileText, Send, Globe, Shield, Clock, Zap } from 'lucide-react';

const features = [
  {
    icon: Globe,
    color: 'blue',
    title: 'Real-vaqt Monitoring',
    desc: "Lex.uz va Soliq.uz dagi har bir yangi hujjat 6 soat ichida siz haqingizda tahlil qilinadi.",
    tags: ['Lex.uz', 'Soliq.uz', 'MyGov'],
  },
  {
    icon: Filter,
    color: 'emerald',
    title: 'Korxona Turi Bo\'yicha Filtrlash',
    desc: "MChJ, YaTT yoki AJ — faqat sizga tegishli yangiliklar va o'zgarishlar ko'rsatiladi.",
    tags: ['MChJ', 'YaTT', 'AJ'],
  },
  {
    icon: Bell,
    color: 'amber',
    title: 'Smart Deadline Tracker',
    desc: '"QQS hisoboti uchun 3 kun qoldi", "Bu imtiyozdan foydalaning — muddati tugayapti" kabi ogohlantirishlar.',
    tags: ['Deadline', 'Ogohlantirish', 'Telegram'],
  },
  {
    icon: FileText,
    color: 'blue',
    title: "AI Soliq Tahlili",
    desc: "Murakkab qonun matni o'rniga: 3 qator tushuncha + qaysi mijozga ta'sir qilishi + nima qilish kerak.",
    tags: ['AI Tahlil', 'Oddiy Til', "Amaliy Ko'rsatma"],
  },
  {
    icon: Send,
    color: 'emerald',
    title: 'Multi-format Eksport',
    desc: 'Tayyor tahlilni Telegram, PDF hisobot yoki Word hujjati sifatida bir tugmada yuborish.',
    tags: ['Telegram', 'PDF', 'Word'],
  },
  {
    icon: Shield,
    color: 'amber',
    title: 'Citation & Ishonch',
    desc: "Har bir tahlil manba bilan: 'Lex.uz, Qaror №123, 15.01.2024'. AI taxminiy — manba rasmiy.",
    tags: ['Manba', 'Lex.uz', "Ishonchli"],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  blue: {
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.2)',
    text: '#93c5fd',
    icon: 'rgba(37,99,235,0.15)',
  },
  emerald: {
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
    text: '#6ee7b7',
    icon: 'rgba(16,185,129,0.15)',
  },
  amber: {
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    text: '#fcd34d',
    icon: 'rgba(245,158,11,0.15)',
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge badge-blue inline-flex mb-4">
            <Zap className="w-3.5 h-3.5" />
            Asosiy Imkoniyatlar
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Buxgalter uchun{' '}
            <span className="gradient-text">hamma narsa</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Minglab sahifali qonunlarni o'qish o'rniga — 3 daqiqada muhimini bilib oling.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const c = colorMap[f.color];
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-default group"
                style={{
                  background: c.bg,
                  borderColor: c.border,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: c.icon }}
                >
                  <Icon className="w-6 h-6" style={{ color: c.text }} />
                </div>

                <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{f.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ borderColor: c.border, color: c.text }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${c.bg} 0%, transparent 70%)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
