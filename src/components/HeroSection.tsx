
import React, { useEffect, useRef } from 'react';
import { MoveRight, Sparkles, Code, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      backgroundRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Hero Banner Background */}
      <div className="absolute inset-0 z-0">
        {/* CSS-based tech pattern background */}
        <div className="w-full h-full relative">
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
          
          {/* Central focal point */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 border-2 border-green-500/30 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-green-500/50 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-green-500/20 rounded-full"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-green-500/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cyan-500/10 transform rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border border-cyan-400/30 transform rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-green-500/15 rounded-full"></div>
          
          {/* Circuit lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 transition-transform duration-500 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-20 hidden lg:block">
        <Code className="h-12 w-12 text-green-500/30" />
      </div>
      <div className="absolute bottom-1/4 right-20 hidden lg:block">
        <Cpu className="h-16 w-16 text-green-500/30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="max-w-4xl text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center">
                <Sparkles className="h-3.5 w-3.5 mr-1 text-green-400" />
                Enterprise Software Solutions
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 drop-shadow-2xl">
              Build Something <span className="text-cyan-400">Legendary</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
              Transform your business with cutting-edge software development. From SaaS platforms to AI-powered applications, 
              we deliver enterprise-grade solutions that scale with your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 backdrop-blur-sm"
              >
                Start Your Project
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2 text-green-500" />
                6+ Years Experience
              </div>
              <div className="flex items-center">
                <Code className="h-4 w-4 mr-2 text-green-500" />
                100+ Projects Delivered
              </div>
              <div className="flex items-center">
                <Cpu className="h-4 w-4 mr-2 text-green-500" />
                AI & Cloud Experts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
