import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";

const Home = () => {
  return (
    <div className="pt-24"> {/* ✅ prevents navbar overlap */}
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;