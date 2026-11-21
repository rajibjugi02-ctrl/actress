import { playlistTracks, TrackItem } from "./playlist";
import { worksData, WorkItem } from "./works";

export interface BilingualText {
  id: string;
  ko: string;
}

export interface AwardItem {
  year: string;
  title: BilingualText;
  category: BilingualText;
  work: string;
}

export type { WorkItem };

export interface PortraitItem {
  id: number;
  image: string;
  tapeColor: "pink" | "yellow" | "mint" | "lavender";
  hasPin: boolean;
  hasClip: boolean;
  rotation: number;
  caption: BilingualText;
  tag: BilingualText;
  date: string;
}

export type SongTrack = TrackItem;

export const siteContent = {
  hero: {
    badge: {
      id: "Aktris Berbakat & Bintang Musim Semi",
      ko: "빛나는 연기력의 차세대 배우",
    },
    titlePrefix: {
      id: "Kehangatan & Binar",
      ko: "따스함과 맑은 눈빛",
    },
    nameEn: "Shin Eun-soo",
    nameKo: "신은수",
    quote: {
      id: '"Setiap karakter yang kuperankan adalah caraku membagikan cerita dan rasa hangat kepada dunia."',
      ko: '"제가 연기하는 모든 인물은 세상과 따뜻한 이야기를 나누는 나만의 방식입니다."',
    },
    ctaWorks: { id: "Koleksi Karya", ko: "작품 보기" },
    ctaProfile: { id: "Lembar Profil", ko: "프로필 기록" },
    heroPortraitUrl: "/images/eunsoo-cake.jpg",
    polaroidCaption: {
      id: "Senyuman manis di sore hari yang ceria",
      ko: "달콤한 디저트와 함께한 사랑스러운 오후",
    },
    stats: {
      years: { label: { id: "Tahun Berkarier", ko: "연기 활동" }, value: "10+" },
      awards: { label: { id: "Penghargaan", ko: "주요 수상" }, value: "4+" },
      roles: { label: { id: "Peran Utama", ko: "대표 배역" }, value: "15+" },
    },
  },

  profile: {
    sectionTag: "Profile & History",
    title: { id: "Lembar Catatan Profil", ko: "배우 프로필 기록장" },
    subtitle: {
      id: "Perjalanan karier, biodata pribadi, agensi, dan pencapaian sang bintang muda.",
      ko: "신은수의 데뷔 여정과 소속사, 그리고 빛나는 수상 내역.",
    },
    notebookTitle: { id: "Catatan Pribadi Eun-soo", ko: "은수의 개인 수첩" },
    fields: [
      {
        label: { id: "Nama Lengkap", ko: "성명" },
        value: { id: "Shin Eun-soo (신은수 · 申恩秀)", ko: "신은수 (申恩秀 · Shin Eun-soo)" },
      },
      {
        label: { id: "Tanggal Lahir", ko: "생년월일" },
        value: {
          id: "23 Oktober 2002 (Seoul, Korea Selatan)",
          ko: "2002년 10월 23일 (서울특별시)",
        },
      },
      {
        label: { id: "Agensi", ko: "소속사" },
        value: {
          id: "Management SOOP (sejak Maret 2025)",
          ko: "매니지먼트 숲 (2025년 3월 전속계약)",
        },
      },
      {
        label: { id: "Tahun Debut", ko: "데뷔" },
        value: {
          id: "2016 – Film 'Vanishing Time: A Boy Who Returned'",
          ko: "2016년 영화 '가려진 시간'",
        },
      },
      {
        label: { id: "Pendidikan", ko: "학력" },
        value: {
          id: "Universitas Dongguk (Jurusan Teater & Film)",
          ko: "동국대학교 예술대학 (연극학부)",
        },
      },
      {
        label: { id: "Zodiak & Shio", ko: "별자리 / 띠" },
        value: {
          id: "Scorpio / Shio Kuda",
          ko: "전갈자리 / 말띠",
        },
      },
    ],
    funFacts: [
      {
        id: "Terpilih menjadi pemeran utama film debutnya setelah mengalahkan lebih dari 300 peserta audisi di usia 14 tahun.",
        ko: "만 14세의 나이에 300대 1의 경쟁률을 뚫고 데뷔작 주연으로 발탁되었습니다.",
      },
      {
        id: "Pernah menjadi trainee agensi JYP Entertainment sejak 2014 dan sempat bersiap untuk debut girl group.",
        ko: "2014년 JYP 엔터테인먼트 연습생으로 입사하여 연기와 댄스를 두루 연마했습니다.",
      },
      {
        id: "Menjadi MC program musik SBS Inkigayo bersama Mingyu (SEVENTEEN) pada tahun 2019 dengan pembawaan yang ceria.",
        ko: "2019년 SBS 인기가요에서 세븐틴 민규와 함께 밝고 사랑스러운 진행을 선보였습니다.",
      },
    ],
    awardsTitle: { id: "Bintang Penghargaan", ko: "주요 수상 기록" },
    awards: [
      {
        year: "2026",
        title: { id: "Golden Cinematography Awards", ko: "제44회 황금촬영상" },
        category: { id: "Penghargaan Aktris Spesial Juri", ko: "심사위원 특별상" },
        work: "Love Untangled",
      },
      {
        year: "2024",
        title: { id: "Korea First Brand Awards", ko: "대한민국 퍼스트브랜드 대상" },
        category: { id: "Aktris Pendatang Baru Terbaik", ko: "신인 여자배우 부문" },
        work: "Twinkling Watermelon",
      },
      {
        year: "2022",
        title: { id: "KBS Drama Awards", ko: "KBS 연기대상" },
        category: { id: "Aktris Terbaik Serial Pendek / Drama Spesial", ko: "드라마스페셜·TV시네마상" },
        work: "Nineteen Otters (열아홉 해달들)",
      },
      {
        year: "2018",
        title: { id: "MBC Drama Awards", ko: "MBC 연기대상" },
        category: { id: "Aktris Muda Terbaik (Best Child Actress)", ko: "청소년 연기상" },
        work: "Bad Papa (배드파파)",
      },
    ] as AwardItem[],
  },

  works: {
    sectionTag: "Filmography Showcase",
    title: { id: "Koleksi Poster Drama & Film", ko: "필모그래피 & 작품관" },
    subtitle: {
      id: "Sepuluh karya terbaik pilihan yang diperankan oleh Shin Eun-soo dengan penghayatan mendalam.",
      ko: "신은수가 진심 어린 열연으로 완성해 낸 대표 드라마와 영화 10편.",
    },
    filterAll: { id: "Semua", ko: "전체" },
    filterDrama: { id: "Drama", ko: "드라마" },
    filterFilm: { id: "Film", ko: "영화" },
    ticketHeading: { id: "KARTU TIKET BIOSKOP", ko: "시네마 티켓 패스" },
    roleLabel: { id: "Peran / Karakter", ko: "배역" },
    yearLabel: { id: "Tahun Rilis", ko: "개봉/방영" },
    synopsisLabel: { id: "Sinopsis Cerita", ko: "줄거리 소개" },
    reactBtnText: { id: "Kirim Cinta", ko: "하트 보내기" },
    closeBtnText: { id: "Tutup", ko: "닫기" },
    items: worksData,
  },

  gallery: {
    sectionTag: "Scrapbook Gallery",
    title: { id: "Galeri Potret & Scrapbook", ko: "다이어리 & 스크랩북 포토" },
    subtitle: {
      id: "Koleksi foto otentik Shin Eun-soo yang dihias dengan sentuhan washi tape, klip kertas, dan catatan hangat.",
      ko: "신은수의 실제 일상과 따뜻한 순간들을 기록한 아날로그 스크랩북 컬렉션.",
    },
    lightboxTitle: { id: "Lembaran Buku Kenangan", ko: "추억의 기록장" },
    prevBtn: { id: "Sebelumnya", ko: "이전" },
    nextBtn: { id: "Berikutnya", ko: "다음" },
    items: [
      {
        id: 1,
        image: "/images/eunsoo-cake.jpg",
        tapeColor: "pink",
        hasPin: true,
        hasClip: false,
        rotation: -2,
        date: "2025.10",
        caption: {
          id: "Momen menggemaskan saat menikmati kue manis dengan syal putih hangat di kafe favorit.",
          ko: "좋아하는 카페에서 달콤한 케이크와 따뜻한 스카프로 보낸 사랑스러운 순간.",
        },
        tag: { id: "Kafe & Kue Manis", ko: "카페 데이" },
      },
      {
        id: 2,
        image: "/images/eunsoo-selfie-glasses.jpg",
        tapeColor: "yellow",
        hasPin: false,
        hasClip: true,
        rotation: 2.5,
        date: "2025.09",
        caption: {
          id: "Mirror selfie kasual dengan kacamata bertengger di rambut dan casing ponsel berstiker lucu.",
          ko: "안경을 머리에 얹고 귀여운 스티커 폰케이스와 함께 남긴 거울 셀카.",
        },
        tag: { id: "Mirror Selfie", ko: "거울 셀피" },
      },
      {
        id: 3,
        image: "/images/eunsoo-street-green.jpg",
        tapeColor: "mint",
        hasPin: true,
        hasClip: false,
        rotation: -1.5,
        date: "2025.11",
        caption: {
          id: "Berdiri anggun di depan dinding bata malam hari mengenakan mantel hijau zaitun yang nyaman.",
          ko: "따뜻한 올리브 코트를 입고 벽돌담 앞에서 보낸 차분하고 다정한 밤 산책.",
        },
        tag: { id: "Malam Kota", ko: "밤 산책" },
      },
      {
        id: 4,
        image: "/images/eunsoo-selfie-top.jpg",
        tapeColor: "lavender",
        hasPin: false,
        hasClip: true,
        rotation: 3,
        date: "2025.08",
        caption: {
          id: "Tampilan gaya santai dengan atasan putih tipis dan sanggul rambut kasual di ruang rias.",
          ko: "자연스러운 올림머리와 편안한 데일리 룩으로 담아낸 거울 앞 기록.",
        },
        tag: { id: "Gaya Santai", ko: "데일리 룩" },
      },
      {
        id: 5,
        image: "/images/eunsoo-street-1.jpg",
        tapeColor: "pink",
        hasPin: true,
        hasClip: false,
        rotation: -2.8,
        date: "2025.11",
        caption: {
          id: "Langkah lincah di sudut jalan kota dengan jaket bomber dan syal rajut di malam musim dingin.",
          ko: "포근한 목도리와 보머 재킷 차림으로 도심 골목을 걷는 활기찬 발걸음.",
        },
        tag: { id: "Langkah Musim Dingin", ko: "겨울 나들이" },
      },
    ] as PortraitItem[],
  },

  music: {
    panelTitle: { id: "Kotak Musik Romantis", ko: "감성 오르골 플레이어" },
    nowPlaying: { id: "Sedang Diputar", ko: "현재 재생 중" },
    playlistTitle: { id: "Daftar Lagu Pilihan", ko: "선곡 리스트" },
    tracks: playlistTracks,
  },

  footer: {
    closingTitle: {
      id: "Teruslah Bersinar, Shin Eun-soo",
      ko: "언제나 눈부시게 빛날 배우 신은수를 응원합니다",
    },
    closingQuote: {
      id: "Semoga setiap langkah dan peranmu di masa depan senantiasa dikelilingi kehangatan, cinta, dan binar musim semi.",
      ko: "앞으로 걸어갈 모든 계절과 작품마다 따스한 사랑과 눈부신 찬사가 가득하기를 마음 모아 소망합니다.",
    },
    instagramLabel: "Instagram Resmi (@su1023_)",
    agencyLabel: "Agensi Resmi (Management SOOP)",
    creatorCredit: "Crafted with love by rajibjugi02-ctrl",
  },
};
