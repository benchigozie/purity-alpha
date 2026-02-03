import AlphaCircle from "@/components/AlphaCircle";
import CTA from "@/components/CTA";
import EliteSpaces from "@/components/EliteSpaces";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Protocol from "@/components/Protocol";

export default function Home() {
  return (
   <div>
      <Hero />
      <Offer />
      <EliteSpaces/>
      <Protocol />
      <AlphaCircle />
      <CTA />
   </div>
  );
}
