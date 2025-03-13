import { NavLink } from "react-router-dom";

const Service = () => {
  const services = [
    {
      id: "bpm",
      title: "Business Process Management",
      subtitle: "Optimize & Automate Workflows",
      description: "Improve efficiency with our expert BPM solutions designed to streamline operations, reduce costs, and enhance productivity.",
      fullText: "Business Process Management (BPM) helps organizations enhance workflows through automation, reducing manual efforts and increasing efficiency.",
      imgSrc: "/bpm1.webp",
    },
    {
      id: "it-consulting",
      title: "IT Consultancy",
      subtitle: "Expert IT Solutions for Your Business",
      description: "Leverage cutting-edge IT strategies to grow your business with custom software solutions, cloud computing, and digital transformation.",
      fullText: "IT consultancy offers expert guidance on technology solutions that improve operations, security, and digital presence.",
      imgSrc: "/it2.png",
    },
    {
      id: "bi",
      title: "Business Intelligence (BI)",
      subtitle: "Data-Driven Insights for Smart Decisions",
      description: "Integrating data-driven insights to support better decision-making and performance management.",
      fullText: "Business Intelligence (BI) uses data analytics and visualization to provide actionable insights.",
      imgSrc: "/bi.webp",
    },
    {
      id: "management-consulting",
      title: "Management Consulting",
      subtitle: "Strategic Guidance for Sustainable Growth",
      description: "Actionable insights and strategic guidance to optimize decision-making and drive sustainable growth.",
      fullText: "Management consulting offers strategic advice to improve business performance.",
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <NavLink
              to={`/servicepage/${service.id}`} // Navigate to the specific service page
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
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
                <h3 className="text-xl font-semibold text-[#0D0D46] group-hover:text-blue-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{service.description}</p>

                {/* Button */}
                <div className="inline-block mt-4 px-6 py-2 text-white bg-[#0D0D46] font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-md">
                  Learn More
                </div>
              </div>

              {/* Decorative Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
