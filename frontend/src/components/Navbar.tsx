'use client';

import { useState, useEffect } from 'react';
import { Shield, Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Imkoniyatlar', href: '#features' },
    { label: 'Qanday Ishlaydi', href: '#how-it-works' },
    { label: 'Narxlar', href: '#pricing' },
    { label: 'Mijozlar', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass border-b border-white/5 shadow-2xl' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <span
              className="font-bold text-lg text-white"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              EchoTax
            </span>
            <span className="text-blue-400 font-bold text-lg"> AI</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/dashboard"
            className="text-sm text-slate-400 hover:text-white transition-colors px-4 py-2"
          >
            Kirish
          </a>
          <a href="/dashboard" className="btn-primary text-sm py-2.5 px-5">
            <Zap className="w-4 h-4" />
            Bepul Boshlash
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5 mt-2 px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-slate-300 hover:text-white text-sm border-b border-white/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a href="/dashboard" className="btn-secondary text-sm justify-center">
              Kirish
            </a>
            <a href="/dashboard" className="btn-primary text-sm justify-center">
              <Zap className="w-4 h-4" />
              Bepul Boshlash
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
