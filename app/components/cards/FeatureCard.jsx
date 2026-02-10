import Image from "next/image";
import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <div className="p-6 rounded-[14px] shadow-xl">
      <div
        className={`w-[56px] h-[56px] rounded-[14px] flex justify-center items-center ${feature.bg} mb-4`}
      >
        <Image src={feature.icon} width={21} height={23} alt="icon" />
      </div>
      <h3 className="text-[#1E293B] text-base font-semibold mb-2">
        {feature.title}
      </h3>
      <p className="text-[#64748B] text-[14px]">{feature.sub}</p>
    </div>
  );
};

export default FeatureCard;
