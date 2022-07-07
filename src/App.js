import React, {useState} from "react";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Skills from "./components/skills/skills";
import { useEffect } from "react";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect( () => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <Home offsetY={offsetY}/>
    <About />
    <Skills/>
    <Projects offsetY={offsetY}/>
    <Contact />
    </>
  );
}

export default App;
