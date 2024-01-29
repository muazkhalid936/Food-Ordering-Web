import React from "react";

const Register = () => {
  return <div className="items-center mt-8">

    <h1 className="text-4xl text-red-600 text-center">Register</h1>
<form className=" block max-w-xs mx-auto items-center">

    <input type="email" placeholder="Type Your Email "></input>
    <input type="password" placeholder="Type Your Password "></input>
    <div className="flex justify-center max-w-xs">

    <button className="bg-red-600 max-w-xs rounded-full py-2 px-6 text-white"> Register</button>
    </div>
</form>
  
  </div>;
};

export default Register;
