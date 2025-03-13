import { NavLink } from "react-router-dom";
import Team from "./Team";
import Challenge from "./Challenge";
import Aboutservices from "../Pages/Aboutservice";

function Aboutdetails() {
  return (
    <div className="bg-white min-h-screen py-8 px-4 md:px-12">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto text-center">
        {/* About Content */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-full">
          At <span className="font-semibold text-black">Thanosphere Solutions Pvt. Ltd.</span>, we empower businesses with <strong>strategic consulting</strong> and <strong>technology-driven solutions</strong>. Unlike traditional firms, we don’t just advise—we implement. Our <strong>data-driven, agile approach</strong> blends business strategy, process optimization, and technology to drive success. From <strong>workflow automation</strong> to <strong>custom software development</strong>, we create solutions that enhance efficiency and deliver measurable results.
        </p>

        {/* CTA Section */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D46] mt-6">
          Empowering Growth, Enhancing Performance.
        </h2>

        {/* Services Section */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0D0D46] to-[#4B4B9E] text-transparent bg-clip-text mt-10">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-9 w-full">
  {[
    "Business Process Management (BPM)",
    "Management Consulting",
    "IT Consulting",
    "Business Intelligence (BI)",
  ].map((service, index) => (
    <div
      key={index}
      className="bg-white p-4 rounded-md shadow border border-gray-300 hover:shadow-lg transition-all duration-300 text-center"
    >
      <p className="text-base font-medium text-gray-800">🔹 {service}</p>
    </div>
  ))}
</div>


        {/* Sections */}
        <div className="mt-10">
          <Team />
          <Challenge />
          <Aboutservices />
        </div>
      </div>
    </div>
  );
}

export default Aboutdetails;
