import { BilingualText } from "./eunsooData";

/*
 * ============================================================================
 * SISTEM SUMBER LAGU HYBRID (LOKAL FULL SONG + AUTO-FALLBACK ITUNES)
 * ============================================================================
 * 
 * CARA MENGGUNAKAN VERSI FULL SONG MILIK SENDIRI:
 * Cukup simpan file MP3 berdurasi penuh ke dalam folder `public/audio/`:
 *   1. `public/audio/penjaga-hati.mp3`
 *   2. `public/audio/glue-song.mp3`
 *   3. `public/audio/love-maybe.mp3`
 * 
 * MEKANISME AUTO-FALLBACK:
 * Jika file MP3 lokal di atas belum tersedia di folder `public/audio/` (404),
 * pemutar musik secara otomatis memutar audio resmi dari Apple iTunes CDN
 * (atau via `/api/music`) sehingga musik selalu langsung bisa diputar tanpa error.
 */

export interface TrackItem {
  id: number;
  title: string;
  artist: string;
  origin: BilingualText;
  duration: string;
  localUrl: string;
  fallbackUrl: string;
  searchTerm: string;
}

export const playlistTracks: TrackItem[] = [
  {
    id: 1,
    title: "Penjaga Hati",
    artist: "Nadhif Basalamah",
    origin: {
      id: "Indonesia (Balada Romantis)",
      ko: "인도네시아 감성 발라드",
    },
    duration: "4:20",
    localUrl: "/audio/penjaga-hati.mp3",
    fallbackUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e6/ca/05/e6ca05ae-a625-bc25-c579-d85d663a9e32/mzaf_12102823507856840081.plus.aac.p.m4a",
    searchTerm: "Nadhif Basalamah Penjaga Hati",
  },
  {
    id: 2,
    title: "Glue Song",
    artist: "beabadoobee",
    origin: {
      id: "Barat (Akustik Hangat)",
      ko: "어쿠스틱 팝",
    },
    duration: "2:45",
    localUrl: "/audio/glue-song.mp3",
    fallbackUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f9/6f/60/f96f6026-4134-b49b-234b-275b8ff5b6c9/mzaf_17653663805376085940.plus.aac.p.m4a",
    searchTerm: "beabadoobee Glue Song",
  },
  {
    id: 3,
    title: "Love, Maybe (사랑인가 봐)",
    artist: "MeloMance (멜로망스)",
    origin: {
      id: "Korea (Romansa K-Drama OST)",
      ko: "한국 로맨스 OST",
    },
    duration: "3:05",
    localUrl: "/audio/love-maybe.mp3",
    fallbackUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/41/10/ee/4110ee0c-7e0b-b0c7-e6b3-1d5288dc377f/mzaf_1679421330560011573.plus.aac.p.m4a",
    searchTerm: "MeloMance Love Maybe",
  },
];
