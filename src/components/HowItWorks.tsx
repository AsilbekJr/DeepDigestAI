'use client';

import { Upload, Cpu, Bell, Download } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Upload,
    color: '#3b82f6',
    title: 'Korxona Turini Tanlang',
    desc: "MChJ, YaTT yoki AJ — bir marta tanlaysiz. EchoTax faqat sizga tegishli yangiliklar keladigan kanallarni kuzata boshlaydi.",
    detail: 'Onboarding 60 soniya',
  },
  {
    num: '02',
    icon: Cpu,
    color: '#10b981',
    title: 'AI Avtomatik Tahlil Qiladi',
    desc: "Har 6 soatda Lex.uz va Soliq.uz tekshiriladi. Yangi hujjat topilsa — AI uni o'qiydi, murakkab tildan odam tiliga tarjima qiladi.",
    detail: "6 soat ichida ogohlantirish",
  },
  {
    num: '03',
    icon: Bell,
    color: '#f59e0b',
    title: "Aniq Ogohlantirish Olasiz",
    desc: "Oddiy bildirishnoma emas: 'Bu qaror sizning MChJingiz uchun QQS hisoblash tartibini o'zgartiradi — keyingi hisobotda hisobga oling.' Deadline bilan birga.",
    detail: 'Telegram + email',
  },
  {
    num: '04',
    icon: Download,
    color: '#8b5cf6',
    title: "Tayyor Hisobotni Eksport Qiling",
    desc: "Tahlilni PDF, Word yoki Telegram xabar sifatida birdan yuborasiz. Mijoz yoki rahbariyat uchun professional ko'rinishda.",
    detail: 'PDF / Word / Telegram',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      {/* Background line */}
      <div
        className="absolute left-1/2 top-48 bottom-24 w-px hidden md:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge badge-green inline-flex mb-4">
            Qanday Ishlaydi
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            4 qadamda — <span className="gradient-text">tayyor</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            O'rnatish, sozlash, kutish. Qolganini EchoTax bajaradi.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="glass-card p-6 relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${i * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                {/* Step number bg */}
                <div
                  className="absolute top-4 right-4 text-6xl font-bold opacity-5"
                  style={{ color: step.color, fontFamily: 'JetBrains Mono' }}
                >
                  {step.num}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${step.color}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color: step.color }} />
                </div>

                {/* Step badge */}
                <div
                  className="badge mb-3"
                  style={{
                    background: `${step.color}10`,
                    borderColor: `${step.color}30`,
                    color: step.color,
                  }}
                >
                  Qadam {step.num}
                </div>

                <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{step.desc}</p>

                {/* Detail tag */}
                <div className="mono text-xs" style={{ color: step.color }}>
                  ✦ {step.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
