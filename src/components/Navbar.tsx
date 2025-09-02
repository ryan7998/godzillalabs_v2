
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Blog', path: '#blog' },
    { name: 'Book Now', path: '/booking' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'glassmorphism bg-opacity-80' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/gozillalabs_notext.png" 
              alt="GodzillaLabs" 
              className="h-10 w-auto"
            />
            <div className="text-white hover:text-emerald-400 transition-colors">
              <h1 className="text-2xl font-bold">
                Godzilla<span className="text-emerald-400">Labs</span>
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Software Development</p>
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            if (link.path.startsWith('#')) {
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-white hover:text-emerald-400 transition-colors duration-300 link-hover text-sm font-medium tracking-wide"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-white hover:text-emerald-400 transition-colors duration-300 link-hover text-sm font-medium tracking-wide',
                    isActive && 'text-emerald-500 after:w-full'
                  )
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white hover:text-emerald-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 glassmorphism pt-24 px-8 transition-all duration-300 ease-in-out transform md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => {
            if (link.path.startsWith('#')) {
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-white hover:text-emerald-400 py-2 text-xl transition-colors duration-300"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-white hover:text-emerald-400 py-2 text-xl transition-colors duration-300',
                    isActive && 'text-emerald-500'
                  )
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
