import {
  FaBusinessTime,
  FaLaptopCode,
  FaProjectDiagram,
  FaChartBar,
} from "react-icons/fa";

function CoreService() {
  return (
    <div className="mb-12 relative bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      {/* Top Full-Width Image */}
      
      {/* Services Section */}
      <div className="container mx-auto px-6 mt-5 text-center">
        <h2 className="text-4xl font-bold text-[#0D0D46] mb-12">
          Explore Our Expertise
        </h2>

        {/* Horizontal Services List */}
        <div className="flex flex-wrap justify-center gap-12">
          {/* Service 1 */}
          <div className="flex flex-col items-center text-center space-y-3 w-60">
            <FaBusinessTime className="text-[#0D0D46] text-6xl mb-3" />
            <h3 className="text-2xl font-semibold text-[#0D0D46]">
              Management Consulting
            </h3>
            <p className="text-gray-600 text-base">
              Actionable insights and strategic guidance to optimize
              decision-making and drive sustainable growth.{" "}
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center text-center space-y-3 w-60">
            <FaLaptopCode className="text-[#0D0D46] text-6xl mb-3" />
            <h3 className="text-2xl font-semibold text-[#0D0D46]">
              IT Consulting
            </h3>
            <p className="text-gray-600 text-base">
              Leveraging technology to enhance operational efficiency and unlock
              new business opportunities.{" "}
            </p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center text-center space-y-3 w-60">
            <FaProjectDiagram className="text-[#0D0D46] text-6xl mb-3" />
            <h3 className="text-2xl font-semibold text-[#0D0D46]">
              Business Process Management
            </h3>
            <p className="text-gray-600 text-base">
              Streamlining workflows, improving productivity, and fostering a
              culture of continuous improvement.{" "}
            </p>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col items-center text-center space-y-3 w-60">
            <FaChartBar className="text-[#0D0D46] text-6xl" />
            <h3 className="text-2xl font-semibold text-[#0D0D46]">
              Business Intelligence
            </h3>
            <p className="text-gray-600 text-base">
              Integrating data-driven insights to support better decision-making
              and performance management.{" "}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CoreService;
