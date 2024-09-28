import Image from "next/image";
import cplus from "../../assets/Images/c-programming-language-large-lettering-260nw-1770351188.webp";
import { FaSellsy, FaStar } from "react-icons/fa";
import { GiRockingChair } from "react-icons/gi";

const Card = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mx-12 -ml-4">
        <div className="w-80 h-12/12 mx-20 my-28 m-0 bg-light rounded-xl pb-4">
          <div className="flex flex-col items-center justify-center gap-3 border-l-amber-300 border-4 border-secondary rounded-br-3xl rounded-tl-3xl m-0">
            <h1 className="text-2xl text-center text-secondary font-bold mt-2">
              C ++
            </h1>
            <p className="text-dark2 text-center mx-8">
              This Web Contest Solve 3 Problems You Can Win 10000 Thousand
            </p>
            <Image
              src={cplus}
              alt="card image one"
              className="w-9/12 mx-auto rounded-xl rounded-bs-2xl rounded-br-2xl"
            />
          </div>
          <div className="flex items-center justify-between m-0 gap-6 mx-8 h-4 bg-light mt-3">
            <h3 className="text-2xl font-extrabold">$20</h3>
            <div className="flex items-center justify-center">
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-400" />
            </div>
          </div>
          <div className="flex items-center justify-between mx-8 mt-2">
            <div className="flex items-center gap-2 font-bold">
              <FaSellsy /> <span className="">2K</span>{" "}
            </div>
            <div className="flex items-center gap-2 font-bold">
                <h1 className="flex items-center gap-2 font-bold">Ava</h1>
              <GiRockingChair className="font-extrabold text-3xl" />
            </div>
          </div>
          <div className="bg-primary w-full mx-auto text-center rounded-xl py-3 mt-6 cursor-pointer">
            <button className="text-xl font-bold">BUY NOW</button>
          </div>
        </div>
        <div className="w-80 h-12/12 mx-20 my-28 bg-light rounded-xl pb-4">
          <div className="flex flex-col items-center justify-center gap-3 border-l-lime-400 border-4 border-secondary rounded-br-3xl rounded-tl-3xl">
            <h1 className="text-2xl text-center text-secondary font-bold mt-2">
              C ++
            </h1>
            <p className="text-dark2 text-center mx-8">
              This Web Contest Solve 3 Problems You Can Win 10000 Thousand
            </p>
            <Image
              src={cplus}
              alt="card image one"
              className="w-9/12 mx-auto rounded-xl rounded-bs-2xl rounded-br-2xl"
            />
          </div>
          <div className="flex items-center justify-between gap-6 mx-8 h-4 bg-light mt-3">
            <h3 className="text-2xl font-extrabold">$20</h3>
            <div className="flex items-center justify-center">
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-400" />
            </div>
          </div>
          <div className="flex items-center justify-between mx-8 mt-2">
            <div className="flex items-center gap-2 font-bold">
              <FaSellsy /> <span className="">2K</span>{" "}
            </div>
            <div className="flex items-center gap-2 font-bold">
                <h1 className="flex items-center gap-2 font-bold">Ava</h1>
              <GiRockingChair className="font-extrabold text-3xl" />
            </div>
          </div>
          <div className="bg-primary w-full mx-auto text-center rounded-xl py-3 mt-6 cursor-pointer">
            <button className="text-xl font-bold">BUY NOW</button>
          </div>
        </div>
        <div className="w-80 h-12/12 mx-20 my-28 bg-light rounded-xl pb-4">
          <div className="flex flex-col items-center justify-center gap-3 border-l-amber-300 border-4 border-secondary rounded-br-3xl rounded-tl-3xl">
            <h1 className="text-2xl text-center text-secondary font-bold mt-2">
              C ++
            </h1>
            <p className="text-dark2 text-center mx-8">
              This Web Contest Solve 3 Problems You Can Win 10000 Thousand
            </p>
            <Image
              src={cplus}
              alt="card image one"
              className="w-9/12 mx-auto rounded-xl rounded-bs-2xl rounded-br-2xl"
            />
          </div>
          <div className="flex items-center justify-between gap-6 mx-8 h-4 bg-light mt-3">
            <h3 className="text-2xl font-extrabold">$20</h3>
            <div className="flex items-center justify-center">
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-400" />
            </div>
          </div>
          <div className="flex items-center justify-between mx-8 mt-2">
            <div className="flex items-center gap-2 font-bold">
              <FaSellsy /> <span className="">2K</span>{" "}
            </div>
            <div className="flex items-center gap-2 font-bold">
                <h1 className="flex items-center gap-2 font-bold">Ava</h1>
              <GiRockingChair className="font-extrabold text-3xl" />
            </div>
          </div>
          <div className="bg-primary w-full mx-auto text-center rounded-xl py-3 mt-6 cursor-pointer">
            <button className="text-xl font-bold">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
