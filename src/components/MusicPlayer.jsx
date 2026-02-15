import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdaySongSrc } from "../content";

export default function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (!hasInteracted) {
      setHasInteracted(true);
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
      setIsMuted(false);
      return;
    }
    const next = !isMuted;
    setIsMuted(next);
    audioRef.current.muted = next;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = isMuted;
    const onEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [isMuted]);

  return (
    <>
      <audio
        ref={audioRef}
        src={birthdaySongSrc}
        loop
        preload="auto"
        playsInline
      />
      <motion.button
        type="button"
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-[100] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--color-primary)] text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        <AnimatePresence mode="wait">
          {!hasInteracted ? (
            <motion.span
              key="play"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xl sm:text-2xl"
              aria-hidden
            >
              ▶
            </motion.span>
          ) : isMuted ? (
            <motion.svg
              key="muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </motion.svg>
          ) : (
            <motion.svg
              key="unmuted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M12 6a7 7 0 010 12m-4.243-9.757a9 9 0 010 12.728" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
      {!hasInteracted && (
        <motion.p
          className="fixed bottom-20 right-6 z-[99] text-xs text-[var(--color-text-soft)] bg-[var(--color-surface)]/95 backdrop-blur px-3 py-2 rounded-lg shadow max-w-[160px]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          exit={{ opacity: 0 }}
        >
          Tap the button to play the birthday song 🎵
        </motion.p>
      )}
    </>
  );
}
