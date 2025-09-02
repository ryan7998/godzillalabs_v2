
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Github, Linkedin, Globe, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group">
              <img 
                src="/images/gozillalabs_notext.png" 
                alt="GodzillaLabs" 
                className="h-12 w-auto"
              />
              <h2 className="text-2xl font-bold">
                Godzilla<span className="relative inline-block overflow-hidden h-[1em]">
                  <span className="inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-full text-emerald-400">Labs</span>
                  <span className="inline-block transition-transform duration-500 ease-in-out group-hover:translate-y-0 translate-y-full text-cyan-400 absolute top-0 left-0 w-full">Labs</span>
                </span>
              </h2>
            </div>
            <p className="text-gray-300 max-w-md">
              Enterprise software solutions that transform businesses. From SaaS platforms to AI applications, 
              we build technology that drives real results.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/ryan7998" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/fazle-ryan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://godzillalabs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/services#web-dev" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Web Development
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services#saas" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  SaaS Development
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services#ai" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  AI Applications
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services#erp" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  ERP Solutions
                </NavLink>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-green-500" />
                <span>mail@fazleryan.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-green-500" />
                <span>+1 (437) 234-6677</span>
              </li>
            </ul>
            <div className="mt-6">
              <NavLink
                to="/booking"
                className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Start Your Project
              </NavLink>
            </div>
          </div>
        </div>

        <div className="border-t border-green-500/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Godzilla Labs. <span className="text-emerald-400 font-medium">Roaring into the future</span> with enterprise-grade software that transforms businesses.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
