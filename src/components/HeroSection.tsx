
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
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-psyco-black-DEFAULT via-psyco-black-light to-psyco-black-DEFAULT"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-emerald-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Modern grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-emerald-400/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-300/50 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-emerald-300/20 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT/50 via-transparent to-psyco-black-DEFAULT/30"></div>
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
              <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center">
                <Sparkles className="h-3.5 w-3.5 mr-1 text-emerald-400" />
                Enterprise Software Solutions
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 drop-shadow-2xl">
              Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 animate-pulse">Legendary</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
              Transform your business with cutting-edge software development. From <span className="text-cyan-300 font-medium">SaaS platforms</span> to <span className="text-emerald-300 font-medium">AI-powered applications</span>, 
              we deliver enterprise-grade solutions that scale with your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/booking"
                className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/30 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Start Your Project</span>
                <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/services"
                className="group bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 hover:border-emerald-400 font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
            
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-300 text-sm">
              <div className="flex items-center glassmorphism px-4 py-2 rounded-full border border-emerald-500/20 hover:border-emerald-400/40 transition-colors">
                <Zap className="h-4 w-4 mr-2 text-emerald-400" />
                <span className="font-medium">6+ Years Experience</span>
              </div>
              <div className="flex items-center glassmorphism px-4 py-2 rounded-full border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
                <Code className="h-4 w-4 mr-2 text-cyan-400" />
                <span className="font-medium">100+ Projects Delivered</span>
              </div>
              <div className="flex items-center glassmorphism px-4 py-2 rounded-full border border-emerald-500/20 hover:border-emerald-400/40 transition-colors">
                <Cpu className="h-4 w-4 mr-2 text-emerald-400" />
                <span className="font-medium">AI & Cloud Experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
