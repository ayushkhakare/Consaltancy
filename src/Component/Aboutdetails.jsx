import { NavLink } from "react-router-dom";
import Team from "./Team";
import Challenge from "./Challenge";
import Aboutservices from "../Pages/Aboutservice";

function Aboutdetails() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 md:px-8 lg:px-16">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto">
        {/* About Content */}
        <div className="text-center w-full px-2 md:px-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-black">Thanosphere Solutions Pvt. Ltd.</span>, we empower businesses to achieve 
            sustainable growth through <strong>strategic consulting and technology-driven solutions</strong>.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            Unlike traditional consulting firms, we don’t just advise—we implement. Our <strong>data-driven, agile approach</strong> blends business 
            strategy, process optimization, and cutting-edge technology to drive success.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            From <strong>workflow automation</strong> to <strong>custom software development</strong>, we provide solutions that enhance efficiency and deliver 
            measurable results.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D46]">
            Empowering Growth, Enhancing Performance.
          </h2>
        </div>

        {/* Additional Description */}
        <div className="mt-8 text-center">
          <p className="text-base md:text-lg text-[#808080] max-w-4xl mx-auto leading-relaxed">
            Thanosphere Solutions Pvt. Ltd. is a forward-thinking company dedicated to revolutionizing the business landscape with advanced <strong>Management Consulting</strong> solutions, <strong>custom software development</strong>, and <strong>business process optimization</strong>.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <Team />
        </div>

        {/* Services Section */}
        <div className="mt-12 text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#0D0D46] to-[#4B4B9E] text-transparent bg-clip-text">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              "Business Process Management (BPM)",
              "Management Consulting",
              "IT Consulting",
              "Business Intelligence (BI)",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <p className="text-lg font-semibold text-gray-700">🔹 {service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mt-12">
          <Challenge />
        </div>

        {/* About Services Section */}
        <div className="mt-12">
          <Aboutservices />
        </div>
      </div>
    </div>
  );
}

export default Aboutdetails;