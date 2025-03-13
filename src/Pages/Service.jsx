import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/Data/services.json") // Fetching JSON from the public folder
      .then((response) => response.json())
      .then((data) => setServices(data.slice(0, 4))) // Limiting to 4 services
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white text-black py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D0D46] mb-10">
          What We Offer
        </h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service) => (
    <div
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
        <NavLink
          to="/servicepage"
          className="inline-block mt-4 px-6 py-2 text-white bg-[#0D0D46] font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
        >
          Learn More
        </NavLink>
      </div>
     

      {/* Decorative Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-10 group-hover:opacity-20 transition-opacity"></div>
    </div>
  ))}
</div>



      </div>
    </div>
  );
};

export default Service;
