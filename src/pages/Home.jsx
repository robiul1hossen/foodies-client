import React from "react";
import BannerSlider from "../components/BannerSlider";
import TopRatedReview from "../components/TopRatedReview";
import LatestReview from "../components/LatestReview";
import LogoSlider from "../components/LogoSlider";
import BannerSwiper from "../components/BannerSwiper";
import FindUsSection from "../components/FindUsSection";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <BannerSlider />
      <TopRatedReview />
      <LatestReview />
      <LogoSlider />
      <BannerSwiper />
      <FindUsSection />
    </div>
  );
};

export default Home;
