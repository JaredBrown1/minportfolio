import React from "react";
import "./App.css";
import image4 from "./images/pic4.jpg";

//components
import Intro from "./components/intro";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <nav></nav>
        <div>
          <Intro />

          <About />

          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
