import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  // Detect system theme after mount
  useEffect(() => {
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  // Apply dark mode to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center py-4">
      {/* Nav links */}
      <div className="flex gap-8 font-semibold text-lg">
        <a href="#home" className="hover:text-purple-500 transition">Home</a>
        <a href="#resume" className="hover:text-purple-500 transition">Resume</a>
        <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
      </div>

      {/* Theme toggle */}
      <motion.button
        onClick={() => setDarkMode(prev => !prev)}
        whileHover={{ rotate: 90, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
        className="p-2 rounded-full hover:bg-gray-300/30 dark:hover:bg-white/20 transition "
        aria-label="Toggle Theme"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-white" />
        ) : (
          <Moon className="w-5 h-5 text-black" />
        )}
      </motion.button>
    </nav>
  );
}
