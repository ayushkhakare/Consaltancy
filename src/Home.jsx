import { Link } from "react-router-dom";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Hero from "./Component/Hero";
import CoreValue from "./Component/CoreValue";
import CoreService from "./Component/CoreService";
import HeroInfo from "./Component/HeroInfo";
import StoryCard from "./Component/StoryCard";
import Achivment from "./Pages/Achivment";






function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
        <Hero></Hero> 
        <Service />
        <HeroInfo></HeroInfo>
        <CoreService/>
        <CoreValue></CoreValue>
        <StoryCard/>
        <Achivment/>
       
            

      
    </div>
  );
}

export default Home;
