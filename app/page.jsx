import { Inter } from "next/font/google";
import ActionButtons from "./components/home/ActionButtons";
import Hero from "./components/home/Hero";
import LocationCard from "./components/home/LocationCard";
import Navbar from "./components/shared/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${inter.className} h-[822px] w-full bg-gradient-to-br from-[#1F8A5B] to-[#1F6F8B] flex flex-col items-center px-4 md:px-8`}
    >
      <Navbar />

      <div className="flex flex-col items-center justify-center w-full max-w-4xl mt-[50px] mb-20">
        <Hero />
        <LocationCard />
        <ActionButtons />
      </div>
    </main>
  );
}
