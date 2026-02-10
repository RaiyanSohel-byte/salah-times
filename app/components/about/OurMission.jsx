import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({
  subsets: ["latin"],
});
const OurMission = () => {
  return (
    <div className="max-w-[1216px] w-full text-center mx-auto rounded-[16px] shadow-xl mt-15 p-8 border border-gray-200">
      <h3 className="text-[#1E293B] text-[30px] font-semibold">Our Mission</h3>
      <p
        className={`text-[#64748B] text-[18px] max-w-[768px] mx-auto mt-6 ${inter.className}`}
      >
        We believe that every Muslim deserves access to accurate, reliable
        prayer times. Salaah-Times combines modern technology with traditional
        Islamic values to help you maintain your spiritual connection throughout
        the day.
      </p>
    </div>
  );
};

export default OurMission;
