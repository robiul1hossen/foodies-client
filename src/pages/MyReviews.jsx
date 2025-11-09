import axios from "axios";
import React from "react";
import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyReviewsTable from "./MyReviewsTable";

const MyReviews = () => {
  const { user } = use(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  const handleDelete = (id) => {
    // fetch(`http://localhost:3000/my-reviews/${id}`, { method: "DELETE" })
    //   .then((res) => res.json())
    //   .then(() => {
    //     setMyReviews(myReviews.filter((r) => r._id !== id));
    //   });
    axios
      .delete(`http://localhost:3000/my-reviews/${id}`)
      .then(() => {
        alert("delete successful");
        setMyReviews(myReviews.filter((r) => r._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (review) => {
    console.log("Editing:", review);

    // navigate(`/edit-review/${review._id}`) // example route
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/my-review?email=${user?.email}`)
      .then((res) => {
        setMyReviews(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  console.log(myReviews);
  return (
    <div>
      <MyReviewsTable
        reviews={myReviews}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default MyReviews;
