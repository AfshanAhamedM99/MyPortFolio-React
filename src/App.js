import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/skills" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        {/* <HeroSection />    
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer /> */}
      </div>
  );
}

export default App;


