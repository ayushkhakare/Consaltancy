import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#09071d] text-white py-10">
      <div className="container mx-auto px-6">
        {/* Upper Section - Newsletter */}
        <div className="text-center md:text-left mb-8 flex flex-col md:flex-row items-center md:items-start justify-between space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-semibold">Stay ahead in a rapidly changing world.</h2>
            <p className="text-gray-400 text-sm">Subscribe to our insights on critical business issues.</p>
          </div>

          {/* Subscription Box */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 w-full md:w-64 bg-gray-500 text-white rounded-md outline-none"
            />
            <button className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition cursor-pointer w-full md:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Privacy Policy Checkbox */}
        <div className="flex items-center justify-center md:justify-start mb-8">
          <input type="checkbox" className="mr-2 cursor-pointer" />
          <p className="text-sm text-gray-400">
            *I have read the <a href="/privacy" className="text-red-500 underline">Privacy Policy</a> and agree to its terms.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 space-y-6 md:space-y-0">
          {/* Left Section - Logo */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-white tracking-wide hover:text-gray-600 transition">
              Thanosphere Solutions
            </span>
            <br />
            <span className="text-sm text-gray-400">
              DESIGN • OPTIMIZE • TRANSFORM
            </span>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-gray-400 text-sm text-center">
            <a href="/contact" className="hover:text-white transition">Contact</a>
            <a href="/service" className="hover:text-white transition">Service</a>
            <a href="/it" className="hover:text-white transition">IT Consultancy</a>
            <a href="/bpm" className="hover:text-white transition">BPM</a>
            <a href="/support" className="hover:text-white transition">Support</a>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com" className="hover:text-red-500 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-red-500 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com" className="hover:text-red-500 transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://youtube.com" className="hover:text-red-500 transition">
              <FaYoutube size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-red-500 transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;