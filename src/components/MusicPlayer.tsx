"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/data/eunsooData";
import { playlistTracks, TrackItem } from "@/data/playlist";
import {
  VinylRecord,
  PastelHeart,
  MusicNoteSingle,
  MusicNoteDouble,
} from "./svg/CuteIcons";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
} from "lucide-react";

interface MusicProgressBarProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  durationDisplay: string;
}

const MusicProgressBar: React.FC<MusicProgressBarProps> = React.memo(
  ({ audioRef, durationDisplay }) => {
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      const handleTimeUpdate = () => {
        if (audio.duration) {
          const cur = audio.currentTime || 0;
          const dur = audio.duration || 0;
          setProgress((cur / dur) * 100);
          const mins = Math.floor(cur / 60);
          const secs = Math.floor(cur % 60);
          setCurrentTime(`${mins}:${secs < 10 ? "0" : ""}${secs}`);
        }
      };

      audio.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }, [audioRef]);

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      if (!audio || !audio.duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      const targetTime = ratio * audio.duration;
      audio.currentTime = targetTime;
      setProgress(ratio * 100);
      const mins = Math.floor(targetTime / 60);
      const secs = Math.floor(targetTime % 60);
      setCurrentTime(`${mins}:${secs < 10 ? "0" : ""}${secs}`);
    };

    return (
      <>
        {/* Interactive Progress Bar */}
        <div
          onClick={handleSeek}
          className="w-full h-2 bg-[#EFE8DF] rounded-full overflow-hidden mb-1 cursor-pointer group"
          title="Geser durasi lagu"
        >
          <div
            className="h-full bg-gradient-to-r from-[#FF94B4] to-[#F57095] transition-all duration-150 group-hover:brightness-95"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-ink-muted mb-3 font-mono">
          <span>{currentTime}</span>
          <span>{durationDisplay}</span>
        </div>
      </>
    );
  }
);
MusicProgressBar.displayName = "MusicProgressBar";

