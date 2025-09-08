import { motion } from "framer-motion";
import TechStack from "./TechStack";

export default function About() {
  return (
    <section className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <h2 className="text-[21px] font-bold text-black dark:text-gray-100">ABOUT ME</h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          A frontend enthusiast passionate about crafting clean, accessible, and delightful interfaces.  
          I blend <span className="text-purple-500">design intuition</span> with <span className="text-purple-500">logical problem-solving</span> to bring ideas to life.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          Always exploring new tools — from animations with Framer Motion to responsive layouts in React + Tailwind.  
          I thrive on making things <span className="italic">beautiful</span> and <span className="italic">functional</span>.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          Beyond code, curiosity drives me. I aim to create impactful products, contribute to open-source, and explore the intersection of UI, logic, and creativity.
        </p>

        <TechStack />
      </motion.div>
    </section>
  );
}                  