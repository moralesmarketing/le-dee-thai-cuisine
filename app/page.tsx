import Hero from "@/components/Hero";
import MeaningSection from "@/components/MeaningSection";
import AmbianceSection from "@/components/AmbianceSection";
import Story from "@/components/Story";
import OrderBanner from "@/components/OrderBanner";
import FanFavorites from "@/components/FanFavorites";
import LunchSpecial from "@/components/LunchSpecial";
import ThaiTeaSection from "@/components/ThaiTeaSection";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <MeaningSection />
      <AmbianceSection />
      <Story />
      <OrderBanner />
      <FanFavorites />
      <LunchSpecial />
      <ThaiTeaSection />
      <Testimonials />
      <LocationSection />
      <FAQAccordion />
    </>
  );
}
