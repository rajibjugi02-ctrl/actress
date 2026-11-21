import React from "react";

// ==================== BASIC PASTEL ACCENTS ====================

export const SparkleStar: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "", size = 24, color = "#F78DA7" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
      fill={color}
    />
  </svg>
);

export const PastelHeart: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  fill?: boolean;
}> = ({ className = "", size = 20, color = "#F78DA7", fill = true }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
      fill={fill ? color : "none"}
      stroke={color}
      strokeWidth={fill ? 0 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PastelRibbon: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "", size = 32, color = "#FFB3C6" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Left Loop */}
    <path
      d="M20 20 C12 8 2 14 6 22 C10 30 18 22 20 20 Z"
      fill={color}
      stroke="#F78DA7"
      strokeWidth="1.5"
    />
    {/* Right Loop */}
    <path
      d="M20 20 C28 8 38 14 34 22 C30 30 22 22 20 20 Z"
      fill={color}
      stroke="#F78DA7"
      strokeWidth="1.5"
    />
    {/* Knot */}
    <circle cx="20" cy="20" r="4" fill="#F78DA7" />
    {/* Left Ribbon Tail */}
    <path
      d="M18 23 L12 36 L17 33 L20 37 L21 24 Z"
      fill={color}
      stroke="#F78DA7"
      strokeWidth="1"
    />
    {/* Right Ribbon Tail */}
    <path
      d="M22 23 L28 36 L23 33 L20 37 L19 24 Z"
      fill={color}
      stroke="#F78DA7"
      strokeWidth="1"
    />
  </svg>
);

export const MusicNoteSingle: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "", size = 20, color = "#F78DA7" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 18V5L19 3V16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="18" r="3" fill={color} />
  </svg>
);

export const MusicNoteDouble: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "", size = 20, color = "#F78DA7" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 18V5L19 3V16M9 9L19 7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="18" r="3" fill={color} />
    <circle cx="16" cy="16" r="3" fill={color} />
  </svg>
);

export const VinylRecord: React.FC<{
  className?: string;
  size?: number;
  isSpinning?: boolean;
}> = ({ className = "", size = 48, isSpinning = false }) => (
  <div
    style={{ width: size, height: size }}
    className={`relative rounded-full flex items-center justify-center shrink-0 shadow-md ${
      isSpinning ? "animate-spin" : ""
    } ${className}`}
  >
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Outer vinyl disc */}
      <circle cx="50" cy="50" r="48" fill="#2E282A" />
      {/* Grooves */}
      <circle cx="50" cy="50" r="42" stroke="#453E41" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="36" stroke="#453E41" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="30" stroke="#453E41" strokeWidth="1.2" />
      {/* Center Label Pastel Pink */}
      <circle cx="50" cy="50" r="18" fill="#FFD6E0" stroke="#F78DA7" strokeWidth="2" />
      {/* Spindle hole */}
      <circle cx="50" cy="50" r="5" fill="#FFFDF9" />
    </svg>
  </div>
);

export const WashiTape: React.FC<{
  color?: "pink" | "yellow" | "mint" | "lavender";
  className?: string;
  style?: React.CSSProperties;
}> = ({ color = "pink", className = "", style }) => {
  const bgColors = {
    pink: "rgba(255, 214, 224, 0.8)",
    yellow: "rgba(255, 243, 176, 0.8)",
    mint: "rgba(216, 243, 220, 0.8)",
    lavender: "rgba(232, 221, 251, 0.8)",
  };

  return (
    <div
      className={`h-6 rounded-sm shadow-sm backdrop-blur-sm pointer-events-none border-x-2 border-dashed border-white/60 ${className}`}
      style={{
        backgroundColor: bgColors[color],
        ...style,
      }}
    />
  );
};

export const PaperClip: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "", size = 32, color = "#A89F91" }) => (
  <svg
    width={size}
    height={size * 1.8}
    viewBox="0 0 24 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-sm ${className}`}
  >
    <path
      d="M7 14V34C7 37.3 9.7 40 13 40C16.3 40 19 37.3 19 34V8C19 4.7 16.3 2 13 2C9.7 2 7 4.7 7 8V31C7 32.7 8.3 34 10 34C11.7 34 13 32.7 13 31V14"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PushPin: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = "", size = 20 }) => (
  <div
    style={{ width: size, height: size }}
    className={`relative rounded-full shadow-md shrink-0 bg-gradient-to-br from-[#FF94B4] to-[#E63968] border border-white/40 ${className}`}
  >
    <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/80" />
  </div>
);

