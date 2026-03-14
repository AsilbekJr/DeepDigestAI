'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Bot, Play, Star, FileText, Bell } from 'lucide-react';

const tickerItems = [
  '📋 SOLIQ KOMITASI: 2024-yil 1-yanvardan QQS stavkasi o\'zgardi',
  '⚖️ LEX.UZ: Mehnat kodeksiga yangi qo\'shimchalar kiritildi',
  '📊 SOLIQ.UZ: YaTT uchun yangi imtiyozlar e\'lon qilindi',
  '🏢 LEX.UZ: MChJ ro\'yxatdan o\'tkazish muddatlari yangilandi',
  '💼 SOLIQ KOMITASI: Elektron hisobot taqdim etish muddati uzaytirildi',
];

export default function HeroSection() {
  const [tickerText, setTickerText] = useState('');

  useEffect(() => {
    setTickerText(tickerItems.join('   •   ') + '   •   ' + tickerItems.join('   •   '));
  }, []);

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="badge badge-blue gap-2">
            <span className="status-dot live"></span>
            Real-vaqt monitoring • Lex.uz + Soliq.uz
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8 animate-fade-in animate-fade-in-delay-1">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Soliq Yangiligini <br />
            <span className="gradient-text">5 Daqiqada</span> Bilib Oling
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            O'zbekistondagi soliq qonunchiligi o'zgarishlarini AI tahlil qiladi va 
            <strong className="text-slate-200"> sizning korxona turingizga</strong> moslab tushuntiradi.
            Xato qilishdan qo'rqmang — biz kuzatib turamiz.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animate-fade-in-delay-2">
          <a href="/dashboard" className="btn-primary text-base px-7 py-3.5 justify-center">
            <Bot className="w-5 h-5" />
            Bepul 14-kun Sinab Ko'ring
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#how-it-works" className="btn-secondary text-base px-7 py-3.5 justify-center">
            <Play className="w-5 h-5" />
            Qanday Ishlashini Ko'ring
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 mb-16 animate-fade-in animate-fade-in-delay-3">
          <div className="flex -space-x-2">
            {['DA', 'MT', 'JK', 'SB', 'AR'].map((initials, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-navy-950 flex items-center justify-center text-xs font-bold text-white"
                style={{
                  background: `hsl(${200 + i * 30}, 70%, 45%)`,
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-amber-400">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <span className="text-sm text-slate-400">
            <strong className="text-white">230+</strong> buxgalter ishlatmoqda
          </span>
        </div>

        {/* Live ticker */}
        <div className="glass rounded-2xl p-px overflow-hidden animate-fade-in animate-fade-in-delay-4">
          <div className="bg-navy-900/80 rounded-2xl">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5">
              <Bell className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                So'nggi Yangiliqlar
              </span>
              <span className="status-dot live ml-auto w-2 h-2"></span>
            </div>
            {/* Ticker */}
            <div className="ticker-wrap px-4 py-3">
              <div className="ticker-content text-sm text-slate-300 font-mono">
                {tickerText}
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-950 z-10 pointer-events-none" style={{top: '60%'}}/>
          <div className="glass-card p-6 overflow-hidden">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="text-xs">
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-amber-500/70" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
        <div className="flex-1 mx-4 bg-white/5 rounded-full h-6 flex items-center px-3 text-slate-500 text-xs">
          app.echotax.uz/dashboard
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {[
          { label: "Bugungi Yangiliklar", val: "7", color: "text-blue-400", bg: "bg-blue-500/10" },
          { label: "Sizga Ta'sir Qiladi", val: "3", color: "text-red-400", bg: "bg-red-500/10" },
          { label: "Kelgusi Deadlinlar", val: "5", color: "text-amber-400", bg: "bg-amber-500/10" },
          { label: "Tahlil Qilingan", val: "142", color: "text-emerald-400", bg: "bg-emerald-500/10" },
        ].map((s) => (
          <div key={s.label} className={`${s.bg} rounded-xl p-3 border border-white/5`}>
            <div className={`stat-number text-xl font-bold ${s.color}`}>{s.val}</div>
            <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* News items */}
      <div className="space-y-2">
        {[
          { time: "09:42", title: "QQS deklaratsiyasi topshirish muddati uzaytirildi — Aprel 25 gacha", tag: "MChJ", urgency: "amber" },
          { time: "08:15", title: "YaTT uchun yangi imtiyozli soliq stavkasi: 1% dan 0.5% ga", tag: "YaTT", urgency: "green" },
          { time: "07:30", title: "Mehnat inspeksiyasi yangi jarima miqdorlari belgiladi", tag: "Barcha", urgency: "red" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-white/3 rounded-xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
            <span className="mono text-slate-500 shrink-0 pt-px">{item.time}</span>
            <FileText className={`w-3.5 h-3.5 shrink-0 mt-px ${
              item.urgency === 'red' ? 'text-red-400' :
              item.urgency === 'amber' ? 'text-amber-400' : 'text-emerald-400'
            }`} />
            <span className="text-slate-300 leading-relaxed">{item.title}</span>
            <span className={`tag shrink-0 ml-auto ${
              item.urgency === 'red' ? 'border-red-500/20 text-red-400' :
              item.urgency === 'amber' ? 'border-amber-500/20 text-amber-400' : 'border-emerald-500/20 text-emerald-400'
            }`}>{item.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
