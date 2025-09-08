import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const iconStyle = "w-6 h-6"; // Tailwind classes for icon size

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
      icon: <FontAwesomeIcon icon={faXTwitter} className={iconStyle + " text-white"} />, // X icon
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
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold mb-6"
      >
        LET'S CONNECT 💬
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-8"
      >
        Always open to chats, collabs & ideas 🚀
      </motion.p>

      <div className="flex justify-center gap-8">
        {socialIcons.map(({ icon, link, label }) => (
          <motion.div
            key={label}
            className="flex flex-col items-center group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.a
              href={link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-purple-700 text-white transition"
              aria-label={label}
            >
              {icon}
            </motion.a>

            <span className="mt-2 text-sm text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
