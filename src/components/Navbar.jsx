import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "The Experience", href: "#features" },
  { label: "Full Menu", href: "#full-menu" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-obsidian/80 backdrop-blur-md shadow-[0_1px_0_rgba(212,175,55,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a href="#" className="select-none">
            <span className="font-serif text-2xl lg:text-3xl tracking-[0.3em] text-ivory block leading-none">
              BROHI
            </span>
            <span className="font-sans text-[10px] lg:text-[11px] tracking-[0.25em] text-gold-muted/70 block mt-0.5 uppercase">
              Balochistan B.Q & Restaurant
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-sans text-xs tracking-[0.15em] uppercase text-stone hover:text-ivory transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 ease-out group-hover:w-full" />
              </a>
            ))}
            <a
              href="tel:+92223861234"
              className="font-sans text-xs tracking-[0.2em] uppercase px-6 py-2.5 border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-500 ease-out"
            >
              Reserve an Experience
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-ivory/80 hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-charcoal/95 backdrop-blur-md border-t border-gold/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-sans text-sm tracking-[0.15em] uppercase text-stone hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+92223861234"
                className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-6 py-3 border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-500"
              >
                Reserve an Experience
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
