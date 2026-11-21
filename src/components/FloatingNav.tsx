"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Home, User, Film, Camera } from "lucide-react";

interface NavItem {
  id: string;
  labelId: string;
  labelKo: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    id: "hero",
    labelId: "Beranda",
    labelKo: "홈",
    icon: <Home size={17} strokeWidth={1.8} />,
  },
  {
    id: "profile",
    labelId: "Profil",
    labelKo: "프로필",
    icon: <User size={17} strokeWidth={1.8} />,
  },
  {
    id: "works",
    labelId: "Karya",
    labelKo: "작품",
    icon: <Film size={17} strokeWidth={1.8} />,
  },
  {
    id: "portraits",
    labelId: "Potret",
    labelKo: "갤러리",
    icon: <Camera size={17} strokeWidth={1.8} />,
  },
];

export const FloatingNav: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the section closest to the top of the viewport
          visible.sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -50% 0px",
        threshold: [0, 0.2, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ==================== DESKTOP FLOATING PILL (>= md) ==================== */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-3 transform-gpu will-change-transform">
        <nav className="liquid-glass rounded-full px-2.5 py-1.5 flex items-center gap-1 shadow-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-colors flex items-center gap-2 ${
                  isActive
                    ? "text-[#D34E77]"
                    : "text-ink-dark hover:text-[#D34E77]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-[#FFF5F7] shadow-sm border border-pastel-pink/50 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{item.icon}</span>
                <span>{lang === "id" ? item.labelId : item.labelKo}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Language Switcher */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleLang}
          className="liquid-glass rounded-full px-3.5 py-2 text-xs font-bold text-ink-dark flex items-center gap-2 shadow-md hover:bg-white transition-colors"
          title="Ganti Bahasa (ID / KO)"
        >
          <Globe size={15} strokeWidth={1.8} className="text-[#D34E77]" />
          <span>{lang.toUpperCase()}</span>
          <span className="text-[10px] bg-pastel-pink text-[#B4385E] px-1.5 py-0.5 rounded-full font-bold">
            {lang === "id" ? "KO" : "ID"}
          </span>
        </motion.button>
      </header>

      {/* ==================== MOBILE TOP FLOATING PILL (< md) ==================== */}
      <header className="fixed top-4 inset-x-4 max-w-md mx-auto z-50 md:hidden transform-gpu will-change-transform">
        <div className="liquid-glass rounded-full px-4 py-2.5 flex items-center justify-between shadow-lg border border-white/85">
          {/* Left: Brand Logo / Title */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-1.5 text-left"
          >
            <span className="font-title font-bold text-base text-[#D34E77] tracking-wider">
              신은수
            </span>
            <span className="text-[11px] font-hand text-ink-muted">
              Shin Eun-soo
            </span>
          </button>

          {/* Right: Language Toggle & Animated Hamburger */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/70 border border-pastel-pink/60 text-[11px] font-bold text-ink-dark shadow-xs"
              title="Ganti Bahasa"
            >
              <Globe size={13} strokeWidth={1.8} className="text-[#D34E77]" />
              <span>{lang.toUpperCase()}</span>
            </motion.button>

            {/* Custom SVG Animated Hamburger Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-white/80 border border-white/90 flex items-center justify-center text-ink-dark shadow-xs"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                {/* Top Line */}
                <motion.line
                  x1="4"
                  y1="7"
                  x2="20"
                  y2="7"
                  stroke="#3D3A38"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  animate={
                    mobileMenuOpen
                      ? { rotate: 45, y: 5, x: 0 }
                      : { rotate: 0, y: 0, x: 0 }
                  }
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
                {/* Middle Line */}
                <motion.line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  stroke="#3D3A38"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  animate={
                    mobileMenuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.2 }}
                />
                {/* Bottom Line */}
                <motion.line
                  x1="4"
                  y1="17"
                  x2="20"
                  y2="17"
                  stroke="#3D3A38"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  animate={
                    mobileMenuOpen
                      ? { rotate: -45, y: -5, x: 0 }
                      : { rotate: 0, y: 0, x: 0 }
                  }
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </header>

      {/* ==================== MOBILE DROPDOWN PANEL & BACKDROP ==================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Subtle Backdrop Dim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 md:hidden"
            />

            {/* Dropdown Menu Container */}
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="fixed top-20 inset-x-4 max-w-md mx-auto z-50 liquid-glass rounded-3xl p-4 shadow-2xl border border-white/80 md:hidden transform-gpu will-change-transform"
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.04, staggerDirection: -1 },
                  },
                }}
                className="flex flex-col gap-1.5"
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -10 },
                      }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                        isActive
                          ? "bg-pastel-pink/70 text-[#D34E77] shadow-xs"
                          : "text-ink-dark hover:bg-white/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`p-1.5 rounded-xl ${
                            isActive
                              ? "bg-white text-[#D34E77]"
                              : "bg-white/70 text-ink-muted"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span>{lang === "id" ? item.labelId : item.labelKo}</span>
                      </div>

                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#D34E77]" />
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
