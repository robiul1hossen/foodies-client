import React from "react";

const Title = ({ text1, text2, text3 }) => {
  return (
    <div className="mt-20 mb-12">
      <div className="flex justify-center items-center gap-4 ">
        <h2 className="font-semibold text-2xl">
          <span className="text-gray-800">{text1}</span>{" "}
          <span className="text-gray-600">{text2}</span>
        </h2>
        <div className="">
          <hr className="w-12 h-px text-black bg-black mt-1" />
        </div>
      </div>
      <p className="text-gray-500 text-center mt-1">{text3}</p>
    </div>
  );
};

export default Title;
