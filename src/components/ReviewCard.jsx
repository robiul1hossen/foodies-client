import React from "react";

const ReviewCard = ({ review }) => {
  const {
    photo,
    foodName,
    restaurantLocation,
    restaurantName,
    reviewerName,
    rating,
  } = review;
  console.log(review);
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Food Image */}
      <img
        src={photo}
        alt={foodName}
        className="w-full h-48 object-cover hover:scale-105 overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
      />

      {/* Content */}
      <div className="p-4">
        {/* Food name */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{foodName}</h2>

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
        <button className="btn btn-outline w-full mt-4 hover:bg-black hover:text-white">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
