import React, { useState } from 'react';
import { Play, Search, X, Loader2 } from 'lucide-react';
import { API_KEY, BASE_URL } from './apiConfig'; // Import konfigurasi kita

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [detail, setDetail] = useState(null);

  // --- FUNGSI SEARCH API ---
  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/starshort/api/v1/search?q=${query}`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      const data = await res.json();
      setMovies(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  // --- FUNGSI DRAMA API (Detail) ---
  const fetchDetail = async (id) => {
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
    // UI Code lo di sini...
    // Pas mau buka detail: 
    // onClick={() => { setSelectedMovie(movie); fetchDetail(movie.id); }}
  );
}
