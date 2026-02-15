import { motion } from "framer-motion";

const items = ["♥", "🌸", "✨", "💕", "🎂", "🫶", "💛", "⭐"];
const positions = [
  { left: "10%", top: "20%", delay: 0 },
  { left: "85%", top: "15%", delay: 1 },
  { left: "25%", top: "70%", delay: 2 },
  { left: "70%", top: "65%", delay: 0.5 },
  { left: "50%", top: "35%", delay: 1.5 },
  { left: "15%", top: "50%", delay: 2.5 },
  { left: "90%", top: "45%", delay: 0.8 },
  { left: "40%", top: "85%", delay: 1.2 },
  { left: "60%", top: "25%", delay: 2 },
  { left: "5%", top: "80%", delay: 0.3 },
];

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((emoji, i) => {
        const pos = positions[i % positions.length];
        return (
          <motion.span
            key={i}
            className="absolute text-2xl sm:text-3xl opacity-20"
            style={{ left: pos.left, top: pos.top }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.25, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: pos.delay,
            }}
            aria-hidden
          >
            {emoji}
          </motion.span>
        );
      })}
    </div>
  );
}
