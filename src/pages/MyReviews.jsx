import axios from "axios";
import React from "react";
import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyReviewsTable from "./MyReviewsTable";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = use(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/my-review/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setMyReviews(myReviews.filter((r) => r._id !== id));
          })
          .catch((error) => {
            console.log(error);
          });
      }
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

  //   console.log(myReviews);
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
