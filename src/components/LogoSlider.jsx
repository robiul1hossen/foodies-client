import React from "react";
import Marquee from "react-fast-marquee";
import Title from "./Title";

const LogoSlider = () => {
  const logos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5vRI9vF8hC9T8TBzwZBzjNZJ7elQRgV9nw&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png",
    "https://imgcdn.stablediffusionweb.com/2024/11/24/62681f59-12d9-4036-8578-1fbcbf17df4e.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pizza_Hut_international_logo_2014.svg/1087px-Pizza_Hut_international_logo_2014.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpdnCaNKupk2YSbUXA2tNGPGcNA3jTj2QyA&s",
    "https://diginsights.com/wp-content/uploads/2024/03/image-7.webp",
  ];

  return (
    <div className="bg-white py-6 shadow-md rounded-2xl overflow-hidden">
      <Title
        text1={"Our"}
        text2={"Partner Restaurants"}
        text3={"Trusted by top food brands across the country."}
      />

      <Marquee pauseOnHover={true} gradient={false} speed={80} direction="left">
        {logos.map((logo, index) => (
          <div key={index} className="mx-8 flex items-center justify-center">
            <img
              src={logo}
              alt={`logo-${index}`}
              className="h-24 mb-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
      <Marquee
        pauseOnHover={true}
        gradient={false}
        speed={80}
        direction="right">
        {logos.map((logo, index) => (
          <div key={index} className="mx-8 flex items-center justify-center">
            <img
              src={logo}
              alt={`logo-${index}`}
              className="h-24 w-auto mt-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoSlider;