export const TrophyIcon: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "", size = 24, color = "#FFD166" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 9V3H18V9C18 12.3 15.3 15 12 15C8.7 15 6 12.3 6 9Z"
      fill={color}
      stroke="#DDA715"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M6 5H3C2.4 5 2 5.4 2 6V8C2 9.7 3.3 11 5 11H6"
      stroke="#DDA715"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M18 5H21C21.6 5 22 5.4 22 6V8C22 9.7 20.7 11 19 11H18"
      stroke="#DDA715"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M12 15V19" stroke="#DDA715" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M8 21H16"
      stroke="#DDA715"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const WavyUnderline: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = "", color = "#F78DA7" }) => (
  <svg
    viewBox="0 0 200 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M0,6 Q25,0 50,6 T100,6 T150,6 T200,6"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export const WaveDivider: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = "", color = "#FFF5F7" }) => (
  <svg
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-14 ${className}`}
  >
    <path
      d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
      fill={color}
    />
  </svg>
);

// ==================== 10 CUSTOM POSTER ILLUSTRATIONS ====================

export const PosterIllustration: React.FC<{
  type: string;
  className?: string;
}> = ({ type, className = "" }) => {
  switch (type) {
    case "love-untangled":
      // 1998 retro cassette & love note
      return (
        <div className={`w-full h-full bg-gradient-to-br from-[#FFE4E6] to-[#FFF1F2] flex flex-col items-center justify-center p-4 relative overflow-hidden ${className}`}>
          <div className="w-24 h-16 bg-[#FCA5A5] rounded-lg border-2 border-[#EF4444]/60 p-2 flex flex-col justify-between shadow-inner relative">
            <div className="w-full h-4 bg-[#FEE2E2] rounded flex items-center justify-around px-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-8 h-1 bg-[#FCA5A5] rounded" />
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
            </div>
            <div className="text-[10px] text-center font-bold text-[#991B1B]">1998 BUSAN</div>
          </div>
          <PastelHeart size={28} color="#E11D48" className="mt-3 animate-pulse" />
          <div className="text-xs font-hand text-[#881337] mt-1 font-bold">Love Untangled</div>
        </div>
      );

    case "light-shop":
      // Mystery hanging lightbulb & warm glows
      return (
        <div className={`w-full h-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] flex flex-col items-center justify-center p-4 relative overflow-hidden ${className}`}>
          <div className="absolute top-0 w-0.5 h-14 bg-[#CBD5E1]" />
          <div className="w-12 h-16 bg-gradient-to-b from-[#FEF08A] to-[#FACC15] rounded-full mt-10 shadow-[0_0_28px_8px_rgba(253,224,71,0.5)] border-2 border-white/50 flex items-center justify-center">
            <div className="w-3 h-5 border-t-2 border-[#854D0E] rounded" />
          </div>
          <SparkleStar size={20} color="#FEF08A" className="mt-4" />
          <div className="text-xs font-hand text-[#FEF08A] mt-1 font-bold">Light Shop</div>
        </div>
      );

    case "twinkling-watermelon":
      // Retro musical guitar & watermelon slice
      return (
        <div className={`w-full h-full bg-gradient-to-br from-[#DCFCE7] via-[#FEF9C3] to-[#FCE7F3] flex flex-col items-center justify-center p-4 relative overflow-hidden ${className}`}>
          {/* Watermelon Slice */}
          <div className="relative w-20 h-10 overflow-hidden">
            <div className="w-20 h-20 bg-[#EF4444] rounded-full border-4 border-[#22C55E] relative flex items-center justify-center">
              <div className="absolute top-2 w-1.5 h-1.5 bg-[#1F2937] rounded-full" />
              <div className="absolute top-3 left-4 w-1.5 h-1.5 bg-[#1F2937] rounded-full" />
              <div className="absolute top-3 right-4 w-1.5 h-1.5 bg-[#1F2937] rounded-full" />
            </div>
          </div>
          <MusicNoteDouble size={24} color="#059669" className="mt-2" />
          <div className="text-xs font-hand text-[#047857] mt-1 font-bold">Twinkling Watermelon</div>
        </div>
      );

    case "summer-strike":
      // Coastal sea wave & bicycle
      return (
        <div className={`w-full h-full bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] flex flex-col items-center justify-center p-4 relative overflow-hidden ${className}`}>
          {/* Coastal Sun */}
          <div className="w-12 h-12 rounded-full bg-[#FDE047] shadow-lg mb-2" />
          {/* Gentle Sea Waves */}
          <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
            <path d="M0 12 C10 6 20 18 30 12 C40 6 50 18 60 12 C70 6 80 18 90 12" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
            <path d="M0 20 C10 14 20 26 30 20 C40 14 50 26 60 20 C70 14 80 26 90 20" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div className="text-xs font-hand text-[#0369A1] mt-2 font-bold">Summer Strike</div>
        </div>
      );

    case "nineteen-otters":
      // Two cute otters holding hands in gentle stream
      return (
        <div className={`w-full h-full bg-gradient-to-br from-[#FEF3C7] to-[#FED7AA] flex flex-col items-center justify-center p-4 relative overflow-hidden ${className}`}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#B45309] border-2 border-[#78350F] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <PastelHeart size={16} color="#DC2626" />
            <div className="w-10 h-10 rounded-full bg-[#B45309] border-2 border-[#78350F] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>
          <div className="text-xs font-hand text-[#78350F] mt-3 font-bold">Nineteen Otters</div>
        </div>
      );

    case "a-model-family":
      // Crime thriller mystery safe / money stack
      return (
        <div className={`w-full h-full bg-gradient-to-br from-[#334155] to-[#1E293B] flex flex-col items-center justify-center p-4 relative overflow-hidden ${className}`}>
          <div className="w-20 h-14 bg-[#475569] rounded border-2 border-[#94A3B8] flex items-center justify-center relative shadow-lg">
            <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1] flex items-center justify-center">
              <div className="w-1 h-3 bg-[#E2E8F0]" />
            </div>
          </div>
          <div className="text-xs font-hand text-[#E2E8F0] mt-3 font-bold">A Model Family</div>
        </div>
      );

    case "do-do-sol-sol":
      // Lala piano keys & cheerful notes
      return (
        <div className={`w-full h-full bg-gradient-to-br from-[#FDF2F8] to-[#FCE7F3] flex flex-col items-center justify-center p-4 relative overflow-hidden ${className}`}>
          <div className="w-24 h-12 bg-white rounded border-2 border-[#F472B6] flex overflow-hidden shadow-sm">
            <div className="flex-1 border-r border-[#FBCFE8]" />
            <div className="flex-1 border-r border-[#FBCFE8]" />
            <div className="flex-1 border-r border-[#FBCFE8]" />
            <div className="flex-1 border-r border-[#FBCFE8]" />
            <div className="flex-1" />
          </div>
          <MusicNoteSingle size={22} color="#DB2777" className="mt-2" />
          <div className="text-xs font-hand text-[#BE185D] mt-1 font-bold">Do Do Sol Sol</div>
        </div>
      );

    case "bad-papa":
      // Boxing glove with ballet ribbon
      return (
        <div className={`w-full h-full bg-gradient-to-br from-[#FEE2E2] to-[#FFEDD5] flex flex-col items-center justify-center p-4 relative overflow-hidden ${className}`}>
          <div className="w-12 h-14 bg-[#DC2626] rounded-t-2xl rounded-b-lg border-2 border-[#991B1B] shadow-md relative flex items-center justify-center">
            <div className="w-4 h-6 border-b-2 border-white rounded" />
          </div>
          <PastelRibbon size={24} color="#F472B6" className="mt-2" />
          <div className="text-xs font-hand text-[#991B1B] mt-1 font-bold">Bad Papa</div>
        </div>
      );

    case "legend-blue-sea":
      // Mermaid tail & ocean pearl
      return (
        <div className={`w-full h-full bg-gradient-to-br from-[#CCFBF1] to-[#A5F3FC] flex flex-col items-center justify-center p-4 relative overflow-hidden ${className}`}>
          {/* Pearl */}
          <div className="w-8 h-8 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] border border-[#5EEAD4] flex items-center justify-center">
            <SparkleStar size={14} color="#0D9488" />
          </div>
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="mt-2">
            <path d="M20 24 C10 16 0 8 4 0 C12 0 18 10 20 14 C22 10 28 0 36 0 C40 8 30 16 20 24 Z" fill="#0D9488" />
          </svg>
          <div className="text-xs font-hand text-[#0F766E] mt-1 font-bold">Legend of the Blue Sea</div>
        </div>
      );

    case "vanishing-time":
      // Vintage stopped pocket watch & sparkles
      return (
        <div className={`w-full h-full bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] flex flex-col items-center justify-center p-4 relative overflow-hidden ${className}`}>
          <div className="w-14 h-14 rounded-full border-4 border-[#7C3AED] bg-white flex items-center justify-center relative shadow-md">
            <div className="absolute w-0.5 h-4 bg-[#6D28D9] top-3" />
            <div className="absolute w-3 h-0.5 bg-[#6D28D9] right-3" />
            <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
          </div>
          <SparkleStar size={18} color="#7C3AED" className="mt-2" />
          <div className="text-xs font-hand text-[#6D28D9] mt-1 font-bold">Vanishing Time</div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-[#FFFDF9] flex items-center justify-center">
          <SparkleStar size={24} color="#F78DA7" />
        </div>
      );
  }
};
