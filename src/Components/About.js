import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        A Haven for Book Lovers
        </h1>
        <p className="primary-text">
        At LitHaven, we are more than just a bookstore;
        we are curators of stories, keepers of knowledge,
        and champions of imagination.
        </p>
        <p className="primary-text">
        Whether you're seeking an enthralling mystery, a heartwarming romance,
        or an educational adventure, we have the perfect book waiting just for you.
        Join us and embark on a journey through the written word,
        where each page offers a new discovery and every story becomes a cherished memory.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Read Our Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
