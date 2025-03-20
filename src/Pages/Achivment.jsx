function Achivment() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      {/* Company Information Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D0D46]">Achievements</h2>
        <div className="w-24 h-1 bg-[#0D0D46] mx-auto mt-2 mb-4 rounded"></div>
        <p className="text-gray-700 font-medium">
          Have questions or need assistance? Get in touch with us today and take a step toward success!
        </p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Image Section */}
        <div className="flex justify-center">
          <img
            src="/a1.webp"
            alt="Business Growth"
            className="w-full max-w-sm sm:max-w-md md:max-w-full md:h-[80%] md:mt-20 h-auto rounded-sm shadow-2xl"
          />
        </div>

        {/* Right Side - Content Section */}
        <div className="flex flex-col justify-center px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-6">Our Achievements</h2>

          {/* Statistics Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-6">
            {/* 15+ Years of Excellence */}
            <div>
              <p className="text-5xl sm:text-6xl font-bold text-[#0D0D46]">15+</p>
              <p className="text-lg sm:text-xl font-semibold text-[#0D0D46] mt-2 sm:mt-4">Years of Excellence</p>
              <p className="text-gray-600 text-base sm:text-lg">
                Delivering transformative solutions across manufacturing, retail, and technology sectors.
              </p>
            </div>

            {/* 98% Client Satisfaction Rate */}
            <div>
              <p className="text-5xl sm:text-6xl font-bold text-[#0D0D46]">98%</p>
              <p className="text-lg sm:text-xl font-semibold text-[#0D0D46] mt-2 sm:mt-4">Client Satisfaction Rate</p>
              <p className="text-gray-600 text-base sm:text-lg">
                Consistently exceeding expectations with measurable, sustainable results.
              </p>
            </div>
          </div>

          {/* 200+ Business Transformations - Center Aligned */}
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-5xl sm:text-6xl font-bold text-[#0D0D46]">200+</p>
            <p className="text-lg sm:text-xl font-semibold text-[#0D0D46] mt-2 sm:mt-4">Business Transformations</p>
            <p className="text-gray-600 text-base sm:text-lg">
              Helping SMEs achieve breakthrough performance and sustainable growth.
            </p>
          </div>

          {/* Call to Action */}
          <p className="text-center text-base sm:text-lg text-gray-700 mt-6">
            Transform your business potential into measurable success.{' '}
            <a href="#" className="text-blue-600 font-semibold underline">
              Schedule your complimentary consultation
            </a>{' '} today and discover how our expertise can drive your operational excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Achivment;
