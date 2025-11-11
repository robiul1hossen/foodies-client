import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import ReviewCard from "./ReviewCard";

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
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {latest.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default LatestReview;
