import { Nunito } from "next/font/google";
import Link from "next/link";
const nunito = Nunito({
  subsets: ["latin"],
});
export default function Navbar() {
  const navLinks = ["Home", "Find Mosque", "Subscribe", "About", "Support"];

  return (
    <nav
      className={`w-full max-w-263 mt-6 ${nunito.className} border border-[#a8ffe5] rounded-[20px]`}
    >
      <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl px-11 py-[10px] flex items-center justify-between">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-white">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="hover:text-emerald-300 transition-colors font-light text-xl"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-6 ml-auto md:ml-0">
          <Link href="#" className="text-[#26FFA0] font-semibold text-xl">
            Login
          </Link>
          <button className="bg-gradient-to-b from-[#ADFFDB] to-[#00FF8F] cursor-pointer text-[#006E3E] font-semibold p-3 rounded-[10px] transition-all shadow-xl text-[20px]">
            Registration
          </button>
        </div>
      </div>
    </nav>
  );
}
