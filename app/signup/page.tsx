import React from "react";
import Link from "next/link";
import ImgBackground from "@/components/imgbg";
import TitleForm from "@/components/titleform";
import InputEmail from "@/components/ui/inputemail";
import BtnContinue from "@/components/ui/btncontinue";
import OAuthButtons from "@/components/oauthbuttons";
import LogoAtlanssian from "@/components/logoatlanssian";

const SignUp = () => {
  return (
    <div className="LayoutForm">
      {/* Background*/}
      <ImgBackground />

      {/* Container cuộn được */}
      <div className="ContainerForm">
        <div className="Form">
          {/* Logo */}
          <TitleForm />

          {/* Title */}
          <h5 className="h5Title">Sign up to continue</h5>

          {/* Input Email */}
          <InputEmail />

          {/* little-title */}
          <p className="text-left text-[12px] mt-3">
            By signing up, I accept the Atlassian{" "}
            <a href="#" className="text-blue-600">
              Cloud Terms of Service
            </a>
            <br /> and acknowledge the{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy.
            </a>
          </p>

          {/* Button Continue */}
          <BtnContinue />

          <p className="OrCoutinueWith">Or countinue with:</p>

          {/* Third Login */}
          <OAuthButtons />

          {/* Link-Login*/}
          <Link href="/login">
            <div className="text-center text-sm text-blue-800 font-normal mt-6 pb-5 hover:underline border-b border-gray-200">
              Already have an Atlassian account? Log in
            </div>
          </Link>

          {/* Logo Atlanssisan */}
          <LogoAtlanssian />

          {/* Footer Form*/}
          <p className="text-center text-[11px] mt-3">
            One account for Trello, Jira, Confluence and {""}
            <a href="#" className=" text-blue-800 hover:underline">
              more.
            </a>
            <br />
            <br />
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

export default SignUp;
