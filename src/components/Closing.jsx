import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { closingText, closingSubtext, footerCute } from "../content";
import { memories } from "../content";

const stats = [
  { value: `${memories.length}+`, label: "Memories" },
  { value: "One", label: "Letter" },
  { value: "Forever", label: "Yours" },
];

export default function Closing() {
  return (
    <>
      <section className="py-24 sm:py-32 px-6 bg-[var(--color-dark)] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-3 gap-8 sm:gap-12 text-center mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="cursor-default"
              >
                <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/60 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {closingText}
          </motion.p>
          <motion.p
            className="text-center text-white/70 text-sm sm:text-base max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {closingSubtext}
          </motion.p>
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span aria-hidden>↑</span> Back to top
            </motion.a>
            <Link to="/surprise">
              <motion.span
                className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                One more thing →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
      <footer className="py-8 px-6 border-t border-[var(--color-dark-surface)] bg-[var(--color-dark)]">
        <div className="max-w-4xl mx-auto flex flex-col gap-4 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/50">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span>© For you. Made with love.</span>
            <span>Scroll to discover</span>
          </div>
          <p className="text-white/40 text-center sm:text-left italic normal-case tracking-normal">
            {footerCute}
          </p>
        </div>
      </footer>
    </>
  );
}
