import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TfiHome } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_131kd91",
        "template_3zxnja7",
        formData,
        "ypZM_yoRvxSzdTNGE"
      );
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Contact Us Heading */}
      <h1 className="text-5xl font-bold text-center text-[#0D0D46] mb-12 uppercase tracking-wide">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Contact Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">
          <h2 className="text-3xl font-bold text-[#0D0D46] mb-8">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#000000] font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D0D46] focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[#000000] font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D0D46] focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-[#000000] font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D0D46] focus:outline-none transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[#000000] font-semibold mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D0D46] focus:outline-none transition-all"
              />
            </div>

            {/* Submit Button */}
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

        {/* Right Side - Contact Info */}
        <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] shadow-2xl rounded-2xl p-10 border border-gray-100">
          <h2 className="text-3xl font-bold text-[#0D0D46] mb-8">Our Office</h2>

          <div className="text-center mb-8">
            <img src="/logo.png" alt="Company Logo" className="mx-auto w-48" />
            <h1 className="text-2xl font-bold text-[#0D0D46] mt-4">Thanosphere Solutions</h1>
            <p className="text-lg text-[#808080] font-medium tracking-wide mt-2">
              DESIGN • OPTIMIZE • TRANSFORM
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center">
              <TfiHome className="text-[#0D0D46] text-2xl mr-4" />
              <p className="text-lg text-gray-700">
                Thanosphere Solutions Pvt Ltd, S No. 5/2, Samta Hsg Soc, Nakhate Nagar, Thergaon, Pune City, Pune-411033, Maharashtra
              </p>
            </div>
            <div className="flex items-center">
              <FiPhoneCall className="text-[#0D0D46] text-2xl mr-4" />
              <p className="text-lg text-gray-700">+91 - 93099 41268</p>
            </div>
            <div className="flex items-center">
              <GoMail className="text-[#0D0D46] text-2xl mr-4" />
              <p className="text-lg text-gray-700">support@thanosphere.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[#0D0D46] text-2xl hover:text-[#3b5998] transition-all duration-300" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-[#0D0D46] text-2xl hover:text-[#1DA1F2] transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#0D0D46] text-2xl hover:text-[#0077b5] transition-all duration-300" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#0D0D46] text-2xl hover:text-[#C13584] transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;