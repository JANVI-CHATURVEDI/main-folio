import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
// import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Nav from "./components/Nav"; // Assuming this is bottom nav

function App() {
  return (
    <main className="relative bg-white dark:bg-black text-black dark:text-white transition-all duration-300 ease-in-out min-h-screen overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-line-grid pointer-events-none" />

      {/* Blurry Squares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top / Left */}
        <div className="blur-square blur-square-light dark:blur-square-dark top-10 left-20" />
        <div className="blur-square blur-square-light dark:blur-square-dark top-32 left-1/2" />

        {/* Right Side */}
        <div className="blur-square blur-square-light dark:blur-square-dark top-1/4 right-16" />
        <div className="blur-square blur-square-light dark:blur-square-dark bottom-40 right-32" />

        {/* Bottom / Left */}
        <div className="blur-square blur-square-light dark:blur-square-dark bottom-20 left-24" />
        <div className="blur-square blur-square-light dark:blur-square-dark bottom-1/3 left-1/4" />

        {/* Center-ish */}
        <div className="blur-square blur-square-light dark:blur-square-dark top-1/2 left-[60%]" />
        <div className="blur-square blur-square-light dark:blur-square-dark top-[70%] right-[45%]" />
      </div>


      {/* Content */}
      <div className="relative max-w-[740px] mx-auto px-6 sm:px-10 pt-2">
        <Nav />
        <Header />
        <About />
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </div>
    </main>
  );
}

export default App;
