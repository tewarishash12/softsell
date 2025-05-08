import React from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import { AnimatePresence,motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

function ToggleThemeButton() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode} className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:scale-110 transition-transform" aria-label="Toggle Theme" >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <ToggleThemeButton />
      <AnimatePresence mode="wait">
        <motion.div
          key={darkMode ? "dark" : "light"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;