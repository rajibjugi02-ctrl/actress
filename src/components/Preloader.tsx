"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparkleStar } from "./svg/CuteIcons";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Preloader: React.FC = () => {
  const [phase, setPhase] = useState<"hangul" | "latin" | "complete">("hangul");
  const { lang } = useLanguage();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase("latin");
    }, 1200);

    const timer2 = setTimeout(() => {
      setPhase("complete");
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleSkip = () => {
    setPhase("complete");
  };

  return (
    <AnimatePresence>
      {phase !== "complete" && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF5F7] via-[#FFFDF9] to-[#F5F0FF] p-6 text-center select-none transform-gpu"
        >
          {/* Twinkling Sparkles Behind */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="w-72 h-72 relative transform-gpu"
            >
              <SparkleStar
                size={22}
                color="#FFB3C6"
                className="absolute top-2 left-1/2 -translate-x-1/2"
              />
              <SparkleStar
                size={18}
                color="#FFF3B0"
                className="absolute bottom-2 left-1/2 -translate-x-1/2"
              />
              <SparkleStar
                size={20}
                color="#D8F3DC"
                className="absolute left-2 top-1/2 -translate-y-1/2"
              />
              <SparkleStar
                size={22}
                color="#E8DDFB"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              />
            </motion.div>
          </div>

          {/* Central Title Transition */}
          <div className="relative z-10 flex flex-col items-center">
            <AnimatePresence mode="wait">
              {phase === "hangul" ? (
                <motion.div
                  key="hangul"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ scale: [1, 1.25, 1], rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <SparkleStar size={24} color="#F78DA7" />
                  </motion.div>
                  <h1 className="font-title text-5xl md:text-7xl font-bold tracking-widest text-ink-dark">
                    신은수
                  </h1>
                  <motion.div
                    animate={{ scale: [1, 1.25, 1], rotate: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                  >
                    <SparkleStar size={24} color="#F78DA7" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="latin"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <h1 className="font-title text-4xl md:text-6xl font-bold text-ink-dark italic tracking-wide">
                    Shin Eun-soo
                  </h1>
                  <p className="mt-3 text-lg md:text-xl font-hand text-ink-muted">
                    {lang === "id"
                      ? "Aktris dengan binar mata musim semi yang memikat hati"
                      : "봄날의 반짝이는 눈빛을 지닌 매력적인 배우"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Skip Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSkip}
              className="mt-8 flex items-center gap-2 px-5 py-2 rounded-full border border-pastel-pink bg-white/80 backdrop-blur-md text-xs font-bold text-ink-dark shadow-sm hover:bg-pastel-pink transition-colors"
            >
              <span>{lang === "id" ? "Lewati" : "건너뛰기"}</span>
              <ArrowRight size={14} strokeWidth={1.8} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
