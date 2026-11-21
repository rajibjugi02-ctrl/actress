"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent, AwardItem } from "@/data/eunsooData";
import { WashiTape, PushPin, TrophyIcon, SparkleStar, WavyUnderline } from "./svg/CuteIcons";

export const ProfileSection: React.FC = () => {
  const { lang } = useLanguage();
  const profile = siteContent.profile;

  return (
    <section id="profile" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block font-hand text-lg bg-pastel-yellow text-[#7A6006] px-4 py-1 rounded-md -rotate-1 shadow-sm mb-3">
          {profile.sectionTag}
        </span>
        <h2 className="font-title text-3xl md:text-5xl font-bold text-ink-dark relative inline-block">
          <span>{profile.title[lang]}</span>
          <WavyUnderline className="absolute -bottom-3 left-0 w-full h-3" />
        </h2>
        <p className="text-ink-muted max-w-xl mx-auto mt-4 text-sm md:text-base">
          {profile.subtitle[lang]}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Lined Notebook Paper Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 notebook-lined-bg p-8 md:p-10 pl-16 md:pl-20 rounded-2xl shadow-lg border border-black/5 relative transform-gpu"
        >
          {/* Notebook Margin Binder Holes */}
          <div className="absolute top-0 left-5 bottom-0 w-3 flex flex-col justify-around py-6 pointer-events-none">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-[#D4CCC0] shadow-inner" />
            ))}
          </div>

          <WashiTape
            color="mint"
            className="absolute -top-3 right-8 w-28 -rotate-2"
          />

          <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-dashed border-[#E5DDD0]">
            <h3 className="font-hand text-2xl font-bold text-[#8C435A]">
              {profile.notebookTitle[lang]}
            </h3>
            <span className="text-xs font-hand bg-pastel-yellow text-[#7A6006] px-3 py-1 rounded rotate-2 shadow-xs">
              Seoul, South Korea
            </span>
          </div>

          {/* Fields List */}
          <div className="space-y-5">
            {profile.fields.map((field, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A06474] w-32 shrink-0">
                  {field.label[lang]}
                </span>
                <span className="text-sm md:text-base font-semibold text-ink-dark">
                  {field.value[lang]}
                </span>
              </div>
            ))}
          </div>

          {/* Fun Facts Sticky Note */}
          <div className="mt-8 pt-6 border-t border-dashed border-[#E5DDD0]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A06474] mb-3 flex items-center gap-1.5">
              <SparkleStar size={14} color="#A06474" />
              <span>{lang === "id" ? "Fakta Menarik" : "주요 특징 & 비하인드"}</span>
            </h4>
            <div className="space-y-2">
              {profile.funFacts.map((fact, i) => (
                <div key={i} className="text-xs md:text-sm text-ink-muted flex items-start gap-2">
                  <span className="text-[#D34E77] font-bold">✦</span>
                  <span>{fact[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Awards Scrapbook Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 bg-[#FAF7F2] p-6 md:p-8 rounded-2xl border-2 border-dashed border-[#E5DCD0] relative shadow-md transform-gpu"
        >
          <PushPin size={22} className="absolute top-4 right-5" />
          <WashiTape
            color="lavender"
            className="absolute -top-3 left-8 w-24 rotate-3"
          />

          <h3 className="font-bubble text-xl md:text-2xl font-bold text-ink-dark mb-6 flex items-center gap-2">
            <TrophyIcon size={24} />
            <span>{profile.awardsTitle[lang]}</span>
          </h3>

          <div className="space-y-4">
            {profile.awards.map((award: AwardItem, index: number) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                className="bg-white p-4 rounded-xl shadow-xs border-l-4 border-pastel-yellow-deep"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-extrabold bg-pastel-yellow text-[#795F06] px-2 py-0.5 rounded">
                    {award.year}
                  </span>
                  <span className="text-xs font-bold text-[#B4385E]">
                    {award.work}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-ink-dark">
                  {award.title[lang]}
                </h4>
                <p className="text-xs text-ink-muted mt-0.5">
                  {award.category[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
