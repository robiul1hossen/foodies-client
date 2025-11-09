import React from "react";
import BannerSlider from "../components/BannerSlider";
import TopRatedReview from "../components/TopRatedReview";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <BannerSlider />
      <TopRatedReview />
    </div>
  );
};

export default Home;
