'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { value: '60,000+', label: "O'zbekistondagi faol buxgalterlar", desc: 'Potentsial foydalanuvchilar' },
  { value: '250,000+', label: "Faol MChJ va YaTT", desc: "Ro'yxatdan o'tgan korxonalar" },
  { value: '40+', label: "Oylik yangi qonun va buyruq", desc: "Lex.uz + Soliq.uz dan o'rtacha" },
  { value: '98.5%', label: "Tahlil aniqligi", desc: "AI + manba citation bilan" },
];

export default function StatsSection() {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Glowing divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass-card p-6 text-center animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <div
                className="stat-number text-3xl md:text-4xl font-bold mb-1 gradient-text"
              >
                {s.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mt-16" />
      </div>
    </section>
  );
}
