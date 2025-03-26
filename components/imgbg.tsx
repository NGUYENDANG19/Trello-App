import React from "react";
import Image from "next/image";

const ImgBackground = () => {
  return (
    <div>
      {/* Ảnh nền bên trái */}
      <Image
        src="/login-signup/trello-left.4f52d13c.svg"
        alt="Left Decoration"
        width={368}
        height={300}
        className="absolute left-0 bottom-0"
      />

      {/* Ảnh nền bên phải */}
      <Image
        src="/login-signup/trello-right.e6e102c7.svg"
        alt="Right Decoration"
        width={368}
        height={100}
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};

export default ImgBackground;
