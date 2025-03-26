import Link from "next/link";
import React from "react";
import Image from "next/image";


const MarketingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="bg-blue-100 w-full h-16 text-center flex justify-center items-center">
        <p>
          Accelerate your teams' work with Atlassian Intelligence (AI) features
          🤖 now available for all Premium and Enterprise!
        </p>
        Learn more.
      </div>

      <div className="flex justify-center items-cente w-full h-200 bg-gray-100">
        <div className="bg-gray-100 w-full h-full py-16 pl-[186px]">
          <div className="px-4 py-32">
            <h1 className="text-[#091e42] font-[Charlie Display] text-[48px] font-medium leading-[60px] mb-2 text-left">
              Capture, organize, and tackle your to-dos from anywhere.
            </h1>
            <p className="text-[#091e42] font-[Charlie Text] text-[20px] leading-[30px] mb-6 text-left">
              Escape the clutter and chaos—unleash your productivity with
              Trello.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Email"
                className="w-[300px] px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
                <Link href="/signup">Sign up – it’s free!</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image src="/slide.png" alt="hero" width={2000} height={10} />
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
