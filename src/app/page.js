import Banner from "@/components/banner/Banner";
import Banner2 from "@/components/banner/Banner2";
import HeroSection from "@/components/heroSection/HeroSection";
import Compaines from "@/components/compaines/Compaines";
import Subscribe from "@/components/subscribe/Subscribe";
import Card from "@/components/card/Card";


export default function Home() {
  return (
    <main>
      <div className="">
        <HeroSection/>
        <Compaines/>
        <Card/>
        <Banner/>
        <Subscribe/>
        <Banner2/>
      </div>
    </main>
  );
}
