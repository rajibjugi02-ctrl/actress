"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/data/eunsooData";
import { SparkleStar, PastelRibbon, WashiTape, PushPin } from "./svg/CuteIcons";
import { ArrowDown, BookOpen } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { lang } = useLanguage();
  const hero = siteContent.hero;
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { margin: "100px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative pt-28 md:pt-36 pb-20 px-4 md:px-8 max-w-6xl mx-auto min-h-screen flex items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10 transform-gpu"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-pink/60 border border-pastel-pink text-[#B4385E] text-xs font-bold mb-6 shadow-sm">
            <motion.div
              animate={isHeroInView ? { scale: [1, 1.2, 1], rotate: [0, 8, 0] } : {}}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <SparkleStar size={14} color="#B4385E" />
            </motion.div>
            <span>{hero.badge[lang]}</span>
          </div>

          {/* Title */}
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-ink-dark mb-4">
            <span>{hero.titlePrefix[lang]}</span>
            <br />
            <span className="text-[#D34E77] relative inline-block">
              {hero.nameEn}
              <span className="text-xl sm:text-2xl text-ink-muted ml-3 font-normal">
                ({hero.nameKo})
              </span>
            </span>
          </h1>

          {/* Quote Card */}
          <div className="relative bg-white/70 backdrop-blur-md border-l-4 border-[#F78DA7] p-5 rounded-r-2xl shadow-sm my-6 max-w-xl">
            <p className="font-hand text-xl md:text-2xl text-ink-dark leading-snug">
              {hero.quote[lang]}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("works")}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#FF94B4] to-[#F57095] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>{hero.ctaWorks[lang]}</span>
              <ArrowDown size={16} strokeWidth={2} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("profile")}
              className="px-7 py-3 rounded-full liquid-glass text-ink-dark font-bold text-sm shadow-sm hover:bg-white transition-all flex items-center gap-2"
            >
              <span>{hero.ctaProfile[lang]}</span>
              <BookOpen size={16} strokeWidth={1.8} />
            </motion.button>
          </div>

          {/* Stats Scrapbook Strip */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-dashed border-ink-dark/15 w-full max-w-md">
            <div>
              <div className="font-bubble text-2xl md:text-3xl font-bold text-[#D34E77]">
                {hero.stats.years.value}
              </div>
              <div className="text-xs text-ink-muted mt-0.5">
                {hero.stats.years.label[lang]}
              </div>
            </div>
            <div>
              <div className="font-bubble text-2xl md:text-3xl font-bold text-[#D34E77]">
                {hero.stats.awards.value}
              </div>
              <div className="text-xs text-ink-muted mt-0.5">
                {hero.stats.awards.label[lang]}
              </div>
            </div>
            <div>
              <div className="font-bubble text-2xl md:text-3xl font-bold text-[#D34E77]">
                {hero.stats.roles.value}
              </div>
              <div className="text-xs text-ink-muted mt-0.5">
                {hero.stats.roles.label[lang]}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Polaroid Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative transform-gpu"
        >
          {/* Custom SVG Ribbon & Pushpin */}
          <PastelRibbon
            size={36}
            className="absolute -top-5 -right-2 md:-top-6 md:-right-2 md:w-[44px] md:h-[44px] z-20 drop-shadow-md"
          />
          <PushPin size={18} className="absolute -top-2 left-6 md:-top-3 md:left-8 md:w-[22px] md:h-[22px] z-20" />
          <WashiTape
            color="pink"
            className="absolute -top-2.5 md:-top-3 left-1/2 -translate-x-1/2 w-20 md:w-28 -rotate-1 z-10"
          />
          <WashiTape
            color="yellow"
            className="absolute -bottom-2 -right-3 md:-bottom-2 md:-right-4 w-20 md:w-24 rotate-12 z-10"
          />

          {/* Polaroid Frame */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#FFFDFB] p-3 pb-6 md:p-4 md:pb-8 rounded-sm shadow-xl max-w-[260px] md:max-w-sm w-full mx-auto border border-black/5 relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded bg-[#F0ECE6]">
              <Image
                src={hero.heroPortraitUrl}
                alt="Shin Eun-soo potret musim semi"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 260px, 400px"
              />
            </div>
            <p className="font-hand text-lg md:text-xl text-center text-ink-dark mt-3 md:mt-4">
              {hero.polaroidCaption[lang]}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
