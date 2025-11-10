import React from "react";
import { Hourglass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Hourglass
        visible={true}
        height="40"
        width="40"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default Loader;
