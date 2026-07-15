// src/apiConfig.js

// PENTING: Gunakan import.meta.env, BUKAN process.env
export const API_KEY = import.meta.env.VITE_API_KEY;

// Pastikan BASE_URL sudah benar
export const BASE_URL = "https://prod-api.dracinapi.com";
