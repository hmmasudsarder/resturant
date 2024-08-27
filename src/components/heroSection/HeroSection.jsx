import { IoIosArrowRoundForward } from "react-icons/io";
import Blog from "../../assets/Images/blob.svg";
import HeroPng from "../../assets/Images/hero.png";
import Image from "next/image";
import Navbar from "../navbar/Navbar";

const HeroSection = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info  */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20 -ml-8">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px] ">
            <h2
              className="text-3xl lg:text-5xl  space-y-10 font-bold !leading-snug"
            >
              Let Learn to build <span className="text-secondary">Skill</span>{" "}
              for your mind{" "}
            </h2>
            <div className="flex justify-center md:justify-start">
              <button className="primary-btn btn flex items-center gap-2 group">
                Get Started{" "}
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />{" "}
              </button>
            </div>
          </div>
        </div>
        {/* Brand Image  */}
        <div className="flex justify-center items-center">
          <Image
            src={HeroPng}
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow ml-28"
            alt=""
          />
          <Image
            src={Blog}
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
