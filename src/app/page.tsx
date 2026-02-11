import BookMeeting from "@/components/BookMeeting";
import CTA from "@/components/CTA";
import EliteSpaces from "@/components/EliteSpaces";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Membership from "@/components/Packages";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-my-white">
      <Hero />
      <Packages />
      <EliteSpaces />
      <Process />
      <Testimonials />
      <CTA />
      <Membership />
      <BookMeeting />
      <Footer />
    </div>
  );
}
