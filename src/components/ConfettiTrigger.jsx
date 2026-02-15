import { useRef } from "react";
import confetti from "canvas-confetti";

export default function ConfettiTrigger({ children, className = "" }) {
  const fired = useRef(false);

  const handleClick = () => {
    if (fired.current) return;
    fired.current = true;
    const count = 120;
    const defaults = { origin: { y: 0.6 }, zIndex: 9999 };
    const colors = ["#c45c4a", "#d4a574", "#e08b7a", "#8b7355", "#f5f1ec"];
    confetti({
      ...defaults,
      particleCount: count,
      spread: 70,
      colors,
    });
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: count / 2,
        angle: 60,
        spread: 55,
        colors,
      });
    }, 200);
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: count / 2,
        angle: 120,
        spread: 55,
        colors,
      });
    }, 400);
  };

  return (
    <div onClick={handleClick} onKeyDown={(e) => e.key === "Enter" && handleClick()} className={className} role="button" tabIndex={0}>
      {children}
    </div>
  );
}
