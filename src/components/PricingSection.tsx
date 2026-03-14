'use client';

import { useState } from 'react';
import { Check, Zap, Building2, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: { uzs: '90,000', usd: '9' },
    color: '#3b82f6',
    desc: 'Mustaqil buxgalterlar uchun',
    features: [
      'Cheksiz yangiliklar',
      'MChJ yoki YaTT filtri',
      'Telegram bildirishnomalar',
      'Deadline tracker',
      '1 foydalanuvchi',
      'AI tahlil (kuniga 20 ta)',
    ],
    cta: 'Boshlash',
    popular: false,
  },
  {
    name: 'Professional',
    icon: Building2,
    price: { uzs: '190,000', usd: '19' },
    color: '#10b981',
    desc: 'Kichik va o\'rta firmalar uchun',
    features: [
      'Starter + hamma narsa',
      '5 ta mijoz portfeli',
      'Branding bilan PDF eksport',
      'Email bildirishnomalar',
      '3 foydalanuvchi',
      'AI tahlil cheksiz',
      "Ustuvor qo'llab-quvvatlash",
    ],
    cta: 'Eng Mashhur',
    popular: true,
  },
  {
    name: 'Business',
    icon: Crown,
    price: { uzs: '490,000', usd: '49' },
    color: '#f59e0b',
    desc: 'Katta firmalar va agentliklar uchun',
    features: [
      'Professional + hamma narsa',
      '20 ta mijoz portfeli (cheksiz)',
      'API kirish huquqi',
      '1C integratsiya',
      'Cheksiz foydalanuvchilar',
      'Firmaga maxsus hisobotlar',
      'Shaxsiy menejer',
      'SLA kafolati',
    ],
    cta: 'Bog\'lanish',
    popular: false,
  },
];

export default function PricingSection() {
  const [currency, setCurrency] = useState<'uzs' | 'usd'>('uzs');

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge badge-amber inline-flex mb-4">
            Narxlar
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Har bir korxona <span className="gradient-text">uchun mos</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-6">
            14 kunlik bepul sinov. Kredit karta shart emas. Istalgan vaqt bekor qilish mumkin.
          </p>

          {/* Currency toggle */}
          <div className="inline-flex items-center gap-1 glass rounded-xl p-1">
            <button
              onClick={() => setCurrency('uzs')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currency === 'uzs'
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              UZS (so'm)
            </button>
            <button
              onClick={() => setCurrency('usd')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currency === 'usd'
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Free tier banner */}
        <div className="glass rounded-2xl p-4 mb-6 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="badge badge-green">BEPUL</span>
            <span className="text-slate-300 text-sm">
              Registratsiyasiz: oyda <strong className="text-white">5 ta yangilik</strong> + 1 korxona turi
            </span>
          </div>
          <a href="/dashboard" className="btn-secondary text-sm py-2 px-4">
            Bepul Boshlash →
          </a>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? 'border-emerald-500/40'
                    : 'border-white/7 glass-card'
                }`}
                style={
                  plan.popular
                    ? {
                        background:
                          'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.03))',
                      }
                    : {}
                }
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge badge-green text-xs px-3 py-1 shadow-lg shadow-emerald-500/20">
                      🔥 Eng Mashhur
                    </span>
                  </div>
                )}

                {/* Icon & name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${plan.color}18` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: plan.color }} />
                  </div>
                  <div>
                    <div className="font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                      {plan.name}
                    </div>
                    <div className="text-slate-500 text-xs">{plan.desc}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="stat-number text-4xl font-bold"
                      style={{ color: plan.color }}
                    >
                      {currency === 'uzs' ? plan.price.uzs : `$${plan.price.usd}`}
                    </span>
                    <span className="text-slate-500 text-sm">/oy</span>
                  </div>
                  <div className="text-slate-500 text-xs mt-1 mono">
                    * yillik to'lov bilan 20% chegirma
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Check className="w-4 h-4 shrink-0" style={{ color: plan.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/dashboard"
                  className={`w-full text-center rounded-xl py-3 font-semibold text-sm transition-all block ${
                    plan.popular ? 'btn-emerald' : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* FAQ note */}
        <p className="text-center text-slate-500 text-sm mt-8">
          Savollaringiz bormi?{' '}
          <a href="https://t.me/echotax_support" className="text-blue-400 hover:underline">
            Telegram orqali bog'laning
          </a>
        </p>
      </div>
    </section>
  );
}
