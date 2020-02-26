import React from "react";
import image from "../images/Pic1.JPG";

const Intro = () => {
  return (
    <div>
      <h1>Jared Brown</h1>
      <img src={image} alt="Profile Picture" />
      <p>
        Hello, my name is Jared Brown and I am a Full Stack Web Development
        student at Lambda School
      </p>
    </div>
  );
};

export default Intro;
