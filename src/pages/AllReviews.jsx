// import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader";

const AllReviews = () => {
  const [topReview, setTopReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/all-reviews`)
      .then((res) => {
        setTopReview(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosInstance]);

  if (loading) {
    return <Loader />;
  }

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
