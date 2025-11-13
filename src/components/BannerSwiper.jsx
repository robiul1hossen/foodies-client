import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Title from "./Title";

const BannerSwiper = () => {
  const reviews = [
    {
      image: "https://i.ibb.co.com/tpL43TJG/foodies1.jpg",
      name: "Katrina Kaif",
      location: "Dhaka, Bangladesh",
      title: "Excellent Food Quality",
      subtitle: "“Trusted by thousands of food lovers”",
      text: "I love ordering from this platform! The food always arrives hot and fresh, and I’ve discovered so many amazing restaurants I wouldn’t have known otherwise.",
    },
    {
      image: "https://i.ibb.co.com/0Vjb4pWx/foodies4.jpg",
      name: "David Miller",
      location: "Chattogram, Bangladesh",
      title: "Amazing Experience",
      subtitle: "“Fast delivery & friendly service”",
      text: "The delivery was super quick, and the customer service was very friendly. It’s now my go-to site for lunch and dinner orders.",
    },
    {
      image: "https://i.ibb.co.com/MDgpZpfB/foodies3.jpg",
      name: "Anika Rahman",
      location: "Sylhet, Bangladesh",
      title: "Great Variety of Restaurants",
      subtitle: "“So many choices to love!”",
      text: "There are so many different restaurants to choose from — local favorites to international brands. The UI is smooth and ordering is effortless.",
    },
    {
      image: "https://i.ibb.co.com/XxNbwt48/foodies2.jpg",
      name: "John Smith",
      location: "Rajshahi, Bangladesh",
      title: "Best Food Platform",
      subtitle: "“Reliable and delicious every time”",
      text: "I’ve used other food apps before, but this one is by far the most reliable. The quality, timing, and restaurant list are top-notch.",
    },
    {
      image: "https://i.ibb.co.com/39PdsGzW/foodies5.jpg",
      name: "Sadia Ahmed",
      location: "Khulna, Bangladesh",
      title: "Highly Recommended",
      subtitle: "“A must-try for every foodie”",
      text: "I’ve been recommending this app to all my friends. The service is outstanding, and the food tastes just like dining in the restaurant.",
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Title
          text1={"What Our"}
          text2={"Customers Say"}
          text3={"  Honest reviews from our satisfied customers"}
        />

        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="mySwiper">
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center  rounded-2xl shadow-md p-8 md:p-10 gap-8">
                <div className="w-full">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-80 object-cover shadow-lg"
                  />
                </div>

                {/* Right - Text */}
                <div className="text-center md:text-left w-full">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {review.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{review.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {review.text}
                  </p>
                  <h4 className="text-lg font-bold text-gray-800">
                    — {review.name}
                  </h4>
                  <span className="text-gray-600 text-sm">
                    {review.location}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BannerSwiper;
