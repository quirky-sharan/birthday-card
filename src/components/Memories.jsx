import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { memories } from "../content";

function MemoryItem({ memory, index }) {
  const isFromRight = index % 2 === 0;
  return (
    <motion.article
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, x: isFromRight ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`flex flex-col ${memory.image ? (index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row") : ""} gap-6 sm:gap-8 items-stretch`}>
        {memory.image && (
          <div className="sm:w-[55%] flex-shrink-0 overflow-hidden rounded-2xl">
            <motion.img
              src={memory.image}
              alt=""
              className="w-full aspect-[4/3] sm:aspect-[3/4] object-cover rounded-2xl"
              initial={{ scale: 0.92, opacity: 0.85 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
            />
          </div>
        )}
        <div className={`flex flex-col justify-center min-w-0 py-2 ${memory.image ? "flex-1" : "w-full"}`}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-1">
            {memory.title}
          </p>
          <p className="text-[var(--color-text)] text-base sm:text-lg leading-relaxed mb-4">
            {memory.description}
          </p>
          {memory.lovedMost && (
            <p className="text-[var(--color-text-soft)] text-sm sm:text-base italic border-l-2 border-[var(--color-accent)]/50 pl-4">
              What I loved most: {memory.lovedMost}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Memories() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="memories" className="py-24 sm:py-32 scroll-mt-20" ref={sectionRef}>
      <div className="px-6 mb-14">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[var(--color-text-soft)] mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Explore archive
          </motion.p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Featured memories
          </motion.h2>
        </div>
      </div>
      <div className="space-y-16 sm:space-y-20 px-6">
        {memories.map((memory, i) => (
          <MemoryItem key={i} memory={memory} index={i} />
        ))}
      </div>
    </section>
  );
}
