import { Inter, Lato } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});
const SupportHeader = () => {
  return (
    <div className="py-[196px] text-center bg-gradient-to-b from-[#1F8A5B] to-[#1F6F8B] w-full">
      <h1
        className={`font-bold text-4xl lg:text-[66px] text-white ${lato.className}`}
      >
        <span className="text-[#26FFA0] italic">Support </span>& Help
      </h1>
      <p className={`lg:text-2xl text-[#D0E0FF] ${inter.className} mt-4`}>
        We're here to help you. Find answers to common questions or get in touch
        with us.
      </p>
    </div>
  );
};

export default SupportHeader;
