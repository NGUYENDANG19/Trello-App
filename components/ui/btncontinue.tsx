import React from "react";
import { Button } from "./button";
import Link from "next/link";

const BtnContinue = () => {
  return (
    <div>
      <Button className="bg-blue-600 text-white text-center w-full p-2 rounded mt-4 text-sm leading-5 font-semibold hover:bg-blue-700">
        <Link href="/">Continue</Link>
      </Button>
    </div>
  );
};

export default BtnContinue;
