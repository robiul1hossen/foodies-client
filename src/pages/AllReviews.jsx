import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader";
import Title from "../components/Title";
import { FaSearch } from "react-icons/fa";
import { useCallback } from "react";

const AllReviews = () => {
  const [allReview, setAllReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const axiosInstance = useAxios();

  const fetchReviews = useCallback(
    async (search = "") => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/search-reviews?search=${search}`);
        setAllReview(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [axiosInstance]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    fetchReviews(searchText);
  };

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="md:-mt-10 mt-10">
        <Title
          text1={"All"}
          text2={"Reviews"}
          text3={
            "Our all review here. You can easily find the best local food from here."
          }
        />
      </div>
      <div className="text-center w-full mx-auto ">
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center px-4">
          <input
            name="search"
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border-none outline px-3 py-2  w-full md:w-1/4 shadow-lg mb-10 rounded-l-xl  "
            placeholder="Search Review"
          />
          <button className="border border-black px-3 py-3  shadow-lg mb-10 rounded-r-xl bg-amber-400 text-white">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {allReview.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
