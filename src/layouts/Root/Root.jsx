import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

const Root = () => {
  AOS.init();
  return (
    <div>
      <Navbar />
      <div className="mt-[120px]">
        <Outlet />
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Root;
