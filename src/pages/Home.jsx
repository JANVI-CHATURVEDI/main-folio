import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
// import Experience from "../components/Experience";
import Footer from "../components/Footer";
import AutoScroll from "../data/AutoScroll";


export default function Home() {
  return (
    <>
      <AutoScroll />
      <Header />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Footer />
      
      
    </>
  );
}
