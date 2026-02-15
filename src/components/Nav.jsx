import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const scrollLinks = [
  { to: "#value", label: "Why I value you" },
  { to: "#memories", label: "Memories" },
  { to: "#letter", label: "Letter" },
  { to: "#", label: "Top" },
];

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") setVisible(true);
    else if (scrolled) setVisible(true);
    else setVisible(false);
  }, [scrolled, location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-center gap-4 sm:gap-6 flex-wrap bg-[var(--color-background)]/90 backdrop-blur-md border-b border-[var(--color-accent-light)]/20"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {isHome
            ? scrollLinks.map(({ to, label }) => (
                <a
                  key={to + label}
                  href={to}
                  className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-soft)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {label}
                </a>
              ))
            : null}
          <Link
            to="/letter"
            className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-soft)] hover:text-[var(--color-primary)] transition-colors"
          >
            Full letter
          </Link>
          <Link
            to="/surprise"
            className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-primary)] hover:underline"
          >
            One more thing
          </Link>
          {!isHome && (
            <Link
              to="/"
              className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-soft)] hover:text-[var(--color-primary)] transition-colors"
            >
              Home
            </Link>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
