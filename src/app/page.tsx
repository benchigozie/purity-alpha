import BookMeeting from "@/components/BookMeeting";
import CTA from "@/components/CTA";
import EliteSpaces from "@/components/EliteSpaces";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <div className="bg-my-white">
      <Hero />
      <Offer />
      <EliteSpaces />
      <Process />
      <Testimonials />
      <CTA />
      <Packages />
      <BookMeeting />
      <Footer />
    </div>
  );
}
