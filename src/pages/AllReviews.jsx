// import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import useAxios from "../hooks/useAxios";

const AllReviews = () => {
  const [topReview, setTopReview] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance
      .get(`/all-reviews`)
      .then((res) => {
        setTopReview(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosInstance]);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {topReview.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
