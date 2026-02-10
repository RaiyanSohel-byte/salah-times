import React from "react";
import mosque from "../../../public/icons/mosque.png";
import power from "../../../public/icons/power.png";
import verification from "../../../public/icons/verification.png";
import realTime from "../../../public/icons/realTime.png";
import FeatureCard from "../cards/FeatureCard";
const HowWeCollect = () => {
  const features = [
    {
      icon: mosque,
      title: "Mosque Partnership",
      sub: "We partner directly with mosques to receive their official prayer schedules",
      bg: "bg-[#E9F5F0]",
    },
    {
      icon: power,
      title: "AI-Powered Collection",
      sub: "Our AI automatically processes data from emails, WhatsApp, and uploaded schedules",
      bg: "bg-[#EEF7FB]",
    },
    {
      icon: verification,
      title: "Manual Verification",
      sub: "Every entry is reviewed by our admin team to ensure 100% accuracy",
      bg: "bg-[#E9F5F0]",
    },
    {
      icon: realTime,
      title: "Real-Time Updates",
      sub: "Prayer times are updated instantly and synchronized across all platforms",
      bg: "bg-[#FFF8E7]",
    },
  ];
  return (
    <div className="mt-15">
      <h1 className="font-semibold text-[32px] mb-8 text-center">
        How We Collect Prayer Times
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-[1216px] mx-auto gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default HowWeCollect;
