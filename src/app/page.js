import Banner from "@/components/banner/Banner";
import Banner2 from "@/components/banner/Banner2";
import HeroSection from "@/components/heroSection/HeroSection";
import Compaines from "@/components/compaines/Compaines";
import Subscribe from "@/components/subscribe/Subscribe";


export default function Home() {
  return (
    <main>
      <div className="">
        <HeroSection/>
        <Compaines/>
        <Banner/>
        <Subscribe/>
        <Banner2/>
      </div>
    </main>
  );
}
