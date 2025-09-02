
import React, { useEffect } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import { Clock, CheckCircle, Headphones, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bookingSteps = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Select a Date & Time",
      description: "Choose your preferred date and time for your project consultation."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Tell Us About Your Project",
      description: "Provide details about your project requirements, goals, and timeline."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Consultation Call",
      description: "Our team will contact you to discuss your project in detail."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Project Proposal",
      description: "Receive a detailed proposal and timeline for your software project."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-psyco-black-DEFAULT to-psyco-black-light py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-gradient-to-l from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium border border-cyan-500/20 mb-6 animate-fade-in">
              <Clock className="h-4 w-4 mr-2" />
              Project Consultation
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
              Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Project Consultation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 animate-fade-in animation-delay-100 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge software solutions? 
              <span className="text-cyan-300 font-medium"> Let's discuss your project</span> and bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking Process */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">How Booking Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our simple four-step process makes booking our services easy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((step, index) => (
              <div
                key={index}
                className="glassmorphism p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {index < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-psyco-green-DEFAULT/50">
                    <MoveRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking System Notice */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-4xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center border border-cyan-500/20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl border border-cyan-500/30 mb-8">
              <Clock className="h-10 w-10 text-cyan-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Booking System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Coming Soon</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our online booking system is currently under development. In the meantime, we'd love to hear about your project and discuss how we can help bring your vision to life.
            </p>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-xl p-6 mb-8 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Get In Touch Directly</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:mail@fazleryan.com"
                  className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  mail@fazleryan.com
                </a>
                <span className="text-gray-400">or</span>
                <a
                  href="tel:+14372346677"
                  className="group bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 hover:border-emerald-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center transform hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +1 (437) 234-6677
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-4">What to expect when you contact us:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Quick Response</h4>
                    <p className="text-gray-400 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Free Consultation</h4>
                    <p className="text-gray-400 text-sm">No-obligation project discussion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Custom Proposal</h4>
                    <p className="text-gray-400 text-sm">Tailored solution for your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about our booking process and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex SaaS applications can take 3-6 months. We'll provide a detailed timeline during our consultation."
              },
              {
                question: "What is your development process?",
                answer: "We follow an agile development approach with regular check-ins, milestone deliveries, and continuous feedback to ensure your project meets your expectations."
              },
              {
                question: "What happens after I contact you?",
                answer: "We'll schedule a free consultation call within 24-48 hours to discuss your project requirements, goals, and timeline. Then we'll provide a detailed proposal."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements to keep your software running smoothly."
              },
              {
                question: "Can I modify my project scope after starting?",
                answer: "Absolutely! We understand that requirements can evolve. We'll work with you to accommodate changes while keeping the project on track and within budget."
              },
              {
                question: "What technologies do you work with?",
                answer: "We specialize in modern technologies including React, Next.js, Node.js, Python, AI/ML, cloud platforms, and more. We choose the best tech stack for your specific needs."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Direct Contact */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Need to Speak With Us Directly?</h2>
                <p className="text-gray-300 mb-6">
                  If you have specific questions or prefer to discuss your project requirements over the phone, our team is here to help.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-cyan-400" />
                    <span className="text-white">+1 (437) 234-6677</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <span className="text-white">mail@fazleryan.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-cyan-400" />
                    <span className="text-white">Mon-Fri: 9am-6pm PST | Sat: 10am-4pm PST</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">24/7 Support</h3>
                    <p className="text-gray-300">Round-the-clock support for active projects</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Custom Solutions</h3>
                    <p className="text-gray-300">Tailored software solutions for your unique needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Free Consultation</h3>
                    <p className="text-gray-300">No-obligation project assessment and planning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add Calendar and MessageSquare components for the icons
const Calendar = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const MessageSquare = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default Booking;