export const MusicPlayer: React.FC = () => {
  const { lang } = useLanguage();
  const music = siteContent.music;
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [durationTime, setDurationTime] = useState(playlistTracks[0].duration);
  const [floatingNotes, setFloatingNotes] = useState<
    { id: number; symbol: "single" | "double" | "heart" }[]
  >([]);

  const currentTrack: TrackItem = playlistTracks[trackIndex];
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Format seconds into mm:ss string
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Safe play helper to prevent unhandled promise rejection overlays
  const safePlay = async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      // Browser autoplay restriction or abort
      setIsPlaying(false);
    }
  };

  const safePause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // Switch to a new track - loads pure local full MP3
  const changeTrack = useCallback(
    (newIndex: number, shouldAutoPlay = true) => {
      setTrackIndex(newIndex);
      setDurationTime(playlistTracks[newIndex].duration);

      if (audioRef.current) {
        audioRef.current.src = playlistTracks[newIndex].localUrl;
        audioRef.current.load();
        if (shouldAutoPlay) {
          safePlay();
        }
      }
    },
    []
  );

  const handleNext = useCallback(() => {
    const nextIdx = (trackIndex + 1) % playlistTracks.length;
    changeTrack(nextIdx, isPlaying);
  }, [trackIndex, isPlaying, changeTrack]);

  const handlePrev = useCallback(() => {
    const prevIdx =
      (trackIndex - 1 + playlistTracks.length) % playlistTracks.length;
    changeTrack(prevIdx, isPlaying);
  }, [trackIndex, isPlaying, changeTrack]);

  // Handle Play/Pause toggle
  const handlePlayPause = () => {
    if (isPlaying) {
      safePause();
    } else {
      if (!audioRef.current?.src || audioRef.current.src === "") {
        changeTrack(trackIndex, true);
      } else {
        safePlay();
      }
    }
  };

  // Safe audio error handler
  const handleAudioError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const target = e.currentTarget;
    console.warn("Audio loading error on:", target.src);
    setIsPlaying(false);
  };

  // Volume Change
  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    setIsMuted(newVol === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 0.75;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  // Set initial audio source on mount with full local song
  useEffect(() => {
    if (audioRef.current) {
      if (!audioRef.current.src || !audioRef.current.src.includes(currentTrack.localUrl)) {
        audioRef.current.src = currentTrack.localUrl;
        audioRef.current.volume = volume;
        audioRef.current.load();
      }
    }
  }, [currentTrack.localUrl, volume]);

  // Periodic Floating Music Note Generator when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const symbols: ("single" | "double" | "heart")[] = [
        "single",
        "double",
        "heart",
      ];
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      const newParticle = {
        id: Date.now() + Math.random(),
        symbol: randomSymbol,
      };
      setFloatingNotes((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setFloatingNotes((prev) => prev.filter((n) => n.id !== newParticle.id));
      }, 2400);
    }, 850);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50 transform-gpu will-change-transform">
      {/* ==================== PURE HTML5 AUDIO ELEMENT ==================== */}
      <audio
        ref={audioRef}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleNext}
        onError={handleAudioError}
        onLoadedMetadata={() => {
          if (audioRef.current && audioRef.current.duration) {
            setDurationTime(formatTime(audioRef.current.duration));
          }
        }}
      />

      {/* ==================== FLOATING MUSIC PANEL ==================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="absolute bottom-16 right-0 w-80 liquid-glass rounded-3xl p-5 shadow-2xl border border-white/80 transform-gpu will-change-transform"
          >
            {/* Header with Dancing Equalizer Bars */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/5">
              <span className="font-bubble text-xs font-bold text-[#8C435A]">
                {music.panelTitle[lang]}
              </span>

              {/* 4 Pastel Equalizer Bars (GPU scaleY with origin-bottom) */}
              <div className="flex items-end gap-1 h-4" aria-hidden="true">
                {[0.75, 0.5, 0.65, 0.55].map((speed, i) => (
                  <motion.div
                    key={i}
                    animate={
                      isPlaying
                        ? { scaleY: [0.25, 1, 0.35, 0.85, 0.25] }
                        : { scaleY: 0.25 }
                    }
                    transition={{
                      repeat: Infinity,
                      duration: speed,
                      ease: "easeInOut",
                    }}
                    style={{ originY: 1 }}
                    className="w-1 h-4 bg-[#FF94B4] rounded-full transform-gpu"
                  />
                ))}
              </div>
            </div>

            {/* Now Playing Info with Vinyl Disc */}
            <div className="bg-white/85 p-3 rounded-2xl flex items-center gap-3 shadow-xs mb-3">
              <VinylRecord size={40} isSpinning={isPlaying} />

              <div className="overflow-hidden flex-1">
                <div className="font-bold text-xs text-ink-dark truncate">
                  {currentTrack.title}
                </div>
                <div className="text-[11px] text-ink-muted truncate">
                  {currentTrack.artist}
                </div>
                <div className="text-[10px] text-[#B4385E] font-medium">
                  {currentTrack.origin[lang]}
                </div>
              </div>
            </div>

            {/* Isolated Progress Bar Component (Zero re-renders on parent during playback) */}
            <MusicProgressBar
              key={trackIndex}
              audioRef={audioRef}
              durationDisplay={durationTime}
            />

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-3">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full flex items-center justify-center text-ink-dark hover:bg-pastel-pink/50 transition-colors"
                title="Lagu Sebelumnya"
                aria-label="Lagu Sebelumnya"
              >
                <SkipBack size={16} strokeWidth={1.8} />
              </button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayPause}
                className="w-10 h-10 rounded-full bg-pastel-pink text-[#B4385E] flex items-center justify-center shadow-sm"
                title={isPlaying ? "Jeda" : "Putar"}
                aria-label={isPlaying ? "Jeda" : "Putar"}
              >
                {isPlaying ? (
                  <Pause size={18} strokeWidth={2} />
                ) : (
                  <Play size={18} strokeWidth={2} className="ml-0.5" />
                )}
              </motion.button>

              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full flex items-center justify-center text-ink-dark hover:bg-pastel-pink/50 transition-colors"
                title="Lagu Berikutnya"
                aria-label="Lagu Berikutnya"
              >
                <SkipForward size={16} strokeWidth={1.8} />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2 px-2 text-ink-muted text-xs mb-3">
              <button
                onClick={toggleMute}
                className="hover:text-ink-dark transition-colors"
                title={isMuted ? "Bunyikan" : "Bisukan"}
                aria-label={isMuted ? "Bunyikan" : "Bisukan"}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-full h-1 bg-[#EFE8DF] rounded-full accent-[#F57095] cursor-pointer"
                aria-label="Volume Musik"
              />
            </div>

            {/* Playlist Selection Menu */}
            <div className="space-y-1.5 pt-2 border-t border-black/5 max-h-36 overflow-y-auto pr-1">
              {playlistTracks.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => changeTrack(idx, true)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-xl text-[11px] font-medium flex items-center justify-between transition-colors ${
                    trackIndex === idx
                      ? "bg-pastel-pink text-[#B4385E] font-bold"
                      : "hover:bg-white/60 text-ink-dark"
                  }`}
                >
                  <span className="truncate">
                    {idx + 1}. {t.title}
                  </span>
                  <span className="text-[10px] opacity-75">{t.duration}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================== FLOATING TRIGGER BUTTON ==================== */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full liquid-glass flex items-center justify-center shadow-xl transition-all ${
          isPlaying
            ? "shadow-[0_0_25px_6px_rgba(255,182,193,0.7)] ring-2 ring-pastel-pink"
            : "hover:shadow-2xl"
        }`}
        title="Kotak Musik Romantis"
        aria-label="Buka Kotak Musik Romantis"
      >
        <VinylRecord size={38} isSpinning={isPlaying} />
      </motion.button>

      {/* ==================== FLOATING MUSIC NOTES & HEARTS ==================== */}
      {floatingNotes.map((note) => (
        <motion.div
          key={note.id}
          initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: 1.3,
            y: -95,
            x: (Math.random() - 0.5) * 50,
          }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute -top-2 left-4 pointer-events-none z-50"
        >
          {note.symbol === "single" && (
            <MusicNoteSingle size={18} color="#D34E77" />
          )}
          {note.symbol === "double" && (
            <MusicNoteDouble size={18} color="#D34E77" />
          )}
          {note.symbol === "heart" && (
            <PastelHeart size={16} color="#D34E77" fill />
          )}
        </motion.div>
      ))}
    </div>
  );
};
