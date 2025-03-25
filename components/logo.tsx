import Link from "next/link";
import React from "react";
import Image from "next/image";

 const Logo = () => {
  return (
    <Link href="/">
      <div className=" items-center gap-x-2 hidden md:flex p-4">
        <Image src="/trello-svgrepo-com.svg" alt="Logo" width={29} height={29} />
        <div className="flex flex-col items-center">
          <Image src="/Atlassian.png" alt="Logo" width={80} height={40} />
          <p className="text-3xl text-neutral-700 font-bold">Trello</p>
        </div>
        
      </div>
    </Link>
  );
};

export default Logo;