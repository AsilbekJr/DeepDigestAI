'use client';

import { ArrowRight, MessageSquare, Shield } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden border border-white/10"
          style={{
            background:
              'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(16,185,129,0.08) 60%, rgba(37,99,235,0.05) 100%)',
          }}
        >
          {/* Background orbs */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/30">
              <Shield className="w-8 h-8 text-white" />
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Soliq xatosidan{' '}
              <span className="gradient-text">himoyalaning</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Bugun ro'yxatdan o'ting — 14 kun bepul. Kredit karta shart emas.
              230+ buxgalter ishlatmoqda.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/dashboard" className="btn-primary text-base px-8 py-4 justify-center">
                Hoziroq Boshlash — Bepul
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/echotax_bot"
                className="btn-secondary text-base px-8 py-4 justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-5 h-5 text-blue-400" />
                Telegram Bot
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              {[
                '✅ Kredit karta shart emas',
                '✅ 14-kun bepul',
                '✅ Istalgan vaqt bekor qilish',
              ].map((item) => (
                <span key={item} className="text-slate-500 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
