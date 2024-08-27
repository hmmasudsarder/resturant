import { FaBookReader } from "react-icons/fa";
import BannerPng from "../../assets/Images/education.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <div className="cotainer py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image  */}
        <div className="flex justify-center items-center">
          <Image
            src={BannerPng}
            className="w-[400px] md:max-w-[450px] object-cover drop-shadow mr-32"
            alt=""
          />
        </div>
        {/* Banner Text  */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <h2
              className="text-3xl md:text-4xl font-bold  !leading-snug"
            >
              The World's Leading Online <br /> Learning Platform
            </h2>
            <div className="flex flex-col gap-6 lg:pr-20">
              <div
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FaBookReader className="text-2xl" />
                <p className="text-lg">10,000+ Courses</p>
              </div>
              <div
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <GrUserExpert className="text-2xl" />
                <p className="text-lg">Expert Instruction</p>
              </div>
              <div
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <MdOutlineAccessTime className="text-2xl" />
                <p className="text-lg">LifeTime Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
