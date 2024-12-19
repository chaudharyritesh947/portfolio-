
import React from "react";
import "./App.css";
import "animate.css"; // Importing animation library
// Components
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App