"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent, PortraitItem } from "@/data/eunsooData";
import {
  WashiTape,
  PushPin,
  PaperClip,
  WavyUnderline,
} from "./svg/CuteIcons";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface PortraitCardProps {
  item: PortraitItem;
  index: number;
  lang: "id" | "ko";
  isDesktop: boolean;
  onClick: (index: number) => void;
}

const PortraitCard: React.FC<PortraitCardProps> = React.memo(
  ({ item, index, lang, isDesktop, onClick }) => {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ scale: 1.04, rotate: 0, y: -6 }}
        style={{ rotate: isDesktop ? item.rotation : item.rotation > 0 ? 1 : -1 }}
        onClick={() => onClick(index)}
        className="bg-[#FFFDFB] p-2 pb-5 md:p-4 md:pb-6 rounded-sm shadow-md hover:shadow-2xl border border-black/5 cursor-pointer relative paper-curl-corner transition-shadow duration-300 transform-gpu"
      >
        {/* Washi Tape */}
        <WashiTape
          color={item.tapeColor}
          className="absolute -top-2.5 left-4 md:-top-3 md:left-6 w-16 md:w-24 -rotate-2 z-10"
        />

        {/* Optional PushPin or PaperClip */}
        {item.hasPin && (
          <PushPin size={18} className="absolute -top-2 right-4 md:right-6 md:w-[22px] md:h-[22px] z-20" />
        )}
        {item.hasClip && (
          <PaperClip size={20} className="absolute -top-2.5 right-4 md:right-6 md:w-[26px] md:h-[26px] z-20" />
        )}

        {/* Photo Wrap */}
        <div className="relative aspect-square w-full rounded overflow-hidden bg-[#F3EEE7]">
          <Image
            src={item.image}
            alt={item.caption[lang]}
            fill
            loading="lazy"
            decoding="async"
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>

        {/* Caption & Tag */}
        <div className="pt-2 md:pt-4">
          <p className="font-hand text-xs sm:text-sm md:text-lg text-ink-dark leading-tight line-clamp-2">
            {item.caption[lang]}
          </p>
          <div className="mt-1.5 md:mt-2 flex items-center justify-between text-[10px] md:text-xs text-ink-muted">
            <span className="font-semibold text-[#B4385E] truncate max-w-[85px] sm:max-w-none">
              # {item.tag[lang]}
            </span>
            <span className="font-mono text-[9px] md:text-[11px]">{item.date}</span>
          </div>
        </div>
      </motion.div>
    );
  }
);
PortraitCard.displayName = "PortraitCard";

export const PortraitsSection: React.FC = () => {
  const { lang } = useLanguage();
  const gallery = siteContent.gallery;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth, { passive: true });
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const handleCardClick = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + gallery.items.length) % gallery.items.length : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % gallery.items.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, gallery.items.length]);

  return (
    <section id="portraits" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block font-hand text-lg bg-pastel-pink text-[#9B2A4B] px-4 py-1 rounded-md -rotate-1 shadow-sm mb-3">
          {gallery.sectionTag}
        </span>
        <h2 className="font-title text-3xl md:text-5xl font-bold text-ink-dark relative inline-block">
          <span>{gallery.title[lang]}</span>
          <WavyUnderline className="absolute -bottom-3 left-0 w-full h-3" />
        </h2>
        <p className="text-ink-muted max-w-xl mx-auto mt-4 text-sm md:text-base">
          {gallery.subtitle[lang]}
        </p>
      </div>

      {/* Scrapbook Photo Grid */}
      <div className="grid grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-4">
        {gallery.items.map((item: PortraitItem, index: number) => (
          <PortraitCard
            key={item.id}
            item={item}
            index={index}
            lang={lang}
            isDesktop={isDesktop}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {/* ==================== DIARY LIGHTBOX MODAL ==================== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-[92vw] max-w-md md:max-w-3xl max-h-[88dvh] overflow-y-auto bg-[#FFFDF9] rounded-3xl shadow-2xl z-10 flex flex-col md:grid md:grid-cols-12"
            >
              {/* Photo Pane */}
              <div className="md:col-span-7 relative h-56 sm:h-72 md:h-auto md:min-h-[440px] max-h-[48dvh] md:max-h-none w-full bg-[#EDE8E1] shrink-0 overflow-hidden flex items-center justify-center">
                <Image
                  src={gallery.items[lightboxIndex].image}
                  alt={gallery.items[lightboxIndex].caption[lang]}
                  fill
                  className="object-contain md:object-cover"
                  sizes="(max-width: 640px) 92vw, (max-width: 768px) 450px, 500px"
                  priority
                />
              </div>

              {/* Diary Content Pane */}
              <div className="md:col-span-5 p-4 md:p-8 flex flex-col justify-between notebook-lined-bg">
                <div>
                  <div className="flex items-center justify-between mb-2 md:mb-4">
                    <span className="font-hand text-lg md:text-xl font-bold text-[#8C435A]">
                      {gallery.lightboxTitle[lang]}
                    </span>
                    <button
                      onClick={() => setLightboxIndex(null)}
                      className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-ink-dark transition-transform hover:scale-110 shadow-xs"
                      aria-label="Tutup lightbox"
                    >
                      <X size={16} strokeWidth={2} />
                    </button>
                  </div>

                  <p className="font-hand text-sm sm:text-base md:text-xl text-ink-dark leading-relaxed mt-2 md:mt-6">
                    {gallery.items[lightboxIndex].caption[lang]}
                  </p>
                </div>

                {/* Lightbox Controls */}
                <div className="pt-4 md:pt-6 mt-4 md:mt-0 border-t border-dashed border-[#E5DDD0] flex items-center justify-between">
                  <button
                    onClick={() =>
                      setLightboxIndex(
                        (prev) =>
                          (prev! - 1 + gallery.items.length) % gallery.items.length
                      )
                    }
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-xs font-bold text-ink-dark shadow-xs hover:bg-pastel-pink transition-colors"
                  >
                    <ChevronLeft size={16} />
                    <span>{gallery.prevBtn[lang]}</span>
                  </button>

                  <span className="text-xs font-mono text-ink-muted">
                    {lightboxIndex + 1} / {gallery.items.length}
                  </span>

                  <button
                    onClick={() =>
                      setLightboxIndex(
                        (prev) => (prev! + 1) % gallery.items.length
                      )
                    }
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-xs font-bold text-ink-dark shadow-xs hover:bg-pastel-pink transition-colors"
                  >
                    <span>{gallery.nextBtn[lang]}</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
