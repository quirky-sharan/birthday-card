import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { letterParagraphs, name } from "../content";

export default function LetterPage() {
  return (
    <motion.main
      className="min-h-screen py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-soft)] mb-2">
            A letter for {name}
          </p>
          <h1
            className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Words I wanted to say
          </h1>
        </motion.div>
        <div className="space-y-6 text-lg leading-relaxed text-[var(--color-text)]" style={{ fontFamily: "var(--font-serif)" }}>
          {letterParagraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="pl-4 border-l-2 border-[var(--color-accent)]/30 hover:border-[var(--color-accent)]/60 transition-colors"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        <motion.div
          className="mt-12 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/"
            className="inline-block px-5 py-2.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 transition-colors text-sm font-medium"
          >
            ← Back to home
          </Link>
          <Link
            to="/surprise"
            className="inline-block px-5 py-2.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors text-sm font-medium"
          >
            One more thing →
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
