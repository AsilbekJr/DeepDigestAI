'use client';

import { useState } from 'react';
import {
  Shield, Bell, FileText, BarChart2, Settings, LogOut,
  Home, ChevronRight, Search, Filter, Download, BellRing,
  TrendingUp, Clock, AlertTriangle, CheckCircle2, Bot,
  Building2, Zap, X, ArrowUpRight, BookOpen
} from 'lucide-react';

/* ===== MOCK DATA ===== */
const mockNews = [
  {
    id: 1, time: '09:42', date: '14.03.2024',
    source: 'Soliq.uz', urgency: 'red',
    title: "Mehnat inspeksiyasi: yangi jarima miqdorlari belgilandi",
    summary: "2024-yil 1-apreldan xodimlarni norasmiy bandlikda ushlab turish uchun jarima 10 mln so'mgacha ko'tariladi.",
    tags: ['MChJ', 'YaTT', 'Mehnat'],
    affect: "Ta'sir qiladi",
    deadline: 'Apr 1, 2024',
    source_url: 'soliq.uz/news/123',
    citation: 'Lex.uz, Qaror №245, 10.03.2024',
  },
  {
    id: 2, time: '08:15', date: '14.03.2024',
    source: 'Lex.uz', urgency: 'green',
    title: "YaTT uchun yangi imtiyozli soliq stavkasi: 1% dan 0.5% ga",
    summary: "Ayrim faoliyat turlari uchun YaTT soliq stavkasi 2 barobarga kamaytirildi. IT va xizmat ko'rsatish sektorlari uchun.",
    tags: ['YaTT', "Imtiyoz", 'IT'],
    affect: "Sizga mos",
    deadline: null,
    source_url: 'lex.uz/docs/789',
    citation: 'Lex.uz, Qaror №199, 08.03.2024',
  },
  {
    id: 3, time: '07:30', date: '14.03.2024',
    source: 'Soliq.uz', urgency: 'amber',
    title: "QQS deklaratsiyasi March 25 gacha topshirilishi shart",
    summary: "I-kvartal QQS hisobotini kechiktirib topshirish uchun yangi jarima tartibi belgilandi. Muddatni kuzating.",
    tags: ['MChJ', 'QQS', 'Deadline'],
    affect: "Deadline!",
    deadline: 'Mar 25, 2024',
    source_url: 'soliq.uz/news/456',
    citation: 'Lex.uz, Buyruq №87, 01.03.2024',
  },
  {
    id: 4, time: '06:00', date: '14.03.2024',
    source: 'Lex.uz', urgency: 'blue',
    title: "Elektron tijorat sohasida yangi soliq tartibotlari",
    summary: "Online do'konlar va platforma operatorlari uchun maxsus soliq hisobot formasi joriy etildi.",
    tags: ['E-commerce', 'MChJ'],
    affect: "Kuzating",
    deadline: null,
    source_url: 'lex.uz/docs/321',
    citation: 'Lex.uz, Qaror №211, 05.03.2024',
  },
];

const deadlines = [
  { title: "QQS deklaratsiyasi", date: "25 Mart", daysLeft: 11, color: "#f59e0b" },
  { title: "Mehnat haqi hisoboti", date: "1 Aprel", daysLeft: 18, color: "#3b82f6" },
  { title: "Yillik moliya hisoboti", date: "10 Aprel", daysLeft: 27, color: "#10b981" },
  { title: "Ijtimoiy to'lov deklaratsiya", date: "15 Aprel", daysLeft: 32, color: "#8b5cf6" },
];

const navItems = [
  { icon: Home, label: 'Asosiy', id: 'dashboard' },
  { icon: FileText, label: 'Yangiliklar', id: 'news' },
  { icon: Clock, label: 'Deadlinlar', id: 'deadlines' },
  { icon: Bot, label: 'AI Tahlil', id: 'ai' },
  { icon: Download, label: 'Eksport', id: 'export' },
  { icon: Settings, label: 'Sozlamalar', id: 'settings' },
];

