import { useEffect } from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../components/Loader";
import ReviewCard from "../components/ReviewCard";
import Title from "../components/Title";

const ReviewDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/review-derails/${id}`)
      .then((res) => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, axiosSecure]);

  useEffect(() => {
    axiosSecure
      .get(`/related-category?category=${details?.category}`)
      .then((res) => {
        setRelated(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosSecure, details]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto p-6 md:p-12 bg-gray-50 min-h-screen">
        <div className="flex flex-col md:flex-row gap-8 items-start ">
          <div
            data-aos="fade-right"
            className="flex-1 rounded-lg overflow-hidden shadow-lg h-[450px]">
            <img
              src={details.photo}
              alt={details.foodName}
              className=" h-full object-cover max-h-[450px] w-full"
            />
          </div>
          <div
            data-aos="fade-left"
            className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 h-[450px] ">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-gray-800">
                {details.foodName}
              </h1>
              <p className="text-gray-600 mt-2">
                {details.restaurantName} — {details.restaurantLocation}
              </p>
              <div className="flex gap-5 justify-center items-center">
                <div>
                  <p className="mt-2 text-gray-600">
                    Visited at: {details.visitDate}
                  </p>
                </div>
                <div className="flex justify-center items-center mt-3 gap-2 text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                  <span className="font-semibold">{details.rating}</span>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
              Reviewed by {details.reviewerName}
            </h2>
            <p className="text-gray-700 leading-relaxed  overflow-y-scroll scroll-smooth ">
              {details.review}
            </p>
            <Link to="/all-reviews">
              <button
                type="submit"
                className="cursor-pointer w-full relative overflow-hidden px-5 py-3 bg-white text-black border border-black rounded-lg font-semibold group transition-all duration-300">
                {/* background overlay */}
                <span className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>

                {/* text */}
                <span className=" flex justify-center gap-2 items-center relative z-10 group-hover:text-white transition-colors duration-300">
                  <FaArrowLeft /> Back To Review
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Title
        text1={"Related"}
        text2={"Reviews"}
        text3={
          "Related to your search. You can easily find the best local food from here."
        }
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {related.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </>
  );
};

export default ReviewDetails;
