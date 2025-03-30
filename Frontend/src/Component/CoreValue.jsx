import { FaUsers, FaLightbulb, FaShieldAlt, FaHandshake } from "react-icons/fa";

function CoreValue() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-100 to-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0D0D46]">Our Core Values</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto px-3">
          We are committed to upholding values that drive excellence and trust.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-9">
        
        {/* Value 1 */}
        <div className="flex items-center space-x-6">
          <FaUsers className="text-[#0D0D46] text-6xl" />
          <div>
            <h3 className="text-2xl font-semibold text-[#0D0D46]">Collaboration</h3>
            <p className="text-gray-700">
              We believe in teamwork and fostering strong partnerships with our clients.
            </p>
          </div>
        </div>

        {/* Value 2 */}
        <div className="flex items-center space-x-6">
          <FaLightbulb className="text-[#0D0D46] text-6xl" />
          <div>
            <h3 className="text-2xl font-semibold text-[#0D0D46]">Innovation</h3>
            <p className="text-gray-700">
              We continuously seek new and better ways to solve problems and drive progress.
            </p>
          </div>
        </div>

        {/* Value 3 */}
        <div className="flex items-center space-x-6">
          <FaShieldAlt className="text-[#0D0D46] text-6xl" />
          <div>
            <h3 className="text-2xl font-semibold text-[#0D0D46]">Accountability</h3>
            <p className="text-gray-700">
              We take ownership of our work and are committed to delivering tangible results.
            </p>
          </div>
        </div>

        {/* Value 4 */}
        <div className="flex items-center space-x-6">
          <FaHandshake className="text-[#0D0D46] text-6xl" />
          <div>
            <h3 className="text-2xl font-semibold text-[#0D0D46]">Integrity</h3>
            <p className="text-gray-700">
              We uphold the highest standards of ethics and professionalism in all our dealings.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CoreValue;
