import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";

const CARDS = [
  {
    icon: Clock,
    title: "The Peak Hour",
    description:
      "10:00 PM is our most celebrated rush. Expect a 30-minute culinary anticipation window.",
  },
  {
    icon: Users,
    title: "The Gathering",
    description:
      "Guests typically immerse themselves in our ambiance for 45 to 90 minutes.",
  },
];

export default function Timing() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-px bg-gold/10">
          {CARDS.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="bg-obsidian p-6 sm:p-8 lg:p-14 group"
            >
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  size={20}
                  className="sm:hidden text-gold-muted/40 mb-4 group-hover:text-gold-muted transition-colors duration-500"
                  strokeWidth={1.2}
                />
                <Icon
                  size={24}
                  className="hidden sm:block text-gold-muted/40 mb-6 group-hover:text-gold-muted transition-colors duration-500"
                  strokeWidth={1.2}
                />
              </motion.div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-ivory mb-3 sm:mb-4 leading-tight">
                {title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone/80 leading-relaxed max-w-md font-light">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
