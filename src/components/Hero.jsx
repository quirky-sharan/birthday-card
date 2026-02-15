import { motion, useScroll, useTransform } from "framer-motion";
import { name, tagline, heroSubtext } from "../content";
import ConfettiTrigger from "./ConfettiTrigger";

const line1 = "Happy Birthday.";
const line2 = `For ${name}.`;
const line3 = "Only.";

export default function Hero() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.92]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <ConfettiTrigger className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-[1]" title="Click for confetti!" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <motion.div
        style={{ opacity: heroOpacity, y: heroY, scale }}
        className="relative z-10"
      >
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--color-primary)] tracking-tight leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {line1}
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--color-primary)] tracking-tight leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {line2}
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--color-primary)] tracking-tight leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {line3}
          </motion.h1>
        </div>
        <motion.p
          className="mt-8 text-base sm:text-lg text-[var(--color-text-soft)] max-w-md mx-auto font-body"
          style={{ fontFamily: "var(--font-body)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {tagline}
        </motion.p>
        <motion.p
          className="mt-3 text-sm text-[var(--color-text-soft)]/80 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {heroSubtext}
        </motion.p>
      </motion.div>
      <motion.a
        href="#value"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 inline-block px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em] text-[var(--color-primary)] border-2 border-[var(--color-primary)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.06, backgroundColor: "var(--color-primary)", color: "var(--color-background)" }}
        whileTap={{ scale: 0.98 }}
      >
        Scroll to discover
      </motion.a>
    </section>
  );
}
