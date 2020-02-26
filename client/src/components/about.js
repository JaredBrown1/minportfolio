import React from "react";
import image2 from "../images/pic2.jpg";
import image3 from "../images/pic3.png";

const About = () => {
  return (
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
  );
};

export default About;
