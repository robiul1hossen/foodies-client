import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import useAxios from "../hooks/useAxios";
import Loader from "./Loader";
import Title from "./Title";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const TopRatedReview = () => {
  const [topReview, setTopReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/top-rated-reviews`)
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
    <div>
      <Title
        text1={"Top"}
        text2={"Rated Reviews"}
        text3={
          "The top rated reviews here. You can easily find the best local food from here."
        }
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {topReview.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
      <div className="mt-4 w-full justify-items-center  ">
        <Link
          to="/all-reviews"
          className="cursor-pointer flex justify-center items-center  border w-fit px-6 py-2 rounded-xl bg-transparent hover:bg-black hover:text-white duration-300">
          <p>View All</p>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default TopRatedReview;
