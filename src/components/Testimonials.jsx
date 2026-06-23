import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "The Mutton Dampukht was so tender it fell off the bone. An unmatched authentic Balochi experience.",
    author: "Zayan Khan",
    source: "Google Reviews",
  },
  {
    quote:
      "The hospitality here is something else. You feel like royalty from the moment you walk in. A true gem of Hyderabad.",
    author: "Sara Ahmed",
    source: "Google Reviews",
  },
  {
    quote:
      "Incredible live charcoal cooking. The aroma alone is worth the visit. The Sajji is the best I have ever had.",
    author: "Usman Rahim",
    source: "Google Reviews",
  },
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

const starVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-gold">
              4.3
            </span>
            <span className="font-serif text-xl sm:text-2xl text-stone/40">/</span>
            <span className="font-serif text-3xl sm:text-4xl text-stone/40">5.0</span>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-1 mb-3"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                variants={starVariants}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Star
                  size={12}
                  className={i < 4 ? "text-gold fill-gold" : "text-gold/30"}
                  strokeWidth={0}
                />
              </motion.div>
            ))}
          </motion.div>
          <p className="font-sans text-[10px] sm:text-xs tracking-[0.15em] uppercase text-stone">
            Backed by over 5,640 patrons
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-px bg-gold/10"
        >
          {REVIEWS.map((review) => (
            <motion.div
              key={review.author}
              variants={itemVariants}
              className="bg-charcoal p-6 sm:p-8 lg:p-10 flex flex-col group"
            >
              <div className="flex gap-1 mb-4 sm:mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className="text-gold fill-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <blockquote className="font-serif text-base sm:text-lg lg:text-xl font-light text-ivory/90 leading-relaxed mb-6 sm:mb-8 flex-1 group-hover:text-ivory transition-colors duration-500">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="border-t border-gold/10 pt-3 sm:pt-4">
                <p className="font-sans text-xs sm:text-sm text-ivory">
                  {review.author}
                </p>
                <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-stone mt-0.5">
                  {review.source}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