/* ===== MAIN DASHBOARD ===== */
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedNews, setSelectedNews] = useState<typeof mockNews[0] | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiMessages, setAiMessages] = useState<{role: string; text: string}[]>([
    { role: 'ai', text: "Salom! Men EchoTax AI yordamchisiman. Soliq qonunchiligi bo'yicha savollaringizni bering — men sizning korxona turingiz (MChJ) asosida javob beraman." }
  ]);

  const handleAiSend = () => {
    if (!aiInput.trim()) return;
    const userMsg = aiInput.trim();
    setAiMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setAiInput('');
    // Simulate AI response
    setTimeout(() => {
      setAiMessages(prev => [...prev, {
        role: 'ai',
        text: `"${userMsg}" bo'yicha tahlil: Joriy O'zbekiston soliq qonunchiligi bo'yicha (manba: Lex.uz, 2024) bu savol MChJ uchun quyidagicha tartibda hal qilinadi: 1) QQS hisoblash formasi № belgilangan tartibda topshiriladi; 2) Muddatni o'tkazib yuborish 10% jarima keltirib chiqaradi. Batafsil konsultatsiya uchun soliq maslahatchisi bilan bog'laning.`
      }]);
    }, 1000);
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#050f1a' }}>
      {/* Sidebar overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar fixed md:relative z-30 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        style={{ width: 240, minHeight: '100vh' }}
      >
        {/* Logo */}
        <div className="p-5 flex items-center gap-2.5 border-b border-white/5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              EchoTax
            </span>
            <span className="text-blue-400 font-bold"> AI</span>
          </div>
        </div>

        {/* User card */}
        <div className="p-4 border-b border-white/5">
          <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(37,99,235,0.1)' }}>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #2563eb, #10b981)' }}
            >
              DY
            </div>
            <div>
              <div className="text-white text-sm font-semibold">Dilnoza Y.</div>
              <div className="text-blue-400 text-xs">MChJ • Professional</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                className={`nav-item w-full ${activeTab === item.id ? 'active' : ''}`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
                {item.id === 'news' && (
                  <span
                    className="ml-auto text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: '#ef4444', color: 'white' }}
                  >
                    4
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Status */}
        <div className="p-4 border-t border-white/5 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Monitoring holati</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="status-dot live" />
              Faol
            </span>
          </div>
          <div className="text-xs text-slate-600">Oxirgi tekshiruv: 09:42</div>
          <button className="nav-item w-full text-red-400 hover:bg-red-500/10">
            <LogOut className="w-4 h-4" />
            Chiqish
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center gap-4 px-5 py-3.5 border-b border-white/5" style={{ background: 'rgba(10,22,40,0.8)', backdropFilter: 'blur(12px)' }}>
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            onClick={() => setSidebarOpen(true)}
          >
            <Filter className="w-5 h-5" />
          </button>

          <div className="flex-1 max-w-sm relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              className="input-field pl-9 py-2 text-sm"
              placeholder="Yangilik qidirish..."
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button className="relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
            </button>
            <a
              href="/"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors hidden sm:block px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              ← Landing
            </a>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-5">
          {activeTab === 'dashboard' && <DashboardView setActiveTab={setActiveTab} setSelectedNews={setSelectedNews} />}
          {activeTab === 'news' && <NewsView setSelectedNews={setSelectedNews} />}
          {activeTab === 'deadlines' && <DeadlinesView />}
          {activeTab === 'ai' && (
            <AiView
              messages={aiMessages}
              input={aiInput}
              setInput={setAiInput}
              onSend={handleAiSend}
            />
          )}
          {activeTab === 'export' && <ExportView />}
          {activeTab === 'settings' && <SettingsView />}
        </main>
      </div>

      {/* News detail modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="glass-card max-w-xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
            style={{ borderColor: selectedNews.urgency === 'red' ? 'rgba(239,68,68,0.3)' : selectedNews.urgency === 'amber' ? 'rgba(245,158,11,0.3)' : 'rgba(16,185,129,0.3)' }}
          >
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className={`badge ${
                selectedNews.urgency === 'red' ? 'badge-red' :
                selectedNews.urgency === 'amber' ? 'badge-amber' :
                selectedNews.urgency === 'green' ? 'badge-green' : 'badge-blue'
              }`}>
                {selectedNews.source}
              </span>
              <span className="text-slate-500 text-xs mono">{selectedNews.date} {selectedNews.time}</span>
            </div>

            <h2 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              {selectedNews.title}
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">{selectedNews.summary}</p>

            {selectedNews.deadline && (
              <div className="flex items-center gap-2 p-3 rounded-xl mb-4" style={{ background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.2)', border: '1px solid' }}>
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">Deadline: {selectedNews.deadline}</span>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mb-4">
              {selectedNews.tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div className="p-3 rounded-xl text-xs text-slate-500 mono" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              📌 Manba: {selectedNews.citation}
            </div>

            <div className="flex gap-3 mt-5">
              <button className="btn-primary flex-1 justify-center text-sm py-2.5">
                <Download className="w-4 h-4" />
                PDF Eksport
              </button>
              <button className="btn-secondary flex-1 justify-center text-sm py-2.5">
                <ArrowUpRight className="w-4 h-4" />
                Rasmiy Manba
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===== DASHBOARD VIEW ===== */
function DashboardView({
  setActiveTab,
  setSelectedNews,
}: {
  setActiveTab: (t: string) => void;
  setSelectedNews: (n: typeof mockNews[0]) => void;
}) {
  return (
    <div className="space-y-5">
      {/* Page title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Asosiy Dashboard
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">Shanba, 14 Mart 2024 • MChJ uchun</p>
        </div>
        <button onClick={() => setActiveTab('ai')} className="btn-primary text-sm py-2.5 px-4">
          <Bot className="w-4 h-4" />
          AI Tahlil
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Bugungi Yangiliklar", val: 4, icon: FileText, color: '#3b82f6', trend: '+2' },
          { label: "Sizga Ta'sir Qiladi", val: 2, icon: AlertTriangle, color: '#ef4444', trend: '!' },
          { label: "Kelgusi Deadlinlar", val: 4, icon: Clock, color: '#f59e0b', trend: '11 kun' },
          { label: "Bu oy tahlil", val: 47, icon: TrendingUp, color: '#10b981', trend: '+12%' },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="glass-card p-4">
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${s.color}15` }}
                >
                  <Icon className="w-4.5 h-4.5" style={{ color: s.color }} />
                </div>
                <span className={`badge text-xs`} style={{
                  background: `${s.color}10`,
                  borderColor: `${s.color}25`,
                  color: s.color,
                }}>
                  {s.trend}
                </span>
              </div>
              <div className="stat-number text-3xl font-bold text-white">{s.val}</div>
              <div className="text-slate-500 text-xs mt-1">{s.label}</div>
            </div>
          );
        })}
      </div>

      {/* Two columns */}
      <div className="grid lg:grid-cols-3 gap-5">
        {/* News */}
        <div className="lg:col-span-2 glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Bugungi Yangiliklar
            </h2>
            <button
              onClick={() => setActiveTab('news')}
              className="text-blue-400 text-sm hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              Hammasi <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2">
            {mockNews.slice(0, 3).map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedNews(item)}
                className="w-full flex items-start gap-3 p-3 rounded-xl text-left hover:bg-white/5 transition-colors group"
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0 mt-2"
                  style={{
                    background: item.urgency === 'red' ? '#ef4444' :
                      item.urgency === 'amber' ? '#f59e0b' :
                      item.urgency === 'green' ? '#10b981' : '#3b82f6',
                  }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-slate-200 text-sm leading-snug group-hover:text-white transition-colors line-clamp-2">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-slate-600 text-xs mono">{item.time}</span>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-slate-600 text-xs">{item.source}</span>
                  </div>
                </div>
                <span
                  className="badge shrink-0"
                  style={{
                    background: item.urgency === 'red' ? 'rgba(239,68,68,0.1)' :
                      item.urgency === 'amber' ? 'rgba(245,158,11,0.1)' :
                      item.urgency === 'green' ? 'rgba(16,185,129,0.1)' : 'rgba(59,130,246,0.1)',
                    color: item.urgency === 'red' ? '#fca5a5' :
                      item.urgency === 'amber' ? '#fcd34d' :
                      item.urgency === 'green' ? '#6ee7b7' : '#93c5fd',
                    borderColor: item.urgency === 'red' ? 'rgba(239,68,68,0.2)' :
                      item.urgency === 'amber' ? 'rgba(245,158,11,0.2)' :
                      item.urgency === 'green' ? 'rgba(16,185,129,0.2)' : 'rgba(59,130,246,0.2)',
                  }}
                >
                  {item.affect}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Deadlines */}
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Deadlinlar
            </h2>
            <button
              onClick={() => setActiveTab('deadlines')}
              className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1"
            >
              Ko'proq <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {deadlines.map((d) => (
              <div key={d.title} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">{d.title}</span>
                  <span className="mono text-xs" style={{ color: d.color }}>
                    {d.daysLeft}k
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${Math.max(5, 100 - (d.daysLeft / 60) * 100)}%`,
                      background: d.color,
                    }}
                  />
                </div>
                <div className="text-slate-600 text-xs">{d.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== NEWS VIEW ===== */
function NewsView({ setSelectedNews }: { setSelectedNews: (n: typeof mockNews[0]) => void }) {
  const [filter, setFilter] = useState('all');
  const filters = ['all', 'red', 'amber', 'green', 'blue'];
  const filterLabels: Record<string, string> = {
    all: 'Hammasi', red: "Ta'sir qiladi", amber: 'Deadline', green: 'Imtiyoz', blue: 'Axborot'
  };

  const filtered = filter === 'all' ? mockNews : mockNews.filter(n => n.urgency === filter);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          Yangiliklar
        </h1>
        <div className="flex items-center gap-2 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                filter === f
                  ? 'bg-blue-500 text-white'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {filterLabels[f]}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedNews(item)}
            className="w-full glass-card p-5 text-left hover:border-blue-500/30"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-3 h-3 rounded-full shrink-0 mt-1.5"
                style={{
                  background: item.urgency === 'red' ? '#ef4444' :
                    item.urgency === 'amber' ? '#f59e0b' :
                    item.urgency === 'green' ? '#10b981' : '#3b82f6',
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="tag">{item.source}</span>
                  <span className="mono text-slate-600 text-xs">{item.date} {item.time}</span>
                </div>
                <h3 className="text-white font-semibold mb-1.5 leading-snug" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{item.summary}</p>
                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  {item.tags.map(t => <span key={t} className="tag text-xs">{t}</span>)}
                  {item.deadline && (
                    <span className="badge badge-amber ml-auto text-xs">
                      <Clock className="w-3 h-3" /> {item.deadline}
                    </span>
                  )}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ===== DEADLINES VIEW ===== */
function DeadlinesView() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
        Deadline Tracker
      </h1>
      <div className="grid gap-4">
        {deadlines.map((d, i) => (
          <div key={d.title} className="glass-card p-5 flex items-center gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center shrink-0"
              style={{ background: `${d.color}15`, border: `1px solid ${d.color}30` }}
            >
              <span className="stat-number text-xl font-bold" style={{ color: d.color }}>
                {d.daysLeft}
              </span>
              <span className="text-xs" style={{ color: `${d.color}99` }}>kun</span>
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold mb-1" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                {d.title}
              </div>
              <div className="text-slate-500 text-sm mb-2">{d.date}</div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${Math.max(5, 100 - (d.daysLeft / 60) * 100)}%`,
                    background: d.color,
                  }}
                />
              </div>
            </div>
            <button className="btn-secondary text-sm py-2 px-4">
              <Bell className="w-4 h-4" />
              Eslatma
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== AI TAHLIL VIEW ===== */
function AiView({
  messages,
  input,
  setInput,
  onSend,
}: {
  messages: { role: string; text: string }[];
  input: string;
  setInput: (v: string) => void;
  onSend: () => void;
}) {
  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          AI Soliq Tahlili
        </h1>
        <span className="badge badge-green">
          <span className="status-dot live" />
          Claude 3.5 Sonnet
        </span>
      </div>

      {/* Suggested prompts */}
      <div className="flex gap-2 flex-wrap mb-4">
        {[
          "MChJ uchun QQS stavkasi qancha?",
          "YaTT imtiyozlari haqida",
          "Bu oy deadlinlar",
        ].map(p => (
          <button
            key={p}
            onClick={() => setInput(p)}
            className="glass px-3 py-1.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 glass-card p-4 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.role === 'ai' && (
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mr-3"
                style={{ background: 'rgba(37,99,235,0.15)' }}
              >
                <Bot className="w-4 h-4 text-blue-400" />
              </div>
            )}
            <div
              className="max-w-lg px-4 py-3 rounded-2xl text-sm leading-relaxed"
              style={{
                background: m.role === 'user'
                  ? 'rgba(37,99,235,0.2)'
                  : 'rgba(255,255,255,0.05)',
                border: m.role === 'user'
                  ? '1px solid rgba(37,99,235,0.3)'
                  : '1px solid rgba(255,255,255,0.07)',
                color: '#e2e8f0',
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-3">
        <input
          className="input-field"
          placeholder="Soliq bo'yicha savol bering..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSend()}
        />
        <button onClick={onSend} className="btn-primary shrink-0 px-5">
          <Zap className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ===== EXPORT VIEW ===== */
function ExportView() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
        Hisobot Eksport
      </h1>
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { title: 'PDF Hisobot', desc: "Professional branding bilan to'liq tahlil", icon: FileText, color: '#3b82f6', btn: 'PDF Yaratish' },
          { title: 'Telegram Xabar', desc: "Qisqa va aniq yangilik xabarini Telegramga yuborish", icon: BellRing, color: '#10b981', btn: "Telegram'ga Yuborish" },
          { title: 'Word Hujjat', desc: "Tahrirlash mumkin bo'lgan rasmiy hisobot", icon: BookOpen, color: '#f59e0b', btn: 'Word Yuklab Olish' },
        ].map((e) => {
          const Icon = e.icon;
          return (
            <div key={e.title} className="glass-card p-6 text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${e.color}15` }}
              >
                <Icon className="w-6 h-6" style={{ color: e.color }} />
              </div>
              <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>{e.title}</h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">{e.desc}</p>
              <button className="btn-secondary w-full justify-center text-sm" style={{ color: e.color }}>
                {e.btn}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ===== SETTINGS VIEW ===== */
function SettingsView() {
  const [notifications, setNotifications] = useState(true);
  const [telegram, setTelegram] = useState(true);
  const [email, setEmail] = useState(false);

  return (
    <div className="space-y-5 max-w-xl">
      <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
        Sozlamalar
      </h1>

      {/* Company type */}
      <div className="glass-card p-5">
        <h3 className="font-bold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          Korxona Turi
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {['MChJ', 'YaTT', 'AJ'].map((type) => (
            <button
              key={type}
              className={`py-3 rounded-xl border text-sm font-semibold transition-all ${
                type === 'MChJ'
                  ? 'bg-blue-500/20 border-blue-500/40 text-blue-300'
                  : 'glass border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="glass-card p-5 space-y-4">
        <h3 className="font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          Bildirishnomalar
        </h3>
        {[
          { label: 'Push bildirishnomalar', sub: 'Brauzer/telefon', val: notifications, set: setNotifications },
          { label: 'Telegram xabarlari', sub: '@echotax_bot', val: telegram, set: setTelegram },
          { label: 'Email xabarlari', sub: 'dilnoza@example.com', val: email, set: setEmail },
        ].map((n) => (
          <div key={n.label} className="flex items-center justify-between">
            <div>
              <div className="text-white text-sm font-medium">{n.label}</div>
              <div className="text-slate-500 text-xs">{n.sub}</div>
            </div>
            <button
              onClick={() => n.set(!n.val)}
              className="relative w-11 h-6 rounded-full transition-colors"
              style={{ background: n.val ? '#10b981' : 'rgba(255,255,255,0.1)' }}
            >
              <div
                className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all"
                style={{ left: n.val ? '24px' : '4px' }}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Save */}
      <button className="btn-emerald">
        <CheckCircle2 className="w-4 h-4" />
        Saqlash
      </button>
    </div>
  );
}
