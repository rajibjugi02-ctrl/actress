# Shin Eun-soo (신은수) Tribute Website — Next.js Single-Page Edition 🌸

> **Konsep Desain:** *Cozy Pastel Scrapbook & Liquid Glass*  
> **Tech Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide React  
> **Dibuat dengan kasih oleh:** rajibjugi02-ctrl (`https://github.com/rajibjugi02-ctrl`)

---

## 🌟 Transformasi & Arsitektur Proyek

Website tribute **Shin Eun-soo (신은수)** telah dirombak total menjadi aplikasi modern **Full Next.js Single-Page (One-Page)** dengan animasi *butter-smooth* (60fps) berbasis **Framer Motion** dan menerapkan **ATURAN KETAT ZERO EMOJI (100% Custom SVG & Lucide Icons)**.

---

### 📸 Foto Otentik Shin Eun-soo yang Dimasukkan

Kelima foto asli Shin Eun-soo yang diunggah pengguna telah disematkan secara rapi dan estetis di dalam proyek:
1. **Hero Section (Potret Utama):** [`/images/eunsoo-cake.jpg`](file:///c:/Shieunsoo/public/images/eunsoo-cake.jpg) — Bingkai polaroid berhias washi tape pastel, custom ribbon SVG, dan pushpin 3D.
2. **Galeri Potret 1:** [`/images/eunsoo-cake.jpg`](file:///c:/Shieunsoo/public/images/eunsoo-cake.jpg) — *Kafe & Kue Manis* (Sore ceria di kafe dengan syal hangat).
3. **Galeri Potret 2:** [`/images/eunsoo-selfie-glasses.jpg`](file:///c:/Shieunsoo/public/images/eunsoo-selfie-glasses.jpg) — *Mirror Selfie* kasual dengan kacamata di rambut dan casing HP berstiker.
4. **Galeri Potret 3:** [`/images/eunsoo-street-green.jpg`](file:///c:/Shieunsoo/public/images/eunsoo-street-green.jpg) — *Malam Kota* (Mantel hijau zaitun di depan dinding bata malam hari).
5. **Galeri Potret 4:** [`/images/eunsoo-selfie-top.jpg`](file:///c:/Shieunsoo/public/images/eunsoo-selfie-top.jpg) — *Gaya Santai* (Daily look santai dengan atasan putih tipis dan sanggul rambut kasual).
6. **Galeri Potret 5:** [`/images/eunsoo-street-1.jpg`](file:///c:/Shieunsoo/public/images/eunsoo-street-1.jpg) — *Langkah Musim Dingin* (Langkah lincah berjaket bomber dan syal rajut di malam hari).

---

### ✨ Fitur Unggulan

1. **Zero Emoji (100% Custom SVG & Lucide Icons):**
   - Tidak ada satu pun karakter emoji Unicode di seluruh kode maupun tampilan UI.
   - Semua ornamen (bintang berkelip, pita pastel, hati, piringan hitam, washi tape, klip kertas, pushpin, dan pembatas gelombang) dibuat menggunakan komponen React **Custom SVG**.
   - Ikon antarmuka menggunakan **Lucide React** dengan ketebalan garis membulat halus (`strokeWidth={1.8}`).

2. **Dukungan 2 Bahasa Instan (ID & KO) dengan React Context:**
   - Perpindahan bahasa instan antara Indonesia dan Korea tanpa reload halaman menggunakan `LanguageContext`.
   - Penerapan `word-break: keep-all` otomatis pada teks Hangul agar baris kata bahasa Korea tetap rapi.

3. **Intro Preloader (Curtain Reveal):**
   - Tampilan pembuka layar penuh bertema pastel dengan animasi bintang berkelip.
   - Teks **"신은수"** beranimasi halus beralih ke **"Shin Eun-soo"** setelah 1,2 detik beserta subteks dwibahasa, ditutup animasi tirai terangkat ke atas (*curtain reveal*) dan tombol *Skip*.

4. **Navigasi Liquid Glass (Scroll-Spy):**
   - **Desktop:** *Floating pill* di atas tengah dengan efek kaca cair (`backdrop-blur-xl`), tombol ganti bahasa, serta kapsul aktif (`layoutId="activePill"`) yang meluncur kenyal (*spring*) mengikuti bagian yang sedang dilihat.
   - **Mobile:** *Floating bottom dock* ergonomis di bagian bawah layar.

5. **Struktur Halaman Lengkap dalam 1 Alur Tunggal:**
   - **Hero:** Perkenalan hangat, kutipan manis, statistik karier, dan polaroid 3D.
   - **Profil:** Kertas buku catatan bergaris (*lined notebook paper*), lubang binder samping, sticky note fakta menarik, dan kartu penghargaan (*Golden Cinematography 2026*, *Korea First Brand 2024*, *KBS Drama Awards 2022*, *MBC Drama Awards 2018*).
   - **Karya (10 Filmografi Poster Asli):** Menggunakan 10 foto poster resmi asli di dalam bingkai kertas koleksi scrapbook (`public/posters/`), aksen washi tape, stiker Custom SVG yang bergoyang saat di-hover, efek zoom-in halus, overlay peran karakter, serta modal **Kartu Tiket Bioskop** dengan ledakan mini-hati SVG.
   - **Potret (Scrapbook Gallery):** Galeri polaroid dengan efek lipatan kertas 3D dan **Diary Lightbox** yang mendukung navigasi tombol panah keyboard.
   - **Pemutar Musik Romantis:** Widget melayang dengan piringan hitam (*vinyl disc*) Custom SVG yang berputar, partikel not balok & hati melayang, 4 batang *equalizer bar* warna pastel yang menari, serta melodi synthesizer romantis (Web Audio API) bawaan.
   - **Footer:** Pembatas ombak pastel, tautan Instagram resmi (`@su1023_`), agensi (*Management SOOP*), dan badge kredit ke GitHub `rajibjugi02-ctrl`.

---

## 🚀 Cara Menjalankan Proyek

### Mode Pengembangan (Development Server):
```powershell
npm run dev
```
Buka browser dan akses **`http://localhost:3000`**.

### Mode Produksi (Production Build):
```powershell
npm run build
npm run start
```
