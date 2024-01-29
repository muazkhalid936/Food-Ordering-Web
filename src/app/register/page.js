import React from "react";
import Image from "next/image";
const Register = () => {
  return (
    <div className="items-center mt-8">
      <h1 className="text-4xl text-red-600 text-center">Register</h1>
      <form className=" block max-w-xs mx-auto items-center">
        <input type="email" placeholder="Type Your Email "></input>
        <input type="password" placeholder="Type Your Password "></input>
        <div className="flex justify-center w-full  ">
          <button className="bg-red-600 w-full border border-current rounded-lg py-2 text-white">
            {" "}
            Register
          </button>
        </div>
        <div className="text-center my-1 ">or Login with Provider</div>
        <button
          type="submit"
          className=" flex justify-center gap-2 w-full border border-current rounded-lg py-2 font-semibold"
        >
          {" "}
          <Image src={"/Google.png"} width={24} height={24} alt="Google" />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Register;
