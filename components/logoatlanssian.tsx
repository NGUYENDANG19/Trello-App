import React from "react";
import Image from "next/image";

const LogoAtlanssian = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <Image src="/Atlassian.png" alt="Logo" width={150} height={20} />
    </div>
  );
};

export default LogoAtlanssian;
