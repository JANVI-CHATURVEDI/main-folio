import { Github, Linkedin, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  const iconStyle = "w-5 h-5 text-purple-500"; // Tailwind classes for size & color

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
      icon: <FontAwesomeIcon icon={faXTwitter} className={iconStyle} />,
      link: "https://x.com/yourusername",
      label: "X",
    },
    {
      icon: <Mail className={iconStyle} />,
      link: "mailto:yourmail@example.com",
      label: "Email",
    },
  ];


  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-center justify-between py-8 gap-6 sm:gap-4">
      {/* Image */}
      <img
        src="/img.jpg"
        alt="Header"
        className="w-[180px] h-[180px] object-cover dark:npm npopacity-80 rounded-full"
      />

      {/* Name, Tagline & Socials */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Hi, I'm Janvi
        </h1>

        <div className="text-sm text-black dark:text-gray-400 flex items-center">
          <Typewriter
            words={["Frontend Developer · React Lover · Code-Coffee Combo ☕💻"]}
            typeSpeed={40}
            cursor={false} // turn off default cursor
          />
          <span className="ml-1 text-2xl animate-blink">|</span>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 bg-[#040000] rounded-md px-9 py-2 shadow-md"
        >
          {socialIcons.map(({ icon, link, label }) => (
            <motion.a
              key={label}
              href={link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full transition"
              aria-label={label}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
}
