import React from "react";
import Image from "next/image";

const Register = () => {
  return (
    <div className="items-center mt-8">
      <h1 className="text-4xl text-red-600 text-center">Register</h1>
      <form className=" block max-w-xs mx-auto items-center">
        <input type="email" placeholder="Type Your Email "></input>
        <input type="password" placeholder="Type Your Password "></input>
        <div className="flex justify-center max-w-xs">
          <button  type="submit" className="bg-red-600 w-full rounded-lg py-2 text-white">
            {" "}
            Register
          </button>
        </div>
        <div className="text-center my-4 text-gray-500">
          or login with provider
        </div>

        <button className=" flex gap-4 justify-center border border-current font-semibold w-full rounded-lg py-2 text-center ">
          <Image src={'/google.png'}  width={24} height={24}/>
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Register;
