import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { name } from "../content";

export default function SurprisePage() {
  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-background)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-6xl sm:text-8xl mb-6"
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        🎂
      </motion.div>
      <motion.h1
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4"
        style={{ fontFamily: "var(--font-display)" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        One more thing, {name}
      </motion.h1>
      <motion.p
        className="text-lg text-[var(--color-text-soft)] max-w-md mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        You scrolled all the way here. That means you're either really bored or you actually read everything. Either way — thank you for being born. I appreciate you in every way. Love you alot kuhoo. This was made for you. Have the best day, month, year, life whateve... but have everything as fine as you are. 🫶
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium hover:opacity-90 transition-opacity"
        >
          Back to home
        </Link>
      </motion.div>
    </motion.main>
  );
}
