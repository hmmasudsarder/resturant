import Image from "next/image";
import BannerPng from "../../assets/Images/banner.png";
import Link from "next/link";


const Banner2 = () => {
  return (
    <section>
      <div className="cotainer py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text  */}
        <div className="flex flex-col justify-center items-center mr-24 lg:ml-0">
          <div className="text-center md:text-left space-y-4 lg:max-w-[500px] ml-20">
            <h3 className="text-4xl font-bold !leading-snug">
              Join Our Community to Start Your Journey
            </h3>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              aperiam, commodi dolorum nostrum unde facilis repudiandae sed
              molestias magnam vitae.
            </p>
            <button className="mt-8 p-3 rounded-lg px-4 bg-primary"><Link href="" className="primary-btn mt-8">
              Join Now
            </Link></button>
          </div>
        </div>
        {/* Banner Image  */}
        <div className="flex justify-center items-center">
          <Image
            src={BannerPng}
            className="w-[400px] md:max-w-[450px] object-cover drop-shadow ml-36"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
