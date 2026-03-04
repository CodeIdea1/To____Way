import ExploreSection from "./sections/ExploreSection";
import HeroSection from "./sections/HeroSection";
import JourneySection from "./sections/JourneySection";
import MenuSection from "./sections/MenuSection";
import HoursSection from "./sections/HoursSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import Testimonials2Section from "./sections/Testimonials2Section";

export default function Home() {
  return (
    <div>
      <div id="home"><HeroSection/></div>
      <div id="explore"><ExploreSection/></div>
      <div id="journey"><JourneySection/></div>
      <div id="menu"><MenuSection/></div>
      <div id="hours"><HoursSection/></div>
      <div id="testimonials"><TestimonialsSection/></div>
      <div id="testimonials2"><Testimonials2Section/></div>
    </div>
  );
}
