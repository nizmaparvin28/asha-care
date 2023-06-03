import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
//import PickMeals from "../Assets/pick-meals-image.png";
//import ChooseMeals from "../Assets/choose-image.png";
//import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: "ProfilePic",
      title: "Schedule the patients   ",
      text: "With Gather, you can find events happening near you in real-time based on your location.",
    },
    {
      image: "ProfilePic",
      title: "Surveying made easy",
      text: "Our personalized event search provides customized recommendations based on your interests and search history.",
    },
    {
      image: "",
      title: "Keep history tracker of patients",
      text: "Keep track of events you've attended and those you plan to attend with our event history tracker in your profile.",
    },
    
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading">All about us </h1>
        <p className="primary-text">
         AshaCare is a webservice for asha workers to reduce there work complexity.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;