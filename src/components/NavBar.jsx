import { useState , useEffect } from "react";
import { Sun, Moon, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function NavBar() {
const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);




    const iconStyle = "w-5 h-5 text-white dark:text-red-400";

  const socialIcons = [
    {
      icon: <Github className={iconStyle} />,
      link: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <Linkedin className={iconStyle} />,
      link: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className={iconStyle} />,
      link: "https://x.com/yourusername",
      label: "Twitter",
    },
    {
      icon: <Mail className={iconStyle} />,
      link: "mailto:yourmail@example.com",
      label: "Email",
    },
  ];

  return (
    <motion.div
      className="fixed inset-x-0 bottom-4 flex justify-center z-50 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-2 sm:gap-3 bg-black/50 rounded-full px-3 py-2 shadow-lg backdrop-blur-md border border-gray-300">

        {/* Social Links */}
        {socialIcons.map(({ icon, link, label }) => (
          <motion.a
            key={label}
            href={link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="p-2 rounded-full  hover:bg-gray-500 dark:hover:bg-white/20 transition"
            aria-label={label}
          >
            {icon}
          </motion.a>
        ))}

        {/* Theme Toggle */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 14 }}
          className="p-2 rounded-full hover:bg-gray-500 dark:hover:bg-white/20 transition"
          aria-label="Toggle Theme"
        >
           {darkMode ? (
            <Sun className="w-5 h-5 text-white dark:text-red-400" />
          ) : (
            <Moon className="w-5 h-5 text-white dark:text-red-400" />
          )}
          
        </motion.button>
      </div>
    </motion.div>
  );
}
