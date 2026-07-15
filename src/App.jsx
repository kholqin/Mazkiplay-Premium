import React, { useState, useEffect } from 'react';
import { Play, TrendingUp, Search } from 'lucide-react';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulasi Fullstack Fetching (Nanti ganti URL API lo di sini)
  useEffect(() => {
    // Ini tempat lo naruh logic fetch ke DracinAPI nantinya
    setTimeout(() => {
      setData([
        { id: 1, title: "CEO Reborn", eps: 120 },
        { id: 2, title: "Secret Billionaire", eps: 50 },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md p-4 border-b border-white/10 flex justify-between items-center">
        <h1 className="text-xl font-black italic text-amber-500">MAZKI<span className="text-white">PLAY</span></h1>
        <Search size={20} />
      </nav>

      <main className="pt-20 px-6">
        <h2 className="text-2xl font-bold mb-6">Trending Sekarang</h2>
        
        {loading ? (
          <p className="text-center text-zinc-500">Memuat data sultan...</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {data.map((item) => (
              <div key={item.id} className="bg-zinc-900 p-3 rounded-2xl border border-white/5">
                <div className="h-40 bg-zinc-800 rounded-xl mb-2 flex items-center justify-center text-zinc-600">
                  <Play />
                </div>
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-[10px] text-amber-500">{item.eps} Episodes</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
