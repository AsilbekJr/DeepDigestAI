'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dilnoza Yusupova',
    role: 'Mustaqil Buxgalter · Toshkent',
    avatar: 'DY',
    color: '#3b82f6',
    stars: 5,
    text: "Har hafta 3-4 soat yangiliklarni qidirib o'tiradim. EchoTax bor bo'lgandan keyin bu vaqtni mijozlarimga sarflayman. Deadlinlar tracker — sof oltin!",
  },
  {
    name: 'Jasur Mirzayev',
    role: 'MChJ Direktori · Samarqand',
    avatar: 'JM',
    color: '#10b981',
    stars: 5,
    text: "Buxgalterim ko'p narsani aytmagan edi. EchoTax orqali YaTTdan MChJga o'tishimda boshimga tushishi mumkin bo'lgan jarima haqida avval ogoh bo'ldim.",
  },
  {
    name: 'Malika Rahimova',
    role: 'Bosh Buxgalter · Namangan',
    avatar: 'MR',
    color: '#f59e0b',
    stars: 5,
    text: "Professional versiya rahbariyatga bersamam ular uchun tushunarli PDF hisobot beradi. Bu mening corporate image'imni ko'tardi. Buyuk!",
  },
  {
    name: 'Sardor Toshmatov',
    role: 'YaTT Egasi · Farg\'ona',
    avatar: 'ST',
    color: '#8b5cf6',
    stars: 4,
    text: "QQS o'zgarishlari haqida o'z vaqtida xabar olmasam, kamida 5 mln so'm jarima to'lardim. EchoTax bu xabarni 2 kun oldin berdi.",
  },
  {
    name: 'Nargiza Karimova',
    role: 'Buxgalteriya Firmasi · Toshkent',
    avatar: 'NK',
    color: '#ec4899',
    stars: 5,
    text: "15 ta mijozim bor. Ular hamma turlari: MChJ, YaTT, AJ. EchoTax har biri uchun alohida filtrlangan yangilik beradi. Bu o'zim uchun 3 nafar yordamchi.",
  },
  {
    name: 'Bobur Xolmatov',
    role: 'Soliq Maslahatchisi · Nukus',
    avatar: 'BX',
    color: '#14b8a6',
    stars: 5,
    text: "Mijozlarimga 'EchoTax orqali kuzatib turaman, xotirjam bo'ling' deyishim biznesim uchun katta reklama bo'ldi. Ishonch belgisi.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge badge-blue inline-flex mb-4">
            <Star className="w-3.5 h-3.5 fill-current" />
            Mijozlar Fikri
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            230+ buxgalter <span className="gradient-text">ishonadi</span>
          </h2>
          <p className="text-slate-400">
            Beta davriga qatnashganlar bilan olingan haqiqiy fikrlar
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass-card p-6 break-inside-avoid animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
                {Array.from({ length: 5 - t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-slate-600" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 mb-3 opacity-20" style={{ color: t.color }} />
              <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}aa, ${t.color}55)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
