import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h2>New Arrival Only</h2>

        <h1>
          New <img src={hand_icon} alt="hand" className="hand" />
        </h1>

        <h1>Collection</h1>
        <h1>For Everyone</h1>

        <button className="hero-btn">
          Latest Collection
          <img src={arrow_icon} alt="arrow" />
        </button>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
