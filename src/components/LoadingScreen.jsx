import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center"
      >
        <span className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-[0.35em] text-ivory block leading-none">
          BROHI
        </span>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-6 mb-5 w-48 sm:w-64 mx-auto origin-center"
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] text-gold-muted/70 block uppercase"
        >
          Balochistan Bar B.Q & Restaurant
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-10 flex items-center justify-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping [animation-delay:0.2s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping [animation-delay:0.4s]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
