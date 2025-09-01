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
      imageSrc: "/custom_development.jpg",
      link: "/services#web-dev"
    },
    {
      title: "SaaS Development",
      description: "End-to-end SaaS solutions from MVP to scale, with robust architecture and seamless integrations.",
      icon: <Rocket size={24} />,
      imageSrc: "/saas_development.jpg",
      link: "/services#saas"
    },
    {
      title: "AI Applications",
      description: "Intelligent solutions powered by machine learning, automation, and cutting-edge AI technologies.",
      icon: <Bot size={24} />,
      imageSrc: "/ai_application.jpg",
      link: "/services#ai"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Our Expertise</h2>
              <p className="text-gray-400 max-w-2xl">
                Cutting-edge technology solutions that transform businesses and drive innovation
              </p>
            </div>
            <Link 
              to="/services"
              className="mt-4 sm:mt-0 flex items-center text-psyco-green-DEFAULT hover:text-cyan-400 transition-colors"
            >
              View all services
              <MoveRight className="ml-1 h-4 w-4" />
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
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Built for Modern Business</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We specialize in technologies that power today's most successful companies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "SaaS Platforms", icon: <Rocket size={32} />, desc: "Scalable solutions" },
              { name: "AI Integration", icon: <Bot size={32} />, desc: "Smart automation" },
              { name: "ERP Systems", icon: <Database size={32} />, desc: "Business optimization" },
              { name: "Cloud Native", icon: <Zap size={32} />, desc: "Enterprise scale" }
            ].map((tech, index) => (
              <div 
                key={index}
                className="glassmorphism flex flex-col items-center justify-center py-8 px-4 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT group-hover:text-cyan-400 transition-colors mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.desc}</p>
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
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-cyan-500/20 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium inline-flex items-center border border-cyan-500/30">
                <Sparkles className="h-4 w-4 mr-2 text-cyan-400" />
                Ready to Transform Your Business?
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Something Legendary Together</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              From concept to deployment, we partner with you to create software solutions that drive real business results. 
              Join the companies already scaling with Godzilla Labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Get Started
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
