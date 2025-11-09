import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReviewCard from "./ReviewCard";

const TopRatedReview = () => {
  const [topReview, setTopReview] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/top-rated-reviews`)
      .then((res) => {
        setTopReview(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //   console.log(topReview);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {topReview.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedReview;
