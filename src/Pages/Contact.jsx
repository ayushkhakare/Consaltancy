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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("companyName", formData.companyName);
    formDataToSend.append("problemStatement", formData.problemStatement);
    formDataToSend.append("url", formData.url);
    if (formData.attachment) {
      formDataToSend.append("attachment", formData.attachment);
    }

    try {
      await emailjs.send(
        "service_131kd91",
        "template_3zxnja7",
        formDataToSend,
        "ypZM_yoRvxSzdTNGE"
      );
      setIsSent(true);
      setFormData({ fullName: "", email: "", companyName: "", problemStatement: "", url: "", attachment: null });
    } catch (error) {
      console.error("Email sending error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen m-6 bg-gray-100 px-4">
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
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0D0D46] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#000000] transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {isSent && (
            <p className="text-green-600 text-center mt-4">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
