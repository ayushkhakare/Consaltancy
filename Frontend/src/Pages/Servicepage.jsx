import { useParams, Link } from "react-router-dom";

const services = [
  {
    id: "bpm",
    title: "Business Process Management",
    fullText: `At Thanosphere Solutions Pvt. Ltd., we redefine Business Process Management (BPM) by combining strategy, technology, and process optimization to drive sustainable growth and operational excellence.

Our BPM Approach:
1. **Process Assessment & Strategy** – We analyze existing workflows, identify bottlenecks, and develop strategic roadmaps for process enhancement.
2. **Process Optimization & Automation** – Leveraging cutting-edge technologies, we implement automation and workflow enhancements.
3. **Performance Monitoring & Continuous Improvement** – We establish KPIs and feedback loops to ensure ongoing process refinement.
4. **Technology Integration** – Aligning BPM solutions with AI, analytics, and enterprise applications.

With Thanosphere Solutions, businesses gain a scalable, resilient, and future-ready operational model, unlocking greater efficiency, innovation, and long-term success.`,
    imgSrc: "/bpm1.webp",
  },
  {
    id: "it-consulting",
    title: "IT Consultancy",
    fullText: `At Thanosphere Solutions Pvt. Ltd. we empower businesses with cutting-edge IT consulting services that drive efficiency, scalability, and digital transformation.

Our IT consulting services include:
- **Technology Strategy & Advisory** – Aligning IT infrastructure with business goals.
- **IT Process Optimization** – Enhancing workflows, automation, and efficiency.
- **Digital Transformation** – Implementing cloud, AI, and automation-driven solutions.
- **Business Intelligence & Data Analytics** – Leveraging data for smarter decision-making.
- **Cybersecurity & Compliance** – Ensuring robust security frameworks.
- **IT Infrastructure & Cloud Solutions** – Optimizing cloud adoption and IT asset management.

We help businesses harness technology as a strategic asset for long-term success and operational excellence.`,
    imgSrc: "/it2.png",
  },
  {
    id: "bi",
    title: "Business Intelligence (BI)",
    fullText: `Business Intelligence (BI) uses data analytics and visualization to provide actionable insights. Companies leverage BI tools to optimize sales, marketing, and operational strategies, helping them make smarter, data-driven decisions.`,
    imgSrc: "/bi.webp",
  },
  {
    id: "management-consulting",
    title: "Management Consulting",
    fullText: `Management consulting offers strategic advice to improve business performance. Our consultants analyze company structures, financial strategies, and operations to drive sustainable growth and efficiency.`,
    imgSrc: "/manage.webp",
  },
];

const Servicepage = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="bg-white text-black py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D46] mb-6">
          {service.title}
        </h2>
        <img
          src={service.imgSrc}
          alt={service.title}
          className="mx-auto mb-6 rounded-lg shadow-lg w-full md:w-3/4"
        />
        <p className="text-lg text-gray-700 text-left leading-relaxed whitespace-pre-line">
          {service.fullText}
        </p>
        <Link
          to="/service"
          className="mt-8 inline-block px-6 py-2 text-white bg-[#0D0D46] font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
        >
          Back to Services
        </Link>
      </div>
    </div>
  );
};

export default Servicepage;
