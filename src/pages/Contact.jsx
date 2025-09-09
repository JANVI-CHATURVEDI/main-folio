import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, link: "https://github.com/JANVI-CHATURVEDI", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/janvi1010", label: "LinkedIn" },
  { icon: <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 text-white" />, link: "https://x.com/janvi_0x", label: "X" },
  { icon: <Mail className="w-5 h-5" />, link: "mailto:janvichaturvedi82@gmail.com", label: "Email" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold mb-6"
      >
        Contact Me 💬
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-12 max-w-2xl mx-auto"
      >
        I’m currently open to{" "}
        <span className="font-semibold text-purple-700 dark:text-purple-400">
          freelance opportunities
        </span>{" "}
        and collaborations. Feel free to reach out if you have a project in mind, or just want to chat about how I can bring your ideas to life.
      </motion.p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-14">
        {socialLinks.map(({ icon, link, label }) => (
          <motion.a
            key={label}
            href={link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-purple-700 text-white shadow-md hover:shadow-purple-400/40 transition"
            aria-label={label}
          >
            {icon}
          </motion.a>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        id="contact-form"
        action="https://formbold.com/s/3AXJM"
        method="POST"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" w-[100%] sm:max-w-lg mx-auto space-y-4 text-left bg-white dark:bg-black border border-gray-300 dark:border-gray-700 p-6 sm:p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-lg sm:text-xl font-bold mb-4 text-center text-black dark:text-white">
          Let’s Build Something Amazing ✨
        </h3>

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 hover:shadow-lg transition"
        >
          Send Message ✉️
        </button>
      </motion.form>

      {/* Footer */}
      <Footer />
    </section>
  );
}
