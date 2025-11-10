import axios from "axios";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, logoutUser } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${user.accessToken}`;
        return config;
      }
    );

    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
          console.log("logout the user, bad request");
          logoutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [user, logoutUser, navigate]);
  return axiosInstance;
};
export default useAxiosSecure;
