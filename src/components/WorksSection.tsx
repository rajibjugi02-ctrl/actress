"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/data/eunsooData";
import { worksData, WorkItem } from "@/data/works";
import {
  WashiTape,
  WavyUnderline,
  PastelHeart,
  SparkleStar,
  PastelRibbon,
} from "./svg/CuteIcons";
import { X } from "lucide-react";

interface WorkCardProps {
  item: WorkItem;
  index: number;
  lang: "id" | "ko";
  tapeColor: "pink" | "yellow" | "mint" | "lavender";
  onSelect: (item: WorkItem) => void;
}

const renderMiniSticker = (type: "star" | "heart" | "ribbon") => {
  switch (type) {
    case "heart":
      return <PastelHeart size={18} color="#FF94B4" fill />;
    case "ribbon":
      return <PastelRibbon size={20} color="#FFB3C6" />;
    case "star":
    default:
      return <SparkleStar size={18} color="#FFF3B0" />;
  }
};

const WorkCard: React.FC<WorkCardProps> = React.memo(
  ({ item, index, lang, tapeColor, onSelect }) => {
    return (
      <motion.div
        layout="position"
        key={item.id}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -6, rotate: index % 2 === 0 ? 1 : -1 }}
        onClick={() => onSelect(item)}
        className="p-1.5 md:p-2.5 bg-[#FFFDF9] rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl border border-[#E8DFD5] relative group cursor-pointer paper-curl-corner transition-shadow duration-300 transform-gpu"
      >
        {/* Top Washi Tape */}
        <WashiTape
          color={tapeColor}
          className="absolute -top-2.5 md:-top-3 left-1/2 -translate-x-1/2 w-14 md:w-20 z-20 -rotate-1"
        />

        {/* Corner Mini Sticker that wiggles on hover */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 drop-shadow-sm pointer-events-none scale-75 md:scale-100 origin-top-right">
          {renderMiniSticker(item.stickerType)}
        </div>

        {/* Poster 2:3 vertical container */}
        <div className="relative aspect-[2/3] w-full rounded-lg md:rounded-xl overflow-hidden border border-black/5 bg-[#F5EFE6]">
          <Image
            src={item.posterImage}
            alt={item.title[lang]}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-104"
            loading="lazy"
            decoding="async"
          />

          {/* Badge Type & Year */}
          <div className="absolute top-1.5 left-1.5 md:top-2.5 md:left-2.5 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] md:text-[10px] font-bold text-ink-dark shadow-xs z-10">
            {item.type === "film"
              ? lang === "id"
                ? "Film"
                : "영화"
              : lang === "id"
              ? "Drama"
              : "드라마"}
          </div>
          <div className="absolute top-1.5 right-1.5 md:top-2.5 md:right-10 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-full bg-pastel-yellow/90 backdrop-blur-sm text-[9px] md:text-[10px] font-extrabold text-[#795F06] shadow-xs z-10">
            {item.year}
          </div>

          {/* Bottom Gradient Overlay on Hover revealing character role */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2 md:p-3 pt-8 md:pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end z-10">
            <span className="text-[9px] md:text-[10px] text-white/80 font-medium tracking-wide">
              {lang === "id" ? "Sebagai" : "배역"}
            </span>
            <span className="text-[11px] md:text-xs text-white font-bold truncate">
              {item.character[lang]}
            </span>
          </div>
        </div>

        {/* Title & Info Card Section */}
        <div className="pt-2 md:pt-3 px-1 md:px-1.5 pb-0.5 md:pb-1">
          <h3 className="font-bold text-xs sm:text-sm md:text-base text-ink-dark group-hover:text-[#D34E77] transition-colors line-clamp-1">
            {item.title[lang]}
          </h3>
          <div className="text-[11px] md:text-xs font-semibold text-[#B4385E] mt-0.5 line-clamp-1">
            as {item.character[lang]}
          </div>
          <div className="mt-1.5 md:mt-2.5 flex items-center justify-between text-[10px] md:text-[11px] text-ink-muted">
            <span className="bg-pastel-mint/80 text-[#2D6A4F] px-1.5 md:px-2 py-0.5 rounded font-medium text-[9px] md:text-[11px]">
              {item.platform}
            </span>
            <span className="hidden sm:inline font-medium text-[10px] truncate max-w-[110px]">
              {item.tag[lang]}
            </span>
          </div>
        </div>
      </motion.div>
    );
  }
);
WorkCard.displayName = "WorkCard";

