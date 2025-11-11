import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import MyReviewsTable from "./MyReviewsTable";
import Swal from "sweetalert2";

const Favorite = () => {
  const { user } = use(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const axiosInstance = useAxiosSecure();

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
        axiosInstance
          .delete(`/my-review/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your review has been deleted.",
              icon: "success",
            });
            setFavorites(favorites.filter((r) => r._id !== id));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  useEffect(() => {
    axiosInstance
      .get(`/favorite/${user.email}`)
      .then((res) => {
        console.log(res.data);
        setFavorites(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosInstance, user]);
  console.log(favorites);
  return (
    <div>
      <MyReviewsTable reviews={favorites} handleDelete={handleDelete} />
    </div>
  );
};

export default Favorite;
