import React from "react";
import Marquee from "react-fast-marquee";

const BannerSlider = () => {
  return (
    <Marquee speed={100} pauseOnHover="true">
      <div className="flex justify-between gap-5 ">
        {/* 1st image */}
        <div className="relative w-full h-[350px] overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src="https://i.ibb.co.com/fz84DZHB/rice-noodles-bowl-curry-paste-with-chili-cucumber-long-bean-lime-garlic-spring-onion.jpg"
            alt=""
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
            <p className="text-white text-center text-lg px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              rerum.
            </p>
          </div>
        </div>

        {/* 2nd image */}
        <div className="relative w-full h-[350px] overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover -z-50"
            src="https://i.ibb.co.com/m5HB61xd/top-view-recipe-ingredients-arrangement.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center z-50">
            <p className="text-white text-center text-lg px-4 z-50">
              Dolorem, blanditiis maiores! Quibusdam omnis quaerat magni harum.
            </p>
          </div>
        </div>

        {/* 3rd image */}
        <div className="relative w-full h-[350px] overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src="https://i.ibb.co.com/vvQgTHzT/surreal-fruit-studio.jpghttps://i.ibb.co/Z6M4wQM/gardening-concept-with-woman.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
            <p className="text-white text-center text-lg px-4">
              Vitae repudiandae sapiente architecto iste veritatis cupiditate.
            </p>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default BannerSlider;
