import React from "react";
import "./App.css";
import image from "./images/Pic1.JPG";
import image2 from "./images/pic2.jpg";
import image3 from "./images/pic3.png";

function App() {
  return (
    <div className="App">
      <nav></nav>
      <div>
        <div>
          <h1>Jared Brown</h1>
          <img src={image} alt="Profile Picture" />
          <p>
            Hello, my name is Jared Brown and I am a Full Stack Web Development
            student at Lambda School
          </p>
        </div>

        <div>
          <img src={image2} alt="Photo by Steve Halama on Unsplash" />
          <h2>About me</h2>
          <p>
            I have a passion for coding and contributing to projects that make a
            difference in the world
          </p>
          <a href="https://keen-northcutt-4fb34f.netlify.com/">
            <img src={image3} alt="screenshot of deployed site" />
          </a>
        </div>

        <div>
          <h2>Contact Me</h2>
          <h4>Call or Text me:</h4>
          <p>909-730-7776</p>
          <h4>Email me at:</h4>
          <p>Jared.FE.Brown@gmail.com</p>
        </div>

        <div>
          <a href="https://github.com/JaredBrown1">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/jared-brown-118826192/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="http://twitter.com/Jaredloves2code">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
