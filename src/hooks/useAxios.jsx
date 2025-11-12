import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://foodies-server-beryl.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
