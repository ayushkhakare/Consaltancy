import { Link } from "react-router-dom";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Hero from "./Component/Hero";
import CoreValue from "./Component/CoreValue";
import HeroInfo from "./Component/HeroInfo";







function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
        <Hero></Hero> 
        <Service />
        <HeroInfo></HeroInfo>
        <CoreValue></CoreValue>

    </div>
  );
}

export default Home;
