import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { letterParagraphs } from "../content";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Letter() {
  return (
    <section id="letter" className="min-h-screen flex flex-col justify-center py-24 sm:py-32 px-6 scroll-mt-20">
      <div className="max-w-2xl mx-auto w-full">
        <motion.p
          className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--color-text-soft)] mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          A letter for you
        </motion.p>
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-14"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          Words I wanted to say
        </motion.h2>
        <motion.div
          className="space-y-6 text-lg sm:text-xl leading-relaxed text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-serif)" }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {letterParagraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={item}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="pl-4 border-l-2 border-transparent hover:border-[var(--color-accent)]/50 hover:pl-6 transition-all duration-300 cursor-default"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/letter"
            className="inline-block text-sm text-[var(--color-primary)] hover:underline"
          >
            Read the full letter on its own page →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
