import { motion, useScroll, useTransform } from "framer-motion";
import { Clock } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale: imgScale, opacity: imgOpacity }}
        className="absolute inset-0 z-0 bg-obsidian"
      >
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/40" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-gold/20 text-gold-muted text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-sans">
            <span className="w-1 h-1 rounded-full bg-gold animate-gold-pulse" />
            ★ 4.3 (5.6K Reviews) — The Pride of Hyderabad
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-light leading-[0.95] text-ivory mb-6 sm:mb-8 tracking-tight"
        >
          An Heritage
          <br />
          <span className="italic font-normal text-gold">of Smoke & Fire.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-sans text-xs sm:text-sm md:text-base text-stone/90 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 font-light tracking-wide px-2"
        >
          Authentic Balochi live-charcoal gastronomy refined for the modern
          palate. Experience the legendary Mutton Dampukht.
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-1.5 sm:gap-2.5 flex-wrap">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-gold" />
          </span>
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.15em] text-stone uppercase">
            Exquisite Dining
          </span>
          <span className="text-gold-dim/40 mx-1 sm:mx-2">•</span>
          <Clock size={10} className="sm:hidden text-gold-muted/60" />
          <Clock size={12} className="hidden sm:block text-gold-muted/60" />
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.15em] text-stone uppercase">
            Opening at 6:00 PM
          </span>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-obsidian to-transparent z-10" />
    </section>
  );
}
