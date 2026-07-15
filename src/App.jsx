import React, { useState, useEffect } from 'react';
import { Play, Search, X, Loader2 } from 'lucide-react';
import { API_KEY, BASE_URL } from './apiConfig';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [detail, setDetail] = useState(null);

  // --- AUTO-LOAD: Panggil saat pertama kali aplikasi dibuka ---
  useEffect(() => {
    fetchMovies("drama"); // Otomatis cari 'drama' saat pertama loading
  }, []); 

  // --- FUNGSI UTAMA FETCHING ---
  const fetchMovies = async (searchQuery) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/starshort/api/v1/search?q=${searchQuery}`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      const data = await res.json();
      setMovies(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // --- HANDLER FORM (Pas tombol cari diklik) ---
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    fetchMovies(query);
  };

  // --- FUNGSI DETAIL ---
  const fetchDetail = async (id) => {
    setDetail(null);
    try {
      const res = await fetch(`${BASE_URL}/starshort/api/v1/detail/${id}`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      const data = await res.json();
      setDetail(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 font-sans">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-8">
        <input 
          className="flex-1 bg-zinc-900 p-3 rounded-xl border border-zinc-800 focus:border-amber-500 outline-none"
          placeholder="Cari drama..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="bg-amber-500 p-3 rounded-xl text-black font-bold">
          <Search size={20} />
        </button>
      </form>

      {/* Grid Hasil Pencarian */}
      {loading ? (
        <div className="flex justify-center mt-20"><Loader2 className="animate-spin text-amber-500" size={40} /></div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {movies.map((m) => (
            <div key={m.id} onClick={() => { setSelectedMovie(m); fetchDetail(m.id); }} className="bg-zinc-900 p-2 rounded-xl border border-zinc-800 cursor-pointer hover:border-amber-500 transition-all">
              <img src={m.cover} className="w-full h-40 object-cover rounded-lg mb-2" />
              <p className="text-sm font-bold truncate">{m.title}</p>
            </div>
          ))}
        </div>
      )}

      {/* Modal Detail */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-zinc-950 z-50 p-6 overflow-y-auto">
          <button onClick={() => setSelectedMovie(null)} className="mb-4 p-2 bg-zinc-900 rounded-full">
            <X size={24} />
          </button>
          {detail ? (
            <div className="animate-in fade-in duration-500">
              <img src={detail.cover} className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h2 className="text-2xl font-black">{detail.title}</h2>
              <p className="text-amber-500 font-bold mb-4">{detail.genre} • {detail.episodes} Eps</p>
              <p className="text-zinc-400 leading-relaxed">{detail.desc}</p>
            </div>
          ) : (
            <div className="flex justify-center mt-20"><Loader2 className="animate-spin text-amber-500" size={40} /></div>
          )}
        </div>
      )}
    </div>
  );
}
