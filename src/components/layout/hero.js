import React from "react";
import Image from "next/image";
import Right from "../icons/right";
const Hero = () => {
  return (
    <section className="grid grid-cols-2 ">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">Everything is better with a <span className="text-red-500">Pizza</span></h1>

        <p className="mt-7 text-gray-500 text-1xl">Pizza is a circle. It has no beginning and no end. And that's how I like my life to be
        </p>
        <div className=" flex justify-center  mt-5 ">

        <button className="text-white bg-red-500 px-7 py-2 items-center rounded-full flex gap-2">Order now <Right></Right> </button>
        <button   className="px-7 py-2 items-center rounded-full flex gap-2 font-semibold">Learn more <Right /></button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt="Pizza"
        />
      </div>
    </section>
  );
};

export default Hero;
