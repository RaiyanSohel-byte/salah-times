import AboutHeader from "@/app/components/about/AboutHeader";
import FAQ from "@/app/components/about/FAQ";
import HowWeCollect from "@/app/components/about/HowWeCollect";
import OurMission from "@/app/components/about/OurMission";
import TrustAndSecurity from "@/app/components/about/TrustAndSecurity";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <div className="px-4 md:px-0">
        <OurMission />
        <HowWeCollect />
        <TrustAndSecurity />
        <FAQ />
      </div>
    </div>
  );
};

export default About;
