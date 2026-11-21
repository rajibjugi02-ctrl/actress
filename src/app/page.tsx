"use client";

import React from "react";
import { Preloader } from "@/components/Preloader";
import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { ProfileSection } from "@/components/ProfileSection";
import { WorksSection } from "@/components/WorksSection";
import { PortraitsSection } from "@/components/PortraitsSection";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Intro Preloader */}
      <Preloader />

      {/* Floating Liquid Glass Nav (Desktop & Mobile) */}
      <FloatingNav />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Profile & Awards */}
      <ProfileSection />

      {/* Section 3: Works & Filmography (10 Posters + Cinema Ticket Pass) */}
      <WorksSection />

      {/* Section 4: Scrapbook Gallery & Portraits (User Photos + Lightbox) */}
      <PortraitsSection />

      {/* Floating Music Player Widget */}
      <MusicPlayer />

      {/* Footer & Credits */}
      <Footer />
    </main>
  );
}
