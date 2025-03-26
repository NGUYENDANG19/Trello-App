import { loginSiteConfig } from "@/config/site";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const OAuthButtons = () => {
  return (
    <div className="flex flex-col gap-4 w-full  items-center mt-6 ">
      {loginSiteConfig.map((site) => (
        <Button
          key={site.id}
          className="flex items-center justify-center w-full gap-3 border rounded-lg px-4 py-2 bg-white hover:bg-gray-100 transition"
        >
          <Image src={site.icon} alt={site.name} className="w-6 h-6" />
          <span className="text-sm font-medium text-black">{site.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default OAuthButtons;
