import { NavLink } from "react-router-dom";

const Service = () => {
  const services = [
    {
      id: "bpm",
      title: "Business Process Management",
      subtitle: "Optimize & Automate Workflows",
      description:
        "Improve efficiency with our expert BPM solutions designed to streamline operations, reduce costs, and enhance productivity.",
      imgSrc: "/bpm1.webp",
    },
    {
      id: "it-consulting",
      title: "IT Consultancy",
      subtitle: "Expert IT Solutions for Your Business",
      description:
        "Leverage cutting-edge IT strategies to grow your business with custom software solutions, cloud computing, and digital transformation.",
      imgSrc: "/it2.png",
    },
    {
      id: "bi",
      title: "Business Intelligence (BI)",
      subtitle: "Data-Driven Insights for Smart Decisions",
      description:
        "Integrating data-driven insights to support better decision-making and performance management.",
      imgSrc: "/bi.webp",
    },
    {
      id: "management-consulting",
      title: "Management Consulting",
      subtitle: "Strategic Guidance for Sustainable Growth",
      description:
        "Actionable insights and strategic guidance to optimize decision-making and drive sustainable growth.",
      imgSrc: "/manage.webp",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white text-black py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D0D46] mb-10">
          What We Offer
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <NavLink
              to={`/servicepage/${service.id}`}
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-t-2xl group-hover:opacity-90 transition-opacity"
                />
              </div>

              {/* Text Section */}
              <div className="p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-[#0D0D46] group-hover:text-blue-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{service.description}</p>

                {/* Button */}
                <div className="inline-block mt-4 px-6 py-2 text-white bg-[#0D0D46] font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-md">
                  Learn More
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* How We Service - Responsive Layout */}
      <div className="flex flex-col items-center w-full py-10 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">How We Service</h2>

        <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-4 md:px-0">
          {/* Horizontal Line for Large Screens */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-300 mx-4" />

          {[
            { number: "1", title: "Consult", desc: "Schedule a consultation to discuss your unique business challenges." },
            { number: "2", title: "Discover", desc: "We’ll work closely with you to understand your pain points and opportunities." },
            { number: "3", title: "Design", desc: "Our experts will craft a tailored strategy to drive your transformation." },
            { number: "4", title: "Implement", desc: "We’ll support you every step of the way, ensuring successful execution." },
            { number: "5", title: "Achieve", desc: "Unlock sustainable growth, operational excellence, and long-term success." },
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-5 w-full md:w-1/5 mb-6 md:mb-0"
            >
              {/* Step Number */}
              <div className="w-12 h-12 bg-[#0D0D46] text-white rounded-full flex items-center justify-center font-bold relative z-10">
                {step.number}
              </div>
              {/* Step Title & Description */}
              <h3 className="text-lg md:text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
