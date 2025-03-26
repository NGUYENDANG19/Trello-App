import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="items-center justify-center pt-20 bottom-0 w-full bg-gray-100 border-t border-gray-200">
      <h2 className="text-[#091e42] font-[Charlie_Display] text-[36px] font-semibold leading-[48px] m-0 mb-6 text-center">
        Get started with Trello today
      </h2>
      <div className="flex items-center justify-center space-x-2 mb-20">
        <input
          type="email"
          placeholder="Email"
          className="w-[400px] px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
          <Link href="/signup">Sign up – it’s free!</Link>
        </button>
      </div>
      <footer className="bg-[#091e42] text-white text-sm py-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-start gap-6 border-b border-white/20 pb-6">
            {/* Logo và đăng nhập */}
            <div>
              <h2 className="text-lg font-semibold">ATLASIAN</h2>
              <p className="text-2xl font-bold">Trello</p>
              <a href="#" className="text-white mt-2 block">
                Log In
              </a>
            </div>
          </div>

          {/* Phần dưới */}
          <div className="flex flex-wrap justify-between items-center mt-4 text-white/80 text-xs">
            <div className="flex gap-2">
              <span>🌍</span>
              <span>English</span>
            </div>
            <div className="flex gap-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
              <span>Copyright © 2024 Atlassian</span>
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-xl">
                📷
              </a>
              <a href="#" className="text-xl">
                📘
              </a>
              <a href="#" className="text-xl">
                🔗
              </a>
              <a href="#" className="text-xl">
                🐦
              </a>
              <a href="#" className="text-xl">
                ▶️
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
