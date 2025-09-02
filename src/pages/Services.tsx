import React, { useEffect } from "react";
import { Code, Rocket, Database, Bot, Globe, Cpu, Monitor, Cloud, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      id: "web-dev",
      icon: <Code size={32} />,
      title: "Custom Web Development",
      description: "Building modern, scalable web applications using cutting-edge technologies. From responsive websites to complex web platforms, we deliver solutions that perform beautifully across all devices and scale with your business growth.",
      image: "/images/custom_development.jpg",
      features: [
        "React, Next.js, Vue.js applications",
        "Laravel, Node.js backend development",
        "Responsive design & mobile optimization",
        "Performance optimization & SEO",
        "Progressive Web Apps (PWA)",
        "E-commerce platforms & integrations"
      ]
    },
    {
      id: "saas",
      icon: <Rocket size={32} />,
      title: "SaaS Product Development",
      description: "End-to-end SaaS solutions from MVP to enterprise scale. We build robust, multi-tenant applications with seamless user experiences, comprehensive admin panels, and integration-ready architectures that grow with your user base.",
      image: "/images/saas_development.jpg",
      features: [
        "MVP development & rapid prototyping",
        "Multi-tenant architecture",
        "User authentication & role management",
        "Subscription & payment integrations",
        "Analytics & reporting dashboards",
        "API development & third-party integrations"
      ]
    },
    {
      id: "ai",
      icon: <Bot size={32} />,
      title: "AI-Powered Applications",
      description: "Intelligent solutions that transform business processes through automation and machine learning. From chatbots to recommendation systems, we integrate cutting-edge AI technologies to give your business a competitive advantage.",
      image: "/images/ai_application.jpg",
      features: [
        "ChatGPT & OpenAI API integrations",
        "Custom chatbots & virtual assistants",
        "Recommendation & prediction systems",
        "Document processing & OCR",
        "Natural language processing",
        "Machine learning model deployment"
      ]
    },
    {
      id: "erp",
      icon: <Database size={32} />,
      title: "ERP Solutions & Business Automation",
      description: "Streamline your business operations with custom ERP modules tailored to your workflows. From inventory management to HR systems, we build integrated solutions that eliminate manual processes and boost efficiency.",
      image: "/images/erp.jpg",
      features: [
        "Custom ERP module development",
        "Inventory & supply chain management",
        "HR & payroll systems",
        "Accounting & financial management",
        "CRM & customer management",
        "Workflow automation & reporting"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Globe size={24} />,
      title: "E-commerce Platforms",
      description: "Custom online stores and marketplace solutions with seamless checkout experiences."
    },
    {
      icon: <Cloud size={24} />,
      title: "API Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation and security."
    },
    {
      icon: <Monitor size={24} />,
      title: "UI/UX Engineering",
      description: "Pixel-perfect designs with accessibility compliance and responsive layouts."
    },
    {
      icon: <Cpu size={24} />,
      title: "Cloud & DevOps",
      description: "Scalable deployments with Docker, AWS, and automated CI/CD pipelines."
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      description: "Optimized database architecture for performance and scalability."
    },
    {
      icon: <Bot size={24} />,
      title: "Process Automation",
      description: "Custom workflows and integrations to eliminate repetitive tasks."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-psyco-black-DEFAULT to-psyco-black-light py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-gradient-to-l from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-emerald-400/5 rounded-full blur-2xl bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium border border-cyan-500/20 mb-6 animate-fade-in">
              <Rocket className="h-4 w-4 mr-2" />
              Our Services
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Software Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fade-in animation-delay-100 leading-relaxed max-w-3xl mx-auto">
              From <span className="text-cyan-300 font-medium">SaaS platforms</span> to <span className="text-emerald-300 font-medium">AI-powered applications</span>, we deliver enterprise-grade software solutions that scale with your ambition. 
              Transform your business with technology that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-200">
              <Link
                to="/booking"
                className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Start Your Project</span>
                <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/"
                className="group bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 hover:border-emerald-400 font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-psyco-black-light/30 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-emerald-500/10 text-emerald-400 rounded-full px-4 py-2 text-sm font-medium border border-emerald-500/20 mb-6">
              <Code className="h-4 w-4 mr-2" />
              Core Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Technology Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge development services designed for modern businesses that demand excellence
            </p>
          </div>
          
          {mainServices.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 mb-24 last:mb-0 animate-fade-in group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-3xl h-full border border-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-500">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl group">
                    {/* Enhanced overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT/70 via-psyco-black-DEFAULT/20 to-transparent z-10"></div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse z-20"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-400/60 rounded-full animate-pulse z-20" style={{ animationDelay: '1s' }}></div>
                    
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full aspect-video lg:aspect-auto transition-all duration-700 group-hover:scale-110"
                      style={{
                        filter: 'sepia(10%) saturate(120%) hue-rotate(60deg) brightness(0.9) contrast(1.1)'
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl border border-cyan-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                </div>
                
                <div className="glassmorphism rounded-2xl p-8 border border-emerald-500/20 group-hover:border-cyan-400/30 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mr-3"></span>
                    What's Included
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
                            <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-psyco-black-light to-psyco-black-DEFAULT relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-emerald-500/10 text-emerald-400 rounded-full px-4 py-2 text-sm font-medium border border-emerald-500/20 mb-6">
              <Globe className="h-4 w-4 mr-2" />
              Specialized Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Specialized services to complement your core development needs and accelerate your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="group glassmorphism p-8 card-hover animate-fade-in border border-transparent hover:border-cyan-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-xl border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">{service.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">{service.description}</p>
              </div>
            ))}
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
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-white rounded-full px-6 py-3 text-sm font-medium border border-cyan-500/30 backdrop-blur-sm mb-8">
              <Rocket className="h-4 w-4 mr-2 text-cyan-400" />
              Ready to Transform Your Business?
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Legendary</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              From concept to deployment, we partner with you to create software solutions that drive real business results. 
              Let's transform your vision into reality with <span className="text-cyan-300 font-medium">Godzilla Labs</span>.
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
              <a
                href="#"
                className="group bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 hover:border-emerald-400 font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">View Case Studies</span>
                <div className="absolute inset-0 bg-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
