import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link className="text-red-500 font-semibold text-2xl" href={""}>
          ST PIZZA
        </Link>
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className=" flex justify-center items-center gap-4">
        <Link href={'/login'} className="text-grey-500">
          Login
        </Link>
        <Link
          href={'/register'}
          className="px-6 py-2 text-white bg-red-600 rounded-full"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
