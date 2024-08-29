import Image from "next/image";
import { companies } from "../../../assets/Images/amazon.png";
import { companies2 } from "../../../assets/Images/drillle.png";
import { companies3 } from "../../../assets/Images/hubspot.png";
import { companies4 } from "../../../assets/Images/notion.png";
import { companies5 } from "../../../assets/Images/netflix.png";
import { companies6 } from "../../../assets/Images/zoom.png";


const Compaines = () => {
  return (
    <div className="mx-20 my-16 lg:my-28 md:my-6 py-7 lg:py-14 gap-5  grid grid-cols-3 md:grid-cols-6 border rounded-xl">
      <div className="flex w-full justify-center items-center  opacity-80 hover:opacity-100 duration-300 transition-opacity">
       <div className="">
       <Image
          className="w-20 h-5 lg:w-28 bg-white cursor-pointer"
          src={companies}
          alt="companies"
          width={20}
          height={20}
        />
       </div>
        <Image
            src={companies}
            className="w-[40px] xl:w-[60px] relative z-10 drop-shadow lg:ml-28"
            alt="hero image"
          />
        <Image
          className="w-20 lg:w-28  cursor-pointer"
          src={companies2}
          alt="companies2"
        />
        <Image
          className="w-20 lg:w-28  cursor-pointer"
          src={companies3}
          alt="companies3"
        />
        <Image
          className="w-20 lg:w-28  cursor-pointer"
          src={companies4}
          alt="companies4"
        />
        <Image
          className="w-20 lg:w-28  cursor-pointer"
          src={companies5}
          alt="companies5"
        />
        <Image
          className="w-20 lg:w-28  cursor-pointer"
          src={companies6}
          alt="companies6"
        />
      </div>
    </div>
  );
};

export default Compaines;
