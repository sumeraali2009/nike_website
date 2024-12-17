import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/productSection";
import FeaturedSection from "@/components/FeaturedSection";
import GearUp from "@/components/GearUp";
import FlightEssentials from '@/components/FlightEssentials';
import Essentials from "@/components/Essentials";


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Product Section */}
      <div className="px-[48px]">
        <ProductSection />
        <FeaturedSection />
        <GearUp />
        <FlightEssentials/>
        <Essentials/>


      </div>
    </div>
  );
}
