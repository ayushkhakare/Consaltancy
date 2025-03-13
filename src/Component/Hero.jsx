import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#ffffff] to-[#D3D3D3] flex items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-16 left-12 w-32 h-32 bg-[#D3D3D3] rounded-full opacity-20 blur-lg"></div>
      <div className="absolute bottom-16 right-12 w-40 h-40 bg-[#808080] rounded-full opacity-30 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[120px]"></div>

      {/* Hero Content */}
      <div className="relative flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto gap-12 mt-7">
        {/* Left Side - Text */}
        <div className="text-center lg:text-left max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-snug sm:leading-tight text-center sm:text-left">
  Let’s Thanosphere Solutions Empowering SMEs to Achieve 
  <span className="text-blue-600"> Operational Excellence</span>
</h1>

          <p className="text-lg text-gray-700 mt-6 leading-relaxed">
            Thanosphere Solutions empowers SMEs with expert management consulting, IT advisory, and custom software solutions, helping them design, optimize, and transform operations for sustainable success.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Let's Talk
            </NavLink>
          </div>

          {/* Stats Section */}
          <div className="flex gap-10 mt-8 text-gray-800 text-lg font-semibold mb-6">
            <div className="text-center">
              <span className="text-3xl text-black font-extrabold">15+</span>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <span className="text-3xl text-black font-extrabold">26K</span>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <span className="text-3xl text-black font-extrabold">98%</span>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Floating Labels */}
        <div className="relative w-full max-w-md lg:max-w-lg">
          <img
            src="/man.webp"
            alt="Professional"
            className="w-full h-auto rounded-lg shadow-xl"
          />

          {/* Floating Service Labels */}
         {/* Floating Service Labels */}
<div className="absolute top-10 right-[-10px] sm:right-[-30px] bg-white shadow-lg flex items-center px-4 py-2 rounded-full text-xs sm:text-sm">
  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
  <p className="text-black">Management Consulting</p>
</div>

<div className="absolute top-1/2 left-[-10px] sm:left-[-40px] bg-white shadow-lg flex items-center px-4 py-2 rounded-full text-xs sm:text-sm">
  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
  <p className="text-black">IT Consulting</p>
</div>

<div className="absolute bottom-10 right-[-10px] sm:right-[-30px] bg-white shadow-lg flex items-center px-4 py-2 rounded-full text-xs sm:text-sm">
  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
  <p className="text-black">Business Process Management (BPM)</p>
</div>

<div className="absolute bottom-1/2 right-0 sm:right-[-40px] bg-white shadow-lg flex items-center px-5 py-2 rounded-full text-xs sm:text-sm max-w-[90%] sm:max-w-none whitespace-nowrap">
  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
  <p className="text-black">Business Intelligence (BI)</p>
</div>


        </div>
      </div>
    </div>
  );
}

export default Hero;
