"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/data/eunsooData";
import { WaveDivider, SparkleStar, PastelHeart } from "./svg/CuteIcons";
import { Instagram, Building2, Github } from "lucide-react";

export const Footer: React.FC = React.memo(() => {
  const { lang } = useLanguage();
  const footer = siteContent.footer;
  const footerRef = useRef<HTMLDivElement>(null);
  const isFooterInView = useInView(footerRef, { margin: "80px" });

  return (
    <footer
      ref={footerRef}
      className="relative pt-16 pb-12 bg-gradient-to-b from-transparent via-[#FFF5F7] to-[#FFEBF0] overflow-hidden"
    >
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <WaveDivider color="#FFF5F7" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Cute Doodles with useInView GPU-accelerated twinkling */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <motion.div
            animate={
              isFooterInView
                ? { scale: [1, 1.25, 1], rotate: [0, 8, 0] }
                : {}
            }
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="transform-gpu"
          >
            <SparkleStar size={16} color="#FFB3C6" />
          </motion.div>
          <PastelHeart size={16} color="#FFB3C6" fill />
          <motion.div
            animate={
              isFooterInView
                ? { scale: [1, 1.3, 1], rotate: [0, -10, 0] }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: 2.4,
              delay: 0.3,
              ease: "easeInOut",
            }}
            className="transform-gpu"
          >
            <SparkleStar size={20} color="#FFD6E0" />
          </motion.div>
          <PastelHeart size={16} color="#FFB3C6" fill />
          <motion.div
            animate={
              isFooterInView
                ? { scale: [1, 1.25, 1], rotate: [0, 8, 0] }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: 0.6,
              ease: "easeInOut",
            }}
            className="transform-gpu"
          >
            <SparkleStar size={16} color="#FFB3C6" />
          </motion.div>
        </div>

        <h3 className="font-title text-2xl md:text-3xl font-bold text-ink-dark mb-3">
          {footer.closingTitle[lang]}
        </h3>

        <p className="font-hand text-lg md:text-xl text-ink-muted max-w-xl mx-auto mb-8 leading-snug">
          {footer.closingQuote[lang]}
        </p>

        {/* Official Channels */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/su1023_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full liquid-glass text-xs font-bold text-ink-dark shadow-xs hover:bg-white transition-all hover:scale-105"
          >
            <Instagram size={16} strokeWidth={1.8} className="text-[#D34E77]" />
            <span>{footer.instagramLabel}</span>
          </a>

          <a
            href="https://www.msoopent.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full liquid-glass text-xs font-bold text-ink-dark shadow-xs hover:bg-white transition-all hover:scale-105"
          >
            <Building2 size={16} strokeWidth={1.8} className="text-[#3D3A38]" />
            <span>{footer.agencyLabel}</span>
          </a>
        </div>

        {/* Creator Badge */}
        <div>
          <a
            href="https://github.com/rajibjugi02-ctrl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-[#F78DA7] bg-white text-xs font-bold text-[#793A4D] shadow-xs hover:bg-pastel-pink transition-all hover:scale-105"
          >
            <Github size={14} strokeWidth={1.8} />
            <span>{footer.creatorCredit}</span>
          </a>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";
