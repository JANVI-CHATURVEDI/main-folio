import { useEffect } from "react";

export default function AutoScroll() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientY } = e;
      const screenHeight = window.innerHeight;

      // Full jump if near edges
      if (clientY < screenHeight * 0.1) {
        // top 10%
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      } else if (clientY > screenHeight * 0.9) {
        // bottom 10%
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        return;
      }

      // Gradual scroll for the middle 80%
      const speed = ((clientY - screenHeight / 2) / (screenHeight / 2)) * 7;
      window.scrollBy({ top: speed, behavior: "smooth" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
