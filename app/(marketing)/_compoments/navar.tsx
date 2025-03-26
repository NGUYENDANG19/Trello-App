import Logo from "@/components/logo";
import Link from "next/link";
import React from "react";

const Navar = () => {
  return (
    <div className="fixed top-0 w-full h-15 boder-b shadow-sm bg-white flex hover:shadow-xl transition-shadow duration-300">
      <div className="w-full mx-[104px]">
        <div className="flex justify-between  h-15 ">
          <div className="flex items-center gap-x-2 ">
            <Logo />
          </div>
          <div className=" md:flex md:w-auto items-center gap-x-6 text-xl">
            <Link href="/login">
              <div>Log in</div>
            </Link>
            <div className="flex items-center bg-[#0065ff] h-full text-white px-7 ">
              <Link href="/signup">Get Trello for free</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navar;
