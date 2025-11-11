import React from "react";
import BannerSlider from "../components/BannerSlider";
import TopRatedReview from "../components/TopRatedReview";
import LatestReview from "../components/LatestReview";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <BannerSlider />
      <TopRatedReview />
      <LatestReview />
    </div>
  );
};

export default Home;
