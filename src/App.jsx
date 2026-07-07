import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FullMenu from "./components/FullMenu";
import Timing from "./components/Timing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

const IMAGES = [
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1603366445787-09714680cbf1?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1769&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1936&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504672281656-e4981d70414b?q=80&w=1770&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1776&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
];

function preloadImages(urls) {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = url;
        })
    )
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const state = useRef({ minPassed: false, done: false });

  useEffect(() => {
    preloadImages(IMAGES).then(tryDone);

    const timeout = setTimeout(() => {
      state.current.minPassed = true;
      tryDone();
    }, 2500);

    function tryDone() {
      if (state.current.minPassed && !state.current.done) {
        state.current.done = true;
        setTimeout(() => setLoading(false), 400);
      }
    }

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="min-h-screen bg-obsidian text-ivory antialiased selection:bg-gold selection:text-obsidian"
          >
            <Navbar />
            <main>
              <Hero />
              <Features />
              <FullMenu />
              <Timing />
              <Testimonials />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
