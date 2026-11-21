import { BilingualText } from "./eunsooData";

export interface WorkItem {
  id: string;
  type: "drama" | "film";
  year: string;
  platform: string;
  title: BilingualText;
  character: BilingualText;
  tag: BilingualText;
  posterImage: string;
  synopsis: BilingualText;
  likes: number;
  stickerType: "star" | "heart" | "ribbon";
}

export const worksData: WorkItem[] = [
  {
    id: "love-untangled",
    type: "film",
    year: "2025",
    platform: "Netflix Film",
    title: { id: "Love Untangled", ko: "고백의 역사 (Love Untangled)" },
    character: { id: "Park Se-ri", ko: "박세리" },
    tag: { id: "Romansa Remaja 90-an", ko: "90년대 청춘 로맨스" },
    posterImage: "/posters/love-untangled.jpg",
    stickerType: "heart",
    synopsis: {
      id: "Berlatar tahun 1998 di Busan, Park Se-ri adalah siswi SMA berambut keriting yang merencanakan misi pengakuan cinta terhebat untuk pujaan hatinya, membawakan kisah manis persahabatan dan cinta masa muda.",
      ko: "1998년 부산을 배경으로 악성 곱슬머리를 펴고 짝사랑에게 고백하려는 열아홉 세리의 좌충우돌 고백 대작전을 그린 유쾌 발랄 청춘 로맨스 영화.",
    },
    likes: 248,
  },
  {
    id: "light-shop",
    type: "drama",
    year: "2024",
    platform: "Disney+ Original",
    title: { id: "Light Shop", ko: "조명가게 (Light Shop)" },
    character: { id: "Joo Hyun-joo", ko: "주현주" },
    tag: { id: "Misteri Fantasi & Emosional", ko: "미스터리 감성 판타지" },
    posterImage: "/posters/light-shop.jpg",
    stickerType: "star",
    synopsis: {
      id: "Sebuah toko lampu misterius di ujung gang gelap yang menjadi persimpangan antara dunia orang hidup dan roh, menghadirkan kisah emosional mendalam tentang harapan dan kasih sayang.",
      ko: "어두운 골목 끝, 빛을 밝히는 유일한 조명가게에 수상한 비밀을 가진 손님들이 찾아오며 벌어지는 미스터리 감성 휴먼 드라마.",
    },
    likes: 312,
  },
  {
    id: "twinkling-watermelon",
    type: "drama",
    year: "2023",
    platform: "tvN Drama",
    title: { id: "Twinkling Watermelon", ko: "반짝이는 워터멜론" },
    character: { id: "Yoon Cheong-ah (Masa Muda)", ko: "윤청아 (1995년 청년)" },
    tag: { id: "Mahakarya Emosional & Musik", ko: "청춘 음악 명작" },
    posterImage: "/posters/twinkling-watermelon.jpg",
    stickerType: "star",
    synopsis: {
      id: "Memerankan Yoon Cheong-ah muda yang terlahir tunarungu, Eun-soo menampilkan akting ekspresi wajah dan bahasa isyarat yang sangat menyentuh jiwa tanpa sepatah kata pun terucap.",
      ko: "선천적 청각장애를 지닌 윤청아의 1995년 학창 시절을 맡아, 대사 없이도 눈빛과 손짓, 표정만으로 깊은 울림과 찬사를 이끌어낸 인생작.",
    },
    likes: 670,
  },
  {
    id: "summer-strike",
    type: "drama",
    year: "2022",
    platform: "ENA Drama",
    title: { id: "Summer Strike", ko: "아무것도 하고 싶지 않아" },
    character: { id: "Kim Bom", ko: "김봄" },
    tag: { id: "Healing & Kehidupan Santai", ko: "힐링 라이프" },
    posterImage: "/posters/summer-strike.jpg",
    stickerType: "ribbon",
    synopsis: {
      id: "Berperan sebagai siswi SMA tangguh di kota pesisir Angok yang menyembunyikan luka batin, ia perlahan membuka hatinya pada arti persahabatan dan kehangatan keluarga sejati.",
      ko: "안곡마을의 거칠어 보이지만 마음 깊은 곳에 상처와 따뜻함을 간직한 고등학생 김봄 역을 맡아 섬세한 현실 연기를 선보였습니다.",
    },
    likes: 284,
  },
  {
    id: "nineteen-otters",
    type: "drama",
    year: "2022",
    platform: "KBS2 Drama Special",
    title: { id: "Nineteen Otters", ko: "드라마스페셜: 열아홉 해달들" },
    character: { id: "Kim Jae-young", ko: "김재영" },
    tag: { id: "Pemenang KBS Drama Awards", ko: "KBS 연기대상 수상작" },
    posterImage: "/posters/nineteen-otters.jpg",
    stickerType: "heart",
    synopsis: {
      id: "Kisah dua remaja berusia 19 tahun yang terluka dan saling menguatkan bagai berang-berang yang saling berpegangan tangan di tengah derasnya arus kehidupan.",
      ko: "가정의 붕괴 속에서 방황하던 열아홉 재영이 또 다른 상처 입은 소년을 만나 서로의 손을 꼭 잡고 위로를 건네는 수작 드라마.",
    },
    likes: 215,
  },
  {
    id: "a-model-family",
    type: "drama",
    year: "2022",
    platform: "Netflix Series",
    title: { id: "A Model Family", ko: "모범가족 (A Model Family)" },
    character: { id: "Park Yeon-woo", ko: "박연우" },
    tag: { id: "Thriller Kriminal Intens", ko: "범죄 스릴러" },
    posterImage: "/posters/a-model-family.jpg",
    stickerType: "star",
    synopsis: {
      id: "Putri dari keluarga yang mendadak terjebak dalam pusaran uang kartel narkoba. Eun-soo menghadirkan ketegangan emosional yang matang dan intens.",
      ko: "파산 직전 마약 조직의 검은 돈에 얽힌 평범한 가정의 딸 연우 역을 맡아 위태로운 가정 속에서 현실적인 반항과 불안을 탁월하게 표현.",
    },
    likes: 156,
  },
  {
    id: "dodosolsollalasol",
    type: "drama",
    year: "2020",
    platform: "KBS2 Drama",
    title: { id: "Do Do Sol Sol La La Sol", ko: "도도솔솔라라솔" },
    character: { id: "Jin Ha-young", ko: "진하영" },
    tag: { id: "Komedi Romantis Manis", ko: "발랄 로코" },
    posterImage: "/posters/dodosolsollalasol.jpg",
    stickerType: "ribbon",
    synopsis: {
      id: "Gadis SMA yang penuh semangat dan periang, penggemar berat Sunwoo Joon yang selalu membawa gelak tawa dan keceriaan di akademi piano Lala.",
      ko: "선우준 바라기이자 당돌하고 엉뚱한 매력을 발산하며 극의 활력소 역할을 톡톡히 해낸 사랑스러운 고등학생 하영 역.",
    },
    likes: 198,
  },
  {
    id: "bad-papa",
    type: "drama",
    year: "2018",
    platform: "MBC Drama",
    title: { id: "Bad Papa", ko: "배드파파 (Bad Papa)" },
    character: { id: "Yoo Young-sun", ko: "유영선" },
    tag: { id: "Aktris Muda Terbaik MBC 2018", ko: "MBC 청소년 연기상 수상작" },
    posterImage: "/posters/bad-papa.jpg",
    stickerType: "heart",
    synopsis: {
      id: "Putri mantan juara tinju yang berusaha menyembunyikan bakat menarinya karena kesulitan ekonomi keluarga, menghantarkan hubungan ayah-anak yang menguras air mata.",
      ko: "왕년의 복싱 챔피언 아버지를 둔 춤을 사랑하는 소녀 영선 역을 맡아 장혁과의 애틋한 부녀 케미로 깊은 감동을 안겼습니다.",
    },
    likes: 380,
  },
  {
    id: "legend-of-the-blue-sea",
    type: "drama",
    year: "2016",
    platform: "SBS Drama",
    title: { id: "The Legend of the Blue Sea", ko: "푸른 바다의 전설" },
    character: { id: "Shim Cheong / Se-hwa (Remaja)", ko: "심청 / 세화 (청소년 시절)" },
    tag: { id: "Fantasi Legendaris", ko: "판타지 로맨스" },
    posterImage: "/posters/legend-of-the-blue-sea.jpg",
    stickerType: "star",
    synopsis: {
      id: "Memerankan masa remaja putri duyung Shim Cheong (Jun Ji-hyun). Tatapan matanya yang murni dan aura mistisnya langsung mencuri perhatian pemirsa dunia.",
      ko: "인어 심청(전지현 분)의 청소년 시절을 맡아 신비롭고 맑은 눈망울로 첫사랑의 순수함을 완벽하게 소화하며 강렬한 인상을 남김.",
    },
    likes: 530,
  },
  {
    id: "vanishing-time",
    type: "film",
    year: "2016",
    platform: "Theatrical Release",
    title: { id: "Vanishing Time: A Boy Who Returned", ko: "가려진 시간" },
    character: { id: "Oh Soo-rin", ko: "오수린" },
    tag: { id: "Film Debut Paling Berkesan", ko: "기적의 데뷔작" },
    posterImage: "/posters/vanishing-time.jpg",
    stickerType: "heart",
    synopsis: {
      id: "Mengalahkan 300 peserta audisi di usia 14 tahun untuk beradu peran dengan Kang Dong-won. Menjadi satu-satunya anak yang mempercayai temannya yang kembali setelah terjebak dalam waktu berhenti.",
      ko: "300대 1의 경쟁률을 뚫고 강동원과 주연으로 호흡을 맞춘 데뷔작. 멈춰진 시간 속에서 홀로 어른이 되어 돌아온 소년을 유일하게 믿어주는 소녀 수린 역.",
    },
    likes: 720,
  },
];
