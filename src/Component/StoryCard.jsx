import React from "react";

const StoryCard = () => {
  const stories = [
    {
      client: "Videohms Agencies",
      metric: "25% Productivity Boost",
      description:
        "Thanosphere helped us streamline our operations, integrate business intelligence, and transform our decision-making process. As a result, we’ve seen dramatic improvements in our operational efficiency.",
      image: "/story1.jpg", // Replace with actual image path
    },
    {
      client: "Electrodada",
      metric: "40% Revenue Growth",
      description:
        "The Thanosphere team’s expertise in management consulting and custom software development has been invaluable. They’ve helped us optimize our workflows and develop a cutting-edge platform that has given us a competitive edge in the market.",
      image: "/story2.jpg", // Replace with actual image path
    },
    {
      client: "Trezure",
      metric: "Sustainable Growth",
      description:
        "Thanosphere’s holistic approach to business process management and IT consulting has been transformative for our organization. We’ve increased efficiency, improved decision-making, and achieved sustainable growth.",
      image: "/story3.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center bg-white w-full py-12">
      {/* Section Title */}
      <div className="w-full text-center mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
          Our Customer
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-700 mt-2">
          <span className="text-gray-800">SUCCESS</span> STORIES
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mt-4 max-w-2xl mx-auto">
          Don’t Take Our Word For It, Hear What Our Customers Have To Say
        </p>
      </div>

      {/* Story Cards */}
      <div className="w-full max-w-8xl px-4 md:px-8 space-y-12">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden`}
          >
            {/* Image */}
            <div className="md:w-1/2 h-96 overflow-hidden">
              <img
                src={story.image}
                alt={story.client}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              {/* Client Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {story.client}
              </h3>

              {/* Metric */}
              <p className="text-gray-700 text-lg font-semibold mb-4">
                {story.metric}
              </p>

              {/* Description */}
              <p className="text-gray-600 mb-6">{story.description}</p>

              {/* Optional: Add a Call-to-Action Button */}
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 self-start">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryCard;