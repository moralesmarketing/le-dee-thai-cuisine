import Hero from "@/components/Hero";
import MeaningSection from "@/components/MeaningSection";
import LunchSpecial from "@/components/LunchSpecial";
import FanFavorites from "@/components/FanFavorites";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <MeaningSection />
      <LunchSpecial />
      <FanFavorites />
      <Story />
      <Testimonials />
      <LocationSection />
      <FAQAccordion />
    </>
  );
}
