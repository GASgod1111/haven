import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Books",
      text: "Explore new reads at LitHaven, your online haven for captivating stories ",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Discover tailored books, carefully selected for your enjoyment and intellectual nourishment. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Swift shipping ensures your chosen books swiftly reach your doorstep ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        At LitHaven, explore an extensive collection of books for 
        sale and indulge in the joy of reading directly on our website. 
        Your literary journey begins here,
         where stories unfold and adventures await.
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
