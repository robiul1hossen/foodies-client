import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BannerSlider = () => {
  return (
    <div className="max-w-6xl mx-auto pb-12">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={40}
        slidesPerView={1}
        className="mySwiper">
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-white">
            {/* Left - Text */}
            <div className="w-full md:w-1/2 p-10 md:p-20">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Fresh, Fast & Delicious
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Enjoy mouthwatering meals from your favorite restaurants
                delivered hot and fresh to your doorstep — anytime, anywhere.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all">
                Explore Menu
              </button>
            </div>

            {/* Right - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80"
                alt="Delicious Food"
                className="w-full h-[70vh] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[85vh] flex items-center justify-center text-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600891963938-5b7a88193f5e?auto=format&fit=crop&w=1600&q=80')",
            }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 px-6 md:px-12 text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                Taste the <span className="text-yellow-400">Flavors</span> of
                Happiness
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Discover the best dishes from your favorite restaurants — fast,
                fresh, and deliciously delivered right to your door.
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-yellow-300 transition-all shadow-lg">
                  Order Now
                </button>
                <button className="border border-yellow-400 text-yellow-400 font-semibold py-3 px-6 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all shadow-lg">
                  Explore More
                </button>
              </div>
            </div>

            {/* Decorative wave bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
              <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                className="w-full h-24">
                <path
                  d="M0.00,49.98 C150.00,150.00 349.63,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                  className="fill-white"></path>
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[80vh] bg-center bg-cover flex items-center justify-center text-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80')",
            }}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            <div className="relative z-10 text-white px-6 max-w-2xl">
              <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
                Experience the Taste of Perfection
              </h1>
              <p className="text-lg mb-6 text-gray-200">
                Bringing together the world’s best cuisines — freshly made and
                delivered right to your table.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-all">
                Order Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white py-16 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                Discover <span className="text-green-600">Healthy</span> & Fresh
                Meals
              </h1>
              <p className="text-gray-600 mb-6 text-lg">
                Eat smart, feel great. Enjoy our wide range of nutritious dishes
                made with the freshest ingredients.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-md">
                View Recipes
              </button>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=80"
                alt="Healthy Food"
                className="w-full md:w-[80%] rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[90vh] flex items-center justify-center bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80')",
            }}>
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-transparent"></div>

            <div className="relative z-10 text-center text-white px-6">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-yellow-400 tracking-wide">
                Welcome to Gourmet Haven
              </h1>
              <p className="text-gray-200 text-lg mb-8">
                Experience fine dining with world-class chefs, elegant ambiance,
                and unforgettable flavors.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all">
                Reserve a Table
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
