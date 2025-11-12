import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import ReviewCard from "./ReviewCard";
import Title from "./Title";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const LatestReview = () => {
  const axiosInstance = useAxios();

  const [latest, setLatest] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/latest-review`)
      .then((res) => {
        setLatest(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosInstance]);

  return (
    <div>
      <Title
        text1={"Latest"}
        text2={"Reviews"}
        text3={
          "The latest reviews here. You can easily find the best local food from here."
        }
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {latest.map((review) => (
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

export default LatestReview;
