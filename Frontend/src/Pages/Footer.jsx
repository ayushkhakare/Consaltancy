import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // Function to scroll to the top when clicking a link
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-300 text-[#0A043C] pt-6 sm:pt-12 pb-8 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Thanosphere Solutions</h2>
          <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
            Delivering excellence with every step. <br />
            Your trusted partner for growth and innovation.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3">
            <li><a href="/services#management-consulting" className="hover:text-[#0A043C] transition-colors">Management Consulting</a></li>
            <li><a href="/services#it-consulting" className="hover:text-[#0A043C] transition-colors">IT Consulting</a></li>
            <li><a href="/services#bpm" className="hover:text-[#0A043C] transition-colors">Business Process Management</a></li>
            <li><a href="/services#bi" className="hover:text-[#0A043C] transition-colors">Business Intelligence</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li><NavLink to="/" className="hover:text-[#0A043C] transition-colors" onClick={handleNavClick}>Home</NavLink></li>
            <li><NavLink to="/service" className="hover:text-[#0A043C] transition-colors" onClick={handleNavClick}>Services</NavLink></li>
            <li><NavLink to="/aboutdetails" className="hover:text-[#0A043C] transition-colors" onClick={handleNavClick}>About Us</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-[#0A043C] transition-colors" onClick={handleNavClick}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-2">Thanosphere Solutions Pvt Ltd, S No. 5/2, Samta Hsg Soc, Nakhate Nagar, Thergaon, Pune City, Pune-411033, Maharashtra

</p>
          <p className="text-gray-600 mb-2">support@thanosphere.com</p>
          <p className="text-gray-600 mb-4">+91 - 93099 41268</p>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="#" className="w-10 h-10 bg-[#0A043C]/10 hover:bg-[#0A043C]/20 rounded-full flex items-center justify-center transition-all">
              <FaFacebookF className="text-[#0A043C] text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#0A043C]/10 hover:bg-[#0A043C]/20 rounded-full flex items-center justify-center transition-all">
              <FaTwitter className="text-[#0A043C] text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#0A043C]/10 hover:bg-[#0A043C]/20 rounded-full flex items-center justify-center transition-all">
              <FaInstagram className="text-[#0A043C] text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#0A043C]/10 hover:bg-[#0A043C]/20 rounded-full flex items-center justify-center transition-all">
              <FaLinkedinIn className="text-[#0A043C] text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-6 sm:mt-10 pt-6 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Thanosphere Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
