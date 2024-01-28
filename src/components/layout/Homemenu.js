import React from "react";
import Card from "./Card";

const Homemenu = () => {
  return (
    <>
      <div className="text-center">
        <div>
          <span className=" text-2xl text-gray-500 font-semibold">
            Check out
          </span>
        </div>

        <button className=" bg-red-500 text-white italic font-semibold px-6 py-2 rounded-full">
          MORE
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-5">

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </>
  );
};

export default Homemenu;
