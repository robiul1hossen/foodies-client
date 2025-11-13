import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import MyReviewsTable from "./MyReviewsTable";
import Swal from "sweetalert2";
import Title from "../components/Title";

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
          .delete(`/favorite/${id}`)
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
        setFavorites(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosInstance, user]);
  return (
    <div>
      <div className="-my-10">
        <Title
          text1={"My"}
          text2={"Favorites"}
          text3={
            "My favorite reviews here. You can easily find the best local food from here."
          }
        />
      </div>
      <MyReviewsTable reviews={favorites} handleDelete={handleDelete} />
    </div>
  );
};

export default Favorite;
