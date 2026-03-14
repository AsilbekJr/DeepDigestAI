'use client';

import { Shield, ExternalLink, MessageSquare, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                EchoTax AI
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              O'zbekiston soliq qonunchiligi o'zgarishlarini real-vaqtda kuzatib, buxgalterlar va tadbirkorlar uchun tahlil qiladi.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://t.me/echotax_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-blue-400 hover:bg-blue-500/10 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@echotax.uz"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-blue-400 hover:bg-blue-500/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Mahsulot',
              links: ['Imkoniyatlar', 'Qanday Ishlaydi', 'Narxlar', 'API Hujjatlari'],
              hrefs: ['#features', '#how-it-works', '#pricing', '#'],
            },
            {
              title: 'Kompaniya',
              links: ['Biz haqimizda', 'Blog', "Hamkorlik", 'Ish joylari'],
              hrefs: ['#', '#', '#', '#'],
            },
            {
              title: 'Qo\'llab-quvvatlash',
              links: ['Telegram Bot', 'Tez-tez savolar', "Xatolikni xabar qilish", "Bog'lanish"],
              hrefs: ['https://t.me/echotax_bot', '#', '#', '#'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={link}>
                    <a
                      href={col.hrefs[i]}
                      className="text-slate-500 text-sm hover:text-slate-300 transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      {col.hrefs[i].startsWith('http') && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <p className="text-slate-600 text-xs">
            © 2024 EchoTax AI — Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Foydalanish shartlari</a>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="status-dot live w-1.5 h-1.5" />
            Barcha tizimlar ishlaydi
          </div>
        </div>
      </div>
    </footer>
  );
}
