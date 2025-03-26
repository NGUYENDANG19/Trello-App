import React from "react";
import Link from "next/link";
import ImgBackground from "@/components/imgbg";
import { Info } from "lucide-react";
import TitleForm from "@/components/titleform";
import BtnContinue from "@/components/ui/btncontinue";
import InputEmail from "@/components/ui/inputemail";
import OAuthButtons from "@/components/oauthbuttons";
import LogoAtlanssian from "@/components/logoatlanssian";

const Login = () => {
  return (
    <div className="LayoutForm">
      {/* Background*/}
      <ImgBackground />

      {/* Form Login*/}
      <div className="ContainerForm">
        <div className="Form">
          {/* Logo */}
          <TitleForm />

          {/* Title */}
          <h5 className="h5Title">Log in to continue</h5>

          {/* Input Email */}
          <InputEmail />

          {/* check-box */}
          <label className="flex items-center gap-2 cursor-pointer my-3">
            <input
              type="checkbox"
              className="w-3 h-3 border-gray-300 rounded hover:border-gray-400"
            />
            <span className="text-gray-700 ">Remember me</span>
            <Info className="w-4 h-4 text-gray-500 hover:text-gray-700" />
          </label>

          {/* Button Continue */}
          <BtnContinue />

          <p className="OrCoutinueWith">Or countinue with:</p>

          {/* Third Login */}
          <OAuthButtons />

          {/* Link-Sign up & reset passwork*/}
          <div className="flex items-center justify-center text-sm text-blue-800 font-normal gap-2 mt-6 pb-5 border-b border-gray-200">
            <Link href="/resetpassword ">
              <div className="hover:underline text-center">Can&apos;t log in?</div>
            </Link>
            <p>•</p>
            <Link href="/signup">
              <div className="hover:underline text-center">
                Create an account
              </div>
            </Link>
          </div>

          {/* Logo Atlanssisan */}
          <LogoAtlanssian />

          {/* Footer Form*/}
          <p className="text-center text-[11px] mt-3 gap-y-2">
            One account for Trello, Jira, Confluence and {""}
            <a href="#" className=" text-blue-800 hover:underline">
              more.
            </a>
            <br />
            <div className="hover:underline my-2">
              Privacy Policy • User Notice
            </div>
            This site is protected by reCAPTCHA and the Google
            <a href="#" className="text-blue-800 hover:underline">
              Privacy <br /> Policy {""}
            </a>
            <a href="#" className="text-blue-800 hover:underline">
              and Terms of Service {""}
            </a>
            apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
