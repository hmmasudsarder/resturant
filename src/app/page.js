import Banner from "@/components/banner/Banner";
import Banner2 from "@/components/banner/Banner2";
import HeroSection from "@/components/heroSection/HeroSection";
import Subscribe from "@/components/subscribe/Subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
        <HeroSection/>
        <Banner/>
        <Subscribe/>
        <Banner2/>
      </div>
    </main>
  );
}
