import { motion } from "framer-motion";

function HeroInfo() {
  return (
    <div className="relative w-full flex items-center justify-center px-4 md:px-6 lg:px-8 py-10 bg-gradient-to-b from-[#F8F9FA] to-[#EDEFF2]">
      {/* Container */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg bg-white rounded-xl overflow-hidden border border-gray-300">
        
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="/a2.jpg" // Replace with actual image path
            alt="Innovation & Technology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-12 py-6 md:py-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D0D46] mb-3 sm:mb-4 uppercase leading-tight">
            Innovation <span className="text-gray-700">&</span> Technology
          </h1>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            At <span className="font-semibold text-[#000000]">Thanosphere Solutions</span>, we integrate strategy, processes, and technology to deliver real results. Unlike traditional consulting firms, <strong>we don’t just advise</strong>—we implement and execute.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-3">
            Our tailored software solutions ensure smooth workflows, market adaptability, and sustainable growth.
          </p>

          {/* Logo Section */}
          <div className="flex flex-col items-center mt-6">
            <img src="/logo.png" alt="Thanosphere Solutions Logo" className="h-10 sm:h-12" />
            <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide mt-2">
              Design • Optimize • Transform
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroInfo;
