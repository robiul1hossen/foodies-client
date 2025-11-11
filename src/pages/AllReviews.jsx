// import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader";
import Title from "../components/Title";

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
      <div className="-mt-10">
        <Title
          text1={"All"}
          text2={"Reviews Here"}
          text3={
            "Our all review here. You can easily find the best local food from here."
          }
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {topReview.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
