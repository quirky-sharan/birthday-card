import { motion } from "framer-motion";
import { valuePoints, valueSectionClosing } from "../content";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyIValueYou() {
  return (
    <section id="value" className="py-24 sm:py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--color-text-soft)] mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Now featuring
        </motion.p>
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-12"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          Why I value you
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {valuePoints.map((point, i) => (
            <motion.article
              key={i}
              variants={item}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group p-5 sm:p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-accent-light)]/40 hover:border-[var(--color-accent)]/60 transition-colors duration-300 cursor-default"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.99 }}
            >
              <motion.span
                className="text-2xl sm:text-3xl block mb-2"
                aria-hidden
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {point.emoji}
              </motion.span>
              <h3
                className="text-base sm:text-lg font-bold text-[var(--color-primary)] mb-1 group-hover:text-[var(--color-primary-light)] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {point.title}
              </h3>
              <p className="text-[var(--color-text-soft)] text-sm leading-snug">
                {point.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
        <motion.p
          className="mt-12 sm:mt-16 text-center text-[var(--color-text-soft)] italic text-base sm:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {valueSectionClosing}
        </motion.p>
      </div>
    </section>
  );
}