export const WorksSection: React.FC = () => {
  const { lang } = useLanguage();
  const works = siteContent.works;
  const [filter, setFilter] = useState<"all" | "drama" | "film">("all");
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [likesState, setLikesState] = useState<Record<string, number>>({});
  const [floatingHearts, setFloatingHearts] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const filteredItems = worksData.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const handleHeartClick = (e: React.MouseEvent) => {
    if (!selectedWork) return;
    const current = likesState[selectedWork.id] ?? selectedWork.likes;
    setLikesState((prev) => ({ ...prev, [selectedWork.id]: current + 1 }));

    // Spawn 5 mini hearts
    const rect = e.currentTarget.getBoundingClientRect();
    const newHearts = Array.from({ length: 5 }).map((_, i) => ({
      id: Date.now() + i,
      x: rect.left + rect.width / 2 + (Math.random() - 0.5) * 40,
      y: rect.top - 10,
    }));
    setFloatingHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setFloatingHearts((prev) =>
        prev.filter((h) => !newHearts.some((nh) => nh.id === h.id))
      );
    }, 1800);
  };

  const handleSelectWork = useCallback((item: WorkItem) => {
    setSelectedWork(item);
  }, []);

  const getTapeColor = (index: number) => {
    const colors: ("pink" | "yellow" | "mint" | "lavender")[] = [
      "pink",
      "yellow",
      "mint",
      "lavender",
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="works" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block font-hand text-lg bg-pastel-mint text-[#1E573C] px-4 py-1 rounded-md rotate-1 shadow-sm mb-3">
          {works.sectionTag}
        </span>
        <h2 className="font-title text-3xl md:text-5xl font-bold text-ink-dark relative inline-block">
          <span>{works.title[lang]}</span>
          <WavyUnderline className="absolute -bottom-3 left-0 w-full h-3" />
        </h2>
        <p className="text-ink-muted max-w-xl mx-auto mt-4 text-sm md:text-base">
          {works.subtitle[lang]}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-3 mb-12">
        {[
          { key: "all", label: works.filterAll[lang] },
          { key: "drama", label: works.filterDrama[lang] },
          { key: "film", label: works.filterFilm[lang] },
        ].map((tab) => {
          const isActive = filter === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as "all" | "drama" | "film")}
              className={`relative px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-colors ${
                isActive ? "text-[#B4385E]" : "text-ink-dark hover:text-[#B4385E]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeWorkTab"
                  className="absolute inset-0 rounded-full bg-pastel-pink border border-[#FFAEC3] shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Works Grid (2:3 Vertical Real Posters Wrapped in Paper Frame) */}
      <motion.div
        layout="position"
        className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <WorkCard
              key={item.id}
              item={item}
              index={index}
              lang={lang}
              tapeColor={getTapeColor(index)}
              onSelect={handleSelectWork}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ==================== CINEMA TICKET MODAL WITH REAL POSTER ==================== */}
      <AnimatePresence>
        {selectedWork && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Ticket Card */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-[92vw] max-w-md md:max-w-xl max-h-[88dvh] overflow-y-auto bg-[#FFFDF9] rounded-3xl shadow-2xl border-2 border-dashed border-[#E0D3C5] z-10 flex flex-col"
            >
              {/* Ticket Perforated side cutouts */}
              <div className="absolute top-12 md:top-14 -left-3 w-6 h-6 rounded-full bg-black/60 z-20 pointer-events-none" />
              <div className="absolute top-12 md:top-14 -right-3 w-6 h-6 rounded-full bg-black/60 z-20 pointer-events-none" />

              {/* Ticket Header */}
              <div className="sticky top-0 bg-gradient-to-r from-pastel-pink to-pastel-yellow px-4 py-3 md:px-6 md:py-4 flex items-center justify-between border-b-2 border-dashed border-[#D6C2B0] z-30">
                <div className="text-xs font-bold tracking-widest text-[#793A4D] font-bubble">
                  CINEMA PASS ✦ {works.ticketHeading[lang]}
                </div>
                <button
                  onClick={() => setSelectedWork(null)}
                  className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-ink-dark transition-transform hover:scale-110"
                  aria-label="Tutup tiket"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              </div>

              {/* Ticket Body with Real Poster */}
              <div className="p-4 md:p-8 grid grid-cols-1 sm:grid-cols-12 gap-4 md:gap-6 items-center">
                <div className="sm:col-span-5 relative aspect-[2/3] w-40 sm:w-48 sm:w-full mx-auto rounded-xl overflow-hidden shadow-md border border-black/10 bg-[#F5EFE6] shrink-0">
                  <Image
                    src={selectedWork.posterImage}
                    alt={selectedWork.title[lang]}
                    fill
                    sizes="(max-width: 640px) 180px, 220px"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
                  <h3 className="font-title text-xl md:text-2xl font-bold text-ink-dark mb-1">
                    {selectedWork.title[lang]}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4 justify-center sm:justify-start">
                    <span className="text-[11px] md:text-xs font-bold bg-pastel-pink text-[#B4385E] px-2 py-0.5 md:px-2.5 md:py-1 rounded-md">
                      as {selectedWork.character[lang]}
                    </span>
                    <span className="text-[11px] md:text-xs font-bold bg-pastel-yellow text-[#795F06] px-2 py-0.5 md:px-2.5 md:py-1 rounded-md">
                      {selectedWork.year}
                    </span>
                    <span className="text-[11px] md:text-xs font-semibold bg-pastel-mint text-[#2D6A4F] px-2 py-0.5 md:px-2.5 md:py-1 rounded-md">
                      {selectedWork.platform}
                    </span>
                  </div>

                  <div className="bg-[#FDF9F2] p-3 md:p-4 rounded-xl text-xs md:text-sm text-ink-muted leading-relaxed max-h-36 md:max-h-48 overflow-y-auto border border-[#F0E6D8] text-left">
                    {selectedWork.synopsis[lang]}
                  </div>
                </div>
              </div>

              {/* Ticket Footer */}
              <div className="sticky bottom-0 bg-[#FAF7F2] px-4 py-3 md:px-6 md:py-4 border-t-2 border-dashed border-[#E0D3C5] flex items-center justify-between z-30">
                <div className="font-mono text-[10px] md:text-xs text-[#9E9183] tracking-widest">
                  ||| | |||| | ||| || 2026-SES
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleHeartClick}
                  className="flex items-center gap-2 px-3.5 py-1.5 md:px-5 md:py-2 rounded-full border border-pastel-pink-deep bg-white text-[#D34E77] font-bold text-xs shadow-xs hover:bg-pastel-pink transition-colors whitespace-nowrap shrink-0"
                >
                  <PastelHeart size={15} color="#D34E77" fill />
                  <span>{works.reactBtnText[lang]}</span>
                  <span className="font-extrabold ml-1">
                    {likesState[selectedWork.id] ?? selectedWork.likes}
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Hearts Particles */}
      {floatingHearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ opacity: 1, scale: 0.6, x: h.x, y: h.y }}
          animate={{
            opacity: 0,
            scale: 1.4,
            y: h.y - 120,
            x: h.x + (Math.random() - 0.5) * 80,
          }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="fixed z-[10001] pointer-events-none"
        >
          <PastelHeart size={22} color="#D34E77" />
        </motion.div>
      ))}
    </section>
  );
};
