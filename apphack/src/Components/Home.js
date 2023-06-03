import React from "react";
//import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-imagee.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Caring Hearts, Healing Hands 
          </h1>
          <p className="primary-text">
          Lifesavers on the frontlines, bridging gaps in healthcare access with unwavering dedication.
          </p>
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;