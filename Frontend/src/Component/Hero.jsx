import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#ffffff] to-[#D3D3D3] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden py-12">
      {/* Background Elements */}
      <div className="absolute top-16 left-6 sm:left-12 w-24 sm:w-32 h-24 sm:h-32 bg-[#D3D3D3] rounded-full opacity-20 blur-lg"></div>
      <div className="absolute bottom-16 right-6 sm:right-12 w-32 sm:w-40 h-32 sm:h-40 bg-[#808080] rounded-full opacity-30 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-white opacity-5 rounded-full blur-[120px]"></div>

      {/* Hero Content */}
      <div className="relative flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto gap-8 sm:gap-12">
        {/* Left Side - Text */}
        <div className="text-center lg:text-left max-w-xl sm:max-w-2xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-snug sm:leading-tight">
            Let’s Thanosphere Solutions Empowering SMEs to Achieve
            <span className="text-blue-600"> Operational Excellence</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-4 sm:mt-6 leading-relaxed px-2 sm:px-0">
            Thanosphere Solutions empowers SMEs with expert management consulting, IT advisory, and custom software solutions, helping them design, optimize, and transform operations for sustainable success.
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <NavLink
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-9 lg:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Let's Talk
            </NavLink>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6 text-gray-800 text-sm sm:text-lg font-semibold">
            <div className="text-center">
              <span className="text-2xl sm:text-3xl text-black font-extrabold">15+</span>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <span className="text-2xl sm:text-3xl text-black font-extrabold">26K</span>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <span className="text-2xl sm:text-3xl text-black font-extrabold">98%</span>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Floating Labels */}
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <img
            src="/man.webp"
            alt="Professional"
            className="w-full h-auto rounded-lg shadow-xl"
          />

          {/* Floating Service Labels */}
          <div className="absolute top-8 right-[-5px] sm:right-[-20px] bg-white shadow-lg flex items-center px-3 py-2 rounded-full text-xs sm:text-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <p className="text-black">Management Consulting</p>
          </div>

          <div className="absolute top-1/2 left-[-5px] sm:left-[-20px] bg-white shadow-lg flex items-center px-3 py-2 rounded-full text-xs sm:text-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <p className="text-black">IT Consulting</p>
          </div>

          <div className="absolute bottom-8 right-[-5px] sm:right-[-20px] bg-white shadow-lg flex items-center px-3 py-2 rounded-full text-xs sm:text-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <p className="text-black">Business Process Management</p>
          </div>

          <div className="absolute bottom-1/2 right-[-5px] sm:right-[-20px] bg-white shadow-lg flex items-center px-4 py-2 rounded-full text-xs sm:text-sm max-w-[90%] sm:max-w-none whitespace-nowrap">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <p className="text-black">Business Intelligence</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;