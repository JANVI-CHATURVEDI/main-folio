import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
// import Resume from "./pages/Resume";
import AllProjects from "./pages/AllProjects";
// import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <main className="relative bg-white dark:bg-black text-black dark:text-white transition-all duration-300 ease-in-out min-h-screen overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-line-grid pointer-events-none" />

        {/* Blurry Squares */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blur-square blur-square-light dark:blur-square-dark top-10 left-20" />
          <div className="blur-square blur-square-light dark:blur-square-dark top-32 left-1/2" />
          <div className="blur-square blur-square-light dark:blur-square-dark top-1/4 right-16" />
          <div className="blur-square blur-square-light dark:blur-square-dark bottom-40 right-32" />
          <div className="blur-square blur-square-light dark:blur-square-dark bottom-20 left-24" />
          <div className="blur-square blur-square-light dark:blur-square-dark bottom-1/3 left-1/4" />
          <div className="blur-square blur-square-light dark:blur-square-dark top-1/2 left-[60%]" />
          <div className="blur-square blur-square-light dark:blur-square-dark top-[70%] right-[45%]" />
        </div>

        {/* Page Content */}
        <div className="relative max-w-[740px] mx-auto px-6 sm:px-10 pt-2">
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="/projects" element={<AllProjects />} />
            {/* <Route path="/experience" element={<Experience />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}
