import { useEffect } from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const ReviewCard = ({ review }) => {
  const axiosInstance = useAxiosSecure();
  const { user } = use(AuthContext);

  const {
    _id,
    photo,
    foodName,
    restaurantLocation,
    restaurantName,
    reviewerName,
    rating,
  } = review;
  const [favorite, setFavorite] = useState(false);
  if (favorite) {
    console.log(_id);
  }

  useEffect(() => {
    if (favorite) {
      const data = {
        id: _id,
        email: user.email,
      };
      axiosInstance
        .post("/favorite", data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [axiosInstance, _id, favorite, user]);

  return (
    <div
      data-aos="fade-up"
      className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mr-2">
      {/* Food Image */}
      <img
        src={photo}
        alt={foodName}
        className="w-full h-48 object-cover hover:scale-105 overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
      />

      {/* Content */}
      <div className="p-4">
        {/* Food name */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {foodName}
          </h2>
          <span
            onClick={() => {
              setFavorite(true);
            }}
            className="cursor-pointer">
            {favorite ? <FaHeart /> : <FaRegHeart />}
          </span>
        </div>

        {/* Restaurant info */}
        <p className="text-gray-600 text-sm">
          <span className="font-medium">{restaurantName}</span> —{" "}
          {restaurantLocation}
        </p>

        {/* Reviewer + Rating */}
        <div className="flex justify-between items-center mt-3">
          <p className="text-gray-700 text-sm">
            Reviewed by <span className="font-semibold">{reviewerName}</span>
          </p>
          <div className="flex items-center gap-1 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
            </svg>
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        {/* View Details Button */}
        <Link to={`/review-details/${_id}`}>
          <button className="cursor-pointer w-full relative overflow-hidden px-5 py-2 mt-3 bg-white text-black border border-black rounded-lg font-semibold group transition-all duration-300">
            {/* background overlay */}
            <span className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>

            {/* text */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              View Details
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
