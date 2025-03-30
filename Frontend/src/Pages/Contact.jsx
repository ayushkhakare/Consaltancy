import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    websiteUrl: "",
    problemStatement: "",
    pdfFile: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, pdfFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("companyName", formData.companyName);
    data.append("websiteUrl", formData.websiteUrl);
    data.append("problemStatement", formData.problemStatement);
    data.append("attachment", formData.pdfFile);

    try {
      await axios.post("http://localhost:5000/send-email", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Email sent successfully!");
      setFormData({ fullName: "", email: "", companyName: "", websiteUrl: "", problemStatement: "", pdfFile: null });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("❌ Failed to send email.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-300 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-[#0D0D46] mb-6 uppercase tracking-wide">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-black font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-black font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-black font-medium mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              placeholder="Enter your company name"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-black font-medium mb-1">Problem Statement</label>
            <textarea
              name="problemStatement"
              value={formData.problemStatement}
              placeholder="Describe your problem"
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-black font-medium mb-1">Website URL</label>
            <input
              type="url"
              name="websiteUrl"
              value={formData.websiteUrl}
              placeholder="Enter relevant URL"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-black font-medium mb-1">Attachment</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
            <p className="text-gray-500 text-sm mt-1">📎 Max file size: 50KB</p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#0D0D46] text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform flex items-center justify-center ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#000000] hover:scale-105"
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;