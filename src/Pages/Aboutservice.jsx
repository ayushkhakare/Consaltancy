function Aboutservice() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-center">
      {/* Services Section */}
      {/* <h2 className="text-5xl font-bold bg-gradient-to-r from-[#0D0D46] to-[#4B4B9E] text-transparent bg-clip-text mb-8">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div> */}

      {/* Why Choose Us Section */}
      <div className="mt-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-[#0D0D46] to-[#4B4B9E] text-transparent bg-clip-text mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Unlike traditional firms, we don’t just advise—we{" "}
          <span className="font-semibold text-[#0D0D46]">
            build, optimize, and implement real-world solutions
          </span>{" "}
          that make a measurable impact.
        </p>
      </div>
    </div>
  );
}

export default Aboutservice;
