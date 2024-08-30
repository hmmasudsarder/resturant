import Image from "next/image";
import companies from "../../assets/Images/amazon.png";
import companies2 from "../../assets/Images/drillle.png";
import companies3 from "../../assets/Images/hubspot.png";
import companies4 from "../../assets/Images/notion.png";
import companies5 from "../../assets/Images/netflix.png";
import companies6 from "../../assets/Images/zoom.png";
const Compaines = () => {
  return (
    <div className="mx-20 my-16 md:my-12 py-7 lg:py-14 gap-5 grid grid-cols-3 md:grid-cols-6 border border-secondary rounded-xl">
      <div className="w-full mx-[490px] flex justify-center items-center gap-20">
       
        <Image
          className="w-24 lg:w-28 mt-4 cursor-pointer opacity-80 hover:opacity-100 duration-300 transition-opacity"
          src={companies}
          alt="companies2"
        />
        <Image
          className="w-20 lg:w-28  cursor-pointer opacity-80 hover:opacity-100 duration-300 transition-opacity"
          src={companies2}
          alt="companies2"
        />
        <Image
          className="w-20 lg:w-28  cursor-pointer opacity-80 hover:opacity-100 duration-300 transition-opacity"
          src={companies3}
          alt="companies3"
        />
        <Image
          className="w-20 lg:w-28  cursor-pointer opacity-80 hover:opacity-100 duration-300 transition-opacity"
          src={companies4}
          alt="companies4"
        />
        <Image
          className="w-20 lg:w-28  cursor-pointer opacity-80 hover:opacity-100 duration-300 transition-opacity"
          src={companies5}
          alt="companies5"
        />
        <Image
          className="w-20 lg:w-28  cursor-pointer opacity-80 hover:opacity-100 duration-300 transition-opacity"
          src={companies6}
          alt="companies6"
        />
      </div>
    </div>
  );
};

export default Compaines;
