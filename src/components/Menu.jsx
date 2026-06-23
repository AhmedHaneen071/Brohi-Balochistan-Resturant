import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ITEMS = [
  {
    name: "Mutton Dampukht with Rice",
    label: "The Crown Jewel",
    price: "Rs. 6,500",
    image:
      "https://images.unsplash.com/photo-1603366445787-09714680cbf1?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Mutton Sajji with Rice",
    label: "House Classic",
    price: "Rs. 5,500",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1769&auto=format&fit=crop",
  },
  {
    name: "Chicken Karahi Brown",
    label: "Rich Heritage",
    price: "Rs. 3,200",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1936&auto=format&fit=crop",
  },
  {
    name: "Chicken Gola Kebab",
    label: "Artisanal Craft",
    price: "Rs. 1,800",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Mutton Mandi",
    label: "Tribal Grandeur",
    price: "Rs. 7,000",
    image:
      "https://images.unsplash.com/photo-1504672281656-e4981d70414b?q=80&w=1770&auto=format&fit=crop",
  },
  {
    name: "Beef Bihari Kebab",
    label: "Smoky Essence",
    price: "Rs. 2,200",
    image:
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1776&auto=format&fit=crop",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Menu() {
  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 sm:mb-16"
        >
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-gold-muted/60">
            The Signature Curations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory mt-3 leading-tight">
            Chef&apos;s
            <span className="italic font-normal text-gold"> Curations</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10"
        >
          {ITEMS.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              className="group relative bg-charcoal overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-500" />
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <span className="inline-block font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-gold-muted/70 mb-1.5 sm:mb-2 border border-gold/10 px-2 sm:px-3 py-0.5 group-hover:border-gold/30 group-hover:text-gold-muted transition-all duration-500">
                  {item.label}
                </span>
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-light text-ivory mt-1.5 sm:mt-2 leading-snug group-hover:text-gold transition-colors duration-500">
                  {item.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-stone/80 mt-1.5 sm:mt-2 tracking-wide">
                  {item.price}
                </p>
              </div>

              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-gold bg-obsidian/60 backdrop-blur-sm px-3 py-1.5 border border-gold/20">
                  Explore →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 sm:gap-3 font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-stone hover:text-gold transition-colors duration-500"
          >
            Discover the Full Feast on Facebook
            <ArrowUpRight
              size={12}
              className="transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
