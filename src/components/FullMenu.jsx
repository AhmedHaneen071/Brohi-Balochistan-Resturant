import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

const MENU_DATA = {
  "Desi Murga": [
    { name: "Special Desi Murgha (zinda)", price: 1800 },
    { name: "Desi Murgha White", price: 2200 },
    { name: "Desi Murgha Green", price: 2200 },
    { name: "Desi Murgha Brown", price: 1800 },
    { name: "Desi Murgha Angara", price: 1800 },
  ],
  "Mutton Karahi": [
    { name: "Mutton Karahi", price: 2800 },
    { name: "Mutton Pakora", price: 3200 },
    { name: "Mutton White", price: 3200 },
    { name: "Mutton Brown", price: 2800 },
    { name: "Mutton Green", price: 3200 },
    { name: "Mutton Karahi Makhni", price: 3000 },
    { name: "Mutton Namkeen", price: 2800 },
    { name: "Mutton Dampukh With Rice", price: 3000 },
    { name: "Mutton Qeema", price: 3200 },
  ],
  "Chicken Karahi": [
    { name: "Chicken Karahi", price: 1500 },
    { name: "Chicken Karahi White", price: 2000 },
    { name: "Chicken Karahi Brown", price: 1500 },
    { name: "Chicken Karahi Green", price: 2000 },
    { name: "Chicken Makhni", price: 1700 },
    { name: "Chicken Pakora", price: 2000 },
    { name: "Chicken Angara with Rice", price: 1900 },
    { name: "Chicken Dampukh with Rice", price: 1900 },
  ],
  "BAR.BQ": [
    { name: "Chicken Masala Tikka", price: 280 },
    { name: "Chicken Malai Tikka", price: 320 },
    { name: "Chicken Drum Stick Plate", price: 500 },
    { name: "Chicken Malai Boti Plate", price: 500 },
    { name: "Chicken Reshmi Kabab Plate", price: 500 },
    { name: "Chicken Gola Kabab Plate", price: 500 },
    { name: "Chicken Green Boti Plate", price: 500 },
    { name: "Chicken Spicy Boti Plate", price: 500 },
    { name: "Brohi Special Chicken Gola Kabab", price: 600 },
  ],
  Fish: [{ name: "Fish Raho", price: "1600 per kg" }],
  Daal: [
    { name: "Daal Makhni", price: 300 },
    { name: "Daal Fry", price: 200 },
  ],
  "Other Items": [
    { name: "Raita", price: 70 },
    { name: "Salad", price: 50 },
    { name: "Special Raita", price: 100 },
    { name: "Special Salad", price: 100 },
    { name: "Cold Drink", price: 50 },
    { name: "Cold Drink 500ml", price: 80 },
    { name: "Water (large)", price: 90 },
    { name: "Naan", price: 25 },
    { name: "Chapati", price: 25 },
    { name: "Paratha", price: 80 },
  ],
};

function formatPrice(price) {
  if (typeof price === "string") return price;
  return `Rs. ${price.toLocaleString("en-PK")}`;
}

const categories = Object.entries(MENU_DATA);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function FullMenu() {
  return (
    <section id="full-menu" className="py-16 sm:py-20 lg:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-gold-muted/60">
            The Complete Feast
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory mt-3 leading-tight">
            Our Full
            <span className="italic font-normal text-gold"> Menu</span>
          </h2>
          <div className="w-16 sm:w-20 h-px bg-gold/40 mx-auto mt-6 sm:mt-8" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-px"
        >
          {categories.map(([category, items]) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="bg-obsidian p-6 sm:p-8 lg:p-10 group border border-gold/10 hover:border-gold/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
                <UtensilsCrossed
                  size={16}
                  className="text-gold-muted/40 shrink-0"
                  strokeWidth={1.2}
                />
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-ivory leading-tight">
                  {category}
                </h3>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-1.5 sm:py-2 border-b border-gold/5 last:border-0 group/item hover:border-gold/15 transition-colors duration-300"
                  >
                    <span className="font-sans text-xs sm:text-sm text-stone/90 group-hover/item:text-ivory transition-colors duration-300 pr-2">
                      {item.name}
                    </span>
                    <span className="font-serif text-xs sm:text-sm text-gold-muted/70 group-hover/item:text-gold-muted whitespace-nowrap transition-colors duration-300">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
