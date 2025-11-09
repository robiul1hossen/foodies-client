import React from "react";
import { use } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";

const EditReview = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [review, setReview] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const date = Date.now();
    data.createAt = date;
    // console.log("Submitted Review:", data);
    axios
      .patch(`http://localhost:3000/my-review/${id}`, data)
      .then((res) => {
        console.log(res);
        alert("review updated");
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/my-review/${id}`)
      .then((res) => {
        setReview(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  //   console.log(review);

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Edit Your Review
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Food Photo URL */}
        <div>
          <label className="block mb-1 font-medium">Food Photo URL</label>
          <input
            defaultValue={review.photo}
            type="text"
            {...register("photo", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.photo && (
            <p className="text-red-500 text-sm">Photo URL is required</p>
          )}
        </div>

        {/* Food Name */}
        <div>
          <label className="block mb-1 font-medium">Food Name</label>
          <input
            defaultValue={review.foodName}
            type="text"
            {...register("foodName", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.foodName && (
            <p className="text-red-500 text-sm">Food name is required</p>
          )}
        </div>

        {/* Restaurant Name */}
        <div>
          <label className="block mb-1 font-medium">Restaurant Name</label>
          <input
            defaultValue={review.restaurantName}
            type="text"
            {...register("restaurantName", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.restaurantName && (
            <p className="text-red-500 text-sm">Restaurant name is required</p>
          )}
        </div>

        {/* Restaurant Location */}
        <div>
          <label className="block mb-1 font-medium">Restaurant Location</label>
          <input
            defaultValue={review.restaurantLocation}
            type="text"
            {...register("restaurantLocation", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.restaurantLocation && (
            <p className="text-red-500 text-sm">Location is required</p>
          )}
        </div>

        {/* Reviewer Name */}
        <div>
          <label className="block mb-1 font-medium">Reviewer Name</label>
          <input
            defaultValue={user?.displayName}
            readOnly
            type="text"
            {...register("reviewerName", { required: true })}
            className="input input-bordered w-full outline-none"
          />
          {errors.reviewerName && (
            <p className="text-red-500 text-sm">Reviewer name is required</p>
          )}
        </div>

        {/* Reviewer Email */}
        <div>
          <label className="block mb-1 font-medium">Reviewer Email</label>
          <input
            defaultValue={user?.email}
            readOnly
            type="email"
            {...register("reviewerEmail", { required: true })}
            className="input input-bordered w-full outline-none"
          />
          {errors.reviewerEmail && (
            <p className="text-red-500 text-sm">Reviewer name is required</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-1 font-medium">Rating (0 - 5)</label>
          <input
            defaultValue={review.rating}
            type="number"
            step="0.1"
            min="0"
            max="5"
            {...register("rating", { required: true, min: 0, max: 5 })}
            className="input input-bordered w-full"
          />
          {errors.rating && (
            <p className="text-red-500 text-sm">Enter a rating between 0–5</p>
          )}
        </div>

        {/* Review */}
        <div>
          <label className="block mb-1 font-medium">Review</label>
          <textarea
            defaultValue={review.review}
            {...register("review", { required: true })}
            className="textarea textarea-bordered w-full h-32"></textarea>
          {errors.review && (
            <p className="text-red-500 text-sm">Review text is required</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="cursor-pointer w-full relative overflow-hidden px-5 py-3 bg-white text-black border border-black rounded-lg font-semibold group transition-all duration-300">
          {/* background overlay */}
          <span className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>

          {/* text */}
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Update Review
          </span>
        </button>
      </form>
    </div>
  );
};

export default EditReview;
