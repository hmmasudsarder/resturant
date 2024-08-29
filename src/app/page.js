import Banner from "@/components/banner/Banner";
import Banner2 from "@/components/banner/Banner2";
import HeroSection from "@/components/heroSection/HeroSection";
import Compaines from "@/components/navbar/compaines/Compaines";
import Logost from "@/components/navbar/compaines/Logost";
import Subscribe from "@/components/subscribe/Subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
        <HeroSection/>
        <Compaines/>
        <Logost/>
        <Banner/>
        <Subscribe/>
        <Banner2/>
      </div>
    </main>
  );
}
