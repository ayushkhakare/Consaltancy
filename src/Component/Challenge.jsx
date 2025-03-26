import { motion } from "framer-motion";

function Challenge() {
  return (
    <div className="space-y-16 mt-7">
       
      {/* Challenge Section */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/cha.jpg"
          alt="Challenge"
          className="rounded-lg shadow-lg w-full object-cover"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">
            The Challenge
          </h3>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Many SMEs struggle with a lack of structure, reactive
            decision-making, and inefficient operations that hinder their growth
            potential. Without streamlined workflows and strategic planning,
            businesses often face challenges in resource allocation, customer
            retention, and market competitiveness. Limited access to advanced
            technology and data-driven insights further exacerbates
            inefficiencies, making it difficult to adapt to changing market
            demands. These obstacles not only slow down progress but also
            prevent SMEs from scaling effectively and achieving long-term
            sustainability.{" "}
          </p>
        </motion.div>
      </div>

      {/* Solution Section */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">Our Solution</h3>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Thanosphere delivers tailored, data-driven frameworks to streamline
            operations, integrate business intelligence, and enable agile,
            scalable transformations. Our solutions leverage advanced analytics,
            automation, and AI-driven insights to enhance decision-making,
            optimize workflows, and drive sustainable growth. By providing SMEs
            with innovative tools and methodologies, we empower businesses to
            improve efficiency, reduce operational bottlenecks, and stay ahead
            in a competitive landscape."{" "}
          </p>
        </motion.div>

        <motion.img
          src="/soluction.jpg"
          alt="Solution"
          className="rounded-lg shadow-lg w-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Vision Section */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/vison.jpeg"
          alt="Vision"
          className="rounded-lg shadow-lg w-full object-cover"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">Our Vision</h3>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our vision is to become the leading force in digital transformation,
            empowering SMEs with cutting-edge solutions that drive sustainable
            growth and innovation. By harnessing emerging technologies,
            fostering a culture of continuous improvement, and delivering
            strategic insights, we aim to revolutionize business operations. Our
            goal is to equip SMEs with the tools they need to thrive in an
            ever-evolving digital landscape, ensuring long-term success and
            global competitiveness{" "}
          </p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our mission is to revolutionize business strategies by implementing
            data-driven frameworks, fostering agility, and optimizing efficiency
            for SMEs worldwide. Through the integration of cutting-edge
            technologies, automation, and predictive analytics, we empower
            businesses to make informed decisions, streamline operations, and
            enhance overall productivity. By prioritizing adaptability and
            innovation, we help SMEs navigate challenges, seize new
            opportunities, and achieve sustainable growth in an increasingly
            dynamic market{" "}
          </p>
        </motion.div>

        <motion.img
          src="/mision.avif"
          alt="Mission"
          className="rounded-lg shadow-lg w-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

     

    </div>
  );
}

export default Challenge;
