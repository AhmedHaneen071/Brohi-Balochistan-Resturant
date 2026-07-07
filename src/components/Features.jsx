import { motion } from "framer-motion";
import { Crown, Leaf, GlassWater, PiggyBank } from "lucide-react";

const FEATURES = [
  { icon: Crown, label: "Luxury All-You-Can-Eat" },
  { icon: Leaf, label: "Pure Halal Gastronomy" },
  { icon: GlassWater, label: "Happy Hour Delicacies" },
  { icon: PiggyBank, label: "Cash-Only Tradition" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="relative py-8 sm:py-10 lg:py-16 px-3 sm:px-4 lg:px-10 text-center group border border-gold/10 hover:border-gold/30 transition-colors duration-500"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Icon
                  size={24}
                  className="mx-auto mb-3 sm:mb-5 text-gold-muted/60 group-hover:text-gold transition-colors duration-500"
                  strokeWidth={1.2}
                />
              </motion.div>
              <span className="block font-sans text-[10px] sm:text-xs lg:text-sm tracking-[0.15em] uppercase text-stone group-hover:text-ivory transition-colors duration-500">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
