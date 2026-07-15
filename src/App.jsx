import React, { useState } from 'react';
import { Play, Sparkles, TrendingUp, Zap, Star, Search, User, Tv } from 'lucide-react';

const featuredDrama = {
  title: "Billionaire's Hidden Truth",
  tags: ["Romance", "Drama", "Sultan"],
  description: "Dunia Elena berubah total saat dia tahu suaminya yang sederhana ternyata pewaris tunggal perusahaan raksasa dunia.",
  image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1200&auto=format&fit=crop"
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-500/30">
      
      {/* Navbar Premium */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-2xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter italic">
          MAZKI<span className="text-amber-500">PLAY</span>
        </h1>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.5)] border-2 border-zinc-950"></div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 pb-24 px-4 space-y-8">
        
        {/* Featured Card */}
        <section className="relative rounded-[2rem] overflow-hidden group shadow-2xl shadow-amber-500/10 border border-white/5">
          <img 
            src={featuredDrama.image} 
            className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent p-8 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-amber-500 text-black font-bold text-[10px] rounded-full uppercase tracking-widest shadow-lg shadow-amber-500/50">Eksklusif</span>
              <span className="text-zinc-300 text-xs font-medium flex items-center gap-1">
                <Star size={12} className="text-amber-400 fill-amber-400"/> 4.9/5.0
              </span>
            </div>
            <h2 className="text-4xl font-black mb-4 leading-tight text-white drop-shadow-xl">
              {featuredDrama.title}
            </h2>
            <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold w-fit hover:scale-105 transition-all shadow-xl active:scale-95">
              <Play fill="black" size={18} /> Tonton Sekarang
            </button>
          </div>
        </section>

        {/* Section Grid Trending */}
        <section>
          <div className="flex items-center justify-between mb-6 px-2">
            <h3 className="text-xl font-bold flex items-center gap-2 tracking-tight">
              <TrendingUp className="text-amber-500" /> Sedang Trending
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-zinc-900/40 p-2 rounded-3xl border border-white/5 backdrop-blur-sm hover:border-amber-500/30 transition-all cursor-pointer group">
                <div className="h-48 bg-zinc-800 rounded-2xl mb-3 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${item * 10}/400/600`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="poster"
                  />
                </div>
                <div className="px-1">
                    <p className="font-bold text-sm truncate">The Billionaire Scandal</p>
                    <p className="text-[10px] text-zinc-500 font-medium">99+ Episodes</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 w-full bg-zinc-950/80 backdrop-blur-xl border-t border-white/5 p-4 flex justify-around text-zinc-500">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-amber-500' : ''}`}>
          <Tv size={20} />
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Search size={20} />
          <span className="text-[10px] font-bold">Cari</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <User size={20} />
          <span className="text-[10px] font-bold">Profil</span>
        </button>
      </footer>
    </div>
  );
}
