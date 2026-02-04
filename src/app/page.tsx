import AlphaCircle from "@/components/AlphaCircle";
import CTA from "@/components/CTA";
import EliteSpaces from "@/components/EliteSpaces";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Offer from "@/components/Offer";
import Protocol from "@/components/Protocol";

export default function Home() {
  return (
   <div className="bg-my-white">
      <Hero />
      <Offer />
      <EliteSpaces/>
      <Protocol />
      <AlphaCircle />
      <CTA />
      <Membership />
      <Footer />
   </div>
  );
}
