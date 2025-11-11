import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyReviewsTable from "./MyReviewsTable";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../components/Loader";

const MyReviews = () => {
  const { user } = use(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

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
        axiosSecure
          .delete(`/my-review/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your review has been deleted.",
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

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/my-review?email=${user?.email}`)
      .then((res) => {
        setMyReviews(res?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user, axiosSecure]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <MyReviewsTable reviews={myReviews} handleDelete={handleDelete} />
    </div>
  );
};

export default MyReviews;
