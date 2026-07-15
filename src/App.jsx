import React, { useState } from 'react';
import { Play, Search, Home, Library, Heart, X, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Simulasi Data API (Nanti kita ganti ke fetch asli)
  const movies = [
    { id: 1, title: "The Billionaire Secret", category: "Drama", cover: "https://picsum.photos/seed/1/600/400" },
    { id: 2, title: "CEO Reborn", category: "Romance", cover: "https://picsum.photos/seed/2/600/400" },
    { id: 3, title: "Shadow Warrior", category: "Action", cover: "https://picsum.photos/seed/3/600/400" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-500/30">
      
      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 p-4 flex justify-between items-center">
        <h1 className="text-xl font-black italic tracking-tighter text-amber-500">MAZKI<span className="text-white">PLAY</span></h1>
        <Search size={20} className="text-zinc-400" />
      </nav>

      {/* 2. Hero Section (Featured) */}
      <main className="pt-20 px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden mb-8 group">
          <img src="https://picsum.photos/seed/hero/1200/800" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent p-6 flex flex-col justify-end">
            <h2 className="text-2xl font-bold mb-2">Featured Premium</h2>
            <button onClick={() => setSelectedMovie(movies[0])} className="flex items-center gap-2 bg-amber-500 text-black px-6 py-2 rounded-full font-bold w-fit">
              <Play size={16} fill="black" /> Tonton Sekarang
            </button>
          </div>
        </div>

        {/* 3. List & Fitur Category */}
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {["Semua", "Drama", "Action", "Romance"].map(cat => (
            <button key={cat} className="px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold hover:border-amber-500 transition-all">
              {cat}
            </button>
          ))}
        </div>

        {/* 4. Grid Content */}
        <div className="grid grid-cols-2 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} onClick={() => setSelectedMovie(movie)} className="bg-zinc-900/50 p-2 rounded-2xl border border-white/5 hover:border-amber-500/30 cursor-pointer transition-all">
              <img src={movie.cover} className="w-full h-32 object-cover rounded-xl mb-2" />
              <p className="font-bold text-sm truncate">{movie.title}</p>
              <p className="text-[10px] text-zinc-500">{movie.category}</p>
            </div>
          ))}
        </div>
      </main>

      {/* 5. Modal Player (Fitur Nonton) */}
      {selectedMovie && (
        <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col">
          <div className="p-4 flex justify-between items-center">
            <button onClick={() => setSelectedMovie(null)} className="p-2 bg-zinc-900 rounded-full">
              <X size={20} />
            </button>
            <span className="font-bold text-sm">Now Playing</span>
            <div className="w-8"></div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full aspect-video bg-zinc-900 flex items-center justify-center border-y border-zinc-800">
               <p className="text-zinc-500 italic">Video Player Ready</p>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold">{selectedMovie.title}</h3>
            <p className="text-zinc-400 text-sm mt-2">Ini adalah fitur premium untuk streaming video. Nanti kita isi dengan link HLS asli.</p>
          </div>
        </div>
      )}
    </div>
  );
}
