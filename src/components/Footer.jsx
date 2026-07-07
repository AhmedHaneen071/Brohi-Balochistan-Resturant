import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight, Globe } from "lucide-react";

const QUICK_LINKS = [
  { label: "The Experience", href: "#features" },
  { label: "Our Curations", href: "#menu" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Reservations", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-px">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-obsidian py-12 sm:py-16 lg:py-20 pr-0 lg:pr-16 border border-gold/10"
          >
            <a href="#" className="inline-block select-none mb-8 sm:mb-10">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.3em] text-ivory block leading-none">
                BROHI
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] text-gold-muted/70 block mt-0.5 uppercase">
                Balochistan B.Q & Restaurant
              </span>
            </a>

            <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-12">
              <a
                href="https://maps.google.com/?q=C+Street+Latifabad+Unit+6+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 sm:gap-4"
              >
                <MapPin
                  size={14}
                  className="text-gold-muted/40 mt-0.5 group-hover:text-gold transition-colors duration-300 shrink-0"
                  strokeWidth={1.2}
                />
                <div>
                  <p className="font-sans text-xs sm:text-sm text-ivory/90">
                    C Street, Latifabad Unit 6
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-stone">Hyderabad</p>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 font-sans text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-gold-muted/60 group-hover:text-gold transition-colors duration-300 mt-1">
                    View on Google Maps
                    <ArrowUpRight size={10} strokeWidth={1.5} />
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3 sm:gap-4">
                <Phone
                  size={14}
                  className="text-gold-muted/40 mt-0.5 shrink-0"
                  strokeWidth={1.2}
                />
                <div>
                  <p className="font-sans text-xs sm:text-sm text-ivory/90">+92 22 386 1234</p>
                  <p className="font-sans text-[10px] sm:text-xs text-stone">Call for reservations</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Clock
                  size={14}
                  className="text-gold-muted/40 mt-0.5 shrink-0"
                  strokeWidth={1.2}
                />
                <div>
                  <p className="font-sans text-xs sm:text-sm text-ivory/90">Mon — Sun: 6:00 PM — 1:00 AM</p>
                  <p className="font-sans text-[10px] sm:text-xs text-stone">Open all week</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-stone hover:text-gold transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-stone hover:text-gold transition-colors duration-300 inline-flex items-center gap-1 sm:gap-1.5"
              >
                <Globe size={11} strokeWidth={1.2} />
                Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-obsidian py-12 sm:py-16 lg:py-20 pl-0 lg:pl-16 border border-gold/10"
          >
            <div className="aspect-[16/9] lg:aspect-auto lg:h-full min-h-[200px] sm:min-h-[240px] bg-charcoal-light rounded-sm overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
                alt="Restaurant interior"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <p className="font-serif text-base sm:text-lg text-ivory/90 italic">
                  &ldquo;Where every meal tells a story.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 sm:gap-6">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-stone hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gold/5 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.1em] text-stone/60 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Brohi Balochistan. All rights reserved.
            </p>
            <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.1em] text-stone/40 text-center sm:text-left">
              Crafted with tradition. Served with pride.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
