import React from "react";
// import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollTo";
// import Scroll from "./Components/Scroll";
// import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Scroll showBelow={250} /> */}
      <Navbar />
      <ScrollToTop />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <BrowserRouter>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter> */}
    </>
  );
};

export default App;
