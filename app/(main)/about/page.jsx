import { Inter, Lato } from "next/font/google";
import React from "react";
const inter = Inter({
  subsets: ["latin"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});
const About = () => {
  return (
    <div className="py-[196px] text-center bg-gradient-to-b from-[#1F8A5B] to-[#1F6F8B] w-full">
      <h1 className={`font-bold text-[66px] text-white ${lato.className}`}>
        <span className="text-[#26FFA0] italic">About</span> Salaah-Times
      </h1>
      <p className={`text-2xl text-[#D0E0FF] ${inter.className}`}>
        Your reliable Islamic digital companion for accurate prayer times across
        <br />
        United Kingdom.
      </p>
    </div>
  );
};

export default About;
