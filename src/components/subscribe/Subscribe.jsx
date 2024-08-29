import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/Images/bg.png";
import Image from "next/image";

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7] pb-28">
      <div className="container py-24 md:py-48">
        <Image src={BgImage} alt="backgound image" className="w-11/12 -pb-80" width={10000} height={100}/>
        <div className="flex flex-col justify-center -mt-96">
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h2 className="text-4xl font-bold !leading-snug">
              450+ Students are learning from us
            </h2>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae maxime beatae quasi tempore debitis labore illo,.
            </p>
            <a
              href=""
              className="bg-primary p-3 rounded-xl !mt-8 inline-flex items-center justify-center gap-4 group"
            >
              Subscribe Now{" "}
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
