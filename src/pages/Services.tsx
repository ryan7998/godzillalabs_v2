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
      image: "/custom_development.jpg",
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
      image: "/saas_development.jpg",
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
      image: "/ai_application.jpg",
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
      image: "/lovable-uploads/752a1366-6aea-49ad-be21-341fe7476d14.png",
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
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Enterprise Software Solutions</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              From SaaS platforms to AI-powered applications, we deliver enterprise-grade software solutions that scale with your ambition. 
              Transform your business with technology that drives real results.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow animate-fade-in animation-delay-200"
            >
              Start Your Project
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Core Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions for modern businesses
            </p>
          </div>
          
          {mainServices.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-2xl h-full">
                  <div className="relative w-full h-full overflow-hidden rounded-xl group">
                    {/* Green overlay for brand consistency */}
                    <div className="absolute inset-0 bg-green-500/20 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT/60 via-transparent to-transparent z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full aspect-video lg:aspect-auto transition-all duration-700 group-hover:scale-105"
                      style={{
                        filter: 'sepia(15%) saturate(130%) hue-rotate(60deg) brightness(0.85) contrast(1.15)'
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-psyco-green-DEFAULT mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="bg-psyco-black-light rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">What's Included:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
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
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Specialized Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Additional expertise to complement your core development needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Legendary?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              From concept to deployment, we partner with you to create software solutions that drive real business results. 
              Let's transform your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Get Started
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/references"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
