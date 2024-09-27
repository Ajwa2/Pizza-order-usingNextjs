import Fasting from "./components/Fasting";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PopularPizzas from "./components/PopularPizzas";
import Slider from "./components/Slider";
import TopRestaurants from "./components/TopRestaurants";

export default function Home() {
  return (
    <main>
      <Hero />
      <Slider/>
      <TopRestaurants/>
      <PopularPizzas/> 
      <Fasting/>
      <Footer/>
    </main>
  );
}
