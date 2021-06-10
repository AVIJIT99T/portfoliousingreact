import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
};

export default App;
