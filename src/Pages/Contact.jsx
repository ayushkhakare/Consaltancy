import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    problemStatement: "",
    url: "",
    attachment: null,
  });

  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileError, setFileError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 50000) {
        setFileError("⚠️ File size exceeds 50KB. Please upload a smaller file.");
        return;
      } else {
        setFileError(""); // Clear previous errors
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setFormData({
          ...formData,
          attachment: {
            base64: reader.result.split(",")[1], // Extract Base64 string
            name: file.name,
          },
        });
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSent(false);
    setErrorMessage("");

    try {
      const emailData = {
        to_name: "Recipient Name",
        from_name: formData.fullName,
        email: formData.email,
        company_name: formData.companyName,
        problem_statement: formData.problemStatement,
        url: formData.url,
        attachment: formData.attachment?.base64 || "",
        attachment_filename: formData.attachment?.name || "",
      };

      await emailjs.send(
        "service_131kd91",
        "template_3zxnja7",
        emailData,
        "ypZM_yoRvxSzdTNGE"
      );

      setIsSent(true);
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        problemStatement: "",
        url: "",
        attachment: null,
      });
    } catch (error) {
      console.error("Email sending error:", error);
      setErrorMessage("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex my-6 items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 border border-gray-200 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-[#0D0D46] mb-7 uppercase tracking-wide">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#000000] font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[#000000] font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[#000000] font-semibold mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[#000000] font-semibold mb-2">Problem Statement</label>
            <textarea
              name="problemStatement"
              placeholder="Describe your problem"
              value={formData.problemStatement}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[#000000] font-semibold mb-2">URL</label>
            <input
              type="url"
              name="url"
              placeholder="Enter relevant URL"
              value={formData.url}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[#000000] font-semibold mb-2">Attachment</label>
            <input
              type="file"
              name="attachment"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D0D46] focus:outline-none"
            />
            {fileError && <p className="text-red-500 mt-1">{fileError}</p>}
            <p className="text-gray-500 text-sm mt-1">📎 Max file size: 50KB</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0D0D46] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#000000] transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {isSent && <p className="text-green-600 text-center mt-4">✅ Message sent successfully!</p>}
          {errorMessage && <p className="text-red-600 text-center mt-4">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
