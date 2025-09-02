import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Code, Database, Bot, Sparkles, MoveRight, Rocket, Users, Zap } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = [
    {
      title: "Custom Web Development",
      description: "Modern, scalable web applications built with React, Next.js, and cutting-edge technologies.",
      icon: <Code size={24} />,
      imageSrc: "/images/custom_development.jpg",
      link: "/services#web-dev"
    },
    {
      title: "SaaS Development",
      description: "End-to-end SaaS solutions from MVP to scale, with robust architecture and seamless integrations.",
      icon: <Rocket size={24} />,
      imageSrc: "/images/saas_development.jpg",
      link: "/services#saas"
    },
    {
      title: "AI Applications",
      description: "Intelligent solutions powered by machine learning, automation, and cutting-edge AI technologies.",
      icon: <Bot size={24} />,
      imageSrc: "/images/ai_application.jpg",
      link: "/services#ai"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-psyco-black-light/30 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium border border-cyan-500/20 mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Technology Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of modern development services
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <Link 
              to="/services"
              className="group inline-flex items-center bg-transparent border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 font-medium py-3 px-6 rounded-lg transition-all duration-300"
            >
              View all services
              <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Focus Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-psyco-black-light to-psyco-black-DEFAULT relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-500/10 text-emerald-400 rounded-full px-4 py-2 text-sm font-medium border border-emerald-500/20 mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Technology Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Modern Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We specialize in cutting-edge technologies that power today's most successful companies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "SaaS Platforms", icon: <Rocket size={40} />, desc: "Scalable solutions", color: "cyan" },
              { name: "AI Integration", icon: <Bot size={40} />, desc: "Smart automation", color: "emerald" },
              { name: "ERP Systems", icon: <Database size={40} />, desc: "Business optimization", color: "cyan" },
              { name: "Cloud Native", icon: <Zap size={40} />, desc: "Enterprise scale", color: "emerald" }
            ].map((tech, index) => (
              <div 
                key={index}
                className="group glassmorphism flex flex-col items-center justify-center py-10 px-6 text-center card-hover animate-fade-in border border-transparent hover:border-cyan-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${
                  tech.color === 'cyan' 
                    ? 'from-cyan-500/20 to-cyan-600/10 border border-cyan-500/30' 
                    : 'from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`${
                    tech.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">{tech.name}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{tech.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/booking"
              className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Start Your Project
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-psyco-black-DEFAULT to-psyco-black-light relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-white rounded-full px-6 py-3 text-sm font-medium inline-flex items-center border border-cyan-500/30 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 mr-2 text-cyan-400" />
                Ready to Transform Your Business?
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Legendary</span> Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              From concept to deployment, we partner with you to create software solutions that drive real business results. 
              Join the companies already scaling with <span className="text-cyan-300 font-medium">Godzilla Labs</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/booking"
                className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Get Started</span>
                <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/services"
                className="group bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 hover:border-emerald-400 font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
