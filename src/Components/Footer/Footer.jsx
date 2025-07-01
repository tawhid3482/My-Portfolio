import { Link } from "react-router-dom";
import logo from "../../assets/logo (2).png";

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-600 px-6 py-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Info */}
        <div className="flex flex-col items-start space-y-4">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
          <p className="text-gray-400">
            <span className="font-semibold text-white">Tawhidul Islam Saikat</span>
            <br />
            Full Stack Web Developer
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="#" className="hover:text-yellow-600">Development</Link></li>
            <li><Link to="#" className="hover:text-yellow-600">Design</Link></li>
            <li><Link to="#" className="hover:text-yellow-600">Marketing</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-yellow-600">About Me</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-600">Contact</Link></li>
            <li><Link to="/project" className="hover:text-yellow-600">Projects</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="#" className="hover:text-yellow-600">Terms of Use</Link></li>
            <li><Link to="#" className="hover:text-yellow-600">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-yellow-600">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Tawhidul Islam Saikat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
